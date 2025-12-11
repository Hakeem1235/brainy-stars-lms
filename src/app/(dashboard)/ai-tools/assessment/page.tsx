"use client";

import { useState } from "react";
import { CheckSquare, Plus, Save } from "lucide-react";

export default function AssessmentGenerator() {
    const [topic, setTopic] = useState("");
    const [generated, setGenerated] = useState(false);

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        setGenerated(true);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">Assessment Generator</h1>
                <p className="text-slate-500">Create quizzes, exams, and worksheets in seconds.</p>
            </header>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <form onSubmit={handleGenerate} className="flex gap-4 items-end">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Source Material / Topic</label>
                        <input
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            type="text"
                            placeholder="e.g. Arabic Alphabets (Alif to Kha)"
                            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-brand-blue outline-none"
                        />
                    </div>
                    <div className="w-32">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Difficulty</label>
                        <select className="w-full p-3 border rounded-lg bg-gray-50">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors">
                        Generate
                    </button>
                </form>
            </div>

            {generated && (
                <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl text-slate-900">Generated Quiz: {topic}</h3>
                        <button className="text-brand-blue text-sm font-bold flex items-center gap-2">
                            <Save className="w-4 h-4" /> Save to Question Bank
                        </button>
                    </div>

                    {[
                        { q: "Which letter comes after Ba?", options: ["Ta", "Jim", "Dal", "Alif"], correct: 0 },
                        { q: "Which letter has a dot below it?", options: ["Tha", "Ba", "Ta", "Nun"], correct: 1 },
                        { q: "What sound does Jim make?", options: ["'J' as in Jam", "'S' as in Sun", "'M' as in Moon", "'B' as in Ball"], correct: 0 },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-brand-blue transition-colors">
                            <div className="flex justify-between mb-4">
                                <h4 className="font-bold text-lg text-slate-800">Q{i + 1}. {item.q}</h4>
                                <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">1 Point</span>
                            </div>
                            <div className="space-y-2">
                                {item.options.map((opt, idx) => (
                                    <div key={idx} className={`p-3 rounded-lg border flex items-center gap-3 ${idx === item.correct ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-100'}`}>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${idx === item.correct ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300'}`}>
                                            {idx === item.correct && <CheckSquare className="w-3 h-3" />}
                                        </div>
                                        <span className={idx === item.correct ? 'font-bold text-green-800' : 'text-slate-600'}>{opt}</span>
                                        {idx === item.correct && <span className="ml-auto text-xs text-green-600 font-bold uppercase">Correct Answer</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-slate-400 font-bold hover:bg-gray-50 hover:text-slate-600 transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-5 h-5" />
                        Add Manually
                    </button>
                </div>
            )}
        </div>
    );
}
