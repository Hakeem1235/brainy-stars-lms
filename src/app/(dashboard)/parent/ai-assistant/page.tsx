"use client";

import { useState } from "react";
import { Heart, Home } from "lucide-react";
import { AIToolForm } from "@/components/ai/AIToolForm";

export default function ParentAIAssistantPage() {
    const [activeTab, setActiveTab] = useState<"parenting" | "activity">("parenting");

    return (
        <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">My AI Assistant</h1>
                    <p className="text-slate-500">Expert guidance for your parenting journey.</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl w-fit">
                <button
                    onClick={() => setActiveTab("parenting")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "parenting" ? "bg-white text-brand-blue shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                    <Heart className="w-4 h-4" />
                    Parenting Coach
                </button>
                <button
                    onClick={() => setActiveTab("activity")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "activity" ? "bg-white text-brand-blue shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                    <Home className="w-4 h-4" />
                    Home Activities
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-0">
                {activeTab === "parenting" && (
                    <AIToolForm
                        title="Islamic Montessori Parenting Coach"
                        description="Get supportive, faith-based advice for parenting challenges."
                        promptKey="PARENTING_ASSISTANT"
                        fields={[
                            { key: "AGE", label: "Child Age", type: "text", placeholder: "e.g., 4 years" },
                            { key: "QUESTION", label: "Your Question / Challenge", type: "textarea", placeholder: "e.g., My child refuses to share toys..." },
                        ]}
                    />
                )}

                {activeTab === "activity" && (
                    <AIToolForm
                        title="Home Activity Generator"
                        description="Discover simple, educational activities to do at home."
                        promptKey="HOME_ACTIVITY"
                        fields={[
                            { key: "AGE", label: "Child Age", type: "text", placeholder: "e.g., 3 years" },
                            { key: "SKILL", label: "Skill Focus", type: "select", options: ["EPL", "Language", "Math", "Self-Regulation", "Manners"] },
                        ]}
                    />
                )}
            </div>
        </div>
    );
}
