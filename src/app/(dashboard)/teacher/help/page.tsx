import Link from "next/link";
import { MessageCircle, FileQuestion, Book, ChevronRight } from "lucide-react";

export default function HelpPage() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center py-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">How can we help you?</h1>
                <p className="text-slate-500">Search for articles or contact support.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <Book className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Knowledge Base</h3>
                    <p className="text-sm text-slate-500 mb-4">Tutorials and guides on using the LMS.</p>
                    <button className="text-sm font-bold text-brand-blue hover:underline">Browse Articles</button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileQuestion className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">FAQs</h3>
                    <p className="text-sm text-slate-500 mb-4">Answers to common questions.</p>
                    <button className="text-sm font-bold text-brand-blue hover:underline">View FAQs</button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Contact Support</h3>
                    <p className="text-sm text-slate-500 mb-4">Get help with technical issues.</p>
                    <button className="text-sm font-bold text-brand-blue hover:underline">Open Ticket</button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-bold text-slate-800">Popular Articles</h3>
                </div>
                <div className="divide-y divide-gray-50">
                    <div className="p-4 flex justify-between items-center hover:bg-slate-50 cursor-pointer">
                        <span className="text-slate-600 text-sm">How to upload a practical submission?</span>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                    </div>
                    <div className="p-4 flex justify-between items-center hover:bg-slate-50 cursor-pointer">
                        <span className="text-slate-600 text-sm">Resetting your password</span>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                    </div>
                    <div className="p-4 flex justify-between items-center hover:bg-slate-50 cursor-pointer">
                        <span className="text-slate-600 text-sm">Understanding certification levels</span>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    );
}
