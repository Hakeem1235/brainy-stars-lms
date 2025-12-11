import Link from "next/link";
import { Building, MapPin, Users, MoreHorizontal, Plus } from "lucide-react";
import { MOCK_FRANCHISES } from "@/lib/mock-db";

export default function FranchisesPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Franchises</h1>
                    <p className="text-slate-500">Manage all Brainy Stars branches.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add New Franchise
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-slate-500">
                        <tr>
                            <th className="px-6 py-4 font-bold">Branch Name</th>
                            <th className="px-6 py-4 font-bold">Location</th>
                            <th className="px-6 py-4 font-bold">Teachers</th>
                            <th className="px-6 py-4 font-bold">Status</th>
                            <th className="px-6 py-4 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {MOCK_FRANCHISES.map((fr) => (
                            <tr key={fr.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center">
                                            <Building className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800">{fr.name}</p>
                                            <p className="text-xs text-slate-400">ID: {fr.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        {fr.city}, {fr.region}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        {fr.teachers} Staff
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {fr.active ? (
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Active</span>
                                    ) : (
                                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">Inactive</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-gray-200 rounded-lg text-slate-400">
                                        <MoreHorizontal className="w-4 h-4" />
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
