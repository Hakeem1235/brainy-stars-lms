export default function ParentCourses() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">My Courses</h1>
                <p className="text-slate-500">Holistic development for you and your family.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "The Art of Marriage", desc: "Islamic guide to a happy marital life." },
                    { title: "Pregnancy & Tarbiyah", desc: "Spiritual and physical care for expectant mothers." },
                    { title: "Child Development (0-2y)", desc: "Understanding the crucial early years." }
                ].map((course) => (
                    <div key={course.title} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
                        <div className="h-40 bg-slate-100 group-hover:bg-slate-200 transition-colors"></div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                            <p className="text-sm text-slate-500 mb-4">{course.desc}</p>
                            <button className="w-full py-2 bg-brand-blue/10 text-brand-blue font-bold rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
                                Access Course
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
