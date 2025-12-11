export default function IslamicTraining() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">Islamic Holistic Training</h1>
                <p className="text-slate-500">Master the Brainy Stars pedagogy.</p>
            </header>

            <div className="grid grid-cols-1 gap-4">
                {[
                    "Module 1: Islamic Philosophy of Education",
                    "Module 2: Sunnah-based Classroom Management",
                    "Module 3: Integrating Duas into Montessori",
                    "Module 4: The Rights of the Child"
                ].map((mod, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg">{mod}</h3>
                            <p className="text-sm text-slate-500">0% Complete</p>
                        </div>
                        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">Start</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
