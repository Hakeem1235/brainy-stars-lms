'use server';

import db from "@/lib/db";
import { auth } from "@/auth";

export async function getFranchiseTeachers() {
    const session = await auth();
    // In real app, filter by session.user.franchiseId

    try {
        const teachers = await db.user.findMany({
            where: {
                role: 'TEACHER'
            },
            include: {
                teacherProfile: true
            }
        });
        return teachers;
    } catch (error) {
        return [];
    }
}
