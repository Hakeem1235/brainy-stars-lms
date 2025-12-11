import { Library, Folder, FileText, Video, Download } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function LibraryPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Content Library</h1>
                    <p className="text-slate-500">Shared resources, PDFs, and training materials.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors">
                    Upload Resource
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {['Montessori Guides', 'HR Policies', 'Marketing Assets', 'Exam Papers'].map((folder) => (
                    <div key={folder} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 cursor-pointer hover:bg-blue-50 transition-colors group">
                        <Folder className="w-10 h-10 text-yellow-400 group-hover:text-yellow-500 fill-current" />
                        <span className="font-bold text-slate-700">{folder}</span>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm mt-6">
                <div className="px-6 py-4 border-b border-gray-100 font-bold text-slate-800">Recent Uploads</div>
                <div className="divide-y divide-gray-50">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50">
                            <div className="flex items-center gap-3">
                                <div className="bg-red-50 p-2 rounded text-red-500">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-slate-800">Montessori_EPL_Manual_v2.pdf</h4>
                                    <p className="text-xs text-slate-400">2.4 MB • Uploaded by Admin</p>
                                </div>
                            </div>
                            <button className="text-slate-400 hover:text-brand-blue">
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
