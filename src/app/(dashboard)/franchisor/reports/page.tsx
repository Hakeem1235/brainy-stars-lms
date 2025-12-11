import { BarChart, PieChart, LineChart, Download, Calendar } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Reports & Analytics</h1>
                    <p className="text-slate-500">Track network performance and training outcomes.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white border border-gray-200 text-slate-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50">
                        <Calendar className="w-4 h-4" />
                        Last 30 Days
                    </button>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors">
                        <Download className="w-4 h-4" />
                        Export Data
                    </button>
                </div>
            </div>

            {/* Mock Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-brand-blue" />
                        Teacher Certification Progress
                    </h3>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-around pb-4 px-4 border border-dashed border-gray-200">
                        {/* Mock Bars */}
                        <div className="w-12 bg-blue-300 h-[60%] rounded-t relative group"><span className="absolute -top-6 text-xs font-bold text-slate-500 left-1/2 -translate-x-1/2">60%</span></div>
                        <div className="w-12 bg-blue-500 h-[85%] rounded-t relative group"><span className="absolute -top-6 text-xs font-bold text-slate-500 left-1/2 -translate-x-1/2">85%</span></div>
                        <div className="w-12 bg-blue-400 h-[45%] rounded-t relative group"><span className="absolute -top-6 text-xs font-bold text-slate-500 left-1/2 -translate-x-1/2">45%</span></div>
                        <div className="w-12 bg-blue-600 h-[90%] rounded-t relative group"><span className="absolute -top-6 text-xs font-bold text-slate-500 left-1/2 -translate-x-1/2">90%</span></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-2 px-6">
                        <span>Jayanagar</span>
                        <span>Indiranagar</span>
                        <span>Mysore</span>
                        <span>Cochin</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <PieChart className="w-4 h-4 text-purple-600" />
                        Module Completion Rates
                    </h3>
                    <div className="h-64 flex items-center justify-center relative">
                        {/* CSS-only Donut Chart Mock */}
                        <div className="w-48 h-48 rounded-full border-[16px] border-green-500 border-t-brand-blue border-r-brand-gold rotate-45"></div>
                        <div className="absolute text-center">
                            <span className="block text-3xl font-bold text-slate-800">78%</span>
                            <span className="text-xs text-slate-500">Avg Completion</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 text-xs font-bold mt-4">
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-blue" /> EPL</span>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-brand-gold" /> Sensorial</span>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500" /> Math</span>
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-slate-800">Detailed Performance Metric</h3>
                </div>
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-slate-500 font-semibold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Metric</th>
                            <th className="px-6 py-4">Current Value</th>
                            <th className="px-6 py-4">vs Last Month</th>
                            <th className="px-6 py-4">Target</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        <tr>
                            <td className="px-6 py-4 font-bold text-slate-700">Active Teachers</td>
                            <td className="px-6 py-4">142</td>
                            <td className="px-6 py-4 text-green-600">+12%</td>
                            <td className="px-6 py-4 text-slate-400">150</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-bold text-slate-700">Video Submission Approval Rate</td>
                            <td className="px-6 py-4">92%</td>
                            <td className="px-6 py-4 text-red-500 text-xs font-bold">-2%</td>
                            <td className="px-6 py-4 text-slate-400">95%</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-bold text-slate-700">Avg. Quiz Score</td>
                            <td className="px-6 py-4">8.5/10</td>
                            <td className="px-6 py-4 text-green-600">+0.5</td>
                            <td className="px-6 py-4 text-slate-400">8.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
