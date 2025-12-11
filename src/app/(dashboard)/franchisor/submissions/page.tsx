import { MOCK_SUBMISSIONS } from "@/lib/mock-db";
import { Video, Check, X, Filter } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function SubmissionsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Practical Submissions</h1>
                    <p className="text-slate-500">Review video demonstrations submitted by teachers.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white border border-gray-200 text-slate-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {MOCK_SUBMISSIONS.map((sub) => (
                    <div key={sub.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-slate-100 p-3 rounded-lg text-slate-500">
                                <Video className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                    {sub.teacher}
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${sub.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                        {sub.status}
                                    </span>
                                </h3>
                                <p className="text-sm text-slate-500">{sub.module} • {sub.franchise}</p>
                                <p className="text-xs text-slate-400 mt-1">Submitted on {sub.date}</p>
                            </div>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-4 py-2 bg-slate-800 text-white text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors">
                                Review Video
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg text-green-600 hover:bg-green-50" title="Quick Approve">
                                <Check className="w-5 h-5" />
                            </button>
                            <button className="p-2 border border-gray-200 rounded-lg text-red-600 hover:bg-red-50" title="Reject">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
