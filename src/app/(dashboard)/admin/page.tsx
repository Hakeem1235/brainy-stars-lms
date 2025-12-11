import Link from "next/link";
import { Building, Users, GraduationCap, DollarSign, Activity, AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";
import { MOCK_ADMIN_STATS, MOCK_LOGS } from "@/lib/mock-db";

export const dynamic = 'force-dynamic';

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Admin Overview</h1>
                    <p className="text-slate-500">System-wide performance and alerts.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-bold border border-green-200">
                    <CheckCircle className="w-4 h-4" /> System Healthy
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-slate-500">Total Franchises</p>
                        <p className="text-2xl font-bold text-slate-800 mt-1">{MOCK_ADMIN_STATS.totalFranchises}</p>
                        <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                            <Activity className="w-3 h-3" /> +2 this month
                        </span>
                    </div>
                    <div className="p-3 bg-blue-50 text-brand-blue rounded-lg">
                        <Building className="w-6 h-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-slate-500">Active Teachers</p>
                        <p className="text-2xl font-bold text-slate-800 mt-1">{MOCK_ADMIN_STATS.activeTeachers}</p>
                        <span className="text-xs text-slate-400 font-medium">Across all branches</span>
                    </div>
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                        <Users className="w-6 h-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-slate-500">Students</p>
                        <p className="text-2xl font-bold text-slate-800 mt-1">{MOCK_ADMIN_STATS.activeStudents}</p>
                        <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                            <Activity className="w-3 h-3" /> +150 new
                        </span>
                    </div>
                    <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-slate-500">Compliance</p>
                        <p className="text-2xl font-bold text-slate-800 mt-1">94%</p>
                        <span className="text-xs text-orange-500 font-bold">Needs Attention</span>
                    </div>
                    <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                        <AlertTriangle className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Logs */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                        <h3 className="font-bold text-slate-800">System Logs</h3>
                        <Link href="/admin/logs" className="text-sm text-brand-blue font-bold hover:underline">View All</Link>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {MOCK_LOGS.map((log) => (
                            <div key={log.id} className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4">
                                <div className={`mt-1 w-2 h-2 rounded-full ${log.type === 'error' ? 'bg-red-500' :
                                        log.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                                    }`}></div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-800">{log.action}: <span className="font-normal text-slate-600">{log.target}</span></p>
                                    <div className="flex justify-between mt-1">
                                        <span className="text-xs text-slate-500">by {log.user}</span>
                                        <span className="text-xs text-slate-400">{log.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pending Actions */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                        <h3 className="font-bold text-slate-800">Pending Actions</h3>
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-bold">{MOCK_ADMIN_STATS.pendingApprovals}</span>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-sm font-bold text-slate-800">New Franchise Application</h4>
                                <span className="text-[10px] bg-white px-2 py-1 rounded border border-orange-200 text-orange-600 font-bold"> Urgent</span>
                            </div>
                            <p className="text-xs text-slate-500 mb-3">Brainy Stars Hyderabad requesting approval.</p>
                            <button className="w-full py-2 bg-white border border-orange-200 text-orange-600 rounded-lg text-xs font-bold hover:bg-orange-100">Review Application</button>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-sm font-bold text-slate-800">5 Certifications Pending</h4>
                            </div>
                            <p className="text-xs text-slate-500 mb-3">Montessori Directress certificates waiting for signature.</p>
                            <button className="w-full py-2 bg-white border border-blue-200 text-brand-blue rounded-lg text-xs font-bold hover:bg-blue-100">Sign & Issue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
