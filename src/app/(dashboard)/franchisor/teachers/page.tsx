import { Search, Filter, Mail, Phone, MoreHorizontal } from "lucide-react";

export default function AllTeachers() {
    const teachers = [
        { id: 1, name: "Fatima Ahmed", branch: "Jayanagar", subject: "Montessori L1", status: "Certified", email: "fatima@brainystars.com" },
        { id: 2, name: "Sarah Khan", branch: "Koramangala", subject: "Islamic Studies", status: "Training", email: "sarah@brainystars.com" },
        { id: 3, name: "Ayesha Siddiqui", branch: "Hyderabad", subject: "English", status: "Certified", email: "ayesha@brainystars.com" },
        { id: 4, name: "Zainab Ali", branch: "Mysore", subject: "Math", status: "Pending", email: "zainab@brainystars.com" },
        { id: 5, name: "Mariam Yusra", branch: "Jayanagar", subject: "Science", status: "Certified", email: "mariam@brainystars.com" },
    ];

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Teacher Registry</h1>
                    <p className="text-slate-500">Manage all educators across the network.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold">
                        Add Teacher
                    </button>
                </div>
            </header>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Search Bar */}
                <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center gap-3">
                    <Search className="w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search teachers by name, branch, or email..."
                        className="bg-transparent border-none outline-none flex-1 text-sm"
                    />
                </div>

                <table className="w-full text-left">
                    <thead className="bg-white border-b border-gray-200">
                        <tr>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Teacher Name</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Branch</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Subject/Role</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Status</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Contact</th>
                            <th className="p-4 font-semibold text-slate-600 text-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {teachers.map((t) => (
                            <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-slate-900">{t.name}</td>
                                <td className="p-4 text-sm text-slate-600">{t.branch}</td>
                                <td className="p-4 text-sm text-slate-600">{t.subject}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${t.status === 'Certified' ? 'bg-green-100 text-green-700' :
                                            t.status === 'Training' ? 'bg-blue-100 text-blue-700' :
                                                'bg-gray-100 text-gray-700'
                                        }`}>
                                        {t.status}
                                    </span>
                                </td>
                                <td className="p-4 flex gap-2">
                                    <button className="p-2 text-slate-400 hover:text-brand-blue hover:bg-blue-50 rounded"><Mail className="w-4 h-4" /></button>
                                    <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded"><Phone className="w-4 h-4" /></button>
                                </td>
                                <td className="p-4">
                                    <button className="text-slate-400 hover:text-slate-600">
                                        <MoreHorizontal className="w-5 h-5" />
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
