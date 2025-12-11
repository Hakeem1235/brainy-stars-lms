import { Sparkles } from "lucide-react";

export default function AIVerificationTool() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="text-center">
                <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-4">
                    <Sparkles className="w-8 h-8 text-emerald-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900">AI Islamic Auditor</h1>
                <p className="text-slate-500">Paste content below to verify references, check authenticity, and ensure tone compliance.</p>
            </header>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
                <textarea
                    className="w-full h-48 p-4 border rounded-lg bg-gray-50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm"
                    placeholder="Paste lesson text, hadith, or story here..."
                ></textarea>
                <div className="flex justify-end mt-4">
                    <button className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-200">
                        <Sparkles className="w-5 h-5" />
                        Run Audit
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
                <div className="text-center p-4 border border-dashed border-gray-300 rounded-xl">
                    <h4 className="font-bold text-slate-700">Reference Check</h4>
                    <p className="text-xs text-slate-500 mt-1">Cross-references Kutub al-Sittah</p>
                </div>
                <div className="text-center p-4 border border-dashed border-gray-300 rounded-xl">
                    <h4 className="font-bold text-slate-700">Tone Analysis</h4>
                    <p className="text-xs text-slate-500 mt-1">Detects disrespectful language</p>
                </div>
                <div className="text-center p-4 border border-dashed border-gray-300 rounded-xl">
                    <h4 className="font-bold text-slate-700">Compliance Tagging</h4>
                    <p className="text-xs text-slate-500 mt-1">Auto-tags values (Sabr, Shukr)</p>
                </div>
            </div>
        </div>
    );
}
