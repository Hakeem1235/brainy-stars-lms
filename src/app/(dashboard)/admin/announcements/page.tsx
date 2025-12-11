import Link from "next/link";
import { Megaphone, Calendar, Plus, MoreHorizontal } from "lucide-react";

export default function AnnouncementsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">System Announcements</h1>
                    <p className="text-slate-500">Broadcast messages to all franchises, teachers, or parents.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Megaphone className="w-4 h-4" /> Posted New
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-50">
                    <div className="p-6 hover:bg-slate-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-slate-800">Eid-ul-Fitr Holiday Schedule</h3>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold uppercase">Active</span>
                                <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <p className="text-slate-600 mb-4">All branches will remain closed from April 10th to April 12th.</p>
                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Posted 2 days ago</span>
                            <span>•</span>
                            <span>Target: All Users</span>
                        </div>
                    </div>

                    <div className="p-6 hover:bg-slate-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-slate-800">New Montessori Certification Course</h3>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-blue-100 text-brand-blue rounded text-xs font-bold uppercase">Scheduled</span>
                                <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <p className="text-slate-600 mb-4">Launching "Islamic Tarbiyah Integration" module next month.</p>
                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Scheduled for May 1st</span>
                            <span>•</span>
                            <span>Target: Teachers Only</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
