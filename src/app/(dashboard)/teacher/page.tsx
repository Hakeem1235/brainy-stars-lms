import Link from "next/link";
import { Book, CheckCircle, Clock, FileText, Upload, Award } from "lucide-react";
import { getTeacherCourses } from "@/lib/actions/role-actions";
import { MOCK_USERS } from "@/lib/mock-db"; // Direct access for user-specifics in prototype
import { Course, Module, Teacher } from "@/types";

export const dynamic = 'force-dynamic';

export default async function TeacherDashboard() {
    const courses: Course[] = await getTeacherCourses();
    const teacherData = MOCK_USERS.TEACHER as unknown as Teacher & {
        pendingActions: { id: number; title: string; type: string; due: string }[]
    };

    return (
        <div className="space-y-8">
            {/* Header with Cert Status */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white flex justify-between items-center shadow-lg">
                <div>
                    <h1 className="text-3xl font-bold mb-2">My Training Dashboard</h1>
                    <p className="text-blue-100">Welcome back, {teacherData.name}. Continue your journey to certification.</p>
                </div>
                <div className="bg-white/10 px-6 py-4 rounded-xl text-center backdrop-blur-sm border border-white/20">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">Certification Status</p>
                    <div className="flex items-center gap-3">
                        <Award className="w-8 h-8 text-yellow-400" />
                        <span className="text-2xl font-bold">{teacherData.status}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Assigned Modules */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Book className="w-5 h-5 text-brand-blue" />
                        Assigned Modules
                    </h2>

                    {courses.map((course: Course) => (
                        <div key={course.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800">{course.title}</h3>
                                <Link href={`/teacher/courses/${course.id}`} className="text-sm font-bold text-brand-blue hover:underline">
                                    View Full Course
                                </Link>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {course.modules.map((mod: Module) => (
                                    <div key={mod.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-2 h-2 rounded-full ${mod.status === 'Completed' ? 'bg-green-500' : mod.status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-300'}`} />
                                            <div>
                                                <p className="font-semibold text-slate-700 text-base">{mod.title}</p>
                                                <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-slate-500 font-medium">{mod.status}</span>
                                                    <span>{mod.lessons?.length || 0} Lessons</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            {mod.status === 'Completed' && (
                                                <span className="flex items-center gap-1 text-green-600 text-xs font-bold">
                                                    <CheckCircle className="w-3 h-3" /> Passed ({mod.score}%)
                                                </span>
                                            )}
                                            <Link
                                                href={mod.status === 'Locked' ? '#' : `/teacher/courses/${course.id}`}
                                                className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${mod.status === 'Locked' ? 'bg-gray-50 text-gray-400 border-transparent cursor-not-allowed' : 'bg-white text-brand-blue border-gray-200 hover:bg-brand-blue hover:text-white hover:border-brand-blue'}`}
                                            >
                                                {mod.status === 'Completed' ? 'Review' : mod.status === 'Locked' ? 'Locked' : 'Continue'}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Key Actions */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-orange-500" />
                        Pending Actions
                    </h2>

                    {/* Action Cards */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <ul className="space-y-4">
                            {teacherData.pendingActions.map((action) => (
                                <li key={action.id} className="flex gap-4 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                    <div className={`p-2 rounded-lg flex-shrink-0 ${action.type === 'QUIZ' ? 'bg-purple-100 text-purple-600' : 'bg-orange-100 text-orange-600'}`}>
                                        {action.type === 'QUIZ' ? <FileText className="w-5 h-5" /> : <Upload className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1">{action.title}</h4>
                                        <p className="text-xs text-slate-500 mb-2">Due in {action.due}</p>
                                        <button className="text-xs bg-slate-800 text-white px-3 py-1.5 rounded hover:bg-slate-700 transition-colors">
                                            {action.type === 'QUIZ' ? 'Start Quiz' : 'Upload Video'}
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                        <h3 className="font-bold text-indigo-900 mb-3">Resources</h3>
                        <p className="text-sm text-indigo-700 mb-4">Download lesson scripts and observation templates.</p>
                        <button className="w-full bg-white text-indigo-600 font-bold py-2 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors text-sm">
                            Access Library
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

