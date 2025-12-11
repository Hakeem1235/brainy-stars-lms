import Link from "next/link";

export default function AIToolsDashboard() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">AI Intelligence Center</h1>
                <p className="text-slate-500">Centralized hub for all AI-powered generators and auditors.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Content Generator */}
                <Link href="/ai-tools/content" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-blue transition-all group">
                    <div className="h-32 bg-blue-50 rounded-lg mb-4 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-transform">
                        <span className="text-4xl">📝</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-brand-blue">Content Generator</h3>
                    <p className="text-sm text-slate-500 mt-1">Create lesson plans & curriculum.</p>
                </Link>

                {/* Video Creator */}
                <Link href="/ai-tools/video" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-500 transition-all group">
                    <div className="h-32 bg-purple-50 rounded-lg mb-4 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                        <span className="text-4xl">🎬</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-purple-600">Video Creator</h3>
                    <p className="text-sm text-slate-500 mt-1">Turn scripts into educational videos.</p>
                </Link>

                {/* Assessment Generator */}
                <Link href="/ai-tools/assessment" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-500 transition-all group">
                    <div className="h-32 bg-green-50 rounded-lg mb-4 flex items-center justify-center text-green-600 group-hover:scale-105 transition-transform">
                        <span className="text-4xl">✅</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-green-600">Assessment Generator</h3>
                    <p className="text-sm text-slate-500 mt-1">Build quizzes & exams instantly.</p>
                </Link>

                {/* Activity Generator */}
                <Link href="/ai-tools/activity" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all group">
                    <div className="h-32 bg-yellow-50 rounded-lg mb-4 flex items-center justify-center text-yellow-600 group-hover:scale-105 transition-transform">
                        <span className="text-4xl">🎨</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-yellow-600">Activity Builder</h3>
                    <p className="text-sm text-slate-500 mt-1">Montessori activities for home/school.</p>
                </Link>

                {/* Islamic Auditor */}
                <Link href="/islamic-reviewer/ai-audit" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all group">
                    <div className="h-32 bg-emerald-50 rounded-lg mb-4 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                        <span className="text-4xl">🕌</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-emerald-600">Islamic Auditor</h3>
                    <p className="text-sm text-slate-500 mt-1">Verify tone & references.</p>
                </Link>
            </div>
        </div>
    );
}
