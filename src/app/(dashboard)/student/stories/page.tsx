import { Play, Heart } from "lucide-react";

export default function StudentStories() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">Stories & Duas</h1>
                <p className="text-slate-500">Listen to beautiful stories.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { title: "Prophet Yunus & The Whale", duration: "5 mins" },
                    { title: "The Crying Camel", duration: "3 mins" },
                    { title: "Honesty Saves the Day", duration: "4 mins" },
                    { title: "Dua for Sleeping", duration: "1 min" }
                ].map((story, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 hover:bg-gray-50 cursor-pointer">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Play className="w-5 h-5 text-purple-600 ml-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-slate-900">{story.title}</h3>
                            <p className="text-xs text-slate-400">{story.duration}</p>
                        </div>
                        <button className="p-2 text-slate-300 hover:text-red-400 transition-colors">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
