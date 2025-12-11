import { MOCK_COURSES } from "@/lib/mock-db";
import { Plus, GripVertical, FileText, Video, HelpCircle } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function CourseDetailBuilder({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const course = MOCK_COURSES.find(c => c.id === id) || MOCK_COURSES[0];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
                        {course.type || 'Course'}
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Published</span>
                </div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{course.title}</h1>
                <p className="text-slate-500 max-w-2xl">{course.description}</p>
            </div>

            {/* Content Builder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-slate-800">Course Content</h2>
                        <button className="text-sm font-bold text-brand-blue bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 flex items-center gap-2">
                            <Plus className="w-4 h-4" /> Add Module
                        </button>
                    </div>

                    <div className="space-y-4">
                        {course.modules && course.modules.map((module: any, index: number) => (
                            <div key={module.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                                <div className="p-4 bg-gray-50 flex items-center gap-3 border-b border-gray-200">
                                    <GripVertical className="w-5 h-5 text-slate-400 cursor-move" />
                                    <div className="flex-1 font-bold text-slate-700">
                                        <span className="text-slate-400 mr-2">Module {index + 1}:</span>
                                        {module.title}
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="text-xs font-bold text-slate-500 hover:text-slate-800">Edit</button>
                                        <button className="text-xs font-bold text-red-500 hover:text-red-700">Remove</button>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2">
                                    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg text-sm text-slate-600">
                                        <Video className="w-4 h-4 text-brand-blue" />
                                        <span>Video Lecture: Introduction</span>
                                        <span className="ml-auto text-xs text-slate-400">10:00</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg text-sm text-slate-600">
                                        <FileText className="w-4 h-4 text-orange-500" />
                                        <span>Reading Material: Core Concepts</span>
                                        <span className="ml-auto text-xs text-slate-400">PDF</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg text-sm text-slate-600">
                                        <HelpCircle className="w-4 h-4 text-purple-500" />
                                        <span>Quiz: Check for Understanding</span>
                                        <span className="ml-auto text-xs text-slate-400">10 Qs</span>
                                    </div>
                                    <button className="w-full py-2 text-xs font-bold text-slate-400 border border-dashed border-slate-300 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-colors flex justify-center items-center gap-2">
                                        <Plus className="w-3 h-3" /> Add Lesson
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-4">Course Settings</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category</label>
                                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                                    <option>MontessoriMethod</option>
                                    <option>Child Psychology</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Level</label>
                                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                                    <option>Beginner</option>
                                    <option>Advanced</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Prerequisites</label>
                                <input type="text" placeholder="Search courses..." className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-4">Assigned to</h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm text-slate-600">
                                <input type="checkbox" checked className="rounded text-brand-blue focus:ring-brand-blue" />
                                All Franchises
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
