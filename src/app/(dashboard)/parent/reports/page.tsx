import Link from "next/link";
import { BarChart, FileText, Download, TrendingUp } from "lucide-react";
import { MOCK_USERS } from "@/lib/mock-db";

export default function ReportsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Progress Reports</h1>
                    <p className="text-slate-500">Detailed insights into your child's growth and milestones.</p>
                </div>
                <button className="bg-white border border-gray-200 text-slate-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" /> Download All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Montessori Progress */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-brand-blue" />
                            Montessori Environment Progress
                        </h3>
                        <button className="text-xs font-bold text-brand-blue hover:underline">Full Report</button>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="w-24 text-sm font-semibold text-slate-600">EPL</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-3">
                                <div className="bg-green-500 h-3 rounded-full relative" style={{ width: '82%' }}>
                                    <span className="absolute -top-6 right-0 text-xs font-bold text-green-600">82%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-24 text-sm font-semibold text-slate-600">Sensorial</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-3">
                                <div className="bg-blue-500 h-3 rounded-full relative" style={{ width: '65%' }}>
                                    <span className="absolute -top-6 right-0 text-xs font-bold text-blue-600">65%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-24 text-sm font-semibold text-slate-600">Math</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-3">
                                <div className="bg-orange-500 h-3 rounded-full relative" style={{ width: '40%' }}>
                                    <span className="absolute -top-6 right-0 text-xs font-bold text-orange-600">40%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-24 text-sm font-semibold text-slate-600">Language</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-3">
                                <div className="bg-purple-500 h-3 rounded-full relative" style={{ width: '55%' }}>
                                    <span className="absolute -top-6 right-0 text-xs font-bold text-purple-600">55%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LSRW Skills */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                            <BarChart className="w-5 h-5 text-purple-600" />
                            LSRW Development
                        </h3>
                        <button className="text-xs font-bold text-brand-blue hover:underline">Full Report</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-xs uppercase text-slate-400">
                                <tr>
                                    <th className="px-4 py-2 rounded-l-lg">Skill</th>
                                    <th className="px-4 py-2">Level</th>
                                    <th className="px-4 py-2 rounded-r-lg">Remark</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-sm">
                                <tr>
                                    <td className="px-4 py-3 font-bold text-slate-700">Listening</td>
                                    <td className="px-4 py-3"><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-bold">Level 3</span></td>
                                    <td className="px-4 py-3 text-slate-500">Attentive & Responsive</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-bold text-slate-700">Speaking</td>
                                    <td className="px-4 py-3"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-bold">Level 2</span></td>
                                    <td className="px-4 py-3 text-slate-500">Constructing sentences</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-bold text-slate-700">Reading</td>
                                    <td className="px-4 py-3"><span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-bold">Level 1</span></td>
                                    <td className="px-4 py-3 text-slate-500">Identifying sounds</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-bold text-slate-700">Writing</td>
                                    <td className="px-4 py-3"><span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-bold">Early</span></td>
                                    <td className="px-4 py-3 text-slate-500">Developing grip</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Past Report Cards List (Mock) */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                    <h3 className="font-bold text-slate-800">Archive</h3>
                </div>
                <div className="divide-y divide-gray-50">
                    <div className="p-4 flex items-center justify-between hover:bg-slate-50">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800">Term 1 Assessment Report</p>
                                <p className="text-xs text-slate-500">October 2023</p>
                            </div>
                        </div>
                        <button className="text-sm font-bold text-slate-500 hover:text-brand-blue flex items-center gap-1">
                            <Download className="w-4 h-4" /> PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
