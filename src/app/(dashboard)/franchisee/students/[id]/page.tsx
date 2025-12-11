import { MOCK_STUDENTS, MOCK_CLASSES } from "@/lib/mock-db";
import { User, Calendar, BookOpen, Clock, Activity } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function FranchiseeStudentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const student = MOCK_STUDENTS.find(s => s.id === id) || MOCK_STUDENTS[0];
    const className = MOCK_CLASSES.find(c => c.id === student.classId)?.name || 'Unassigned';

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-3xl font-bold text-purple-600">
                    {student.name.charAt(0)}
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 mb-1">{student.name}</h1>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="bg-gray-100 px-2 py-0.5 rounded font-bold text-slate-700">{className}</span>
                        <span>Parent: <span className="font-semibold text-brand-blue">{student.parent}</span></span>
                        <span className="text-green-600 font-bold bg-green-50 px-2 rounded-full">{student.status}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-slate-500">
                        <Calendar className="w-5 h-5" />
                        <h3 className="font-bold text-slate-700">Attendance</h3>
                    </div>
                    <div className="text-4xl font-bold text-slate-800 mb-1">{student.attendance}%</div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${student.attendance}%` }}></div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-slate-500">
                        <Activity className="w-5 h-5" />
                        <h3 className="font-bold text-slate-700">Holistic Progress</h3>
                    </div>
                    <div className="text-4xl font-bold text-brand-blue mb-1">Good</div>
                    <p className="text-xs text-slate-500">Consistent improvement in Social Skills.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-slate-500">
                        <Clock className="w-5 h-5" />
                        <h3 className="font-bold text-slate-700">Last Activity</h3>
                    </div>
                    <div className="font-bold text-slate-800 mb-1">Today, 9:30 AM</div>
                    <p className="text-xs text-slate-500">Checked in by Teacher Fatima</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 font-bold text-slate-800">Teacher Observations Log</div>
                <div className="divide-y divide-gray-50">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="p-6 hover:bg-slate-50">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-slate-700">Observation #{i}</span>
                                <span className="text-xs text-slate-400">2 days ago</span>
                            </div>
                            <p className="text-sm text-slate-600">Student showed great enthusiasm in the EPL pouring activity today. Focus span is improving.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
