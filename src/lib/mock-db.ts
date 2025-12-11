export const MOCK_USERS = {
    ADMIN: {
        id: "admin-1",
        name: "Super Admin",
        email: "admin@brainystars.com",
        role: "ADMIN",
        avatar: "https://ui-avatars.com/api/?name=Super+Admin&background=0D8ABC&color=fff"
    },
    FRANCHISEE: {
        id: "fr-jnb-01",
        name: "Ahmed Raza",
        email: "jayanagar@brainystars.com",
        role: "FRANCHISEE",
        franchiseName: "Brainy Stars Jayanagar",
        avatar: "https://ui-avatars.com/api/?name=Ahmed+Raza&background=F59E0B&color=fff",
        stats: {
            teachers: 12,
            students: 85,
            activeClasses: 4,
            compliance: 92
        }
    },
    TEACHER: {
        id: "t-01",
        name: "Fatima Khan",
        email: "fatima@brainystars.com",
        role: "TEACHER",
        franchiseId: "fr-jnb-01",
        avatar: "https://ui-avatars.com/api/?name=Fatima+Khan&background=10B981&color=fff",
        certificationStatus: "In Progress",
        pendingActions: [
            { id: 1, title: "Montessori Methodology Quiz", type: "QUIZ", due: "2 days" },
            { id: 2, title: "EPL Practical Video", type: "UPLOAD", due: "1 week" }
        ]
    },
    FRANCHISOR: {
        id: "hq-01",
        name: "HQ Operations",
        email: "hq@brainystars.com",
        role: "FRANCHISOR",
        avatar: "https://ui-avatars.com/api/?name=HQ+Ops&background=6366f1&color=fff",
        stats: {
            totalBranches: 15,
            totalTeachers: 142,
            pendingCerts: 8,
            activeCourses: 5
        },
        recentActivity: [
            { id: 1, type: 'submission', text: 'Sarah (Indiranagar) submitted "EPL Video"', time: '2 hours ago' },
            { id: 2, type: 'franchise', text: 'New Branch "Brainy Stars Mysore" added', time: '1 day ago' },
            { id: 3, type: 'certification', text: 'Issued 5 Montessori Certificates', time: '2 days ago' },
        ]
    },
    PARENT: {
        id: "p-01",
        name: "Mrs. Siddiqui",
        email: "parent@brainystars.com",
        role: "PARENT",
        avatar: "https://ui-avatars.com/api/?name=Mrs+Siddiqui&background=EC4899&color=fff",
        children: [
            { id: "s-01", name: "Omar Siddiqui", class: "LKG - A", attendance: 95, progress: 88, avatar: "https://ui-avatars.com/api/?name=Omar+S&background=random" },
            { id: "s-02", name: "Zara Siddiqui", class: "Nursery - B", attendance: 92, progress: 90, avatar: "https://ui-avatars.com/api/?name=Zara+S&background=random" }
        ]
    }
};

export const MOCK_COURSES = [
    {
        id: "c1",
        title: "Montessori 5 Environments",
        description: "Mastering the core environments of Montessori education: EPL, Sensorial, Math, Language, and Culture.",
        progress: 0,
        totalModules: 5,
        completedModules: 0,
        image: "/course-montessori.jpg",
        updatedAt: "2024-04-10",
        published: true,
        type: "CORE",
        modules: [
            { id: "m1", title: "Exercises of Practical Life (EPL)", status: "In Progress", duration: "4 weeks" },
            { id: "m2", title: "Sensorial Education", status: "Locked", duration: "5 weeks" },
            { id: "m3", title: "Mathematics", status: "Locked", duration: "6 weeks" },
            { id: "m4", title: "Language", status: "Locked", duration: "6 weeks" },
            { id: "m5", title: "Culture & Science", status: "Locked", duration: "4 weeks" }
        ]
    },
    {
        id: "c2",
        title: "Islamic Tarbiyah Integration",
        description: "Integrating Islamic values and daily Duas into the Montessori classroom workflow.",
        progress: 0,
        totalModules: 3,
        completedModules: 0,
        image: "/course-tarbiyah.jpg",
        updatedAt: "2024-03-25",
        published: true,
        type: "RELIGIOUS",
        modules: [
            { id: "m1", title: "Morning Circle & Duas", status: "Locked", duration: "2 weeks" },
            { id: "m2", title: "Manners (Adab) in Classroom", status: "Locked", duration: "3 weeks" },
            { id: "m3", title: "Prophetic Stories for Kids", status: "Locked", duration: "4 weeks" }
        ]
    },
    {
        id: "c3",
        title: "Classroom Management Pro",
        description: "Advanced techniques for managing a Montessori environment effectively.",
        progress: 0,
        totalModules: 4,
        completedModules: 0,
        image: "/course-management.jpg",
        updatedAt: "2024-05-12",
        published: false,
        type: "PD",
        modules: []
    }
];

export const MOCK_TEACHER_COURSES = [
    {
        id: "TC-001",
        title: "Montessori 5 Environments",
        progress: 35,
        status: "In Progress",
        lastAccessed: "2 days ago",
        modules: [
            { id: "m1", title: "EPL", status: "Completed", score: 90 },
            { id: "m2", title: "Sensorial", status: "In Progress", score: null },
            { id: "m3", title: "Math", status: "Locked", score: null },
        ]
    }
];

export const MOCK_FRANCHISES = [
    { id: "fr-01", name: "Brainy Stars Jayanagar", city: "Bangalore", region: "South", teachers: 12, active: true },
    { id: "fr-02", name: "Brainy Stars Indiranagar", city: "Bangalore", region: "East", teachers: 8, active: true },
    { id: "fr-03", name: "Brainy Stars Mysore", city: "Mysore", region: "South", teachers: 15, active: true },
    { id: "fr-04", name: "Brainy Stars Cochin", city: "Cochin", region: "Kerela", teachers: 10, active: true },
    { id: "fr-05", name: "Brainy Stars Mumbai", city: "Mumbai", region: "West", teachers: 22, active: true },
    { id: "fr-06", name: "Brainy Stars Delhi", city: "New Delhi", region: "North", teachers: 18, active: false },
    { id: "fr-07", name: "Brainy Stars Hyderabad", city: "Hyderabad", region: "South", teachers: 14, active: true },
];

export const MOCK_TEACHERS_DIRECTORY = [
    { id: "t-01", name: "Fatima Khan", franchise: "Brainy Stars Jayanagar", status: "Certified", progress: 100, lastActive: "2 hours ago", assignedModules: 8, email: "fatima@brainystars.com", mobile: "+91 9876543210", joinDate: "2023-06-15" },
    { id: "t-02", name: "Sarah Williams", franchise: "Brainy Stars Indiranagar", status: "In Progress", progress: 65, lastActive: "1 day ago", assignedModules: 8, email: "sarah@brainystars.com", mobile: "+91 9876543211", joinDate: "2023-08-01" },
    { id: "t-03", name: "Rajesh Kumar", franchise: "Brainy Stars Mysore", status: "Not Started", progress: 0, lastActive: "5 days ago", assignedModules: 5, email: "rajesh@brainystars.com", mobile: "+91 9876543212", joinDate: "2024-01-10" },
    { id: "t-04", name: "Aisha Siddiqui", franchise: "Brainy Stars Jayanagar", status: "In Progress", progress: 45, lastActive: "3 hours ago", assignedModules: 8, email: "aisha@brainystars.com", mobile: "+91 9876543213", joinDate: "2023-11-20" },
    { id: "t-05", name: "Anita Desai", franchise: "Brainy Stars Cochin", status: "Overdue", progress: 20, lastActive: "2 weeks ago", assignedModules: 8, email: "anita@brainystars.com", mobile: "+91 9876543214", joinDate: "2023-09-05" },
    { id: "t-06", name: "Mohammed Zaid", franchise: "Brainy Stars Mumbai", status: "Certified", progress: 100, lastActive: "Just now", assignedModules: 8, email: "zaid@brainystars.com", mobile: "+91 9876543215", joinDate: "2023-05-12" },
];

export const MOCK_CLASSES = [
    { id: "cl-01", name: "Nursery - A", teacherId: "t-01", studentCount: 15, room: "101" },
    { id: "cl-02", name: "LKG - B", teacherId: "t-04", studentCount: 18, room: "102" },
    { id: "cl-03", name: "UKG - A", teacherId: "t-02", studentCount: 20, room: "103" },
    { id: "cl-04", name: "Playgroup", teacherId: "Unassigned", studentCount: 10, room: "100" }
];

export const MOCK_STUDENTS = [
    { id: "s-01", name: "Omar Siddiqui", classId: "cl-02", parent: "Mrs. Siddiqui", attendance: 92, status: "Active" },
    { id: "s-02", name: "Zara Siddiqui", classId: "cl-01", parent: "Mrs. Siddiqui", attendance: 88, status: "Active" },
    { id: "s-03", name: "Rahul Verma", classId: "cl-03", parent: "Mr. Verma", attendance: 95, status: "Active" },
    { id: "s-04", name: "Priya Sharma", classId: "cl-01", parent: "Mrs. Sharma", attendance: 75, status: "Active" },
    { id: "s-05", name: "Ahmed Ali", classId: "cl-02", parent: "Mr. Ali", attendance: 98, status: "Active" },
    { id: "s-06", name: "Sneha Reddy", classId: "cl-03", parent: "Mrs. Reddy", attendance: 90, status: "Active" },
    { id: "s-07", name: "John Doe", classId: "cl-04", parent: "Mr. Doe", attendance: 85, status: "Active" },
    { id: "s-08", name: "Jane Smith", classId: "cl-04", parent: "Mrs. Smith", attendance: 92, status: "Active" }
];


export const MOCK_SUBMISSIONS = [
    { id: "sub-1", teacher: "Sarah Williams", franchise: "Brainy Stars Indiranagar", module: "EPL - Pouring Exercises", status: "Pending", date: "2024-05-20" },
    { id: "sub-2", teacher: "Rajesh Kumar", franchise: "Brainy Stars Mysore", module: "Sensorial - Pink Tower", status: "Approved", date: "2024-05-18" },
    { id: "sub-3", teacher: "Fatima Khan", franchise: "Brainy Stars Jayanagar", module: "Math - Number Rods", status: "Rejected", date: "2024-05-15" }
];

export const MOCK_ASSESSMENTS = [
    { id: "as-1", title: "Montessori Methodology Basics", type: "MCQ", questions: 25, duration: "30 mins" },
    { id: "as-2", title: "EPL Practical Demonstration", type: "RUBRIC", criteria: 10, duration: "Video Upload" },
    { id: "as-3", title: "Child Psychology Essay", type: "ESSAY", words: 500, duration: "Unlimited" }
];


export const MOCK_CERTIFICATIONS = [
    {
        id: "cert-1",
        title: "Certified Montessori Directress",
        level: "Advanced",
        description: "A comprehensive certification for becoming a lead Montessori educator.",
        status: "In Progress",
        completionRatio: 65,
        requirements: [
            { id: "req-1", title: "Montessori Methodology Basics", type: "Module", status: "Completed" },
            { id: "req-2", title: "EPL Practical Video", type: "Submission", status: "Approved" },
            { id: "req-3", title: "Sensorial Assessment", type: "Exam", status: "Pending" },
            { id: "req-4", title: "Classroom Observation Log", type: "Observation", status: "In Progress" }
        ],
        candidates: 12
    },
    {
        id: "cert-2",
        title: "Islamic Montessori Integration",
        level: "Intermediate",
        description: "Learn to integrate Islamic values into the Montessori environment.",
        status: "Not Started",
        completionRatio: 0,
        requirements: [
            { id: "req-5", title: "Islamic Tarbiyah Module", type: "Module", status: "Not Started" },
            { id: "req-6", title: "Prophetic Stories Implementation", type: "Submission", status: "Not Started" }
        ],
        candidates: 24
    },
    {
        id: "cert-3",
        title: "Early Childhood Assistant",
        level: "Beginner",
        description: "Foundational training for assistant teachers.",
        status: "Not Started",
        completionRatio: 0,
        requirements: [],
        candidates: 8
    }
];

export const MOCK_RESOURCES = [
    { id: "res-1", title: "Montessori EPL Guide.pdf", type: "PDF", size: "2.4 MB", category: "Montessori" },
    { id: "res-2", title: "Sensorial Material Checklist.xlsx", type: "Excel", size: "1.1 MB", category: "Checklist" },
    { id: "res-3", title: "Prophetic Stories for Kids.mp4", type: "Video", size: "45 MB", category: "Islamic" },
    { id: "res-4", title: "Classroom Observation Template.docx", type: "Doc", size: "0.5 MB", category: "Template" }
];

export const MOCK_MESSAGES = [
    { id: "msg-1", from: "Admin", subject: "Welcome to Brainy Stars", date: "2024-01-10", read: true, body: "Welcome to the team! Please complete your profile." },
    { id: "msg-2", from: "Mrs. Siddiqui (Parent)", subject: "Omar's Progress", date: "2024-02-15", read: false, body: "Hi, I wanted to ask about Omar's recent reading progress." }
];


export const MOCK_NOTIFICATIONS = [
    { id: "notif-1", title: "Submission Approved", message: "Your EPL Video has been approved.", time: "2 hours ago", read: false },
    { id: "notif-2", title: "New Assignment", message: "You have a new module assigned: Math.", time: "1 day ago", read: true }
];

export const MOCK_HOME_ACTIVITIES = [
    { id: "act-1", title: "Sort Cutlery", description: "Help your child sort spoons, forks, and knives.", video: "/videos/sort-cutlery.mp4", due: "2024-05-25", status: "Pending", badge: null },
    { id: "act-2", title: "Pouring Water", description: "Practice pouring water from a small jug to a glass.", video: "/videos/pouring.mp4", due: "2024-05-20", status: "Completed", badge: "Practical Life" },
    { id: "act-3", title: "Islamic Greeting", description: "Practice saying 'Assalamu Alaikum' when entering the house.", video: null, due: "2024-05-22", status: "Completed", badge: "Manners" },
    { id: "act-4", title: "Buttoning Shirt", description: "Encourage independence in dressing.", video: null, due: "2024-06-01", status: "Pending", badge: null }
];

export const MOCK_PARENT_GUIDANCE = [
    { id: "pg-1", title: "Building Independence at Home", category: "Montessori", description: "Simple tips to modify your home environment to foster independence.", readTime: "5 min" },
    { id: "pg-2", title: "The Importance of Routine", category: "Child Psychology", description: "Why consistent schedules help children feel secure.", readTime: "4 min" },
    { id: "pg-3", title: "Prophetic Dua for Children", category: "Islamic", description: "Teaching daily duas for eating and sleeping.", readTime: "3 min" },
    { id: "pg-4", title: "Handling Tantrums Respectfully", category: "Parenting", description: "Gentle discipline strategies.", readTime: "6 min" }
];


export const MOCK_OBSERVATIONS = [
    { id: "obs-1", studentId: "s-01", teacher: "Fatima Khan", date: "2024-05-18", category: "Sensorial", note: "Omar showed great concentration today working with the Pink Tower. He was able to self-correct when he placed the smallest block incorrectly." },
    { id: "obs-2", studentId: "s-01", teacher: "Fatima Khan", date: "2024-05-15", category: "Language", note: "Omar is identifying 's', 'a', and 't' sounds consistently." },
    { id: "obs-3", studentId: "s-01", teacher: "Sarah Williams", date: "2024-05-10", category: "Social", note: "Shared materials with a peer without prompting. MashaAllah." }
];

export const MOCK_ADMIN_STATS = {
    totalFranchises: 45,
    activeTeachers: 312,
    activeStudents: 4500,
    totalRevenue: "₹1.2 Cr",
    pendingApprovals: 12,
    systemHealth: "99.9%"
};

export const MOCK_LOGS = [
    { id: "log-1", user: "Ahmed Raza (Franchisee)", action: "Added New Teacher", target: "Sana Khan", time: "10 mins ago", type: "info" },
    { id: "log-2", user: "Admin", action: "Updated Course", target: "Montessori 5 Environments", time: "1 hour ago", type: "warning" },
    { id: "log-3", user: "Sarah Williams (Teacher)", action: "Login Failed", target: "IP: 192.168.1.1", time: "2 hours ago", type: "error" },
    { id: "log-4", user: "HQ Operations", action: "Published Announcement", target: "Holiday Schedule", time: "5 hours ago", type: "info" }
];

export const MOCK_ISSUED_CERTIFICATES = [
    { id: "crt-001", recipient: "Fatima Khan", type: "Certified Montessori Directress", date: "2024-01-15", status: "Active", issuer: "Brainy Stars HQ" },
    { id: "crt-002", recipient: "Mohammed Zaid", type: "Certified Montessori Directress", date: "2024-02-20", status: "Active", issuer: "Brainy Stars HQ" },
    { id: "crt-003", recipient: "Anita Desai", type: "Early Childhood Assistant", date: "2023-11-10", status: "Expired", issuer: "Brainy Stars Cochin" }
];
