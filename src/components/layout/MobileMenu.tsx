'use client';

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileMenu({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg md:hidden"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Sheet */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 z-50 transform transition-transform duration-200 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
                    <span className="font-bold text-white text-lg tracking-tight">Brainy Stars LMS</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-slate-400 hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="overflow-y-auto h-[calc(100vh-4rem)]">
                    {children}
                </div>
            </div>
        </>
    );
}
