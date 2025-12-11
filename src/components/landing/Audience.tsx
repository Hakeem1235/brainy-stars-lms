import { Building2, GraduationCap, Users, Heart, Users2 } from "lucide-react";

const roles = [
    {
        title: "Franchisors",
        icon: Building2,
        desc: "Monitor training, quality, and compliance across all branches.",
        color: "bg-blue-100 text-brand-blue",
    },
    {
        title: "Franchisees",
        icon: Users2,
        desc: "Manage local teachers, parents, and classroom delivery effortlessly.",
        color: "bg-teal-100 text-teal-700",
    },
    {
        title: "Teachers",
        icon: GraduationCap,
        desc: "Get trained, certified, and classroom-ready with Montessori standards.",
        color: "bg-purple-100 text-brand-purple",
    },
    {
        title: "Parents",
        icon: Heart,
        desc: "Track child development and receive Islamic parenting guidance.",
        color: "bg-pink-100 text-pink-700",
    },
    {
        title: "Students",
        icon: Users,
        desc: "Experience activity-based learning aligned with Montessori environments.",
        color: "bg-amber-100 text-brand-gold",
    },
];

export function Audience() {
    return (
        <section id="audience" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue mb-4">Who Is Brainy Stars For?</h2>
                    <p className="text-slate-600 text-lg">
                        A complete ecosystem connecting every stakeholder in the education journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {roles.map((role) => (
                        <div
                            key={role.title}
                            className="bg-gray-50 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform border border-gray-100 hover:shadow-lg"
                        >
                            <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${role.color}`}>
                                <role.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{role.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{role.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
