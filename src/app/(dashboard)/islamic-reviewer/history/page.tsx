import { CheckCircle, XCircle } from "lucide-react";

export default function AuditHistory() {
    const history = [
        { id: 101, title: "Math Lesson: Counting with Dates", outcome: "Approved", date: "Oct 24, 2024", reviewer: "Sheikh Abdullah" },
        { id: 102, title: "Video: Prophet Yunus Story", outcome: "Rejected", date: "Oct 23, 2024", reviewer: "Sheikh Abdullah" },
        { id: 103, title: "Flashcards: Arabic Letters", outcome: "Approved", date: "Oct 22, 2024", reviewer: "Sheikh Abdullah" },
    ];

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold text-slate-900">Audit History</h1>
                <p className="text-slate-500">Log of all reviewed content.</p>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Content</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Outcome</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Reviewed By</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {history.map((item) => (
                            <tr key={item.id}>
                                <td className="p-4 font-medium text-slate-900">{item.title}</td>
                                <td className="p-4">
                                    {item.outcome === "Approved" ? (
                                        <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold uppercase">
                                            <CheckCircle className="w-3 h-3" /> Approved
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold uppercase">
                                            <XCircle className="w-3 h-3" /> Rejected
                                        </span>
                                    )}
                                </td>
                                <td className="p-4 text-sm text-slate-600">{item.reviewer}</td>
                                <td className="p-4 text-sm text-slate-500">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
