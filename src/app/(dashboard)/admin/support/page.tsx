import Link from "next/link";
import { MessageSquare, AlertCircle, CheckCircle } from "lucide-react";

export default function AdminSupportPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Support Tickets</h1>
                    <p className="text-slate-500">Manage inquiries from franchises and teachers.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-50">
                    <div className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4 cursor-pointer">
                        <div className="p-2 rounded-lg bg-orange-50 text-orange-500 mt-1">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <h4 className="font-bold text-slate-800 text-sm">Login Issue - Jayanagar Branch</h4>
                                <span className="text-xs text-slate-400">2 hours ago</span>
                            </div>
                            <p className="text-sm text-slate-600 mb-2">Teacher unable to access certification module despite active status.</p>
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-[10px] font-bold uppercase">High Priority</span>
                        </div>
                    </div>

                    <div className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4 cursor-pointer">
                        <div className="p-2 rounded-lg bg-blue-50 text-brand-blue mt-1">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <h4 className="font-bold text-slate-800 text-sm">New Course Request</h4>
                                <span className="text-xs text-slate-400">1 day ago</span>
                            </div>
                            <p className="text-sm text-slate-600 mb-2">Requesting access to "Islamic Tarbiyah II" for senior staff.</p>
                            <span className="px-2 py-0.5 bg-blue-100 text-brand-blue rounded text-[10px] font-bold uppercase">General</span>
                        </div>
                    </div>

                    <div className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4 cursor-pointer opacity-70">
                        <div className="p-2 rounded-lg bg-green-50 text-green-600 mt-1">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <h4 className="font-bold text-slate-800 text-sm line-through">PDF Download Error</h4>
                                <span className="text-xs text-slate-400">3 days ago</span>
                            </div>
                            <p className="text-sm text-slate-600 mb-2">Fixed server permissions for resource library.</p>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold uppercase">Resolved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
