import Link from "next/link";
import { Download, FileText, Video, Table, Search } from "lucide-react";
import { MOCK_RESOURCES } from "@/lib/mock-db";

const getIcon = (type: string) => {
    switch (type) {
        case 'PDF': return <FileText className="w-8 h-8 text-red-500" />;
        case 'Excel': return <Table className="w-8 h-8 text-green-500" />;
        case 'Video': return <Video className="w-8 h-8 text-blue-500" />;
        default: return <FileText className="w-8 h-8 text-slate-500" />;
    }
};

export default function ResourcesPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Resource Library</h1>
                    <p className="text-slate-500">Download templates, guides, and learning materials.</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                    />
                </div>
                <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-slate-600 font-bold hover:bg-gray-50">
                    Filter by Type
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_RESOURCES.map((res) => (
                    <div key={res.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                                {getIcon(res.type)}
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase">{res.category}</span>
                        </div>
                        <h3 className="font-bold text-slate-800 mb-1">{res.title}</h3>
                        <p className="text-sm text-slate-500 mb-6">{res.size} • {res.type}</p>

                        <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-200 text-slate-600 font-bold text-sm hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors">
                            <Download className="w-4 h-4" /> Download
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
