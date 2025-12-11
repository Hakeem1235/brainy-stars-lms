import { Building2, MapPin, Users, MoreVertical, Plus } from "lucide-react";

export default function FranchisesList() {
    const franchises = [
        { id: 1, name: "Brainy Stars Jayanagar", location: "Bangalore, KA", students: 120, teachers: 12, status: "Active" },
        { id: 2, name: "Brainy Stars Koramangala", location: "Bangalore, KA", students: 85, teachers: 9, status: "Active" },
        { id: 3, name: "Brainy Stars Mysore", location: "Mysore, KA", students: 45, teachers: 6, status: "Onboarding" },
        { id: 4, name: "Brainy Stars Hyderabad", location: "Hyderabad, TS", students: 150, teachers: 15, status: "Active" },
        { id: 5, name: "Brainy Stars Kochi", location: "Kochi, KL", students: 0, teachers: 2, status: "Inactive" },
    ];

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Network Management</h1>
                    <p className="text-slate-500">Overview of all franchise branches.</p>
                </div>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-900 transition-colors">
                    <Plus className="w-5 h-5" />
                    Add New Branch
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {franchises.map((branch) => (
                    <div key={branch.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg text-brand-blue">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <button className="text-slate-400 hover:text-slate-600">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className="font-bold text-lg text-slate-900 mb-1">{branch.name}</h3>
                        <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                            <MapPin className="w-4 h-4" />
                            {branch.location}
                        </div>

                        <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100 mb-4">
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-semibold">Students</p>
                                <p className="font-bold text-slate-700">{branch.students}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase font-semibold">Teachers</p>
                                <p className="font-bold text-slate-700">{branch.teachers}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${branch.status === 'Active' ? 'bg-green-100 text-green-700' :
                                    branch.status === 'Inactive' ? 'bg-red-100 text-red-700' :
                                        'bg-yellow-100 text-yellow-700'
                                }`}>
                                {branch.status}
                            </span>
                            <button className="text-sm font-bold text-brand-blue hover:underline">Manage</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
