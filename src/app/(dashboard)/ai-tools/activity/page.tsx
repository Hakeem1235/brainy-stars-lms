"use client";

import { useState } from "react";
import { Sparkles, Calendar, BookOpen } from "lucide-react";

export default function ActivityBuilder() {
    const [generated, setGenerated] = useState(false);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">Activity Builder</h1>
                <p className="text-slate-500">Design age-appropriate Montessori activities for Home or School.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Target Skill</label>
                        <select className="w-full p-3 border rounded-lg bg-gray-50">
                            <option>Fine Motor Skills</option>
                            <option>Practical Life (EPL)</option>
                            <option>Gross Motor</option>
                            <option>Language</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Child's Interest</label>
                        <input className="w-full p-3 border rounded-lg bg-gray-50" placeholder="e.g. Cars, Water, Animals" />
                    </div>
                    <button onClick={() => setGenerated(true)} className="w-full py-3 bg-brand-gold text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition-colors flex justify-center items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Generate Ideas
                    </button>
                </div>

                {generated ? (
                    <div className="bg-white p-6 rounded-xl border border-brand-gold shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 bg-brand-gold text-white text-xs font-bold rounded-bl-xl">AI SUGGESTION</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Water Pouring Station</h3>
                        <div className="flex gap-2 text-xs text-slate-500 mb-4">
                            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"><Calendar className="w-3 h-3" /> 3-4 Years</span>
                            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"><BookOpen className="w-3 h-3" /> EPL</span>
                        </div>

                        <div className="space-y-4 text-sm text-slate-600">
                            <div>
                                <strong className="text-slate-900 block mb-1">Materials Needed:</strong>
                                <ul className="list-disc pl-5">
                                    <li>Small jug with water</li>
                                    <li>Two clear glasses</li>
                                    <li>A tray to catch spills</li>
                                    <li>Sponge for cleanup</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-slate-900 block mb-1">Procedure:</strong>
                                <p>Show the child how to hold the jug handle with 3 fingers (pincer grasp). Pour slowly into the glass. Stop before it overflows.</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-green-800">
                                <strong>Islamic Value:</strong> Not wasting water (Israaf). Mention how the Prophet (SAW) used water carefully for wudu.
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center p-8 text-slate-400">
                        Select options to see activity ideas here.
                    </div>
                )}
            </div>
        </div>
    );
}
