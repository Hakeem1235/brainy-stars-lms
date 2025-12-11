import { Award, Download, Calendar } from "lucide-react";

export default function TeacherCertifications() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">My Certifications</h1>
                <p className="text-slate-500">Track your professional development milestones.</p>
            </header>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-brand-gold" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Montessori Level 1 Certified</h3>
                        <p className="text-sm text-slate-500">Issued by Brainy Stars Head Office</p>
                    </div>
                    <button className="ml-auto flex items-center gap-2 text-slate-600 hover:text-brand-blue border px-4 py-2 rounded-lg">
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>
                <div className="p-6 border-b border-gray-100 flex items-center gap-4 opacity-50">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-gray-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Islamic Holistic Educator (In Progress)</h3>
                        <p className="text-sm text-slate-500">Expected Completion: Dec 2024</p>
                    </div>
                    <div className="ml-auto">
                        <div className="w-32 bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-brand-blue h-full w-1/2"></div>
                        </div>
                        <p className="text-xs text-right mt-1 text-slate-500">50%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
