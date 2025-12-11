import { Save } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function SettingsPage() {
    return (
        <div className="max-w-4xl space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">Global Settings</h1>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                <h3 className="font-bold text-lg text-slate-800 border-b border-gray-100 pb-3">Organization Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-600 mb-1">Organization Name</label>
                        <input type="text" defaultValue="Brainy Stars" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-600 mb-1">Support Email</label>
                        <input type="email" defaultValue="support@brainystars.com" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                <h3 className="font-bold text-lg text-slate-800 border-b border-gray-100 pb-3">Certification Rules</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-600 mb-1">Minimum Pass Marks (%)</label>
                        <input type="number" defaultValue="80" className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="auto-issue" className="rounded text-brand-blue focus:ring-brand-blue" />
                        <label htmlFor="auto-issue" className="text-sm text-slate-600">Auto-issue certificate upon completion (requires Admin approval if unchecked)</label>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                <h3 className="font-bold text-lg text-slate-800 border-b border-gray-100 pb-3">Notification Preferences</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Email me when a teacher submits a practical video</span>
                        <input type="checkbox" defaultChecked className="toggle-checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Send weekly digest of franchise performance</span>
                        <input type="checkbox" defaultChecked className="toggle-checkbox" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button className="bg-brand-blue text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20">
                    <Save className="w-4 h-4" />
                    Save Changes
                </button>
            </div>
        </div>
    );
}
