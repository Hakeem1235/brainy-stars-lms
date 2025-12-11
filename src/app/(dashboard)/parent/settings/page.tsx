import { Save, User, CreditCard, Bell, Shield } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function ParentSettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Profile & Settings</h1>
                <p className="text-slate-500">Manage your account and view fee status.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    {/* Fee Status Card */}
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-indigo-900 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5" />
                                    Fee Status
                                </h3>
                                <p className="text-sm text-indigo-700 mt-1">Academic Year 2024-25</p>
                            </div>
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">Paid</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/50 p-3 rounded-lg">
                            <span className="text-sm font-semibold text-indigo-800">Q3 Tuition</span>
                            <span className="font-bold text-indigo-900">₹25,000</span>
                        </div>
                        <p className="text-xs text-indigo-600 mt-4 text-center">Next payment due: Jan 15th, 2025</p>
                    </div>

                    {/* Notification Config */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
                            <Bell className="w-5 h-5 text-brand-blue" />
                            Alert Preferences
                        </h3>
                        <div className="space-y-4">
                            {['Daily Activity Updates', 'Message Notifications', 'Fee Reminders', 'Event Announcements'].map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                                    <div className={`w-10 h-6 rounded-full relative cursor-pointer ${i < 3 ? 'bg-brand-blue' : 'bg-gray-200'}`}>
                                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${i < 3 ? 'right-1' : 'left-1'}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Profile Card */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                        <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-3 flex items-center justify-center text-slate-400">
                            <User className="w-10 h-10" />
                        </div>
                        <h3 className="font-bold text-slate-800">Zara Parent</h3>
                        <p className="text-sm text-slate-500 mb-4">Parent of Aliya (Nursery)</p>
                        <button className="w-full border border-gray-200 text-slate-600 font-bold py-2 rounded-lg text-sm hover:bg-gray-50">
                            Edit Profile
                        </button>
                    </div>

                    {/* Security */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-slate-400" />
                            Security
                        </h3>
                        <button className="w-full text-left text-sm text-brand-blue font-medium hover:underline mb-2">Change Password</button>
                        <button className="w-full text-left text-sm text-red-600 font-medium hover:underline">Log Out of All Devices</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
