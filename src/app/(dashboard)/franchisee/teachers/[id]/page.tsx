import { MOCK_TEACHERS_DIRECTORY, MOCK_TEACHER_COURSES } from "@/lib/mock-db";
import { Mail, Phone, Award, BookOpen, AlertCircle, RefreshCw, Slash, CheckCircle } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function FranchiseeTeacherDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const teacher = MOCK_TEACHERS_DIRECTORY.find(t => t.id === id) || MOCK_TEACHERS_DIRECTORY[0];
    const courses = MOCK_TEACHER_COURSES; // Assigned courses

    return (
        <div className="space-y-8">
            {/* Header / Profile Info */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-3xl font-bold text-slate-600">
                    {teacher.name.charAt(0)}
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-slate-800">{teacher.name}</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 text-slate-500 mt-1 text-sm">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {teacher.email}</span>
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {teacher.mobile}</span>
                        <span className="flex items-center gap-1"><Award className="w-3 h-3" /> Joined {teacher.joinDate}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="bg-gray-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-200">
                        <RefreshCw className="w-4 h-4" /> Reset Progress
                    </button>
                    <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-red-100">
                        <Slash className="w-4 h-4" /> Suspend
                    </button>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-900">
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Training Matrix */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-brand-blue" />
                    Training Modules & Progress
                </h3>

                <div className="space-y-4">
                    {courses.map(course => (
                        <div key={course.id} className="border border-gray-100 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-bold text-slate-700">{course.title}</h4>
                                <span className="bg-blue-50 text-brand-blue px-2 py-0.5 rounded text-xs font-bold">{course.status} - {course.progress}%</span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                                {course.modules.map(mod => (
                                    <div key={mod.id} className={`p-3 rounded-lg border text-center ${mod.status === 'Completed' ? 'bg-green-50 border-green-100' :
                                        mod.status === 'In Progress' ? 'bg-orange-50 border-orange-100' :
                                            'bg-gray-50 border-gray-100 opacity-60'
                                        }`}>
                                        <p className="text-xs font-bold text-slate-600 truncate mb-1" title={mod.title}>{mod.title}</p>

                                        {mod.status === 'Completed' ? (
                                            <div className="flex items-center justify-center gap-1 text-green-600 text-xs font-bold">
                                                <CheckCircle className="w-3 h-3" /> Done
                                            </div>
                                        ) : mod.status === 'In Progress' ? (
                                            <div className="flex items-center justify-center gap-1 text-orange-600 text-xs font-bold">
                                                Running
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-1 text-slate-400 text-xs">
                                                Locked
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pending Actions / Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h3 className="font-bold text-slate-800 mb-4">Pending Assessments</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                                <div>
                                    <p className="font-bold text-red-900 text-sm">Math Video Submission</p>
                                    <p className="text-xs text-red-600">Overdue by 3 days</p>
                                </div>
                            </div>
                            <button className="text-xs font-bold text-red-700 hover:underline">Remind</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                    <h3 className="font-bold text-slate-800 mb-4">Certifications</h3>
                    <div className="p-4 bg-gray-50 rounded-lg text-center border-2 border-dashed border-gray-200">
                        <Award className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                        <p className="text-sm text-slate-500 font-medium">No active certifications yet.</p>
                        <p className="text-xs text-slate-400">Complete "Montessori 5 Environments" to earn the first badge.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
