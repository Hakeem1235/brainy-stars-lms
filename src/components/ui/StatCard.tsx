import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    subtitle?: string;
    variant?: "blue" | "green" | "gold" | "purple";
}

export function StatCard({ title, value, icon: Icon, subtitle, variant = "blue" }: StatCardProps) {
    const variants = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        gold: "bg-amber-50 text-amber-600",
        purple: "bg-purple-50 text-purple-600",
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm w-full">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${variants[variant]}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
                    {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
                </div>
            </div>
        </div>
    );
}
