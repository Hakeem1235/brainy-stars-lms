import Link from "next/link";
import { PenTool, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { MOCK_ASSESSMENTS } from "@/lib/mock-db";

export default function AssessmentsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Assessments & Exams</h1>
                <p className="text-slate-500">Take exams to prove your theoretical knowledge.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-bold text-slate-700">Assessment Title</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Type</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Duration</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Status</th>
                            <th className="px-6 py-4 font-bold text-slate-700 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_ASSESSMENTS.map((exam) => (
                            <tr key={exam.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-800">{exam.title}</div>
                                    <div className="text-xs text-slate-500">Module: General</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold uppercase">{exam.type}</span>
                                </td>
                                <td className="px-6 py-4 text-slate-600 text-sm">
                                    {exam.duration}
                                </td>
                                <td className="px-6 py-4">
                                    {/* Mock Status Logic based on random seed or just hardcoded for demo */}
                                    {exam.type === 'MCQ' ? (
                                        <span className="flex items-center text-green-600 text-xs font-bold gap-1">
                                            <CheckCircle className="w-4 h-4" /> Passed (85%)
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-orange-600 text-xs font-bold gap-1">
                                            <Clock className="w-4 h-4" /> Pending
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-sm font-bold text-brand-blue hover:underline">
                                        {exam.type === 'MCQ' ? 'Review Result' : 'Start Exam'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {MOCK_ASSESSMENTS.length === 0 && (
                    <div className="p-8 text-center text-slate-500">
                        No assessments available at this time.
                    </div>
                )}
            </div>
        </div>
    );
}
