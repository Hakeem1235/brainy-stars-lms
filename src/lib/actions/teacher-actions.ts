'use server';

import db from "@/lib/db";
import { auth } from "@/auth";

export async function getTeacherCourses() {
    const session = await auth();
    if (!session || session.user.role !== 'TEACHER') {
        // For development simplicity, if not logged in as teacher, return generic public courses
        // or empty array.
        // In real app, we check enrollments. For this MVP, all Teachers see all Published Courses.
    }

    try {
        console.log("Fetching teacher courses...");
        const courses = await db.course.findMany({
            where: {
                published: true
            },
            include: {
                modules: {
                    include: {
                        lessons: true
                    },
                    orderBy: {
                        order: 'asc'
                    }
                }
            }
        });
        return courses;
    } catch (error) {
        console.error("Error fetching teacher courses:", error);
        return [];
    }
}
