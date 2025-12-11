'use server';

import { MOCK_COURSES, MOCK_USERS, MOCK_TEACHERS_DIRECTORY } from "@/lib/mock-db";

// Teacher: Get Course Details
export async function getCourseDetails(courseId: string) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_COURSES.find(c => c.id === courseId) || MOCK_COURSES[0];
}

export async function getTeacherCourses() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_COURSES;
}

// Franchisee: Get Students
export async function getFranchiseStudents() {
    return [
        { id: "s1", firstName: "Zayn", lastName: "Malik", dob: "2019-05-12", class: { name: "Blue Room" } },
        { id: "s2", firstName: "Sara", lastName: "Ali", dob: "2020-01-15", class: { name: "Red Room" } }
    ];
}

// Franchisee: Get Teachers
export async function getFranchiseTeachers() {
    // Return mock teachers formatted for the table
    const myTeachers = MOCK_TEACHERS_DIRECTORY.filter(t => t.franchise === 'Brainy Stars Jayanagar');

    return myTeachers.map(t => ({
        id: t.id,
        name: t.name,
        email: t.email || "staff@brainystars.com",
        active: true,
        teacherProfile: { qualification: "B.Ed", progress: t.progress },
        createdAt: new Date().toISOString()
    }));
}

// Parent: Get Children
export async function getParentChildren() {
    const parentData = MOCK_USERS.PARENT;
    const child = parentData.children[0];
    return [{
        id: child.id,
        firstName: child.name.split(" ")[0],
        lastName: child.name.split(" ")[1],
        class: { name: child.class },
        stats: child.progress
    }];
}

// Admin: Get All Users
export async function getAllUsers() {
    return [
        { id: "1", name: "Fatima Teacher", email: "teacher@brainystars.com", role: "TEACHER", franchise: { name: "Jayanagar" } },
        { id: "2", name: "Branch Owner", email: "branch@brainystars.com", role: "FRANCHISEE", franchise: { name: "Jayanagar" } },
        { id: "3", name: "Head Office", email: "admin@brainystars.com", role: "FRANCHISOR", franchise: { name: "HQ" } }
    ];
}
