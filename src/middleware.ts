import { NextResponse } from 'next/server';
import { auth } from "@/auth"

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;
    const role = req.auth?.user?.role;

    // Paths
    const isDashboard = nextUrl.pathname.startsWith('/dashboard') ||
        nextUrl.pathname.startsWith('/franchisor') ||
        nextUrl.pathname.startsWith('/franchisee') ||
        nextUrl.pathname.startsWith('/teacher') ||
        nextUrl.pathname.startsWith('/parent') ||
        nextUrl.pathname.startsWith('/student') ||
        nextUrl.pathname.startsWith('/islamic-reviewer') ||
        nextUrl.pathname.startsWith('/support') ||
        nextUrl.pathname.startsWith('/ai-tools');

    const isAuthRoute = nextUrl.pathname.startsWith('/login') || nextUrl.pathname.startsWith('/register');

    if (isAuthRoute) {
        if (isLoggedIn) {
            // Only redirect if role is present to avoid loops with incomplete sessions
            if (req.auth?.user?.role) {
                return NextResponse.redirect(new URL('/dashboard', nextUrl));
            }
            // If logged in but no role, allow access to login page to re-authenticate
        }
        return null;
    }

    if (isDashboard && !isLoggedIn) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return NextResponse.redirect(new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
    }

    // Basic Role-Based Redirection logic could go here, 
    // but usually better handled in the page itself or distinct layouts.
    // For now, we allow access to /dashboard/* if logged in.

    return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
