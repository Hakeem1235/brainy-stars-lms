export function Testimonials() {
    return (
        <section className="py-24 bg-brand-gold/5">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center text-brand-blue mb-16">Stories from Our Community</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gold/10 relative">
                        <span className="absolute top-4 right-6 text-6xl text-brand-gold/20 font-serif">"</span>
                        <p className="text-slate-600 mb-6 italic">"This LMS transformed the way I teach and observe children. The practical upload feature makes getting feedback so easy."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-200" />
                            <div>
                                <p className="font-bold text-sm text-slate-800">Fatima Z.</p>
                                <p className="text-xs text-slate-500">Montessori Teacher</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gold/10 relative">
                        <span className="absolute top-4 right-6 text-6xl text-brand-gold/20 font-serif">"</span>
                        <p className="text-slate-600 mb-6 italic">"As a branch owner, I can finally see exactly where my teachers stand in their training. Quality control is effortless now."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-200" />
                            <div>
                                <p className="font-bold text-sm text-slate-800">Ahmed R.</p>
                                <p className="text-xs text-slate-500">Franchise Owner</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gold/10 relative">
                        <span className="absolute top-4 right-6 text-6xl text-brand-gold/20 font-serif">"</span>
                        <p className="text-slate-600 mb-6 italic">"Seeing my child's daily progress and getting parenting tips aligned with our values has been a blessing."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-200" />
                            <div>
                                <p className="font-bold text-sm text-slate-800">Mariam K.</p>
                                <p className="text-xs text-slate-500">Parent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
