'use server';

import db from "@/lib/db";

export async function getCourses() {
    try {
        const courses = await db.course.findMany({
            include: {
                modules: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return courses;
    } catch (error) {
        console.error("Failed to fetch courses:", error);
        return [];
    }
}
