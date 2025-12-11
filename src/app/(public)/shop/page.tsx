import { ShoppingCart, Search, Filter, Star } from "lucide-react";
import Link from "next/link";

export default function ShopHome() {
    const products = [
        { id: 1, name: "Montessori Math Kit (L1)", price: 49.99, category: "Learning Kits", rating: 5, image: "bg-blue-100" },
        { id: 2, name: "Islamic Bedtime Stories Vol. 1", price: 15.00, category: "Books", rating: 5, image: "bg-purple-100" },
        { id: 3, name: "Brainy Stars Uniform (Set)", price: 35.50, category: "Uniforms", rating: 4, image: "bg-gray-100" },
        { id: 4, name: "Wooden Arabic Alphabet Puzzle", price: 22.00, category: "Toys", rating: 5, image: "bg-green-100" },
        { id: 5, name: "Teacher Planner 2024", price: 12.99, category: "Stationery", rating: 4, image: "bg-yellow-100" },
        { id: 6, name: "Student Backpack", price: 29.99, category: "Accessories", rating: 4, image: "bg-red-100" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Shop Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="font-bold text-2xl text-brand-blue tracking-tight">Brainy Store</Link>
                    </div>

                    <div className="flex-1 max-w-xl mx-8 relative hidden md:block">
                        <Search className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for books, uniforms, materials..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-semibold text-slate-600 hover:text-brand-blue">Sign In</Link>
                        <Link href="/shop/cart" className="relative p-2 bg-brand-blue text-white rounded-full hover:bg-blue-900 transition-colors">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Filter className="w-4 h-4" /> Categories
                            </h3>
                            <div className="space-y-2">
                                {["All Products", "Course Bundles", "Books & Media", "Uniforms", "Stationery", "Learning Materials"].map((cat) => (
                                    <label key={cat} className="flex items-center gap-2 text-slate-600 hover:text-brand-blue cursor-pointer">
                                        <input type="checkbox" className="rounded text-brand-blue focus:ring-brand-blue" />
                                        <span className="text-sm">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="bg-brand-blue p-6 rounded-xl text-white">
                            <h3 className="font-bold text-lg mb-2">New Arrivals</h3>
                            <p className="text-blue-100 text-sm mb-4">Check out the latest Islamic Montessori materials.</p>
                            <button className="w-full py-2 bg-white text-brand-blue font-bold rounded-lg text-sm">View Collection</button>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <Link href={`/shop/${product.id}`} key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
                                    <div className={`h-48 ${product.image} relative`}>
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 opacity-20">
                                            Product Image
                                        </div>
                                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                            ${product.price}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-xs text-brand-blue font-bold uppercase mb-1">{product.category}</div>
                                        <h3 className="font-bold text-slate-900 mb-2 truncate group-hover:text-brand-blue transition-colors">{product.name}</h3>
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                            ))}
                                            <span className="text-xs text-slate-400 ml-1">(24)</span>
                                        </div>
                                        <button className="w-full py-2 bg-slate-900 text-white font-bold rounded-lg text-sm hover:bg-brand-gold transition-colors">
                                            Add to Cart
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
