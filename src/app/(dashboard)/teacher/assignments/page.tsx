import Link from "next/link";
import { BookOpen, Calendar, CheckSquare, Plus } from "lucide-react";

export default function AssignmentsPage() {
    // Mock Assignments Data (Internal for now, or can be in mock-db)
    const assignments = [
        { id: 1, title: "EPL Practice at Home", class: "LKG - B", due: "2024-05-25", completed: 12, total: 18, status: "Active" },
        { id: 2, title: "Collect Leaves", class: "Nursery - A", due: "2024-05-20", completed: 15, total: 15, status: "Closed" },
        { id: 3, title: "Shape Sorting", class: "LKG - B", due: "2024-06-01", completed: 0, total: 18, status: "Scheduled" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Homemwork & Activities</h1>
                    <p className="text-slate-500">Assign activities for students to practice at home.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Create Assignment
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-bold text-slate-700">Activity Title</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Class</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Due Date</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Completion</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Status</th>
                            <th className="px-6 py-4 font-bold text-slate-700 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {assignments.map((assign) => (
                            <tr key={assign.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-slate-800 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-brand-blue" />
                                        {assign.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-600 font-medium">
                                    {assign.class}
                                </td>
                                <td className="px-6 py-4 text-slate-600 text-sm flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-slate-400" />
                                    {assign.due}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 bg-gray-100 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${assign.completed === assign.total ? 'bg-green-500' : 'bg-blue-500'}`}
                                                style={{ width: `${(assign.completed / assign.total) * 100}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">{assign.completed}/{assign.total}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${assign.status === 'Active' ? 'bg-green-50 text-green-600' :
                                            assign.status === 'Closed' ? 'bg-gray-100 text-gray-500' :
                                                'bg-blue-50 text-brand-blue'
                                        }`}>
                                        {assign.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-sm font-bold text-brand-blue hover:underline">
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
