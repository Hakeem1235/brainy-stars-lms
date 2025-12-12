import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = await cookies();

    // NUCLEAR OPTION: Manually delete ALL potential session cookies
    // This allows the browser to clear them via the Set-Cookie header in the response
    cookieStore.delete('next-auth.session-token');
    cookieStore.delete('__Secure-next-auth.session-token');
    cookieStore.delete('next-auth.callback-url');
    cookieStore.delete('__Secure-next-auth.callback-url');
    cookieStore.delete('next-auth.csrf-token');
    cookieStore.delete('__Secure-next-auth.csrf-token');

    // Also delete the "state" cookie if it exists (OIDC)
    cookieStore.delete('next-auth.state');
    cookieStore.delete('__Secure-next-auth.state');

    return NextResponse.json({ success: true });
}
