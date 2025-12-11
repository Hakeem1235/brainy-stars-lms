import { Plus, BookOpen, Video, FileText, Layers, Users } from "lucide-react";

export default function CourseBuilder() {
    return (
        <div className="space-y-6">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Curriculum Builder</h1>
                    <p className="text-slate-500">Create and manage courses, modules, and lessons.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-900 transition-colors shadow-lg shadow-blue-200">
                    <Plus className="w-5 h-5" />
                    Create New Course
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Active Courses */}
                {[
                    { title: "Montessori Level 1", modules: 12, students: 450, thumb: "bg-blue-100" },
                    { title: "Islamic Studies - Grade 1", modules: 8, students: 320, thumb: "bg-green-100" },
                    { title: "Phonics Mastery", modules: 15, students: 210, thumb: "bg-purple-100" },
                    { title: "Science: Living World", modules: 6, students: 180, thumb: "bg-yellow-100" },
                ].map((course, i) => (
                    <div key={i} className="bg-white p-0 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden group cursor-pointer">
                        <div className={`h-32 ${course.thumb} flex items-center justify-center`}>
                            <Layers className="w-12 h-12 text-slate-900/10 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">{course.title}</h3>
                            <div className="flex gap-4 text-sm text-slate-500 mb-4">
                                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {course.modules} Modules</span>
                                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students}</span>
                            </div>
                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-brand-green h-full w-3/4 rounded-full"></div>
                            </div>
                            <p className="text-xs text-right mt-2 text-slate-400">Published</p>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between">
                            <button className="text-sm font-bold text-slate-600 hover:text-brand-blue">Edit Content</button>
                            <button className="text-sm font-bold text-slate-600 hover:text-brand-blue">Settings</button>
                        </div>
                    </div>
                ))}

                {/* Draft Card */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <Plus className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="font-bold text-slate-400">Start a Draft</h3>
                    <p className="text-sm text-slate-400 mt-1">Or import from AI Generator</p>
                </div>
            </div>
        </div>
    );
}
