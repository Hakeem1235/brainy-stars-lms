import Link from "next/link";
import { User, Activity, Calendar, Star, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { getParentChildren } from "@/lib/actions/role-actions";
import { MOCK_USERS, MOCK_HOME_ACTIVITIES } from "@/lib/mock-db";

export const dynamic = 'force-dynamic';

export default async function ParentDashboard() {
    // In prototype, we look at the specific parent mock
    const parent = MOCK_USERS.PARENT;
    // Default to first child for overview
    const child = parent.children[0];

    // Mock pending activities
    const pendingActivities = MOCK_HOME_ACTIVITIES.filter(a => a.status === 'Pending').slice(0, 3);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Parent Portal</h1>
                    <p className="text-slate-500">Track {child.name}'s development and verified progress.</p>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-full text-brand-blue font-bold text-xs">
                        {child.class}
                    </div>
                    <span className="text-sm font-bold text-slate-700">{child.name}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Attendance */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-green-600" />
                        <h3 className="font-bold text-green-800">Attendance</h3>
                    </div>
                    <p className="text-3xl font-bold text-green-700">{child.attendance}%</p>
                    <p className="text-xs text-green-600 mt-1">Consistent attendance!</p>
                </div>

                {/* Overall Progress */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3 mb-2">
                        <Activity className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-purple-800">Overall Progress</h3>
                    </div>
                    <p className="text-xl font-bold text-purple-700">{child.progress}%</p>
                    <p className="text-xs text-purple-600 mt-1">On track for age group</p>
                </div>

                {/* Teacher Note */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm md:col-span-1">
                    <div className="flex items-center gap-3 mb-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <h3 className="font-bold text-slate-700">Recent Achievement</h3>
                    </div>
                    <p className="text-sm text-slate-500 italic">"Identifying complex shapes correctly."</p>
                    <div className="mt-4 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-slate-500">FT</div>
                        <span className="text-xs font-bold text-slate-400">Fatima Teacher</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Development Areas */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-brand-blue" />
                        Holistic Development Tracker
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2 text-sm">
                                <span className="font-semibold text-slate-600">Cognitive Development (Mathematics)</span>
                                <span className="text-brand-blue font-bold">Excellent</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2 text-sm">
                                <span className="font-semibold text-slate-600">Social & Emotional (Akhlaaq)</span>
                                <span className="text-green-600 font-bold">Good</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2 text-sm">
                                <span className="font-semibold text-slate-600">Language (LSRW Skills)</span>
                                <span className="text-orange-500 font-bold">Developing</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-orange-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pending Home Activities */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-800 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-orange-500" />
                            Home Tasks
                        </h3>
                        <Link href="/parent/activities" className="text-xs font-bold text-brand-blue hover:underline">View All</Link>
                    </div>

                    <div className="space-y-4">
                        {pendingActivities.map(act => (
                            <div key={act.id} className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                                <h4 className="font-bold text-slate-800 text-sm mb-1">{act.title}</h4>
                                <p className="text-xs text-slate-500 mb-2 line-clamp-2">{act.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-orange-600">Due {act.due}</span>
                                    <button className="text-xs bg-white border border-orange-200 text-orange-600 px-2 py-1 rounded font-bold hover:bg-orange-100">
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                        {pendingActivities.length === 0 && (
                            <div className="text-center py-6 text-slate-400 text-sm">No pending tasks!</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
