import Link from "next/link";
import { Award, CheckCircle, Download, Clock, XCircle } from "lucide-react";
import { MOCK_ISSUED_CERTIFICATES } from "@/lib/mock-db";

export default function CertificatesPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Certificate Registry</h1>
                    <p className="text-slate-500">Manage and verify issued certificates.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Award className="w-4 h-4" /> Issue New Certificate
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-slate-500">
                        <tr>
                            <th className="px-6 py-4 font-bold">Details</th>
                            <th className="px-6 py-4 font-bold">Certification</th>
                            <th className="px-6 py-4 font-bold">Date Issued</th>
                            <th className="px-6 py-4 font-bold">Status</th>
                            <th className="px-6 py-4 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_ISSUED_CERTIFICATES.map((cert) => (
                            <tr key={cert.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-bold text-slate-800">{cert.recipient}</p>
                                        <p className="text-xs text-slate-500">{cert.id}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {cert.type}
                                    <span className="block text-xs text-slate-400">by {cert.issuer}</span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {cert.date}
                                </td>
                                <td className="px-6 py-4">
                                    {cert.status === 'Active' ? (
                                        <span className="flex items-center gap-1 text-xs font-bold text-green-600">
                                            <CheckCircle className="w-4 h-4" /> Active
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-xs font-bold text-red-500">
                                            <XCircle className="w-4 h-4" /> Expired
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-gray-200 rounded-lg text-slate-400" title="Download PDF">
                                        <Download className="w-4 h-4" />
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
