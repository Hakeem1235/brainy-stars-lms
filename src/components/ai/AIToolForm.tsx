"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Loader2, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateAIResponse } from "@/actions/ai-actions";
import { PromptKey } from "@/lib/prompts";

export interface AIField {
    key: string;
    label: string;
    type: "text" | "textarea" | "select" | "number";
    options?: string[]; // For select type
    placeholder?: string;
}

interface AIToolFormProps {
    title: string;
    description: string;
    promptKey: PromptKey;
    fields: AIField[];
    initialData?: Record<string, string>;
}

export function AIToolForm({ title, description, promptKey, fields, initialData = {} }: AIToolFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>(initialData);
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const response = await generateAIResponse(promptKey, formData);
            setResult(response);
        } catch (error) {
            console.error("Error:", error);
            setResult("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* Input Form */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-brand-gold" />
                        {title}
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">{description}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 flex-1 overflow-y-auto pr-2">
                    {fields.map((field) => (
                        <div key={field.key}>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">
                                {field.label}
                            </label>
                            {field.type === "textarea" ? (
                                <textarea
                                    required
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-brand-blue/20 focus:outline-none min-h-[100px]"
                                    placeholder={field.placeholder}
                                    value={formData[field.key] || ""}
                                    onChange={(e) => handleChange(field.key, e.target.value)}
                                />
                            ) : field.type === "select" ? (
                                <select
                                    required
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
                                    value={formData[field.key] || ""}
                                    onChange={(e) => handleChange(field.key, e.target.value)}
                                >
                                    <option value="">Select an option</option>
                                    {field.options?.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    required
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
                                    placeholder={field.placeholder}
                                    value={formData[field.key] || ""}
                                    onChange={(e) => handleChange(field.key, e.target.value)}
                                />
                            )}
                        </div>
                    ))}

                    <div className="pt-4">
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-blue hover:bg-brand-blue/90"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Generating...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Generate Response
                                </div>
                            )}
                        </Button>
                    </div>
                </form>
            </div>

            {/* Output Display */}
            <div className="bg-slate-50 rounded-xl border border-gray-200 p-6 flex flex-col h-full overflow-hidden">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Send className="w-4 h-4 text-slate-400" />
                    AI Result
                </h3>

                <div className="flex-1 overflow-y-auto bg-white rounded-lg border border-gray-200 p-6 shadow-sm prose prose-sm max-w-none text-slate-700">
                    {loading ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                            <Sparkles className="w-12 h-12 animate-pulse text-brand-gold/50" />
                            <p className="animate-pulse">Consulting the AI knowledge base...</p>
                        </div>
                    ) : result ? (
                        <ReactMarkdown>{result}</ReactMarkdown>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400">
                            <p>Fill out the form and click generate to see the results here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
