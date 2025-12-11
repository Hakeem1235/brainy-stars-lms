import Link from "next/link";
import { User, Activity, Calendar, Star, TrendingUp, Award, BookOpen, Smile, Zap } from "lucide-react";
import { MOCK_USERS } from "@/lib/mock-db";

export default function MyChildPage() {
    const parent = MOCK_USERS.PARENT;
    const child = parent.children[0]; // Assuming single child for prototype

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header / Profile Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 rounded-full bg-slate-100 overflow-hidden border-4 border-white shadow-md flex-shrink-0">
                    <img src={child.avatar} alt={child.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800">{child.name}</h1>
                            <p className="text-slate-500 font-medium text-lg">{child.class} • Brainy Stars Jayanagar</p>
                        </div>
                        <div className="bg-green-50 px-4 py-2 rounded-lg border border-green-100 text-green-700 font-bold text-sm">
                            Active Student
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Age</p>
                            <p className="font-bold text-slate-800">4 Years</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Teacher</p>
                            <Link href="#" className="font-bold text-brand-blue hover:underline">Fatima Khan</Link>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Attendance</p>
                            <p className="font-bold text-green-600">{child.attendance}%</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Enrolled Since</p>
                            <p className="font-bold text-slate-800">June 2023</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strength Indicators */}
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Child Strength Indicators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Smile className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1">Social Skills</h3>
                    <p className="text-sm text-slate-500">Very friendly with peers</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                    <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1">Focus</h3>
                    <p className="text-sm text-slate-500">Shows deep concentration</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1">Fine Motor</h3>
                    <p className="text-sm text-slate-500">Excellent handling of beads</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1">Manners (Adab)</h3>
                    <p className="text-sm text-slate-500">Always says Salam</p>
                </div>
            </div>

            {/* Environment Exposure */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-bold text-slate-800">Montessori Environment Exposure</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-slate-700">Exercises of Practical Life (EPL)</span>
                                <span className="text-sm font-bold text-green-600">Advanced Status</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className="bg-green-500 h-3 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Currently working on: Washing Cloth, Polishing Brass</p>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-slate-700">Sensorial Education</span>
                                <span className="text-sm font-bold text-blue-600">Intermediate Status</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Currently working on: Geometric Solids, Colour Tablets Box 3</p>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-slate-700">Mathematics</span>
                                <span className="text-sm font-bold text-orange-600">Beginner Status</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className="bg-orange-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Currently working on: Number Rods, Sandpaper Numbers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
