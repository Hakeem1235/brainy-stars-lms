"use client";

import { useState } from "react";
import { BookOpen, Eye, Mic, Award } from "lucide-react";
import { AIToolForm, AIField } from "@/components/ai/AIToolForm";

export default function TeacherAIToolsPage() {
    const [activeTab, setActiveTab] = useState<"lesson" | "observation" | "lsrw" | "career">("lesson");

    const tools = [
        { id: "lesson", label: "Lesson Planner", icon: BookOpen },
        { id: "observation", label: "Observation Assistant", icon: Eye },
        { id: "lsrw", label: "LSRW Assessment", icon: Mic },
        { id: "career", label: "Career Advisor", icon: Award },
    ] as const;

    return (
        <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">AI Teacher Assistants</h1>
                    <p className="text-slate-500">Intelligent tools to enhance your teaching practice.</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl w-fit">
                {tools.map((tool) => (
                    <button
                        key={tool.id}
                        onClick={() => setActiveTab(tool.id)}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                            ${activeTab === tool.id
                                ? "bg-white text-brand-blue shadow-sm"
                                : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}
                        `}
                    >
                        <tool.icon className="w-4 h-4" />
                        {tool.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-0">
                {activeTab === "lesson" && (
                    <AIToolForm
                        title="Lesson Plan Generator"
                        description="Create a structured, Montessori-compliant lesson with Islamic integration."
                        promptKey="LESSON_PLAN"
                        fields={[
                            { key: "AGE", label: "Child Age", type: "text", placeholder: "e.g., 4 years" },
                            { key: "ENVIRONMENT", label: "Environment Area", type: "select", options: ["EPL", "Sensorial", "Math", "Language", "Culture"] },
                            { key: "OBJECTIVE", label: "Learning Objective", type: "text", placeholder: "e.g., Counting 1-10" },
                            { key: "MATERIALS", label: "Available Materials", type: "text", placeholder: "e.g., Number Rods" },
                            { key: "TIME", label: "Time Available", type: "text", placeholder: "e.g., 15 mins" },
                        ]}
                    />
                )}

                {activeTab === "observation" && (
                    <AIToolForm
                        title="Observation Assistant"
                        description="Convert raw notes into structured Montessori observation records."
                        promptKey="OBSERVATION_ASSISTANT"
                        fields={[
                            { key: "AGE", label: "Child Age", type: "text", placeholder: "e.g., 3.5 years" },
                            { key: "CATEGORY", label: "Category", type: "select", options: ["Language", "Practical Life", "Sensorial", "Math", "Social"] },
                            { key: "RAW_NOTE", label: "Your Rough Notes", type: "textarea", placeholder: "e.g., Child kept dropping the pink tower block..." },
                        ]}
                    />
                )}

                {activeTab === "lsrw" && (
                    <AIToolForm
                        title="LSRW Child Assessment"
                        description="Analyze child communication skills from transcripts."
                        promptKey="LSRW_ASSESSMENT"
                        fields={[
                            { key: "AGE", label: "Child Age", type: "text", placeholder: "e.g., 5 years" },
                            { key: "TEXT", label: "Audio Transcript / Speech Sample", type: "textarea", placeholder: "Type what the child said..." },
                        ]}
                    />
                )}

                {activeTab === "career" && (
                    <AIToolForm
                        title="Certificate Advisor"
                        description="Get career guidance based on your current progress."
                        promptKey="CERTIFICATE_ADVISOR"
                        fields={[
                            { key: "EXP", label: "Years of Experience", type: "number", placeholder: "e.g., 2" },
                            { key: "MODULES", label: "Completed Modules", type: "text", placeholder: "e.g., EPL, Sensorial" },
                            { key: "AREAS", label: "Areas of Interest", type: "text", placeholder: "e.g., Special Needs, Leadership" },
                        ]}
                    />
                )}
            </div>
        </div>
    );
}
