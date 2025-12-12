'use client';

import { useSearchParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { authenticate } from '@/lib/actions';
import React, { useState } from 'react';
import Link from 'next/link';

export function LoginForm({ session }: { session?: any }) {
    const searchParams = useSearchParams();
    const roleParam = searchParams.get('role');
    const role = roleParam || 'USER';
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Demo Credentials Data
    const demoCredentials = [
        { role: 'FRANCHISOR', label: 'Admin Portal', email: 'admin@brainystars.com', color: 'text-brand-blue' },
        { role: 'FRANCHISEE', label: 'Franchise Owner', email: 'branch@brainystars.com', color: 'text-teal-600' },
        { role: 'TEACHER', label: 'Teacher', email: 'teacher@brainystars.com', color: 'text-purple-600' },
        { role: 'PARENT', label: 'Parent', email: 'parent@brainystars.com', color: 'text-pink-600' },
        { role: 'STUDENT', label: 'Student', email: 'student@brainystars.com', color: 'text-yellow-600' },
        { role: 'ISLAMIC_REVIEWER', label: 'Reviewer', email: 'reviewer@brainystars.com', color: 'text-emerald-700' },
        { role: 'SUPPORT_AGENT', label: 'Support', email: 'support@brainystars.com', color: 'text-slate-600' },
    ];

    // Filter credentials based on selected role
    const shownCredentials = roleParam
        ? demoCredentials.filter(c => c.role === roleParam)
        : demoCredentials;

    // Auto-fill email if strictly one role selected
    const defaultEmail = shownCredentials.length === 1 ? shownCredentials[0].email : '';

    const handleLogin = async (formData: FormData) => {
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const res = await authenticate(formData);

            if (res?.error) {
                setErrorMessage(res.error);
                setIsSubmitting(false);
            } else if (res?.success && res?.redirectUrl) {
                // Use replace to avoid going back to login page on "Back" click
                window.location.replace(res.redirectUrl);
            } else {
                setErrorMessage("Unknown response from server");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Login Error:", error);
            setErrorMessage("An unexpected error occurred. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-8">
                <img src="/logo.png" alt="Brainy Stars" className="h-16 w-auto mx-auto mb-4 object-contain" />
                <h1 className="text-2xl font-bold text-brand-blue mb-2">
                    {roleParam ? `${shownCredentials[0]?.label || role} Login` : 'Welcome Back'}
                </h1>
                <p className="text-slate-500">
                    Please sign in to continue
                </p>
                {errorMessage && (
                    <div className="mt-2 p-2 bg-red-50 text-red-600 text-sm rounded border border-red-100">
                        {errorMessage}
                    </div>
                )}
            </div>

            <form action={handleLogin} className="space-y-4">
                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={defaultEmail}
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
                        defaultValue="password123"
                        placeholder="••••••••"
                        className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-0 transition-all outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-full bg-brand-blue text-white font-bold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Signing In...' : 'Sign In'}
                    <ArrowRight className="w-4 h-4" />
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
                Don't have an account? <a href="/register" className="text-brand-gold hover:underline">Contact Admin</a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-center">Demo Credentials (Password: password123)</p>
                <div className="grid grid-cols-1 gap-2 text-xs text-left bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {shownCredentials.map((cred) => (
                        <div key={cred.role} className="flex justify-between items-center">
                            <span className={`font-semibold ${cred.color}`}>{cred.label}:</span>
                            <code className="bg-white px-2 py-0.5 rounded border border-gray-200 text-slate-600 select-all">{cred.email}</code>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
