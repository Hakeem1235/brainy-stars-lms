import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
    "Integrates Montessori + Islamic tarbiyyah + teacher training",
    "Offers structured, competency-based certifications",
    "Connects teachers, parents, and franchisors in one ecosystem",
    "Practical evidence uploads for real learning proof",
    "Child development, LSRW, assessment, and parent involvement"
];

export function ValueProposition() {
    return (
        <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                <div className="lg:w-1/2">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-gold text-sm font-semibold mb-6">
                        Why Choose Brainy Stars?
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                        The Only LMS That Bridges
                        <span className="text-brand-gold block mt-2">Faith, Philosophy & Technology</span>
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                        Most platforms just track grades. We track growth using the proven Montessori method integrated with Islamic values, ensuring a holistic development for every child.
                    </p>
                    <Link
                        href="/features"
                        className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition-colors"
                    >
                        See how it works
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">✓</span>
                        Core Capabilities
                    </h3>
                    <ul className="space-y-4">
                        {benefits.map((bg, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                                <span className="text-blue-50">{bg}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
