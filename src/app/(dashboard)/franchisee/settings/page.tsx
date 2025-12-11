import { Save, Lock, Bell, Building } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function FranchiseeSettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Branch Settings</h1>
                <p className="text-slate-500">Manage your franchise profile and configurations.</p>
            </div>

            {/* Branch Profile */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <Building className="w-5 h-5 text-brand-blue" />
                    Branch Operations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Branch Name</label>
                        <input type="text" defaultValue="Brainy Stars Jayanagar" className="w-full px-4 py-2 rounded-lg border border-gray-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-blue/20" disabled />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Operating City</label>
                        <input type="text" defaultValue="Bangalore" className="w-full px-4 py-2 rounded-lg border border-gray-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-blue/20" disabled />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Contact Email</label>
                        <input type="email" defaultValue="jayanagar@brainystars.com" className="w-full px-4 py-2 rounded-lg border border-gray-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-blue/20" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Helpline Number</label>
                        <input type="text" defaultValue="+91 98765 43210" className="w-full px-4 py-2 rounded-lg border border-gray-200 text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-blue/20" />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <Bell className="w-5 h-5 text-brand-blue" />
                    Notifications
                </h3>
                <div className="space-y-4">
                    {['Receive Weekly Training Summary', 'Alert me on Teacher Submission Rejection', 'Parent Message Notifications'].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <span className="text-slate-700">{item}</span>
                            <div className={`w-12 h-6 rounded-full relative cursor-pointer ${i === 0 ? 'bg-brand-blue' : 'bg-gray-200'}`}>
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${i === 0 ? 'right-1' : 'left-1'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <button className="px-6 py-2 rounded-lg text-slate-600 font-bold hover:bg-gray-100">Cancel</button>
                <button className="px-6 py-2 rounded-lg bg-brand-blue text-white font-bold hover:bg-blue-900 flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save Changes
                </button>
            </div>
        </div>
    );
}
