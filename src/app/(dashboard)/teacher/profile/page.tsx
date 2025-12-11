import Link from "next/link";
import { User, Mail, Phone, MapPin, Award, BookOpen, Clock } from "lucide-react";
import { MOCK_USERS } from "@/lib/mock-db";

export default function ProfilePage() {
    const user = MOCK_USERS.TEACHER;

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            {/* Header / Cover */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-brand-blue to-purple-600"></div>
                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-12 mb-6">
                        <div className="flex items-end gap-6">
                            <div className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-white overflow-hidden">
                                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="mb-1">
                                <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
                                <p className="text-slate-500 font-medium">Head Teacher • Brainy Stars Jayanagar</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-gray-50 bg-white">
                            Edit Profile
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-3 text-slate-600 text-sm">
                            <Mail className="w-4 h-4 text-gray-400" />
                            {user.email}
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 text-sm">
                            <Phone className="w-4 h-4 text-gray-400" />
                            +91 9876543210
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 text-sm">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            Bangalore, India
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stats / Badges */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-4">Achievements</h3>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Certified</h4>
                                    <p className="text-xs text-slate-400">Montessori Directress</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="p-2 bg-blue-100 text-brand-blue rounded-lg">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">Scholar</h4>
                                    <p className="text-xs text-slate-400">15 Modules Done</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-4">Account Security</h3>
                        <button className="w-full text-left flex justify-between items-center py-2 text-sm text-slate-600 hover:text-brand-blue">
                            Change Password <span className="text-xs bg-gray-100 px-2 py-1 rounded">Last changed 30d ago</span>
                        </button>
                    </div>
                </div>

                {/* Timeline */}
                <div className="md:col-span-2 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-400" />
                        Activity Timeline
                    </h3>

                    <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-100">
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-white bg-green-500 shadow-sm"></div>
                            <p className="text-sm font-bold text-slate-800">Practical Submission Approved</p>
                            <p className="text-xs text-slate-500 mt-0.5">Your EPL video was approved by HQ.</p>
                            <span className="text-xs text-slate-400 mt-2 block">2 hours ago</span>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-500 shadow-sm"></div>
                            <p className="text-sm font-bold text-slate-800">Started New Module</p>
                            <p className="text-xs text-slate-500 mt-0.5">Enrolled int "Islamic Tarbiyah Integration".</p>
                            <span className="text-xs text-slate-400 mt-2 block">1 day ago</span>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-white bg-gray-300 shadow-sm"></div>
                            <p className="text-sm font-bold text-slate-800">Joined Brainy Stars LMS</p>
                            <p className="text-xs text-slate-500 mt-0.5">Account activated.</p>
                            <span className="text-xs text-slate-400 mt-2 block">1 month ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
