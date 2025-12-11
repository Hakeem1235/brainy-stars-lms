import Link from "next/link";
import { Settings, Shield, Bell, Database, Globe, Save } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Platform Settings</h1>
                    <p className="text-slate-500">Global configuration for Brainy Stars LMS.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-2">
                    <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-brand-blue font-bold text-sm flex items-center gap-2">
                        <Globe className="w-4 h-4" /> General
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-slate-600 font-medium text-sm flex items-center gap-2 transition-colors">
                        <Shield className="w-4 h-4" /> Security & Access
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-slate-600 font-medium text-sm flex items-center gap-2 transition-colors">
                        <Bell className="w-4 h-4" /> Notifications
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-slate-600 font-medium text-sm flex items-center gap-2 transition-colors">
                        <Database className="w-4 h-4" /> Backup & Data
                    </button>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-6 border-b border-gray-100 pb-4">General Configuration</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Platform Name</label>
                                <input type="text" defaultValue="Brainy Stars LMS" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Support Email</label>
                                <input type="email" defaultValue="support@brainystars.com" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue" />
                            </div>

                            <div className="pt-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-green-400" />
                                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Maintenance Mode</span>
                                </label>
                                <p className="text-xs text-slate-500 mt-1 ml-14">Users will see a maintenance screen if enabled.</p>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button className="flex items-center gap-2 bg-brand-blue text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                                <Save className="w-4 h-4" /> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
