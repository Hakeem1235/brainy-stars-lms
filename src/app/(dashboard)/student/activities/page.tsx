import { BookOpen, Star, PlayCircle } from "lucide-react";

export default function StudentActivities() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">My Activities</h1>
                <p className="text-slate-500">Fun things to do today!</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                        <div className="h-40 bg-blue-100 flex items-center justify-center relative">
                            <PlayCircle className="w-12 h-12 text-blue-500 opacity-80 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Science</span>
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Growing a Seed</h3>
                            <p className="text-slate-500 text-sm mb-4">Watch the video and plant your own seed!</p>
                            <button className="w-full py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-blue-900 transition-colors">
                                Start Activity
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
