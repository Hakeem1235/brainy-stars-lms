import { ArrowRight, Building2, GraduationCap, Users2, Heart, ShieldCheck, BookOpen, Baby, ShoppingBag } from "lucide-react";
import Link from "next/link";

const portals = [
    {
        role: "Admin",
        icon: ShieldCheck,
        desc: "System Configuration",
        href: "/admin",
        color: "bg-slate-700",
    },
    {
        role: "Franchisor",
        icon: Building2,
        desc: "Head Office Management",
        href: "/franchisor",
        color: "bg-blue-600",
    },
    {
        role: "Franchise Owner",
        icon: Users2,
        desc: "Branch Administration",
        href: "/franchisee",
        color: "bg-teal-600",
    },
    {
        role: "Teacher",
        icon: GraduationCap,
        desc: "Course & Classroom Portal",
        href: "/teacher",
        color: "bg-purple-600",
    },
    {
        role: "Parent",
        icon: Heart,
        desc: "Child Progress Tracking",
        href: "/parent",
        color: "bg-pink-600",
    },
    {
        role: "Student",
        icon: Baby,
        desc: "Learning & Activities",
        href: "/student",
        color: "bg-orange-500",
    },
    {
        role: "Islamic Reviewer",
        icon: BookOpen,
        desc: "Content Compliance Compliance",
        href: "/islamic-reviewer",
        color: "bg-emerald-600",
    },
    {
        role: "Shop",
        icon: ShoppingBag,
        desc: "E-Commerce Store",
        href: "/shop",
        color: "bg-indigo-600",
    },
];

export function Portals() {
    return (
        <section id="portals" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Access Your Portal</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Secure login gateways for every role in the Brainy Stars ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {portals.map((portal) => (
                        <Link
                            key={portal.role}
                            href={portal.href}
                            className="group relative overflow-hidden bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-brand-gold/50 transition-all hover:-translate-y-1"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 ${portal.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />

                            <portal.icon className={`w-8 h-8 mb-4 ${portal.color.replace('bg-', 'text-')}`} />

                            <h3 className="text-lg font-bold mb-1 group-hover:text-brand-gold transition-colors">{portal.role}</h3>
                            <p className="text-xs text-slate-400 mb-4">{portal.desc}</p>

                            <div className="flex items-center text-xs font-semibold text-white/50 group-hover:text-white transition-colors">
                                Login
                                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
