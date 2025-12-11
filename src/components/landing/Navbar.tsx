import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo */}
                    <img src="/logo.png" alt="Brainy Stars Logo" className="h-10 w-auto object-contain" />
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-bold text-brand-blue font-heading tracking-tight">Brainy Stars</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
                        Features
                    </Link>
                    <Link href="#audience" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
                        For Schools
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
                        About
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors">
                        Log In
                    </Link>
                    <Link
                        href="/contact"
                        className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-brand-gold px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                    >
                        Request Demo
                    </Link>
                </div>
            </div>
        </nav>
    );
}
