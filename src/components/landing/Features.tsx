import { BookOpen, Users, ClipboardCheck, LayoutDashboard } from "lucide-react";

const features = [
    {
        category: "Teacher Training Modules",
        icon: BookOpen,
        color: "bg-blue-100 text-brand-blue",
        items: [
            "Montessori 5 environments",
            "Child psychology & classroom mgmt",
            "LSRW assessment training",
            "Early childhood development"
        ]
    },
    {
        category: "Classroom Management",
        icon: Users,
        color: "bg-green-100 text-brand-green",
        items: [
            "Attendance and observation logs",
            "LSRW rubrics & assessment",
            "Assignments and progress reports",
            "Practical activity uploads"
        ]
    },
    {
        category: "Franchise Operations",
        icon: LayoutDashboard,
        color: "bg-purple-100 text-brand-purple",
        items: [
            "Multi-branch control panel",
            "Teacher progress tracking",
            "Reports and compliance",
            "Centralized curriculum"
        ]
    },
    {
        category: "Parent Engagement",
        icon: ClipboardCheck,
        color: "bg-amber-100 text-brand-gold",
        items: [
            "Home activities & assignments",
            "Real-time progress insights",
            "Parenting guidance content",
            "Direct teacher communication"
        ]
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue mb-4">Powerful Capabilities for Every Role</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Everything you need to run a world-class Islamic Montessori environment, from training teachers to engaging parents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-4">{feature.category}</h3>
                            <ul className="space-y-3">
                                {feature.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
