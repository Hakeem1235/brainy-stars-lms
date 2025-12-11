import { MOCK_TEACHERS_DIRECTORY } from "@/lib/mock-db";
import { Plus, Search, Filter, MoreHorizontal, Mail, GraduationCap } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function FranchiseeTeachersPage() {
    // Filter to only show teachers for this mock franchisee
    const myTeachers = MOCK_TEACHERS_DIRECTORY.filter(t => t.franchise === 'Brainy Stars Jayanagar');

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Teacher Management</h1>
                    <p className="text-slate-500">Manage staff roster and training assignments.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900 transition-colors">
                    <Plus className="w-4 h-4" />
                    Add New Teacher
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                </div>
                <div className="flex gap-4">
                    <select className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-slate-600 focus:outline-none bg-white">
                        <option>All Status</option>
                        <option>Certified</option>
                        <option>In Progress</option>
                        <option>Not Started</option>
                    </select>
                </div>
            </div>

            {/* Teacher Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-slate-500 font-semibold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Teacher Name</th>
                            <th className="px-6 py-4">Contact</th>
                            <th className="px-6 py-4">Training Status</th>
                            <th className="px-6 py-4">Modules Assigned</th>
                            <th className="px-6 py-4">Joined</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {myTeachers.length > 0 ? myTeachers.map((teacher) => (
                            <tr key={teacher.id} className="hover:bg-slate-50 group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                                            {teacher.name.charAt(0)}
                                        </div>
                                        <div>
                                            <Link href={`/franchisee/teachers/${teacher.id}`} className="font-bold text-slate-800 hover:text-brand-blue hover:underline">
                                                {teacher.name}
                                            </Link>
                                            <p className="text-xs text-slate-500">ID: {teacher.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-slate-600">
                                        <p className="flex items-center gap-1"><Mail className="w-3 h-3" /> {teacher.email}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{teacher.mobile}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${teacher.status === 'Certified' ? 'bg-green-100 text-green-700' :
                                            teacher.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                                teacher.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                                                    'bg-gray-100 text-gray-500'
                                        }`}>
                                        {teacher.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-blue" style={{ width: `${teacher.progress}%` }}></div>
                                        </div>
                                        <span className="text-xs font-bold text-slate-600">{teacher.progress}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    {teacher.joinDate}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-brand-blue p-1 rounded-full hover:bg-slate-100">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                                    No teachers found. Add your first teacher to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
