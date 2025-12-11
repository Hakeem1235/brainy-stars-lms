import { MOCK_USERS, MOCK_TEACHERS_DIRECTORY, MOCK_SUBMISSIONS } from "@/lib/mock-db";
import { Users, BookOpen, Award, AlertCircle, Clock, CheckCircle } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function FranchiseeDashboard() {
    const user = MOCK_USERS.FRANCHISEE;
    // Mock filtering for this franchise
    const myTeachers = MOCK_TEACHERS_DIRECTORY.filter(t => t.franchise === user.franchiseName);
    const certified = myTeachers.filter(t => t.status === 'Certified').length;
    const inProgress = myTeachers.filter(t => t.status === 'In Progress').length;
    const notStarted = myTeachers.filter(t => t.status === 'Not Started').length;

    const complianceRate = Math.round((certified / myTeachers.length) * 100) || 0;

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Branch Dashboard</h1>
                <p className="text-slate-500">Overview for {user.franchiseName}</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 text-brand-blue rounded-lg">
                            <Users className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Active</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-1">{user.stats.teachers}</div>
                    <div className="text-sm text-slate-500">Total Teachers</div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                            <Award className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-1">{certified}</div>
                    <div className="text-sm text-slate-500">Fully Certified</div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                            <Clock className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-1">{inProgress}</div>
                    <div className="text-sm text-slate-500">Training In Progress</div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                            <BookOpen className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-800 mb-1">{user.stats.students}</div>
                    <div className="text-sm text-slate-500">Total Students</div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Visual Gauge Widget (CSS Mock) */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm items-center flex flex-col justify-center text-center">
                    <h3 className="font-bold text-slate-700 mb-6">Certification Compliance</h3>
                    <div className="relative w-48 h-24 overflow-hidden mb-4">
                        <div className="absolute top-0 left-0 w-48 h-48 bg-gray-100 rounded-full border-[20px] border-gray-100"></div>
                        <div className="absolute top-0 left-0 w-48 h-48 bg-transparent rounded-full border-[20px] border-green-500 border-b-transparent border-l-transparent border-r-transparent transform -rotate-45" style={{ transform: `rotate(${(complianceRate / 100) * 180 - 135}deg)` }}></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl font-bold text-slate-800">{complianceRate}%</div>
                    </div>
                    <p className="text-sm text-slate-500 max-w-[200px]">Of your teaching staff is fully certified to teach.</p>
                </div>

                {/* Pending Actions */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 bg-red-50/50 flex justify-between items-center">
                        <h3 className="font-bold text-red-900 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Attention Required
                        </h3>
                        <span className="text-xs font-bold bg-white px-2 py-1 rounded text-red-600 border border-red-100">3 Items</span>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {myTeachers.filter(t => t.status === 'Not Started' || t.status === 'Overdue').map(t => (
                            <div key={t.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                                <div>
                                    <p className="font-bold text-slate-800">{t.name}</p>
                                    <p className="text-sm text-slate-500">Module assignment overdue</p>
                                </div>
                                <button className="text-xs font-bold text-brand-blue border border-brand-blue px-3 py-1.5 rounded hover:bg-blue-50">
                                    Assign Now
                                </button>
                            </div>
                        ))}
                        {/* Mock pending submission if none */}
                        <div className="p-4 flex items-center justify-between hover:bg-slate-50">
                            <div>
                                <p className="font-bold text-slate-800">Sarah Williams</p>
                                <p className="text-sm text-slate-500">Practical Video Rejected - Needs Resubmission</p>
                            </div>
                            <button className="text-xs font-bold text-slate-600 border border-gray-200 px-3 py-1.5 rounded hover:bg-gray-50">
                                Notify
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100 font-bold text-slate-800">Recent Branch Activity</div>
                <div className="p-6 space-y-6">
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center">
                                <Users className="w-4 h-4" />
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-800 text-sm"><span className="font-bold">New Teacher Added</span>: Rajesh Kumar joined the roster.</p>
                            <p className="text-xs text-slate-400 mt-1">5 days ago</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4" />
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-800 text-sm"><span className="font-bold">Certification Approved</span>: Fatima Khan is now a Certified Montessori Directress.</p>
                            <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
