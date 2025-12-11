import { MOCK_CLASSES, MOCK_TEACHERS_DIRECTORY, MOCK_STUDENTS } from "@/lib/mock-db";
import { Users, GraduationCap, MapPin, MoreHorizontal } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function ClassroomsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Classrooms</h1>
                    <p className="text-slate-500">Manage class assignments and teacher mapping.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors">
                    + Add New Class
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_CLASSES.map((cls) => {
                    const teacher = MOCK_TEACHERS_DIRECTORY.find(t => t.id === cls.teacherId);
                    const students = MOCK_STUDENTS.filter(s => s.classId === cls.id).length; // Mock count based on ID matching roughly

                    return (
                        <div key={cls.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative">
                            <button className="absolute top-4 right-4 text-slate-300 hover:text-slate-600">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 font-bold text-xl">
                                    {cls.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg">{cls.name}</h3>
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                        <MapPin className="w-3 h-3" />
                                        <span>Room {cls.room}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 uppercase">Teacher</p>
                                            <p className="font-bold text-slate-800 text-sm">{teacher ? teacher.name : "Unassigned"}</p>
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-brand-blue hover:underline">Change</button>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                            <GraduationCap className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 uppercase">Students</p>
                                            <p className="font-bold text-slate-800 text-sm">{cls.studentCount} Enrolled</p>
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-brand-blue hover:underline">View List</button>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-slate-400">
                                <span>85% Attendance Today</span>
                                <span className="flex items-center gap-1 font-bold text-green-600"><div className="w-2 h-2 bg-green-500 rounded-full" /> Active Session</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
