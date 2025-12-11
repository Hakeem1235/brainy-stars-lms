import { MOCK_COURSES } from "@/lib/mock-db";
import { BookOpen, AlertCircle, CheckCircle, Clock } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function ModulesMonitorPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Assigned Training Modules</h1>
                    <p className="text-slate-500">Monitor completion rates for mandatory training.</p>
                </div>
            </div>

            <div className="space-y-4">
                {MOCK_COURSES.map((course) => (
                    <div key={course.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue">
                                <BookOpen className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-slate-800">{course.title}</h3>
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${course.type === 'CORE' ? 'bg-purple-100 text-purple-700' : 'bg-blue-50 text-brand-blue'
                                        }`}>
                                        {course.type || 'Standard'}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 mt-1">{course.description}</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-50 py-4">
                                <div className="text-center">
                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Assigned</p>
                                    <p className="text-xl font-bold text-slate-800">12 Teachers</p>
                                </div>
                                <div className="text-center border-l border-gray-100">
                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">In Progress</p>
                                    <p className="text-xl font-bold text-orange-500">5</p>
                                </div>
                                <div className="text-center border-l border-gray-100">
                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Completed</p>
                                    <p className="text-xl font-bold text-green-600">7</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[58%]"></div>
                                </div>
                                <span className="text-xs font-bold text-slate-600">58% Branch Completion</span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-2 min-w-[200px]">
                            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-gray-50 flex justify-between items-center">
                                View Details <span>&rarr;</span>
                            </button>
                            <div className="bg-red-50 p-3 rounded-lg flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                                <div>
                                    <p className="text-xs font-bold text-red-700">3 Overdue</p>
                                    <p className="text-[10px] text-red-500">Anita, Rajesh, +1 more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
