import { NextResponse } from 'next/server';
import { auth } from "@/auth"

// ... imports
export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;
    const role = req.auth?.user?.role;
    const pathname = nextUrl.pathname;

    const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/register');

    // 1. Account Switching Config:
    // User WANTS access to /login even if authenticated, so they can switch accounts.
    if (isAuthRoute) {
        return null;
    }

    // 2. Strict Portal Separation:
    if (isLoggedIn && role) {
        // Define which path prefix belongs to which role
        const rolePortals: Record<string, string> = {
            'FRANCHISOR': '/franchisor',
            'FRANCHISEE': '/franchisee',
            'TEACHER': '/teacher',
            'PARENT': '/parent',
            'STUDENT': '/student',
            'ISLAMIC_REVIEWER': '/islamic-reviewer',
            'SUPPORT_AGENT': '/support'
        };

        // Check against all known portals
        for (const [targetRole, portalPrefix] of Object.entries(rolePortals)) {
            // If visiting a specific portal (e.g., /teacher)
            if (pathname.startsWith(portalPrefix)) {
                // BUT my current role is NOT that portal's owner (e.g. I am STUDENT)
                if (role !== targetRole) {
                    // Redirect to login page FOR THAT TARGET ROLE to allow switching
                    return NextResponse.redirect(new URL(`/login?role=${targetRole}`, nextUrl));
                }
            }
        }
    }

    // 3. General Protection for Unauthenticated Users
    const restrictedPrefixes = ['/franchisor', '/franchisee', '/teacher', '/parent', '/student', '/islamic-reviewer', '/support', '/admin', '/ai-tools', '/dashboard'];
    const isProtectedPath = restrictedPrefixes.some(prefix => pathname.startsWith(prefix));

    if (isProtectedPath && !isLoggedIn) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return NextResponse.redirect(new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
    }

    return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
