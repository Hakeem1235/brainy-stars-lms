"use client";

import { useState } from "react";
import { ShieldCheck, TrendingUp } from "lucide-react";
import { AIToolForm } from "@/components/ai/AIToolForm";

export default function FranchiseeAIAnalyticsPage() {
    const [activeTab, setActiveTab] = useState<"compliance" | "readiness">("compliance");

    return (
        <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">AI Branch Analytics</h1>
                    <p className="text-slate-500">Monitor compliance and teacher readiness.</p>
                </div>
            </div>

            <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl w-fit">
                <button onClick={() => setActiveTab("compliance")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "compliance" ? "bg-white text-brand-blue shadow-sm" : "text-slate-500"}`}>
                    <ShieldCheck className="w-4 h-4" /> Compliance Monitor
                </button>
                <button onClick={() => setActiveTab("readiness")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "readiness" ? "bg-white text-brand-blue shadow-sm" : "text-slate-500"}`}>
                    <TrendingUp className="w-4 h-4" /> Teacher Readiness
                </button>
            </div>

            <div className="flex-1 min-h-0">
                {activeTab === "compliance" && (
                    <AIToolForm
                        title="Compliance Monitor"
                        description="Audit your branch status and get corrective actions."
                        promptKey="COMPLIANCE_MONITOR"
                        fields={[
                            { key: "TEACHERS", label: "Total Teachers", type: "number", placeholder: "10" },
                            { key: "CERTIFIED", label: "Certified Teachers", type: "number", placeholder: "4" },
                            { key: "PENDING", label: "Pending Submissions", type: "number", placeholder: "12" },
                            { key: "AVG_COMPLETION", label: "Avg Module Completion %", type: "number", placeholder: "65" },
                        ]}
                    />
                )}

                {activeTab === "readiness" && (
                    <AIToolForm
                        title="Teacher Readiness Scoring"
                        description="Evaluate individual teacher potential and risks."
                        promptKey="TEACHER_READINESS"
                        fields={[
                            { key: "MODULE_PERCENT", label: "Modules Completed %", type: "number", placeholder: "80" },
                            { key: "SUBMISSIONS", label: "Approved Submissions", type: "number", placeholder: "5" },
                            { key: "AVG_SCORE", label: "Exam Average", type: "number", placeholder: "92" },
                            { key: "FREQUENCY", label: "Login Frequency", type: "select", options: ["Daily", "Weekly", "Rarely"] },
                            { key: "OBSERVATIONS", label: "Performance Notes", type: "textarea", placeholder: "Good engagement..." },
                        ]}
                    />
                )}
            </div>
        </div>
    );
}
