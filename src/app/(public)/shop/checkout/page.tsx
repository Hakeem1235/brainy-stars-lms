"use client";

import { CheckCircle, ShieldCheck, CreditCard, Truck, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
    const [isOrdered, setIsOrdered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            setIsOrdered(true);
        }, 1500);
    };

    if (isOrdered) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center space-y-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 mb-2">Order Confirmed!</h1>
                        <p className="text-slate-500">Thank you for your purchase. Your order <span className="font-bold text-slate-800">#ORD-2024-883</span> has been placed successfully.</p>
                    </div>
                    <div className="border-t border-gray-100 pt-6">
                        <p className="text-sm text-slate-400 mb-6">A confirmation email has been sent to your registered email address.</p>
                        <Link href="/shop" className="block w-full py-3 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-900 transition-colors shadow-lg shadow-blue-200">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/shop/cart" className="flex items-center gap-2 text-slate-600 hover:text-brand-blue transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back to Cart</span>
                    </Link>
                    <div className="font-bold text-xl text-slate-800">Secure Checkout</div>
                    <div className="w-20"></div> {/* Spacer for center alignment */}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Shipping Address */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-4">
                                <Truck className="w-5 h-5 text-brand-blue" />
                                Shipping Address
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="Ismail Ahmed" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Address Line 1</label>
                                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="123, Green Street" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="Bangalore" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">ZIP Code</label>
                                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="560001" />
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-4">
                                <CreditCard className="w-5 h-5 text-brand-blue" />
                                Payment Details
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 border border-blue-100 bg-blue-50 rounded-lg">
                                    <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0" />
                                    <p className="text-sm text-blue-800">Payments are secure and encrypted. We do not store your credit card details.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
                                        <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="MM/YY" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                                        <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="123" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                            <h3 className="font-bold text-lg mb-4 text-slate-800">Order Summary</h3>

                            {/* Items List */}
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 bg-blue-100 rounded-md"></div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Montessori Math Kit</p>
                                            <p className="text-xs text-slate-500">Qty: 1</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-slate-800">$49.99</p>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 bg-red-100 rounded-md"></div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800">Student Backpack</p>
                                            <p className="text-xs text-slate-500">Qty: 1</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-slate-800">$29.99</p>
                                </div>
                            </div>

                            {/* Totals */}
                            <div className="space-y-3 pb-4 border-t border-b border-gray-100 py-4">
                                <div className="flex justify-between text-slate-600 text-sm">
                                    <span>Subtotal</span>
                                    <span>$79.98</span>
                                </div>
                                <div className="flex justify-between text-slate-600 text-sm">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-bold">Free</span>
                                </div>
                                <div className="flex justify-between text-slate-600 text-sm">
                                    <span>Tax</span>
                                    <span>$4.00</span>
                                </div>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-slate-900 pt-4 mb-6">
                                <span>Total</span>
                                <span>$83.98</span>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-4 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200 ${isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-blue hover:bg-blue-900'}`}
                            >
                                {isLoading ? 'Processing...' : 'Place Order'}
                                {!isLoading && <ArrowRight className="w-5 h-5" />}
                            </button>

                            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                                <ShieldCheck className="w-3 h-3" />
                                100% Secure Transaction
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}
