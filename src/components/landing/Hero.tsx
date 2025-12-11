import Link from "next/link";
import { ArrowRight, Star, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-brand-blue/5 to-transparent" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 text-center">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-semibold uppercase tracking-wide mb-6">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Excellence in Islamic Montessori Education</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                    Empower everyone in your <span className="text-brand-green">educational network</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    From franchisors and franchisees to teachers, parents, and students—to grow and succeed together.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/register"
                        className="h-12 px-8 rounded-full bg-brand-blue text-white font-semibold flex items-center gap-2 hover:bg-blue-900 transition-all shadow-lg shadow-brand-blue/20"
                    >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                        className="h-12 px-8 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 flex items-center gap-2 hover:bg-gray-50 transition-all"
                    >
                        <PlayCircle className="w-4 h-4 text-brand-gold" />
                        Watch Intro
                    </button>
                </div>

                {/* Visual Placeholder for Hero Image */}
                <div className="mt-16 md:mt-20 relative mx-auto max-w-5xl">
                    <div className="aspect-[16/9] bg-slate-200 rounded-2xl border-4 border-white shadow-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
                            {/* In a real app, this would be a high-quality image of a teacher and student */}
                            <div className="text-center">
                                <Star className="w-12 h-12 mx-auto mb-2 text-brand-blue/20" />
                                <p className="font-medium">Hero Image: Teacher guiding a student with Montessori materials</p>
                            </div>
                        </div>
                    </div>
                    {/* Floating Badges */}
                    <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-green">
                            <Star className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">Certified Training</p>
                            <p className="text-sm font-bold text-brand-blue">Montessori Standard</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
