import Link from "next/link";
import { User, Shield, Search, MoreHorizontal, Filter } from "lucide-react";
import { MOCK_TEACHERS_DIRECTORY, MOCK_USERS } from "@/lib/mock-db";

export default function UsersPage() {
    // Combine mock users into a single list for display
    const users = [
        ...MOCK_TEACHERS_DIRECTORY.map(t => ({ ...t, role: 'Teacher', avatar: `https://ui-avatars.com/api/?name=${t.name}&background=random` })),
        { id: MOCK_USERS.FRANCHISEE.id, name: MOCK_USERS.FRANCHISEE.name, email: MOCK_USERS.FRANCHISEE.email, role: 'Franchisee', status: 'Active', avatar: MOCK_USERS.FRANCHISEE.avatar },
        { id: MOCK_USERS.PARENT.id, name: MOCK_USERS.PARENT.name, email: MOCK_USERS.PARENT.email, role: 'Parent', status: 'Active', avatar: MOCK_USERS.PARENT.avatar }
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">User Management</h1>
                    <p className="text-slate-500">Overview of all system users.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg font-bold text-slate-600 hover:bg-gray-50 flex items-center gap-2">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <User className="w-4 h-4" /> Create User
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search users by name or email..."
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                        />
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-slate-500">
                        <tr>
                            <th className="px-6 py-4 font-bold">User</th>
                            <th className="px-6 py-4 font-bold">Role</th>
                            <th className="px-6 py-4 font-bold">Email</th>
                            <th className="px-6 py-4 font-bold">Status</th>
                            <th className="px-6 py-4 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {users.map((user, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                                            <img src={(user as any).avatar} alt={user.name} className="w-full h-full object-cover" />
                                        </div>
                                        <p className="font-bold text-slate-800">{user.name}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${user.role === 'Franchisee' ? 'bg-orange-100 text-orange-700' :
                                            user.role === 'Teacher' ? 'bg-blue-100 text-brand-blue' :
                                                'bg-purple-100 text-purple-700'
                                        }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Active</span>
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
                <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                    <button className="text-sm font-bold text-brand-blue hover:underline">View All Users</button>
                </div>
            </div>
        </div>
    );
}
