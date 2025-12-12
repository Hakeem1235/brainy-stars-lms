import { BookOpen, Clock, FileText, PlayCircle, Star, Award, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getTeacherCourses } from "@/lib/actions/role-actions";
import { Course } from "@/types";

export const dynamic = 'force-dynamic';

export default async function TeacherModulesPage() {
    // Fetch Data for Teacher Modules
    const courses = await getTeacherCourses() as unknown as Course[];

    // Calculate completed modules for stats
    const completedCount = courses.reduce((acc, course) => {
        return acc + (course.status === 'Completed' ? 1 : 0);
    }, 0);

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">My Modules</h1>
                    <p className="text-slate-500">Access your training materials and professional development courses.</p>
                </div>
                <div className="flex gap-3">
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                        <Award className="w-5 h-5 text-brand-gold" />
                        <div>
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Certificates</p>
                            <p className="text-sm font-bold text-slate-900">1 Earned</p>
                        </div>
                    </div>
                </div>
            </header>

            {courses.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <BookOpen className="w-8 h-8 text-slate-300" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">No Modules Assigned</h3>
                    <p className="text-slate-500 max-w-sm mx-auto">You don't have any training modules assigned yet. Please contact your administrator.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                            <div className="h-48 w-full bg-gray-100 relative">
                                {/* Placeholder if image fails, but using Unsplash links */}
                                <img src={course.image || "https://images.unsplash.com/photo-1542810634-71277d95dc24??q=80&w=2670&auto=format&fit=crop"} alt={course.title} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4">
                                    <Badge className={
                                        course.status === 'Completed' ? 'bg-emerald-500 hover:bg-emerald-600' :
                                            course.status === 'In Progress' ? 'bg-blue-500 hover:bg-blue-600' :
                                                'bg-slate-500 hover:bg-slate-600'
                                    }>
                                        {course.status}
                                    </Badge>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">{(course as any).category || "Training"}</span>
                                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 line-clamp-2">{course.title}</h3>
                                    <div className="flex items-center gap-4 text-slate-500 text-xs">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{(course as any).duration || "4 weeks"}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BookOpen className="w-3 h-3" />
                                            <span>{course.modules?.length || 0} Modules</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs font-semibold mb-1.5">
                                            <span className={course.progress === 100 ? 'text-emerald-600' : 'text-slate-600'}>
                                                {course.progress}% Complete
                                            </span>
                                        </div>
                                        <Progress value={course.progress} className="h-2" />
                                    </div>

                                    <Link
                                        href={`/teacher/courses/${course.id}`}
                                        className="w-full h-10 rounded-lg border border-gray-200 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 hover:bg-gray-50 hover:text-brand-blue hover:border-brand-blue/30 transition-all"
                                    >
                                        {course.status === 'Not Started' ? 'Start Learning' : 'Continue Learning'}
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
