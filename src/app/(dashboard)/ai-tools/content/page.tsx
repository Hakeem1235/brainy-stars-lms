"use client";

import { useState } from "react";
import { Sparkles, Copy, RefreshCw, BookOpen } from "lucide-react";

export default function ContentGenerator() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState("");

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsGenerating(true);
        setResult("");

        // Simulate AI Streaming
        setTimeout(() => {
            setResult(`
# Lesson Plan: The Life Cycle of a Butterfly 🦋

## 1. Lesson Title & Purpose
**Title:** From Caterpillar to Butterfly
**Purpose:** To help the child understand metamorphosis and appreciate Allah's creation (Al-Khaliq).

## 2. Aims
- **Direct Aim:** Understanding the life cycle stages (Egg -> Larva -> Pupa -> Adult).
- **Indirect Aim:** Patience (Sabr), Observation skills, Vocabulary enrichment.

## 3. Materials Required
- Life cycle models (plastic or wooden)
- 3-Part Cards (Nomenclature cards)
- A real plant or garden observation (if available)
- "The Very Hungry Caterpillar" book (optional)

## 4. Step-by-Step Procedure
1. **Invite the child:** "Would you like to see how a butterfly is born?"
2. **Lay out the mat:** Place the life cycle mat.
3. **Present the Egg:** "This is the egg. It is very small. Allah protects it on the leaf."
4. **Present the Caterpillar:** "Out comes the caterpillar! It eats and grows."
5. **Present the Chrysalis:** "It builds a house called a chrysalis. It is sleeping and changing inside."
6. **Present the Butterfly:** "SubhanAllah! Look, it is now a beautiful butterfly."

## 5. Islamic Integration
**Value:** Change and Growth.
**Hadith/Quran:** "And Allah has created every animal from water..." (Quran 24:45).
**Reflection:** Just like the butterfly changes to become better, we also try to improve ourselves every day to please Allah.

## 6. Assessment
- Can the child sequence the cards correctly?
- Can they name the 4 stages?

## 7. Home Activity
- **Observation:** Go to the park with parents and look for caterpillars or butterflies.
- **Art:** Draw the 4 stages on a paper plate.
            `);
            setIsGenerating(false);
        }, 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-8rem)]">
            {/* Input Section */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm overflow-y-auto">
                <header className="mb-6">
                    <div className="flex items-center gap-2 text-brand-blue mb-2">
                        <BookOpen className="w-6 h-6" />
                        <h1 className="text-2xl font-bold">Lesson Plan Generator</h1>
                    </div>
                    <p className="text-slate-500">Generate holistic Montessori-Islamic lesson plans instantly.</p>
                </header>

                <form onSubmit={handleGenerate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Topic / Subject</label>
                        <input type="text" placeholder="e.g. Life Cycle of a Butterfly" className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-brand-blue outline-none" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Age Group</label>
                            <select className="w-full p-3 border rounded-lg bg-gray-50 outline-none">
                                <option>Toddler (18m - 3y)</option>
                                <option>Preschool (3y - 6y)</option>
                                <option>Elementary (6y - 9y)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Environment</label>
                            <select className="w-full p-3 border rounded-lg bg-gray-50 outline-none">
                                <option>Zoology / Culture</option>
                                <option>Practical Life</option>
                                <option>Sensorial</option>
                                <option>Language</option>
                                <option>Math</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Islamic Theme (Optional)</label>
                        <input type="text" placeholder="e.g. Patience (Sabr), Creation (Al-Khaliq)" className="w-full p-3 border rounded-lg bg-gray-50 outline-none" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Specific Requirements</label>
                        <textarea className="w-full p-3 border rounded-lg bg-gray-50 outline-none h-24" placeholder="Any specific materials or constraints?"></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isGenerating}
                        className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isGenerating ? (
                            <>
                                <RefreshCw className="w-5 h-5 animate-spin" />
                                Generating Plan...
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5" />
                                Generate Lesson Plan
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Output Section */}
            <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
                    <span className="text-slate-400 font-mono text-sm">Output Preview</span>
                    {result && (
                        <button className="text-xs flex items-center gap-1 text-slate-300 hover:text-white bg-slate-700 px-3 py-1 rounded transition-colors">
                            <Copy className="w-3 h-3" /> Copy
                        </button>
                    )}
                </div>

                <div className="flex-1 p-6 overflow-y-auto font-mono text-sm text-slate-300 leading-relaxed custom-scrollbar">
                    {result ? (
                        <div className="whitespace-pre-wrap animate-in fade-in duration-500">
                            {result}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-600">
                            <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                            <p>Ready to generate content.</p>
                            <p className="text-xs mt-2">AI model: Montessori-Islamic-V2</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
