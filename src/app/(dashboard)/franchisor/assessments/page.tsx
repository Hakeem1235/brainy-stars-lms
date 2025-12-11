import { MOCK_ASSESSMENTS } from "@/lib/mock-db";
import { Plus, FileCheck, Search, Copy, Edit } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function AssessmentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Assessment Templates</h1>
                    <p className="text-slate-500">Manage exams, quizzes, and practical rubrics.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors">
                    <Plus className="w-4 h-4" />
                    Create Template
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_ASSESSMENTS.map((assessment) => (
                    <div key={assessment.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                                <FileCheck className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1.5 hover:bg-gray-100 rounded text-slate-500"><Edit className="w-4 h-4" /></button>
                                <button className="p-1.5 hover:bg-gray-100 rounded text-slate-500"><Copy className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-800 mb-1">{assessment.title}</h3>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">
                                {assessment.type}
                            </span>
                            <span className="text-xs text-slate-400">
                                {assessment.type === 'MCQ' ? `${assessment.questions} Questions` :
                                    assessment.type === 'RUBRIC' ? `${assessment.criteria} Criteria` : 'Essay'}
                            </span>
                        </div>

                        <div className="pt-4 border-t border-gray-50 flex justify-between items-center text-sm text-slate-500">
                            <span>Used in 2 Courses</span>
                            <span className="font-bold text-slate-300">ID: {assessment.id}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
