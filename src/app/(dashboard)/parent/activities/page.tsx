import Link from "next/link";
import { CheckCircle, Circle, Play, Upload, Clock, Award } from "lucide-react";
import { MOCK_HOME_ACTIVITIES } from "@/lib/mock-db";

export default function HomeActivitiesPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Home Activities</h1>
                    <p className="text-slate-500">Fun & educational tasks to do with your child at home.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_HOME_ACTIVITIES.map((act) => (
                    <div key={act.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
                        <div className="p-6 flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{act.title}</h3>
                                {act.status === 'Completed' ? (
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                ) : (
                                    <Circle className="w-6 h-6 text-gray-200" />
                                )}
                            </div>

                            <p className="text-slate-600 mb-6">{act.description}</p>

                            <div className="space-y-3">
                                {act.video && (
                                    <button className="w-full flex items-center justify-center gap-2 py-2 bg-blue-50 text-brand-blue rounded-lg font-bold text-sm hover:bg-blue-100 transition-colors">
                                        <Play className="w-4 h-4" /> Watch Demo Video
                                    </button>
                                )}

                                <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                                    <Clock className="w-3 h-3" /> Due: {act.due}
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                            {act.status === 'Pending' ? (
                                <button className="flex items-center gap-2 text-slate-600 font-bold text-sm hover:text-brand-blue">
                                    <Upload className="w-4 h-4" /> Upload Evidence
                                </button>
                            ) : (
                                <span className="text-green-600 font-bold text-sm flex items-center gap-1">
                                    <Award className="w-4 h-4" /> Earned {act.badge} Badge
                                </span>
                            )}

                            {act.status === 'Pending' && (
                                <button className="px-4 py-2 bg-brand-blue text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">
                                    Mark Complete
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
