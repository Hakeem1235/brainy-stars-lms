import { MOCK_CERTIFICATIONS } from "@/lib/mock-db";
import { GraduationCap, Award, Printer, Search } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function CertificationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Certifications</h1>
                    <p className="text-slate-500">Issue and manage teacher certificates.</p>
                </div>
            </div>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MOCK_CERTIFICATIONS.map((cert: any) => (
                    <div key={cert.id} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Award className="w-24 h-24" />
                        </div>
                        <h3 className="font-bold text-lg mb-1 relative z-10">{cert.title}</h3>
                        <div className="flex items-end gap-2 mt-4 relative z-10">
                            <span className="text-4xl font-bold">{cert.candidates}</span>
                            <span className="text-sm text-slate-300 mb-1">Eligible Candidates</span>
                        </div>
                        <button className="mt-6 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-bold transition-colors">
                            View Candidates
                        </button>
                    </div>
                ))}
            </div>

            {/* Candidate List (Mock) */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h3 className="font-bold text-slate-800">Ready for Issuance</h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                        <input type="text" placeholder="Search teacher..." className="pl-9 pr-3 py-1.5 text-xs rounded-md border border-gray-200 focus:outline-none" />
                    </div>
                </div>
                <table className="w-full text-left text-sm">
                    <thead className="bg-white text-slate-500 font-semibold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Teacher Name</th>
                            <th className="px-6 py-4">Branch</th>
                            <th className="px-6 py-4">Program</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        <tr className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-bold text-slate-800">Aisha Educator</td>
                            <td className="px-6 py-4 text-slate-500">Brainy Stars Indiranagar</td>
                            <td className="px-6 py-4 text-slate-600">Certified Montessori Directress</td>
                            <td className="px-6 py-4"><span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold">Passed</span></td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-xs bg-brand-gold text-white px-3 py-1.5 rounded font-bold hover:bg-yellow-600 shadow-sm flex items-center gap-1 ml-auto">
                                    <Printer className="w-3 h-3" /> Issue
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-bold text-slate-800">Yasmin Ali</td>
                            <td className="px-6 py-4 text-slate-500">Brainy Stars Mysore</td>
                            <td className="px-6 py-4 text-slate-600">Certified Montessori Assistant</td>
                            <td className="px-6 py-4"><span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold">Passed</span></td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-xs bg-brand-gold text-white px-3 py-1.5 rounded font-bold hover:bg-yellow-600 shadow-sm flex items-center gap-1 ml-auto">
                                    <Printer className="w-3 h-3" /> Issue
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
