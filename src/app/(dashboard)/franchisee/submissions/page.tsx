import { MOCK_SUBMISSIONS } from "@/lib/mock-db";
import { Video, Check, Info } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function FranchiseeSubmissionsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Submission Review</h1>
                    <p className="text-slate-500">Track status of practical videos submitted to HQ.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-slate-500 font-semibold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Assessment / Module</th>
                            <th className="px-6 py-4">Teacher</th>
                            <th className="px-6 py-4">Submission Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">HQ Feedback</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_SUBMISSIONS.map((sub) => (
                            <tr key={sub.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 text-brand-blue rounded-lg">
                                            <Video className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-slate-800">{sub.module}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-slate-600">{sub.teacher}</td>
                                <td className="px-6 py-4 text-slate-500">{sub.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${sub.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                            sub.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                        {sub.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    {sub.status === 'Rejected' ? (
                                        <span className="text-red-500 flex items-center gap-1 text-xs">
                                            <Info className="w-3 h-3" /> Please re-record audio
                                        </span>
                                    ) : sub.status === 'Approved' ? (
                                        <span className="text-green-600 flex items-center gap-1 text-xs">
                                            <Check className="w-3 h-3" /> Excellent demonstration
                                        </span>
                                    ) : (
                                        <span className="text-slate-400 text-xs italic">Review pending...</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
