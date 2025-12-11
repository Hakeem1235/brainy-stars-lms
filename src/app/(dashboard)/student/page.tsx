import { Sparkles, BookOpen, Library, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Welcome back, Ali!</h1>
                    <p className="text-slate-500">Ready to learn something new today?</p>
                </div>
                <div className="flex items-center gap-3 bg-yellow-100 px-4 py-2 rounded-full border border-yellow-200">
                    <Sparkles className="w-5 h-5 text-yellow-600" />
                    <span className="font-bold text-yellow-800">Level 2 Scholar</span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/student/activities" className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-blue/30 transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">My Activities</h3>
                    <p className="text-sm text-slate-500">3 tasks pending</p>
                </Link>

                <Link href="/student/stories" className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-500/30 transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Library className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Stories & Duas</h3>
                    <p className="text-sm text-slate-500">Listen and learn</p>
                </Link>

                <Link href="/student/badges" className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-yellow-500/30 transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">My Badges</h3>
                    <p className="text-sm text-slate-500">12 collected</p>
                </Link>
            </div>
        </div>
    );
}
