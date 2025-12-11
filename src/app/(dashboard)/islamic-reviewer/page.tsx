import { FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function ReviewerDashboard() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">Islamic Review Center</h1>
                <p className="text-slate-500">Validate content authenticity and compliance.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Pending Review</p>
                            <h3 className="text-2xl font-bold text-slate-900">12</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-100 rounded-lg">
                            <AlertCircle className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Needs Correction</p>
                            <h3 className="text-2xl font-bold text-slate-900">4</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Approved This Week</p>
                            <h3 className="text-2xl font-bold text-slate-900">28</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="font-semibold text-slate-900">Recent Assignments</h3>
                </div>
                <div className="p-6 text-center text-slate-500">
                    <p>No active reviews assigned.</p>
                </div>
            </div>
        </div>
    );
}
