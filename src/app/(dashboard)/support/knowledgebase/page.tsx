import { Search, FileText } from "lucide-react";

export default function KnowledgeBase() {
    return (
        <div className="space-y-6">
            <header className="text-center py-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">How can we help you?</h1>
                <div className="max-w-xl mx-auto relative">
                    <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search for articles..."
                        className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-blue outline-none"
                    />
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Getting Started", "Account Management", "Course Access", "Technical Issues", "Payment & Billing", "Mobile App"].map((topic) => (
                    <div key={topic} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-blue transition-colors cursor-pointer">
                        <h3 className="font-bold text-lg mb-2">{topic}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-slate-600 hover:underline">
                                <FileText className="w-4 h-4 text-slate-400" />
                                Article 1 about {topic}
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-600 hover:underline">
                                <FileText className="w-4 h-4 text-slate-400" />
                                Article 2 about {topic}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
