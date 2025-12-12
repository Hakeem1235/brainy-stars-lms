'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function authenticate(formData: FormData) {
    const redirectTo = (formData.get('redirectTo') as string) || '/dashboard';

    try {
        // Enforce Clean Session: Always logout first before attempting new login
        // This fixes the "Sticky Session" bug where User A remains logged in when User B tries to sign in
        try {
            await signOut({ redirect: false });
        } catch (e) {
            // Ignore error if not logged in
        }

        console.log("[Action] Calling signIn...");
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
