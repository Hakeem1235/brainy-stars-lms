import { ImageIcon } from "lucide-react";

export default function ParentGallery() {
    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-slate-900">Classroom Gallery</h1>
                <p className="text-slate-500">Memories from your child's learning journey.</p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative">
                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-slate-400" />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-4">
                            <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">Photo {i}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
