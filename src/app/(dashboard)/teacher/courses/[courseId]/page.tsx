import Link from "next/link";
import { ArrowLeft, PlayCircle, FileText, CheckCircle } from "lucide-react";
import { getCourseDetails } from "@/lib/actions/role-actions";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function CourseDetailPage({ params }: { params: { courseId: string } }) {
    const course = await getCourseDetails(params.courseId);

    if (!course) {
        return notFound();
    }

    return (
        <div>
            <Link href="/teacher" className="flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
            </Link>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">{course.title}</h1>
                <p className="text-slate-600 leading-relaxed">{course.description}</p>

                <div className="flex gap-4 mt-6">
                    <div className="px-3 py-1 bg-blue-50 text-brand-blue text-sm font-bold rounded-full">
                        {course.modules.length} Modules
                    </div>
                    <div className="px-3 py-1 bg-green-50 text-green-700 text-sm font-bold rounded-full">
                        In Progress
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl font-bold text-slate-800">Course Modules</h2>
                {course.modules.map((module: any, index: number) => (
                    <div key={module.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-slate-800">
                                <span className="text-slate-400 mr-2">#{index + 1}</span>
                                {module.title}
                            </h3>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{module.type}</span>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {module.lessons.map((lesson: any) => (
                                <div key={lesson.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-full ${lesson.isPractical ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-brand-blue'}`}>
                                            {lesson.isPractical ? <PlayCircle className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-700 group-hover:text-brand-blue transition-colors">{lesson.title}</p>
                                            <p className="text-xs text-slate-400">{lesson.isPractical ? 'Practical Video' : 'Theory Lesson'}</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-white border border-gray-200 text-slate-600 text-sm font-bold rounded hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                                        Start
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
