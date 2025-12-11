import Link from "next/link";
import { ArrowLeft, CheckCircle, FileText, Video, PenTool, ClipboardCheck, Lock } from "lucide-react";
import { MOCK_CERTIFICATIONS } from "@/lib/mock-db";

// Helper to get icon based on requirement type
const getIcon = (type: string) => {
    switch (type) {
        case 'Module': return <FileText className="w-5 h-5" />;
        case 'Submission': return <Video className="w-5 h-5" />;
        case 'Exam': return <PenTool className="w-5 h-5" />;
        case 'Observation': return <ClipboardCheck className="w-5 h-5" />;
        default: return <FileText className="w-5 h-5" />;
    }
};

export default async function CertificationDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cert = MOCK_CERTIFICATIONS.find(c => c.id === id);

    if (!cert) return <div>Certification not found</div>;

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <Link href="/teacher/certifications" className="inline-flex items-center text-sm text-slate-500 hover:text-brand-blue">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Certifications
            </Link>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue font-bold rounded-full text-xs mb-3 uppercase tracking-wider">
                                {cert.level} Level
                            </span>
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">{cert.title}</h1>
                            <p className="text-slate-600 max-w-2xl">{cert.description}</p>
                        </div>
                        {cert.status === 'In Progress' && (
                            <div className="text-center bg-green-50 px-6 py-4 rounded-xl border border-green-100">
                                <span className="block text-3xl font-bold text-green-600">{cert.completionRatio}%</span>
                                <span className="text-xs font-bold text-green-700 uppercase">Complete</span>
                            </div>
                        )}
                    </div>

                    <div className="h-px bg-gray-100 my-8"></div>

                    <div>
                        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <ClipboardCheck className="w-6 h-6 text-brand-blue" />
                            Certification Requirements
                        </h2>

                        <div className="space-y-4">
                            {cert.requirements.map((req) => (
                                <div key={req.id} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-blue/30 transition-colors group">
                                    <div className={`p-3 rounded-lg mr-4 ${req.status === 'Completed' || req.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-white border border-gray-200 text-slate-400'}`}>
                                        {req.status === 'Completed' || req.status === 'Approved' ? <CheckCircle className="w-6 h-6" /> : getIcon(req.type)}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className={`font-bold ${req.status === 'Not Started' ? 'text-slate-500' : 'text-slate-800'}`}>{req.title}</h3>
                                            <span className={`text-xs font-bold px-2 py-1 rounded ${req.status === 'Completed' || req.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                                    req.status === 'In Progress' ? 'bg-blue-50 text-brand-blue' :
                                                        req.status === 'Pending' ? 'bg-orange-50 text-orange-600' :
                                                            'bg-gray-100 text-gray-500'
                                                }`}>
                                                {req.status}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{req.type}</p>
                                    </div>

                                    <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-colors">
                                            {req.status === 'Not Started' ? 'Start' : 'View'}
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {cert.requirements.length === 0 && (
                                <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                    <Lock className="w-8 h-8 mx-auto mb-3 opacity-50" />
                                    <p>Requirements locked. Please enroll to view.</p>
                                    <button className="mt-4 bg-brand-blue text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                                        Enroll in Program
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
