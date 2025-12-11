import { BarChart, PieChart, Download, Calendar } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function FranchiseeReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Branch Reports</h1>
                    <p className="text-slate-500">Compliance, Attendance, and Performance analytics.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white border border-gray-200 text-slate-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50">
                        <Calendar className="w-4 h-4" />
                        This Month
                    </button>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-brand-blue" />
                        Teacher Training Compliance
                    </h3>
                    <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-slate-400 border border-dashed border-gray-200">
                        [Bar Chart Mock: 9 Certified, 3 In Progress]
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <PieChart className="w-4 h-4 text-purple-600" />
                        Student Attendance Trends
                    </h3>
                    <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-slate-400 border border-dashed border-gray-200">
                        [Line Chart Mock: 92% Avg Attendance]
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 font-bold text-slate-800">Staff Compliance Log</div>
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-slate-500 font-semibold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Teacher</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Modules Completed</th>
                            <th className="px-6 py-4">Pending</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        <tr className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-bold text-slate-700">Fatima Khan</td>
                            <td className="px-6 py-4">Lead Teacher</td>
                            <td className="px-6 py-4 text-green-600">8/8</td>
                            <td className="px-6 py-4 text-slate-400">-</td>
                            <td className="px-6 py-4"><span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold">Compliant</span></td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-bold text-slate-700">Anita Desai</td>
                            <td className="px-6 py-4">Assistant</td>
                            <td className="px-6 py-4 text-orange-500">2/8</td>
                            <td className="px-6 py-4 text-red-500 font-bold">6 (Overdue)</td>
                            <td className="px-6 py-4"><span className="text-red-600 bg-red-50 px-2 py-0.5 rounded text-xs font-bold">Non-Compliant</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
