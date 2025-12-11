import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold text-white tracking-tight">Brainy Stars</span>
                        </Link>
                        <p className="text-xs leading-relaxed text-slate-400">
                            A holistic Islamic Montessori ecosystem for teachers, students, and parents. Nurturing the next generation of bright stars.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">Platform</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">About LMS</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">Franchise Inquiry</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">Teacher Training</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">Contact Support</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">System Status</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 text-sm">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-brand-gold transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">© 2025 Brainy Stars. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
