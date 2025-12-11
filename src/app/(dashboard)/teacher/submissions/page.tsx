import Link from "next/link";
import { Upload, FileVideo, CheckCircle, XCircle, Clock, Eye } from "lucide-react";
import { MOCK_SUBMISSIONS } from "@/lib/mock-db";

export default function SubmissionsPage() {
    // Filter for current teacher (Mock logic: assume "Fatima Khan" is logged in)
    const mySubmissions = MOCK_SUBMISSIONS.filter(s => s.teacher === "Fatima Khan" || s.teacher === "Sarah Williams"); // Showing a few for demo

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Practical Submissions</h1>
                    <p className="text-slate-500">Upload and track your practical demonstration videos.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Upload className="w-4 h-4" /> New Submission
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {mySubmissions.map((sub) => (
                    <div key={sub.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className={`p-4 rounded-lg ${sub.status === 'Approved' ? 'bg-green-50 text-green-600' : sub.status === 'Rejected' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'}`}>
                                <FileVideo className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 text-lg">{sub.module}</h3>
                                <p className="text-slate-500 text-sm mb-1">Submitted on {sub.date}</p>
                                <div className="flex items-center gap-2">
                                    {sub.status === 'Approved' && (
                                        <span className="flex items-center text-green-600 text-xs font-bold gap-1 bg-green-50 px-2 py-1 rounded">
                                            <CheckCircle className="w-3 h-3" /> Approved
                                        </span>
                                    )}
                                    {sub.status === 'Rejected' && (
                                        <span className="flex items-center text-red-600 text-xs font-bold gap-1 bg-red-50 px-2 py-1 rounded">
                                            <XCircle className="w-3 h-3" /> Action Required
                                        </span>
                                    )}
                                    {sub.status === 'Pending' && (
                                        <span className="flex items-center text-orange-600 text-xs font-bold gap-1 bg-orange-50 px-2 py-1 rounded">
                                            <Clock className="w-3 h-3" /> Under Review
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            {sub.status === 'Rejected' ? (
                                <button className="flex-1 md:flex-none text-center px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm hover:bg-red-700 transition-colors">
                                    Re-upload
                                </button>
                            ) : (
                                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-slate-600 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors">
                                    <Eye className="w-4 h-4" /> View Feedback
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {mySubmissions.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
                    <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <Upload className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-slate-800">No Submissions Yet</h3>
                    <p className="text-slate-500 mb-4">Start your first practical submission today.</p>
                </div>
            )}
        </div>
    );
}
