import { MOCK_USERS, MOCK_FRANCHISES, MOCK_SUBMISSIONS } from "@/lib/mock-db";
import { Award, AlertTriangle, Users, Building, Video, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function FranchisorDashboard() {
    const data = MOCK_USERS.FRANCHISOR;
    const stats = data.stats;
    const recentSubmissions = MOCK_SUBMISSIONS.filter(s => s.status === 'Pending').slice(0, 5);
    const recentFranchises = MOCK_FRANCHISES.slice(0, 4);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Academic Headquarters</h1>
                    <p className="text-slate-500">Network overview and operational metrics.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-100 text-sm font-medium text-slate-600 shadow-sm">
                    {data.name} (Super Admin)
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-blue-100 p-2 rounded-lg text-brand-blue">
                            <Building className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+2 this month</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800">{stats.totalBranches}</h3>
                    <p className="text-slate-500 text-sm font-medium">Active Franchises</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                            <Users className="w-5 h-5" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800">{stats.totalTeachers}</h3>
                    <p className="text-slate-500 text-sm font-medium">Total Teachers</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                            <Award className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">{stats.pendingCerts} Pending</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800">45%</h3>
                    <p className="text-slate-500 text-sm font-medium">Certification Rate</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800">{stats.activeCourses}</h3>
                    <p className="text-slate-500 text-sm font-medium">Active Curricula</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Col: Training Status & Franchise Snapshot */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Training Status Widget */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-6">Teacher Training Distribution</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-600 font-medium">Completed / Certified</span>
                                    <span className="font-bold text-green-600">30% (42 Teachers)</span>
                                </div>
                                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-600 font-medium">In Progress (Active)</span>
                                    <span className="font-bold text-brand-blue">50% (71 Teachers)</span>
                                </div>
                                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-blue" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-600 font-medium">Not Started / Inactive</span>
                                    <span className="font-bold text-slate-400">20% (29 Teachers)</span>
                                </div>
                                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                                    <div className="h-full bg-slate-300" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Franchise Performance Snapshot */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="font-bold text-slate-800">Franchise Performance</h3>
                            <Link href="/franchisor/franchises" className="text-xs font-bold text-brand-blue hover:underline flex items-center gap-1">
                                View All <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {recentFranchises.map((f: any) => (
                                <div key={f.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm">{f.name}</h4>
                                        <p className="text-xs text-slate-500">{f.city} • {f.teachers} Teachers</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-bold text-slate-700">85% Compliance</div>
                                        <div className="text-[10px] text-slate-400">Last audit: 1 week ago</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Col: Approvals & Activity */}
                <div className="space-y-8">
                    {/* Pending Submissions */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                <Video className="w-4 h-4 text-brand-blue" />
                                Review Queue
                            </h3>
                            <Link href="/franchisor/submissions" className="text-xs font-bold text-brand-blue">See All</Link>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {recentSubmissions.length === 0 ? (
                                <div className="p-6 text-center text-slate-400 text-sm">No pending submissions.</div>
                            ) : (
                                recentSubmissions.map((sub: any) => (
                                    <div key={sub.id} className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{sub.module}</span>
                                            <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold">New</span>
                                        </div>
                                        <h4 className="font-bold text-slate-800 text-sm mb-1">{sub.teacher}</h4>
                                        <p className="text-xs text-slate-500 mb-3">{sub.franchise}</p>
                                        <button className="w-full text-xs bg-slate-800 text-white py-1.5 rounded font-bold hover:bg-slate-700 transition-colors">
                                            Review Video
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            {data.recentActivity.map((act: any) => (
                                <div key={act.id} className="flex gap-3 text-sm">
                                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-brand-blue flex-shrink-0" />
                                    <div>
                                        <p className="text-slate-700 leading-snug">{act.text}</p>
                                        <p className="text-xs text-slate-400 mt-1">{act.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


