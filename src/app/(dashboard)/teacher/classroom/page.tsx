import Link from "next/link";
import { Users, Lock, UserCheck, Activity } from "lucide-react";
import { MOCK_CLASSES, MOCK_STUDENTS, MOCK_USERS } from "@/lib/mock-db";

export default function ClassroomPage() {
    const teacher = MOCK_USERS.TEACHER;
    const isCertified = teacher.role === 'TEACHER'; // Mock logic: assume active teacher is Certified for demo, or we can toggle this.
    // Let's assume for this page we want to show the LOCKED state if they were just a trainee.
    // For the "Teacher Portal" requirement, let's show the UNLOCKED state but maybe with a banner.

    // In a real app, strict role check:
    // if (!isCertified) return <LockedView />

    const myClass = MOCK_CLASSES.find(c => c.teacherId === teacher.id) || MOCK_CLASSES[0];
    const students = MOCK_STUDENTS.filter(s => s.classId === myClass.id);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">My Classroom</h1>
                    <p className="text-slate-500">Manage your students, attendance, and progress.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm font-bold text-slate-700">
                    {myClass.name} • {students.length} Students
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-bold text-slate-700">Student Name</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Attendance</th>
                            <th className="px-6 py-4 font-bold text-slate-700">Status</th>
                            <th className="px-6 py-4 font-bold text-slate-700 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {students.map((student) => (
                            <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                                            {student.name.charAt(0)}
                                        </div>
                                        <div className="font-bold text-slate-800">{student.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 bg-gray-100 rounded-full h-2">
                                            <div className={`h-2 rounded-full ${student.attendance >= 90 ? 'bg-green-500' : 'bg-orange-500'}`} style={{ width: `${student.attendance}%` }}></div>
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">{student.attendance}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-bold uppercase">{student.status}</span>
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-3">
                                    <button className="text-sm font-bold text-slate-500 hover:text-brand-blue flex items-center gap-1">
                                        <Activity className="w-4 h-4" /> Log Observation
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {!isCertified && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Classroom Access Locked</h2>
                        <p className="text-slate-500 mb-6">You must complete your <strong>Diploma in Islamic Montessori Education</strong> certification to access student management tools.</p>
                        <Link href="/teacher/certifications" className="block w-full bg-brand-blue text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
                            Complete Certification
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
