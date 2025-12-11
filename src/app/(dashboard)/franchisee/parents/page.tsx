import { MOCK_STUDENTS } from "@/lib/mock-db";
import { MessageCircle, Phone, Mail, User } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function FranchiseeParentsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Parent Engagement</h1>
                    <p className="text-slate-500">Directory of parent contacts and communication logs.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-slate-500 font-semibold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Parent Name</th>
                            <th className="px-6 py-4">Child Enrolled</th>
                            <th className="px-6 py-4">Contact Info</th>
                            <th className="px-6 py-4">Last Login</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_STUDENTS.map((student) => (
                            <tr key={student.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-slate-700">{student.parent}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-slate-600">{student.name}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-3 text-slate-400">
                                        <Phone className="w-4 h-4 hover:text-brand-blue cursor-pointer" />
                                        <Mail className="w-4 h-4 hover:text-brand-blue cursor-pointer" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    2 days ago
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-brand-blue border border-brand-blue px-3 py-1 rounded-lg text-xs font-bold hover:bg-blue-50 flex items-center gap-2 ml-auto">
                                        <MessageCircle className="w-3 h-3" /> Message
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
