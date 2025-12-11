import Link from "next/link";
import { Mail, Search, Star, Archive, MoreHorizontal, Send } from "lucide-react";
import { MOCK_MESSAGES, MOCK_USERS } from "@/lib/mock-db";

export default function ParentMessagesPage() {
    // Parent view usually has fewer threads (Teachers, Admin)
    const myMessages = MOCK_MESSAGES; // In prototype, showing same shared messages but contextually

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col md:flex-row bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Sidebar List */}
            <div className="w-full md:w-80 border-r border-gray-100 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                    <button className="w-full bg-brand-blue text-white py-2.5 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" /> New Message
                    </button>
                </div>

                <div className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="p-4 border-b border-gray-50 bg-blue-50/50 cursor-pointer transition-colors border-l-4 border-l-brand-blue">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-slate-800">Fatima Teacher</h4>
                            <span className="text-xs text-slate-400">11:15 AM</span>
                        </div>
                        <p className="text-sm mb-1 font-bold text-slate-800">Re: Omar's Progress</p>
                        <p className="text-xs text-slate-500 line-clamp-1">Salam Mrs. Siddiqui, thank you for reaching out...</p>
                    </div>
                    <div className="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-medium text-slate-600">Admin Office</h4>
                            <span className="text-xs text-slate-400">Yesterday</span>
                        </div>
                        <p className="text-sm mb-1 text-slate-600">Fee Reminder</p>
                        <p className="text-xs text-slate-500 line-clamp-1">Dear Parent, this is a reminder regarding...</p>
                    </div>
                </div>
            </div>

            {/* Conversation View */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg">Fatima Teacher</h3>
                        <p className="text-xs text-slate-500">LKG - A Class Teacher</p>
                    </div>
                </div>

                {/* Messages Body */}
                <div className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-6">
                    <div className="flex gap-4 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">Me</div>
                        <div className="bg-pink-100 p-4 rounded-xl rounded-tr-none shadow-sm max-w-[80%]">
                            <p className="text-sm text-pink-900 leading-relaxed">
                                Hi, I wanted to ask about Omar's recent reading progress. I noticed he is struggling a bit with phonics at home.
                            </p>
                            <span className="text-xs text-pink-700 mt-2 block">Feb 15, 10:30 AM</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold flex-shrink-0">FT</div>
                        <div className="bg-white p-4 rounded-xl rounded-tl-none border border-gray-100 shadow-sm max-w-[80%]">
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                Salam Mrs. Siddiqui, thank you for reaching out. Omar is actually doing quite well with the sandpaper letters. We are focusing on 's', 'm', and 't' sounds this week.
                            </p>
                            <span className="text-xs text-slate-400 mt-2 block">Feb 15, 11:15 AM</span>
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
