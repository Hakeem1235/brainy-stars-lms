import Link from "next/link";
import { BookOpen, Heart, Moon, Smile, Play } from "lucide-react";
import { MOCK_PARENT_GUIDANCE } from "@/lib/mock-db";

const getIcon = (cat: string) => {
    switch (cat) {
        case 'Montessori': return <BookOpen className="w-6 h-6 text-blue-500" />;
        case 'Child Psychology': return <Smile className="w-6 h-6 text-purple-500" />;
        case 'Islamic': return <Moon className="w-6 h-6 text-green-500" />;
        case 'Parenting': return <Heart className="w-6 h-6 text-pink-500" />;
        default: return <BookOpen className="w-6 h-6 text-slate-500" />;
    }
};

export default function GuidancePage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Parenting Guidance</h1>
                    <p className="text-slate-500">Expert tips on Islamic Montessori parenting.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_PARENT_GUIDANCE.map((guide) => (
                    <div key={guide.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors`}>
                                {getIcon(guide.category)}
                            </div>
                            <span className="text-xs font-bold text-slate-400">{guide.readTime} Read</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors">{guide.title}</h3>
                        <p className="text-slate-600 mb-6 line-clamp-2">{guide.description}</p>

                        <div className="flex items-center gap-2 text-sm font-bold text-brand-blue">
                            Read Article <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Featured Video Section */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden text-white relative">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative p-12 text-center">
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4">Featured Workshop</span>
                    <h2 className="text-3xl font-bold mb-4">Understanding the Absorbent Mind</h2>
                    <p className="text-slate-300 max-w-xl mx-auto mb-8">A 30-minute deep dive into how children learn between ages 0-6.</p>
                    <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        <Play className="w-5 h-5 fill-slate-900" /> Watch Now
                    </button>
                </div>
            </div>
        </div>
    );
}
