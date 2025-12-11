import { Trash2, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

export default function ShoppingCart() {
    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/shop" className="font-bold text-2xl text-brand-blue tracking-tight">Brainy Store</Link>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Lock className="w-4 h-4" />
                        Secure Checkout
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart (2 Items)</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {[
                            { name: "Montessori Math Kit (L1)", price: 49.99, qty: 1, image: "bg-blue-100" },
                            { name: "Student Backpack (Red)", price: 29.99, qty: 1, image: "bg-red-100" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 flex gap-6 items-center">
                                <div className={`w-24 h-24 ${item.image} rounded-lg flex-shrink-0`}></div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                                    <p className="text-sm text-slate-500 mb-2">In Stock</p>
                                    <div className="flex items-center gap-4">
                                        <select className="p-1 border rounded bg-gray-50 text-sm">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                        <button className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1">
                                            <Trash2 className="w-4 h-4" /> Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-xl text-slate-900">${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                            <div className="space-y-3 pb-4 border-b border-gray-100">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span>$79.98</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-bold">Free</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Tax</span>
                                    <span>$4.00</span>
                                </div>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-slate-900 pt-4 mb-6">
                                <span>Total</span>
                                <span>$83.98</span>
                            </div>
                            <Link href="/shop/checkout">
                                <button className="w-full py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                                    Proceed to Checkout
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <p className="text-xs text-center text-slate-400 mt-4">
                                Secure payments powered by Stripe
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
