import Link from "next/link";
import { FileText, Search, Filter, AlertTriangle, Info, AlertCircle } from "lucide-react";
import { MOCK_LOGS } from "@/lib/mock-db";

export default function LogsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">System Logs & Audit</h1>
                    <p className="text-slate-500">Track all system activities and security events.</p>
                </div>
                <button className="px-4 py-2 border border-gray-200 rounded-lg font-bold text-slate-600 hover:bg-gray-50 flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Filter Logs
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search logs by user, action..."
                            className="w-full pl-9 pr-4 py-2 bg-white rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-blue"
                        />
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {MOCK_LOGS.map((log) => (
                        <div key={log.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4">
                            <div className={`p-2 rounded-lg ${log.type === 'error' ? 'bg-red-50 text-red-500' :
                                    log.type === 'warning' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-brand-blue'
                                }`}>
                                {log.type === 'error' ? <AlertCircle className="w-5 h-5" /> :
                                    log.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-800">{log.action}</p>
                                <p className="text-xs text-slate-500">{log.user} • {log.target}</p>
                            </div>
                            <span className="text-xs font-bold text-slate-400">{log.time}</span>
                        </div>
                    ))}
                    {[1, 2, 3].map(i => (
                        <div key={i} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-gray-50 text-gray-400">
                                <Info className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-700">System Backup</p>
                                <p className="text-xs text-slate-500">Automated System • Daily Snapshot</p>
                            </div>
                            <span className="text-xs font-bold text-slate-400">Yesterday</span>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                    <button className="text-sm font-bold text-brand-blue hover:underline">Load Older Logs</button>
                </div>
            </div>
        </div>
    );
}
