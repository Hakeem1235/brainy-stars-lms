import { Megaphone, Pin, Clock, Check } from "lucide-react";

export const dynamic = 'force-dynamic';

const MOCK_ANNOUNCEMENTS = [
    { id: 1, title: "Q3 Curriculum Update Released", type: "Urgent", date: "2 Hours Ago", read: false, content: "New Montessori guidelines for EPL section have been updated." },
    { id: 2, title: "Upcoming Regional Training Workshop", type: "Event", date: "1 Day Ago", read: true, content: "Mandatory attendance for all Lead Teachers on Saturday." },
    { id: 3, title: "Holiday Schedule - Eid ul Adha", type: "Notice", date: "3 Days Ago", read: true, content: "Branch closure dates approved from 16th to 19th." },
];

export default function FranchiseeAnnouncementsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Franchisor Announcements</h1>
                    <p className="text-slate-500">Official updates and notices from HQ.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    {MOCK_ANNOUNCEMENTS.map(ann => (
                        <div key={ann.id} className={`p-6 rounded-xl border shadow-sm transition-all hover:shadow-md cursor-pointer ${!ann.read ? 'bg-white border-brand-blue/30 ring-1 ring-brand-blue/10' : 'bg-white border-gray-100'
                            }`}>
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${ann.type === 'Urgent' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-brand-blue'
                                        }`}>
                                        <Megaphone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${!ann.read ? 'text-slate-900' : 'text-slate-700'}`}>
                                            {ann.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                                            <Clock className="w-3 h-3" /> {ann.date}
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            {ann.type}
                                        </div>
                                    </div>
                                </div>
                                {!ann.read && (
                                    <span className="flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-brand-blue opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue"></span>
                                    </span>
                                )}
                            </div>
                            <p className="text-slate-600 text-sm pl-[52px]">{ann.content}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-xl p-6 text-white">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                            <Pin className="w-4 h-4" /> Quick Tips
                        </h3>
                        <p className="text-blue-100 text-sm mb-4">
                            Ensure all teachers mark attendance before 9:30 AM daily to maintain accurate reporting metrics.
                        </p>
                        <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-sm font-bold transition-colors">
                            View Policy
                        </button>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <h4 className="font-bold text-slate-800 mb-4">Notification Preferences</h4>
                        <div className="space-y-3">
                            {['Urgent Alerts', 'Curriculum Updates', 'Events'].map(item => (
                                <div key={item} className="flex items-center justify-between">
                                    <span className="text-sm text-slate-600 font-medium">{item}</span>
                                    <div className="w-10 h-6 bg-brand-blue rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
