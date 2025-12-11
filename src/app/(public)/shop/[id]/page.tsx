import { Star, ShoppingCart, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/shop" className="flex items-center gap-2 text-slate-600 hover:text-brand-blue">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back to Shop</span>
                    </Link>
                    <Link href="/shop/cart" className="relative p-2 text-slate-600 hover:text-brand-blue transition-colors">
                        <ShoppingCart className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Image Gallery */}
                        <div className="bg-gray-100 p-8 flex flex-col items-center justify-center border-r border-gray-200">
                            <div className="w-full aspect-square bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                                <span className="text-slate-300 font-bold text-2xl">Product Image Mock</span>
                            </div>
                            <div className="flex gap-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-20 h-20 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-brand-blue"></div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-8 lg:p-12">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide">Best Seller</span>
                                <span className="text-slate-400 text-sm">SKU: BS-MATH-001</span>
                            </div>

                            <h1 className="text-3xl font-bold text-slate-900 mb-2">Montessori Math Kit (Level 1)</h1>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <span className="text-slate-500 text-sm border-l border-gray-300 pl-4">124 Reviews</span>
                            </div>

                            <p className="text-4xl font-bold text-brand-blue mb-6">$49.99</p>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                A complete introductory set for teaching numbers 1-10. Includes wooden number rods, sandpaper numbers, and spindle box. Made from sustainable beechwood with child-safe non-toxic paint. Perfect for ages 3-5.
                            </p>

                            <div className="space-y-4 mb-8 border-t border-b border-gray-100 py-6">
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <Truck className="w-5 h-5 text-green-600" />
                                    <span>Free Shipping to all Franchise locations</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-700">
                                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                                    <span>1 Year Warranty included</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <input type="number" defaultValue="1" min="1" className="w-20 p-3 border border-gray-300 rounded-lg text-center font-bold text-lg" />
                                <button className="flex-1 bg-brand-gold text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-200 flex items-center justify-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
