import Link from "next/link";
import { ClipboardList, Plus, Search } from "lucide-react";
import { MOCK_STUDENTS } from "@/lib/mock-db";

export default function ObservationsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Student Observations</h1>
                    <p className="text-slate-500">Record and track individual student progress.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> New Observation
                </button>
            </div>

            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by student name..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                    />
                </div>
                <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-slate-600 font-medium">
                    <option>All Classes</option>
                    <option>Nursery - A</option>
                    <option>LKG - B</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mock Observation Cards */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-sm font-bold text-pink-600">
                                OS
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Omar Siddiqui</h3>
                                <p className="text-xs text-slate-500">LKG - B</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-slate-400">2d ago</span>
                    </div>
                    <div className="mb-4">
                        <span className="text-xs font-bold px-2 py-1 bg-purple-50 text-purple-600 rounded mb-2 inline-block">Sensorial</span>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Omar showed great concentration today working with the Pink Tower. He was able to self-correct when he placed the smallest block incorrectly.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold text-blue-600">
                                ZS
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Zara Siddiqui</h3>
                                <p className="text-xs text-slate-500">Nursery - B</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-slate-400">1w ago</span>
                    </div>
                    <div className="mb-4">
                        <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-600 rounded mb-2 inline-block">EPL</span>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Zara successfully poured water from the jug to the glass without spilling. She repeated the exercise 3 times with enthusiasm.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
