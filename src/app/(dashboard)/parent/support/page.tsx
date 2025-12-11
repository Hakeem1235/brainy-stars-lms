import Link from "next/link";
import { MessageCircle, FileQuestion, Mail, Phone, MapPin } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center py-8">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Parent Support</h1>
                <p className="text-slate-500">Contact the school administration or find answers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-50 text-brand-blue rounded-lg">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">School Address</h4>
                                <p className="text-slate-500 text-sm">Brainy Stars Jayanagar Branch<br />#123, 4th Main, 5th Block, Bangalore.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">Phone</h4>
                                <p className="text-slate-500 text-sm">+91 9876543210 (Admin)<br />+91 9876543211 (Transport)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">Email</h4>
                                <p className="text-slate-500 text-sm">jayanagar@brainystars.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-brand-blue">
                                <option>General Inquiry</option>
                                <option>Fee Issue</option>
                                <option>Transport Issue</option>
                                <option>Complaint</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 h-32 resize-none focus:outline-none focus:border-brand-blue"
                                placeholder="Describe your issue..."
                            ></textarea>
                        </div>
                        <button className="w-full bg-brand-blue text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors">
                            Submit Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
