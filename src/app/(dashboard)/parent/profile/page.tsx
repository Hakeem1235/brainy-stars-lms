import Link from "next/link";
import { User, Mail, Phone, Bell, Lock, Save } from "lucide-react";
import { MOCK_USERS } from "@/lib/mock-db";

export default function ParentProfilePage() {
    const user = MOCK_USERS.PARENT;

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-gray-100">
                    <h1 className="text-2xl font-bold text-slate-800">Profile Settings</h1>
                    <p className="text-slate-500">Manage your account details and preferences.</p>
                </div>

                <div className="p-8 space-y-8">
                    {/* Personal Info */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <User className="w-5 h-5 text-brand-blue" /> Personal Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue={user.name}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="email"
                                        defaultValue={user.email}
                                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue bg-gray-50 from-neutral-200"
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="tel"
                                        defaultValue="+91 9876543210"
                                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100"></div>

                    {/* Notifications */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Bell className="w-5 h-5 text-orange-500" /> Notification Preferences
                        </h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-brand-blue rounded focus:ring-brand-blue" />
                                <span className="font-medium text-slate-700">Email Alerts for Activity Updates</span>
                            </label>
                            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                <input type="checkbox" defaultChecked className="w-5 h-5 text-brand-blue rounded focus:ring-brand-blue" />
                                <span className="font-medium text-slate-700">SMS for School Announcements</span>
                            </label>
                            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                <input type="checkbox" className="w-5 h-5 text-brand-blue rounded focus:ring-brand-blue" />
                                <span className="font-medium text-slate-700">WhatsApp Updates</span>
                            </label>
                        </div>
                    </div>

                    <div className="h-px bg-gray-100"></div>

                    {/* Password */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-gray-500" /> Security
                        </h3>
                        <button className="text-sm font-bold text-brand-blue border border-brand-blue px-4 py-2 rounded-lg hover:bg-blue-50">
                            Reset Password
                        </button>
                    </div>

                    <div className="pt-4">
                        <button className="flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                            <Save className="w-4 h-4" /> Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
