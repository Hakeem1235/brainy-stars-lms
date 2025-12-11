export default function CertificateVerification() {
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
                <h1 className="text-2xl font-bold text-center text-brand-blue mb-2">Verify Certificate</h1>
                <p className="text-center text-slate-500 mb-8">Enter the Certificate ID to verify its authenticity.</p>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Certificate ID (e.g. CERT-2024-001)"
                        className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue outline-none"
                    />
                    <button className="w-full h-12 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-900 transition-colors">
                        Verify Now
                    </button>
                </div>
            </div>
        </div>
    );
}
