import { MOCK_FRANCHISES, MOCK_TEACHERS_DIRECTORY, MOCK_SUBMISSIONS } from "@/lib/mock-db";
import { MapPin, Phone, Mail, Users, Award, BookOpen, Clock } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function FranchiseDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const franchise = MOCK_FRANCHISES.find(f => f.id === id) || MOCK_FRANCHISES[0];
    const teachers = MOCK_TEACHERS_DIRECTORY.filter(t => t.franchise === franchise.name);
    const submissions = MOCK_SUBMISSIONS.filter(s => s.franchise === franchise.name);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl font-bold text-slate-800">{franchise.name}</h1>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${franchise.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {franchise.active ? 'Active' : 'Inactive'}
                            </span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {franchise.city}, {franchise.region}
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                {franchise.teachers} Teachers
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                +91 98765 43210
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                contact@{franchise.name.toLowerCase().replace(/\s+/g, '')}.com
                            </div>
                        </div>
                    </div>
                    <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50">
                        Edit Details
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Staff Training</h3>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-slate-800">5/12</span>
                        <span className="text-sm text-green-600 font-bold mb-1">42% Certified</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Pending Actions</h3>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-slate-800">3</span>
                        <span className="text-sm text-orange-600 font-bold mb-1">Submissions Review</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Student Count</h3>
                    <div className="flex items-end gap-3">
                        <span className="text-3xl font-bold text-slate-800">85</span>
                        <span className="text-sm text-blue-600 font-bold mb-1">Enrolled</span>
                    </div>
                </div>
            </div>

            {/* Tabs (Mock) & Content */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden min-h-[400px]">
                <div className="border-b border-gray-100 flex px-6">
                    <button className="px-4 py-3 text-sm font-bold text-brand-blue border-b-2 border-brand-blue">Teachers</button>
                    <button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-800">Training Matrix</button>
                    <button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-800">Submissions</button>
                </div>

                <div className="p-6">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-slate-500 font-semibold rounded-lg">
                            <tr>
                                <th className="px-4 py-3 rounded-l-lg">Teacher Name</th>
                                <th className="px-4 py-3">Certification</th>
                                <th className="px-4 py-3">Progress</th>
                                <th className="px-4 py-3 rounded-r-lg text-right">Last Active</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {teachers.length > 0 ? teachers.map(t => (
                                <tr key={t.id} className="hover:bg-slate-50">
                                    <td className="px-4 py-3 font-medium text-slate-800">{t.name}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${t.status === 'Certified' ? 'bg-green-100 text-green-700' :
                                            t.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                                'bg-gray-100 text-gray-500'
                                            }`}>
                                            {t.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="w-24 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-blue" style={{ width: `${t.progress}%` }}></div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right text-slate-500">{t.lastActive}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={4} className="px-4 py-8 text-center text-slate-400">No teachers found for this franchise in mock data.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
