import { Megaphone, Plus, Bell, Search, MoreHorizontal } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function AnnouncementsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Network Announcements</h1>
                    <p className="text-slate-500">Broadcast messages to franchises and teachers.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors">
                    <Plus className="w-4 h-4" />
                    New Announcement
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* List */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Search announcements..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20" />
                    </div>

                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="flex justify-between items-start mb-2">
                                <span className="bg-blue-50 text-brand-blue text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">General Update</span>
                                <button className="text-slate-300 hover:text-slate-500"><MoreHorizontal className="w-4 h-4" /></button>
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg mb-2">New "Islamic Tarbiyah" Module Published</h3>
                            <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                We are excited to announce the launch of our new comprehensive module on Islamic Tarbiyah, integrated with Montessori principles...
                            </p>
                            <div className="flex items-center gap-4 text-xs text-slate-400">
                                <span>Posted 2 days ago</span>
                                <span>•</span>
                                <span>Seen by 85% of staff</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Create/Preview Panel Placeholder */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-fit">
                    <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold">
                        <Bell className="w-5 h-5 text-brand-gold" />
                        <span>Quick Tips</span>
                    </div>
                    <ul className="space-y-4 text-sm text-slate-600">
                        <li className="flex gap-2">
                            <span className="text-brand-blue font-bold">•</span>
                            <span>Use "Urgent" tag only for critical operational changes.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-brand-blue font-bold">•</span>
                            <span>Target specific franchises to reduce notification fatigue.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-brand-blue font-bold">•</span>
                            <span>Short, clear subject lines improve open rates.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
