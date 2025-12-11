"use client";

import { useState } from "react";
import { Video, FileQuestion } from "lucide-react";
import { AIToolForm } from "@/components/ai/AIToolForm";

export default function FranchisorAIEvaluationPage() {
    const [activeTab, setActiveTab] = useState<"feedback" | "quiz">("feedback");

    return (
        <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">AI Evaluation Tools</h1>
                    <p className="text-slate-500">Streamline assessments and feedback.</p>
                </div>
            </div>

            <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl w-fit">
                <button onClick={() => setActiveTab("feedback")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "feedback" ? "bg-white text-brand-blue shadow-sm" : "text-slate-500"}`}>
                    <Video className="w-4 h-4" /> Submission Feedback
                </button>
                <button onClick={() => setActiveTab("quiz")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "quiz" ? "bg-white text-brand-blue shadow-sm" : "text-slate-500"}`}>
                    <FileQuestion className="w-4 h-4" /> Auto-Assessment
                </button>
            </div>

            <div className="flex-1 min-h-0">
                {activeTab === "feedback" && (
                    <AIToolForm
                        title="Practical Submission Feedback"
                        description="Generate detailed feedback for teacher demonstrations."
                        promptKey="SUBMISSION_FEEDBACK"
                        fields={[
                            { key: "MODULE", label: "Module Name", type: "text", placeholder: "EPL" },
                            { key: "LESSON", label: "Lesson Presented", type: "text", placeholder: "Using a Spoon" },
                            { key: "NOTES", label: "Evaluator Notes", type: "textarea", placeholder: "Good grip, but forgot to check posture..." },
                        ]}
                    />
                )}

                {activeTab === "quiz" && (
                    <AIToolForm
                        title="Auto-Assessment Designer"
                        description="Create quizzes and rubrics from lesson content."
                        promptKey="AUTO_ASSESSMENT"
                        fields={[
                            { key: "LESSON_CONTENT", label: "Lesson Summary / Content", type: "textarea", placeholder: "Paste lesson text here..." },
                        ]}
                    />
                )}
            </div>
        </div>
    );
}
