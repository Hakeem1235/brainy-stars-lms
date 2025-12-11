import { Award, BadgeCheck } from "lucide-react";

const certs = [
    "Certified Montessori Assistant Teacher",
    "Certified Montessori Teacher",
    "Senior Montessori Educator",
    "Diploma in Islamic Montessori Education",
    "Child Psychology Certification",
    "Classroom Management Specialist"
];

export function Certifications() {
    return (
        <section className="py-20 bg-brand-blue text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-sm font-semibold mb-6">
                            <Award className="w-4 h-4" />
                            <span>Trusted Recognition</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Earn Recognized Certifications</h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Our teacher training programs are rigorous, practical, and standard-setting. Every certificate is issued digitally with a unique ID for instant verification.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {certs.map((cert) => (
                                <div key={cert} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                    <BadgeCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                                    <span className="text-sm font-medium">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 relative bg-white rounded-xl p-8 shadow-2xl skew-y-2 md:skew-y-0 text-slate-800 max-w-sm mx-auto">
                        {/* Mock Certificate */}
                        <div className="border border-brand-blue/20 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full" />
                            <div className="text-center">
                                <h3 className="text-2xl font-serif text-brand-blue font-bold mb-2">Certificate of Completion</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Brainy Stars Academy</p>

                                <p className="text-sm text-slate-600 mb-1">This is to certify that</p>
                                <p className="text-xl font-script font-bold text-brand-gold mb-2">Aisha Khan</p>
                                <p className="text-sm text-slate-600 mb-6">Has successfully completed the<br /><strong>Montessori Teacher Training</strong></p>

                                <div className="flex justify-between items-end border-t border-slate-200 pt-4 mt-4">
                                    <div className="text-left">
                                        <p className="text-xs text-slate-400">Date</p>
                                        <p className="text-xs font-bold">12 Dec 2025</p>
                                    </div>
                                    <div className="w-12 h-12">
                                        {/* Seal Placeholder */}
                                        <div className="w-full h-full border border-brand-blue rounded-full flex items-center justify-center text-[8px] font-bold text-brand-blue text-center">
                                            OFFICIAL SEAL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
