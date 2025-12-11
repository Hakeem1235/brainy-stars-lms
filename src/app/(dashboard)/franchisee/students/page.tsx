import { MOCK_STUDENTS, MOCK_CLASSES } from "@/lib/mock-db";
import { Plus, Search, Filter, MoreHorizontal, User, GraduationCap } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function FranchiseeStudentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Student Directory</h1>
                    <p className="text-slate-500">Manage student enrollment and class mapping.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white border border-gray-200 text-slate-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50">
                        Import CSV
                    </button>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors">
                        <Plus className="w-4 h-4" />
                        Add Student
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search student name or parent..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                </div>
                <div className="flex gap-4">
                    <select className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-slate-600 focus:outline-none bg-white">
                        <option>All Classes</option>
                        <option>Nursery - A</option>
                        <option>LKG - B</option>
                        <option>UKG - A</option>
                    </select>
                </div>
            </div>

            {/* Student Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-slate-500 font-semibold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Student Name</th>
                            <th className="px-6 py-4">Class / Section</th>
                            <th className="px-6 py-4">Parent</th>
                            <th className="px-6 py-4">Attendance</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_STUDENTS.map((student) => {
                            const className = MOCK_CLASSES.find(c => c.id === student.classId)?.name || 'Unassigned';
                            return (
                                <tr key={student.id} className="hover:bg-slate-50 group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center font-bold text-purple-600 text-xs">
                                                {student.name.charAt(0)}
                                            </div>
                                            <Link href={`/franchisee/students/${student.id}`} className="font-bold text-slate-800 hover:text-brand-blue hover:underline">
                                                {student.name}
                                            </Link>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">{className}</span>
                                    </td>
                                    <td>
                                        <span className="text-slate-600">{student.parent}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold ${student.attendance >= 90 ? 'text-green-600' : 'text-orange-500'}`}>{student.attendance}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold">{student.status}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-brand-blue p-1 rounded-full hover:bg-slate-100">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
