import Link from "next/link";
import { Mail, Search, Star, Archive, MoreHorizontal, Send } from "lucide-react";
import { MOCK_MESSAGES } from "@/lib/mock-db";

export default function MessagesPage() {
    return (
        <div className="h-[calc(100vh-140px)] flex flex-col md:flex-row bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Sidebar List */}
            <div className="w-full md:w-80 border-r border-gray-100 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                    <button className="w-full bg-brand-blue text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" /> Compose
                    </button>
                </div>

                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {MOCK_MESSAGES.map((msg) => (
                        <div key={msg.id} className={`p-4 border-b border-gray-50 hover:bg-blue-50 cursor-pointer transition-colors ${!msg.read ? 'bg-blue-50/50' : ''}`}>
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`text-sm ${!msg.read ? 'font-bold text-slate-800' : 'font-medium text-slate-600'}`}>{msg.from}</h4>
                                <span className="text-xs text-slate-400">{msg.date}</span>
                            </div>
                            <p className={`text-sm mb-1 ${!msg.read ? 'font-bold text-slate-800' : 'text-slate-600'}`}>{msg.subject}</p>
                            <p className="text-xs text-slate-500 line-clamp-1">{msg.body}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conversation View */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg">Mrs. Siddiqui (Parent)</h3>
                        <p className="text-xs text-slate-500">Re: Omar's Progress</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg text-slate-400">
                            <Star className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg text-slate-400">
                            <Archive className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg text-slate-400">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Messages Body */}
                <div className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">S</div>
                        <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm max-w-[80%]">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Hi, I wanted to ask about Omar's recent reading progress. I noticed he is struggling a bit with phonics at home.
                            </p>
                            <span className="text-xs text-slate-400 mt-2 block">Feb 15, 10:30 AM</span>
                        </div>
                    </div>

                    <div className="flex gap-4 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold flex-shrink-0">Me</div>
                        <div className="bg-brand-blue/10 p-4 rounded-xl rounded-tr-none max-w-[80%]">
                            <p className="text-sm text-brand-blue font-medium leading-relaxed">
                                Salam Mrs. Siddiqui, thank you for reaching out. Omar is actually doing quite well with the sandpaper letters. We are focusing on 's', 'm', and 't' sounds this week.
                            </p>
                            <span className="text-xs text-blue-300 mt-2 block">Feb 15, 11:15 AM</span>
                        </div>
                    </div>
                </div>

                {/* Reply Box */}
                <div className="p-4 border-t border-gray-100 bg-white">
                    <div className="relative">
                        <textarea
                            placeholder="Type your reply..."
                            className="w-full bg-gray-50 rounded-xl p-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue resize-none h-24"
                        ></textarea>
                        <button className="absolute bottom-3 right-3 p-2 bg-brand-blue text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
