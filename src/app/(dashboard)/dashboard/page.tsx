import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await auth();
    const role = session?.user?.role;

    if (!role) {
        redirect("/login");
    }

    // Role-based redirection
    switch (role) {
        case "FRANCHISOR":
            redirect("/franchisor");
        case "FRANCHISEE":
            redirect("/franchisee");
        case "TEACHER":
            redirect("/teacher");
        case "PARENT":
        case "STUDENT":
            redirect("/parent");
        case "ADMIN":
            redirect("/admin/users");
            break;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Welcome back, {session?.user?.name || "User"}</h1>
            <p className="text-slate-500 mb-4">Redirecting you to your portal...</p>
        </div>
    );
}
