'use client';

import { useSearchParams } from 'next/navigation';
import { ArrowRight, LogOut, LayoutDashboard } from 'lucide-react';
import { authenticate, logout } from '@/lib/actions';
import Link from 'next/link';
// Note: We need to implement server action 'authenticate'

export function LoginForm({ session }: { session?: any }) {
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'USER';
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    // If user is already logged in, show Switch Account UI
    if (session?.user) {
        return (
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                    <img src="/logo.png" alt="Brainy Stars" className="h-16 w-auto mx-auto mb-4 object-contain" />
                    <h1 className="text-2xl font-bold text-brand-blue mb-2">Welcome Back!</h1>
                    <p className="text-slate-500">
                        You are currently signed in as
                    </p>
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="font-bold text-slate-800">{session.user.name}</p>
                        <p className="text-sm text-slate-500">{session.user.email}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded uppercase tracking-wider">
                            {session.user.role}
                        </span>
                    </div>
                </div>

                <div className="space-y-3">
                    <Link
                        href="/dashboard"
                        className="w-full h-12 rounded-full bg-brand-blue text-white font-bold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
                    >
                        <LayoutDashboard className="w-4 h-4" />
                        Continue to Dashboard
                    </Link>

                    <form action={logout}>
                        <button
                            type="submit"
                            className="w-full h-12 rounded-full bg-white text-red-600 font-bold border border-red-200 hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out / Switch Account
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
                <img src="/logo.png" alt="Brainy Stars" className="h-16 w-auto mx-auto mb-4 object-contain" />
                <h1 className="text-2xl font-bold text-brand-blue mb-2">Welcome Back</h1>
                <p className="text-slate-500">
                    Login to your {role.toLowerCase()} portal
                </p>
            </div>

            <form action={async (formData) => {
                const res = await authenticate(formData);
                if (res) alert(res); // Simple error handling for now
            }} className="space-y-4">
                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@brainystars.com"
                        className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 transition-all outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 transition-all outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full h-12 rounded-full bg-brand-blue text-white font-bold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 mt-4"
                >
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
                Don't have an account? <a href="/register" className="text-brand-gold hover:underline">Contact Admin</a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-center">Demo Credentials (Password: password123)</p>
                <div className="grid grid-cols-1 gap-2 text-xs text-left bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-brand-blue">Franchisor:</span>
                        <code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-slate-600 select-all">admin@brainystars.com</code>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-teal-600">Franchise Owner:</span>
                        <code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-slate-600 select-all">branch@brainystars.com</code>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-purple-600">Teacher:</span>
                        <code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-slate-600 select-all">teacher@brainystars.com</code>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-pink-600">Parent:</span>
                        <code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-slate-600 select-all">parent@brainystars.com</code>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-yellow-600">Student:</span>
                        <code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-slate-600 select-all">student@brainystars.com</code>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-emerald-700">Reviewer:</span>
                        <code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-slate-600 select-all">reviewer@brainystars.com</code>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-600">Support:</span>
                        <code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-slate-600 select-all">support@brainystars.com</code>
                    </div>
                </div>
            </div>
        </div>
    );
}
