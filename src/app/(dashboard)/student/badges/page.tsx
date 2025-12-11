import { Sparkles, Star, Trophy, Award } from "lucide-react";

export default function StudentBadges() {
    return (
        <div className="space-y-8">
            <header className="text-center">
                <h1 className="text-3xl font-bold text-slate-900">My Trophy Case</h1>
                <p className="text-slate-500">Look at all the badges you earned!</p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="aspect-square bg-yellow-50 rounded-full flex flex-col items-center justify-center border-4 border-yellow-200 shadow-lg">
                    <Trophy className="w-12 h-12 text-yellow-500 mb-2" />
                    <span className="font-bold text-slate-900">Super Reader</span>
                </div>
                <div className="aspect-square bg-blue-50 rounded-full flex flex-col items-center justify-center border-4 border-blue-200 shadow-lg">
                    <Star className="w-12 h-12 text-blue-500 mb-2" />
                    <span className="font-bold text-slate-900">Math Star</span>
                </div>
                <div className="aspect-square bg-green-50 rounded-full flex flex-col items-center justify-center border-4 border-green-200 shadow-lg">
                    <Award className="w-12 h-12 text-green-500 mb-2" />
                    <span className="font-bold text-slate-900">Kind Helper</span>
                </div>
                <div className="aspect-square bg-gray-100 rounded-full flex flex-col items-center justify-center border-4 border-gray-200 opacity-50">
                    <Sparkles className="w-12 h-12 text-gray-400 mb-2" />
                    <span className="font-bold text-gray-500">Locked</span>
                </div>
            </div>
        </div>
    );
}
