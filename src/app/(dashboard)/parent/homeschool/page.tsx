export default function HomeSchoolingDashboard() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">Home Schooling Program</h1>
                <p className="text-slate-500">Mother-led activity tracks and holistic guides.</p>
            </header>

            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                <h2 className="text-xl font-bold mb-2">Today's Activity Track</h2>
                <p className="text-slate-500">Select your child's age group to begin.</p>

                <div className="flex gap-4 justify-center mt-6">
                    <button className="px-6 py-3 rounded-full border border-brand-green text-brand-green font-bold hover:bg-brand-green hover:text-white transition-colors">
                        Toddler (18m - 3y)
                    </button>
                    <button className="px-6 py-3 rounded-full border border-brand-blue text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-colors">
                        Preschool (3y - 6y)
                    </button>
                </div>
            </div>
        </div>
    );
}
