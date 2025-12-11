import { ArrowRight } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Setup Branch",
        desc: "Franchisor sets up the branch and invites the franchise owner."
    },
    {
        num: "02",
        title: "Train Teachers",
        desc: "Teachers access modules, watch lessons, and upload practical demos."
    },
    {
        num: "03",
        title: "Engage Students",
        desc: "Teachers manage classrooms and assign Montessori activities."
    },
    {
        num: "04",
        title: "Involve Parents",
        desc: "Parents track progress and support learning at home."
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue mb-4">How Brainy Stars Works</h2>
                    <p className="text-slate-600">A seamless flow from Head Office to Home.</p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent -z-10" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-gold/20 flex items-center justify-center text-xl font-bold text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors shadow-sm">
                                {step.num}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-600 max-w-[200px]">{step.desc}</p>

                            {idx < steps.length - 1 && (
                                <ArrowRight className="md:hidden w-6 h-6 text-slate-300 mt-6 rotate-90" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
