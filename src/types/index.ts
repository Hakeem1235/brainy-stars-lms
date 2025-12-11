// Shared Type Definitions to avoid 'any' usage

export interface Module {
    id: string;
    title: string;
    status: string; // Relaxed from union type to matches loose mock data for now
    duration?: string;
    score?: number | null;
    lessons?: Lesson[];
}

export interface Lesson {
    id: string;
    title: string;
    completed: boolean;
}

export interface Course {
    id: string;
    title: string;
    description?: string;
    progress: number;
    totalModules?: number;
    completedModules?: number;
    image?: string;
    modules: Module[];
    status?: string;
    lastAccessed?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: "ADMIN" | "FRANCHISOR" | "FRANCHISEE" | "TEACHER" | "PARENT";
    avatar?: string;
}

export interface Teacher extends User {
    franchise: string;
    status: string; // e.g., "Certified", "In Progress"
    progress: number;
    assignedModules: number;
    mobile?: string;
    joinDate?: string;
    lastActive?: string;
}

export interface TeacherCourse extends Course {
    // Specific properties for teacher's view of a course if any
}
