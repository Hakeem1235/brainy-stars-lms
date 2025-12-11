import { LoginForm } from "@/components/auth/LoginForm";
import Link from "next/link";
import { Suspense } from "react";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
            <div className="mb-8 text-center">
                <Link href="/" className="inline-block">
                    <h1 className="text-3xl font-bold text-white mb-2">Brainy Stars LMS</h1>
                </Link>
                <p className="text-slate-400">Please sign in to continue</p>
            </div>

            <Suspense fallback={<div className="text-white text-center">Loading login form...</div>}>
                <LoginForm />
            </Suspense>

            <div className="mt-12 text-slate-600 text-sm">
                &copy; 2024 Brainy Stars LMS. All rights reserved.
            </div>
        </div>
    );
}

