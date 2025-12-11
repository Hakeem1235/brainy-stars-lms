"use client";

import { useState } from "react";
import { Video, Play, Upload, Mic, LayoutTemplate } from "lucide-react";

export default function VideoCreator() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    const startGeneration = () => {
        setStep(2);
        // Simulate progress
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setStep(3);
            }
        }, 150);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">AI Video Studio</h1>
                    <p className="text-slate-500">Turn scripts into engaging educational videos.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Panel: Configuration */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <LayoutTemplate className="w-5 h-5 text-brand-blue" />
                            Video Settings
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Aspect Ratio</label>
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    <button className="p-2 border border-brand-blue bg-blue-50 text-brand-blue rounded text-sm font-medium">16:9</button>
                                    <button className="p-2 border border-gray-200 rounded text-sm text-slate-600 hover:bg-gray-50">9:16</button>
                                    <button className="p-2 border border-gray-200 rounded text-sm text-slate-600 hover:bg-gray-50">1:1</button>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Voiceover Style</label>
                                <select className="w-full mt-2 p-2 border rounded bg-white text-sm">
                                    <option>Teacher Fatima (Warm, Encouraging)</option>
                                    <option>Brother Ahmed (Clear, Instructional)</option>
                                    <option>Child Narrator (Playful)</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Background Music</label>
                                <select className="w-full mt-2 p-2 border rounded bg-white text-sm">
                                    <option>Soft Nasheed (Vocals only)</option>
                                    <option>Nature Sounds</option>
                                    <option>None</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Mic className="w-5 h-5 text-brand-blue" />
                            Script Input
                        </h3>
                        <textarea
                            className="w-full h-40 p-3 border rounded-lg bg-gray-50 text-sm resize-none focus:ring-2 focus:ring-brand-blue outline-none"
                            placeholder="Paste your lesson script here..."
                            defaultValue="Assalamualaikum kids! Today we are going to learn about the Sunnah of eating. Did you know we use our right hand? Let's see how!"
                        ></textarea>
                        <button
                            onClick={startGeneration}
                            disabled={step !== 1}
                            className="w-full mt-4 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-lg shadow-blue-200 disabled:opacity-50"
                        >
                            Generate Video
                        </button>
                    </div>
                </div>

                {/* Right Panel: Preview */}
                <div className="lg:col-span-2">
                    <div className="bg-black aspect-video rounded-xl overflow-hidden relative group">
                        {step === 1 && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                                <Video className="w-16 h-16 mb-4 opacity-20" />
                                <p>Preview will appear here</p>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-10">
                                <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                                    <div className="h-full bg-brand-blue transition-all duration-150" style={{ width: `${progress}%` }}></div>
                                </div>
                                <p className="font-mono text-sm">Rendering Scene {Math.floor(progress / 20) + 1}/5...</p>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center relative">
                                {/* Mock Video Content */}
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform mb-4 mx-auto">
                                        <Play className="w-8 h-8 text-white ml-1" />
                                    </div>
                                    <h2 className="text-white font-bold text-xl drop-shadow-md">The Sunnah of Eating</h2>
                                    <p className="text-white/80 text-sm">02:15 • Generated successfully</p>
                                </div>

                                {/* Controls Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="h-1 bg-white/30 rounded-full mb-4">
                                        <div className="h-full w-1/3 bg-brand-gold"></div>
                                    </div>
                                    <div className="flex justify-between text-white text-xs font-mono">
                                        <span>00:00 / 02:15</span>
                                        <button className="hover:text-brand-gold">Download MP4</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
