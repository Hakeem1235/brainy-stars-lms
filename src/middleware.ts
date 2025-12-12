import { NextResponse } from 'next/server';
import { auth } from "@/auth"

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;
    const role = req.auth?.user?.role;
    const pathname = nextUrl.pathname;

    // Define Role Paths
    const rolePaths = {
        FRANCHISOR: ['/franchisor', '/ai-tools'],
        FRANCHISEE: ['/franchisee'],
        TEACHER: ['/teacher'],
        PARENT: ['/parent'],
        STUDENT: ['/student'],
        ISLAMIC_REVIEWER: ['/islamic-reviewer'],
        SUPPORT_AGENT: ['/support'],
        ADMIN: ['/admin']
    };

    const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/register');
    const isDashboardRoute = pathname.startsWith('/dashboard');

    // 1. If on Auth Route (Login), ALLOW it even if logged in
    // This allows users to "Switch Accounts"
    if (isAuthRoute) {
        return null;
    }

    // 2. Strict Role Checking for Protected Routes
    if (isLoggedIn && role) {
        // checks if the current path belongs to a specific role group
        // e.g., if path is /teacher/..., check if role is TEACHER

        if (pathname.startsWith('/franchisor') && role !== 'FRANCHISOR') return NextResponse.redirect(new URL('/login', nextUrl));
        if (pathname.startsWith('/franchisee') && role !== 'FRANCHISEE') return NextResponse.redirect(new URL('/login', nextUrl));
        if (pathname.startsWith('/teacher') && role !== 'TEACHER') return NextResponse.redirect(new URL('/login', nextUrl));
        if (pathname.startsWith('/parent') && role !== 'PARENT') return NextResponse.redirect(new URL('/login', nextUrl));
        if (pathname.startsWith('/student') && role !== 'STUDENT') return NextResponse.redirect(new URL('/login', nextUrl));
        if (pathname.startsWith('/islamic-reviewer') && role !== 'ISLAMIC_REVIEWER') return NextResponse.redirect(new URL('/login', nextUrl));
    }

    // 3. General Dashboard Protection
    // Identifies keys in rolePaths
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
