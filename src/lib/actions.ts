'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export async function authenticate(formData: FormData) {
    console.log("[Action] authenticate called with:", Object.fromEntries(formData));
    const redirectTo = (formData.get('redirectTo') as string) || '/dashboard';

    try {
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
    await signOut({ redirectTo: "/" });
}
