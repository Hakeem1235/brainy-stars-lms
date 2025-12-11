import Link from "next/link";
import { ClipboardList, Calendar, User } from "lucide-react";
import { MOCK_OBSERVATIONS, MOCK_USERS } from "@/lib/mock-db";

export default function ParentObservationsPage() {
    // Determine user (mock) and getting relevant observations
    const parent = MOCK_USERS.PARENT;
    const child = parent.children[0];
    const observations = MOCK_OBSERVATIONS.filter(obs => obs.studentId === child.id);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Teacher Observations</h1>
                    <p className="text-slate-500">Read reflections and notes from {child.name}'s teachers.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {observations.map((obs) => (
                    <div key={obs.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${obs.category === 'Sensorial' ? 'bg-purple-50 text-purple-600' :
                                        obs.category === 'Language' ? 'bg-blue-50 text-brand-blue' :
                                            obs.category === 'Social' ? 'bg-green-50 text-green-600' :
                                                'bg-orange-50 text-orange-600'
                                    }`}>
                                    {obs.category}
                                </span>
                                <div className="flex items-center gap-1 text-slate-400 text-xs">
                                    <Calendar className="w-3 h-3" /> {obs.date}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                                <User className="w-4 h-4 text-gray-400" /> {obs.teacher}
                            </div>
                        </div>
                        <p className="text-slate-800 text-base leading-relaxed pl-4 border-l-4 border-gray-100 italic">
                            "{obs.note}"
                        </p>
                    </div>
                ))}

                {observations.length === 0 && (
                    <div className="text-center py-12 text-slate-400 bg-white rounded-xl border border-dashed border-gray-200">
                        No observations recorded yet.
                    </div>
                )}
            </div>
        </div>
    );
}
