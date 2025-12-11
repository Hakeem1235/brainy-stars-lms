import Link from "next/link";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    GraduationCap,
    Settings,
    LogOut,
    Building2,
    FileText,
    Video,
    BarChart,
    Megaphone,
    Library,
    ImageIcon,
    MessageCircle,
    Sparkles
} from "lucide-react";
import { auth, signOut } from "@/auth";

import { MobileMenu } from "@/components/layout/MobileMenu";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    const role = session?.user?.role || "GUEST";

    const sidebarContent = (
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 bg-brand-blue text-slate-300 h-full">
            <div className="mb-6 px-2">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Menu</p>
                <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-brand-blue/50 text-white hover:bg-brand-blue transition-colors">
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                </Link>
            </div>

            {/* Role Specific Links */}
            {role === 'FRANCHISOR' && (
                <div className="mb-6 px-2 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3">Network</p>
                    <Link href="/franchisor/franchises" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Building2 className="w-5 h-5" />
                        <span>Franchises</span>
                    </Link>
                    <Link href="/franchisor/teachers" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Users className="w-5 h-5" />
                        <span>Teachers</span>
                    </Link>

                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3 mt-4">Academic</p>
                    <Link href="/franchisor/courses" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <BookOpen className="w-5 h-5" />
                        <span>Curriculum</span>
                    </Link>
                    <Link href="/franchisor/assessments" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                        <span>Assessments</span>
                    </Link>
                    <Link href="/franchisor/submissions" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Video className="w-5 h-5" />
                        <span>Submissions</span>
                    </Link>
                    <Link href="/franchisor/certifications" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <GraduationCap className="w-5 h-5" />
                        <span>Certifications</span>
                    </Link>

                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3 mt-4">Operations</p>
                    <Link href="/franchisor/reports" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <BarChart className="w-5 h-5" />
                        <span>Reports</span>
                    </Link>
                    <Link href="/franchisor/announcements" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Megaphone className="w-5 h-5" />
                        <span>Announcements</span>
                    </Link>
                    <Link href="/franchisor/library" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Library className="w-5 h-5" />
                        <span>Library</span>
                    </Link>
                    <Link href="/franchisor/ai-evaluation" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-100 font-medium">AI Evaluation</span>
                    </Link>
                </div>
            )}

            {/* FRANCHISEE Navigation */}
            {role === 'FRANCHISEE' && (
                <div className="mb-6 px-2 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3">Branch Management</p>
                    <Link href="/franchisee/teachers" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Users className="w-5 h-5" />
                        <span>Teachers</span>
                    </Link>
                    <Link href="/franchisee/students" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <GraduationCap className="w-5 h-5" />
                        <span>Students</span>
                    </Link>
                    <Link href="/franchisee/classrooms" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Building2 className="w-5 h-5" />
                        <span>Classrooms</span>
                    </Link>

                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3 mt-4">Training</p>
                    <Link href="/franchisee/modules" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Library className="w-5 h-5" />
                        <span>Assigned Modules</span>
                    </Link>
                    <Link href="/franchisee/submissions" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Video className="w-5 h-5" />
                        <span>Review Submissions</span>
                    </Link>

                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3 mt-4">Support</p>
                    <Link href="/franchisee/reports" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <BarChart className="w-5 h-5" />
                        <span>Reports</span>
                    </Link>
                    <Link href="/franchisee/announcements" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Megaphone className="w-5 h-5" />
                        <span>Announcements</span>
                    </Link>
                    <Link href="/franchisee/parents" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Users className="w-5 h-5" />
                        <span>Parent Engagement</span>
                    </Link>
                    <Link href="/franchisee/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </Link>
                    <Link href="/franchisee/ai-analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors bg-gradient-to-r from-indigo-900/50 to-blue-900/50 border border-indigo-500/30">
                        <Sparkles className="w-5 h-5 text-indigo-400" />
                        <span className="text-indigo-100 font-medium">AI Analytics</span>
                    </Link>
                </div>
            )}

            {/* TEACHER Navigation */}
            {role === 'TEACHER' && (
                <div className="mb-6 px-2 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3">Learning</p>
                    <Link href="/teacher/training" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <BookOpen className="w-5 h-5" />
                        <span>Islamic Training</span>
                    </Link>
                    <Link href="/teacher/certifications" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <GraduationCap className="w-5 h-5" />
                        <span>Certifications</span>
                    </Link>
                    <Link href="/teacher/courses" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Library className="w-5 h-5" />
                        <span>My Modules</span>
                    </Link>

                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3 mt-4">Classroom</p>
                    <Link href="/teacher/classroom" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Building2 className="w-5 h-5" />
                        <span>My Class</span>
                    </Link>
                    <Link href="/teacher/observations" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                        <span>Observations</span>
                    </Link>
                    <Link href="/teacher/submissions" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Video className="w-5 h-5" />
                        <span>Practical Submissions</span>
                    </Link>

                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3 mt-4">Support</p>
                    <Link href="/teacher/messages" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>Messages</span>
                    </Link>
                    <Link href="/teacher/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Settings className="w-5 h-5" />
                        <span>Profile</span>
                    </Link>
                    <Link href="/teacher/ai-tools" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-emerald-500/30">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-100 font-medium">AI Assistants</span>
                    </Link>
                </div>
            )}

            {/* PARENT Navigation */}
            {role === 'PARENT' && (
                <div className="mb-6 px-2 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3">My Child</p>
                    <Link href="/parent/gallery" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <ImageIcon className="w-5 h-5" />
                        <span>Gallery</span>
                    </Link>
                    <Link href="/parent/messages" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>Messages</span>
                    </Link>

                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3 mt-4">Growth & Tarbiyah</p>
                    <Link href="/parent/courses" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <BookOpen className="w-5 h-5" />
                        <span>My Courses</span>
                    </Link>
                    <Link href="/parent/homeschool" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Building2 className="w-5 h-5" />
                        <span>Home Schooling</span>
                    </Link>

                    <Link href="/parent/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors mt-2">
                        <Settings className="w-5 h-5" />
                        <span>Profile & Fees</span>
                    </Link>
                    <Link href="/parent/ai-assistant" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors bg-gradient-to-r from-pink-900/50 to-rose-900/50 border border-pink-500/30 mt-2">
                        <Sparkles className="w-5 h-5 text-pink-400" />
                        <span className="text-pink-100 font-medium">Parenting Coach</span>
                    </Link>
                </div>
            )}

            {/* STUDENT Navigation */}
            {role === 'STUDENT' && (
                <div className="mb-6 px-2 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3">My Learning</p>
                    <Link href="/student" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <LayoutDashboard className="w-5 h-5" />
                        <span>My Dashboard</span>
                    </Link>
                    <Link href="/student/activities" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <BookOpen className="w-5 h-5" />
                        <span>Activities</span>
                    </Link>
                    <Link href="/student/stories" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Library className="w-5 h-5" />
                        <span>Stories & Duas</span>
                    </Link>
                    <Link href="/student/badges" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        <span>My Badges</span>
                    </Link>
                </div>
            )}

            {/* ISLAMIC REVIEWER Navigation */}
            {role === 'ISLAMIC_REVIEWER' && (
                <div className="mb-6 px-2 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3">Review Center</p>
                    <Link href="/islamic-reviewer" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>
                    <Link href="/islamic-reviewer/queue" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                        <span>Review Queue</span>
                    </Link>
                    <Link href="/islamic-reviewer/history" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Library className="w-5 h-5" />
                        <span>Audit History</span>
                    </Link>
                    <Link href="/islamic-reviewer/ai-audit" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-emerald-500/30">
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-100 font-medium">AI Verification</span>
                    </Link>
                </div>
            )}

            {/* SUPPORT AGENT Navigation */}
            {role === 'SUPPORT_AGENT' && (
                <div className="mb-6 px-2 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3">Helpdesk</p>
                    <Link href="/support" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Ticket Board</span>
                    </Link>
                    <Link href="/support/knowledgebase" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <BookOpen className="w-5 h-5" />
                        <span>Knowledgebase</span>
                    </Link>
                </div>
            )}

            {/* AI TOOLS CENTER (Accessible to Admin/Franchisor potentially, or dedicated role) */}
            {(role === 'FRANCHISOR' || role === 'FRANCHISOR_ADMIN') && (
                <div className="mt-6 mb-6 px-2 space-y-1 border-t border-slate-800 pt-4">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-3">Intelligence</p>
                    <Link href="/ai-tools" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <span>AI Tools Center</span>
                    </Link>
                </div>
            )}

            <form action={async () => {
                "use server"
                await signOut({ redirectTo: "/" })
            }}>
                <button className="flex w-full items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-900/20 hover:text-red-400 transition-colors text-left">
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                </button>
            </form>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Desktop Sidebar */}
            <aside className="w-64 bg-brand-blue text-white flex-shrink-0 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-white/10 gap-3">
                    <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain bg-white rounded-md p-0.5" />
                    <span className="font-bold text-white text-lg tracking-tight">Brainy Stars</span>
                </div>
                {sidebarContent}
                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold">
                            {session?.user?.name?.[0] || "U"}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">{session?.user?.name || "User"}</p>
                            <p className="text-xs text-brand-gold font-bold uppercase tracking-wider">
                                {role === 'FRANCHISOR' ? 'FRANCHISOR ADMIN' :
                                    role === 'FRANCHISEE' ? 'FRANCHISE OWNER' :
                                        role === 'ISLAMIC_REVIEWER' ? 'ISLAMIC SCHOLAR' :
                                            role}
                            </p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Mobile Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 md:hidden flex-shrink-0">
                    <img src="/logo.png" alt="Brainy Stars" className="h-8 w-auto" />
                    <MobileMenu>
                        <div className="bg-brand-blue p-4">
                            {sidebarContent}
                        </div>
                    </MobileMenu>
                </header>

                {/* Desktop Top Bar (New) */}
                <header className="h-16 bg-white border-b border-gray-200 hidden md:flex items-center justify-between px-8 flex-shrink-0">
                    <div className="flex items-center gap-2 text-slate-500">
                        <span className="font-semibold text-slate-900">Portal:</span>
                        <span className="text-xs font-bold text-brand-blue px-2 py-1 bg-blue-50 rounded uppercase tracking-wider">
                            {role === 'FRANCHISOR' ? 'FRANCHISOR ADMIN' :
                                role === 'FRANCHISEE' ? 'FRANCHISE OWNER' :
                                    role === 'ISLAMIC_REVIEWER' ? 'ISLAMIC SCHOLAR' :
                                        role}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm font-bold text-slate-900">{session?.user?.name}</p>
                            <p className="text-xs text-slate-500">{session?.user?.email}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">
                            {session?.user?.name?.[0]}
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
