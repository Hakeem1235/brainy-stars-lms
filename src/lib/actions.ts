'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { cookies } from 'next/headers';

export async function authenticate(formData: FormData) {
    const redirectTo = (formData.get('redirectTo') as string) || '/dashboard';

    try {
        // NUCLEAR OPTION: Manually delete ALL potential session cookies
        // This bypasses NextAuth's "smart" session handling which causes sticky sessions
        const cookieStore = await cookies();
        cookieStore.delete('next-auth.session-token');
        cookieStore.delete('__Secure-next-auth.session-token');
        cookieStore.delete('next-auth.callback-url');
        cookieStore.delete('__Secure-next-auth.callback-url');

        // Also try standard signOut for good measure, catching errors if already out
        try {
            await signOut({ redirect: false });
        } catch (e) { /* ignore */ }

        console.log("[Action] Cookies wiped. Calling signIn...");
        const result = await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirect: false,
        });
        console.log("[Action] signIn result:", result);

        if (result?.error) {
            console.error('[Action] Sign In Error:', result.error);
            return { error: 'Invalid credentials.' };
        }

        console.log('[Action] Login successful. Returning success object.');
        return { success: true, redirectUrl: redirectTo };

    } catch (error) {
        console.error('[Action] Unexpected error in authenticate:', error);
        if (error instanceof AuthError) {
            return { error: 'Invalid credentials.' };
        }
        return { error: 'An unexpected error occurred.' };
    }
}

export async function logout() {
    // Explicitly revalidate the landing page to clear any cached auth state
    revalidatePath('/');
    await signOut({ redirectTo: "/", redirect: true });
}

export async function quietLogout() {
    // Logout without redirecting, for use in "Switch Account" flows
    try {
        await signOut({ redirect: false });
    } catch (e) { /* ignore */ }
}
