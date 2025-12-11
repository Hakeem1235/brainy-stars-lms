import { FileText, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ReviewQueue() {
    const queue = [
        { id: 1, title: "LSRW Activity: Morning Dua", type: "Lesson Plan", submittedBy: "Fatima Teacher", date: "2 mins ago", status: "Pending" },
        { id: 2, title: "Video: Sunnah of Eating", type: "Video Content", submittedBy: "Ahmed Franchisor", date: "1 hour ago", status: "Pending" },
        { id: 3, title: "Story: The Ant and Prophet Sulaiman", type: "Story Book", submittedBy: "Content Team", date: "4 hours ago", status: "Pending" },
        { id: 4, title: "Parent Guide: Teaching Patience", type: "Article", submittedBy: "Zara Parent", date: "1 day ago", status: "In Review" },
    ];

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Review Queue</h1>
                    <p className="text-slate-500">Content awaiting your approval.</p>
                </div>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium text-sm">
                    {queue.length} Items Pending
                </div>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Content Title</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Type</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Submitted By</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Submitted</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {queue.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-slate-900">{item.title}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-slate-600">{item.type}</td>
                                <td className="p-4 text-sm text-slate-600">{item.submittedBy}</td>
                                <td className="p-4 text-sm text-slate-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {item.date}
                                </td>
                                <td className="p-4">
                                    <Link href={`/islamic-reviewer/queue/${item.id}`} className="inline-flex items-center gap-1 px-3 py-1.5 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors">
                                        Review
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
