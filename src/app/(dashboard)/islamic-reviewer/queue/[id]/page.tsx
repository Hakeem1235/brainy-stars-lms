import { CheckCircle, XCircle, AlertTriangle, Sparkles } from "lucide-react";

export default async function ReviewDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Content Preview */}
            <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 border-b pb-4">Content Preview: LSRW Activity: Morning Dua</h2>
                    <div className="prose max-w-none text-slate-700">
                        <p><strong>Lesson Objective:</strong> Teach children the sunnah of waking up.</p>
                        <p><strong>Activity:</strong> Roleplay waking up, stretching, and reciting the Dua.</p>
                        <div className="bg-gray-50 p-4 rounded-lg my-4 border-l-4 border-brand-green">
                            <strong>Dua included:</strong> "Alhamdulillahilladhi ahyana ba'da ma amatana wa ilaihin-nushur"
                        </div>
                        <p><strong>Reference:</strong> Sahih Bukhari 6312</p>
                    </div>
                </div>

                {/* AI Audit Result (Mock) */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-lg font-bold text-emerald-800">AI Islamic Auditor Verdict</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-emerald-700">
                            <CheckCircle className="w-5 h-5" />
                            <span>Hadith Reference Verified (Confidence: 99.8%)</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-700">
                            <CheckCircle className="w-5 h-5" />
                            <span>Arabic Text Accuracy Verified</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Review Action */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                    <h3 className="font-bold text-lg mb-4">Review Decision</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Reviewer Comments</label>
                            <textarea className="w-full h-32 p-3 border rounded-lg resize-none" placeholder="Add feedback..."></textarea>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-lg font-bold hover:bg-red-100 transition-colors">
                                <XCircle className="w-5 h-5" />
                                Reject
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-brand-green text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                                <CheckCircle className="w-5 h-5" />
                                Approve
                            </button>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-yellow-50 text-yellow-700 py-3 rounded-lg font-bold hover:bg-yellow-100 transition-colors border border-yellow-200">
                            <AlertTriangle className="w-5 h-5" />
                            Request Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
