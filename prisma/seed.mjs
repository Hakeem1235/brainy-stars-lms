import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "file:./dev.db"
        }
    }
})

async function main() {
    // 1. Clean up
    try {
        // Delete in order of constraints
        await prisma.lesson.deleteMany()
        await prisma.module.deleteMany()
        await prisma.course.deleteMany()
        await prisma.user.deleteMany()
        await prisma.franchise.deleteMany()
        console.log('Cleaned up database')
    } catch (e) {
        console.log('Cleanup non-critical error or empty db')
    }

    // 2. Create Franchisor User
    const franchisor = await prisma.user.create({
        data: {
            email: 'admin@brainystars.com',
            name: 'Head Office Admin',
            role: 'FRANCHISOR',
            passwordHash: '$2a$10$abcdef'
        }
    })
    console.log('Created Franchisor:', franchisor.email)

    // 3. Create Franchise & Owner
    const franchiseeUser = await prisma.user.create({
        data: {
            email: 'branch@brainystars.com',
            name: 'Branch Owner',
            role: 'FRANCHISEE',
        }
    })

    const franchise = await prisma.franchise.create({
        data: {
            name: 'Brainy Stars Jayanagar',
            location: 'Jayanagar, Bangalore',
            ownerId: franchiseeUser.id
        }
    })
    console.log('Created Franchise:', franchise.name)

    // 4. Create Teacher
    const teacherUser = await prisma.user.create({
        data: {
            email: 'teacher@brainystars.com',
            name: 'Fatima Teacher',
            role: 'TEACHER',
            franchiseId: franchise.id,
            teacherProfile: {
                create: {
                    qualification: 'B.Ed',
                    experienceYears: 2
                }
            }
        }
    })
    console.log('Created Teacher:', teacherUser.email)

    // 5. Create Course: Diploma in Islamic Montessori
    const diploma = await prisma.course.create({
        data: {
            title: 'Diploma in Islamic Montessori Education',
            description: 'A comprehensive course integrating Montessori methodology with Islamic values.',
            published: true
        }
    })

    // 6. Create Core Modules
    const modules = [
        {
            title: 'Module 1: EPL (Exercises of Practical Life)',
            type: 'EPL',
            order: 1,
            lessons: [
                { title: 'Introduction to EPL', content: 'Theory of Practical Life...', order: 1 },
                { title: 'Pouring Exercises', content: 'Presentation of pouring water...', isPractical: true, order: 2 },
                { title: 'Folding Napkins', content: 'Presentation of folding...', isPractical: true, order: 3 }
            ]
        },
        {
            title: 'Module 2: Sensorial Education',
            type: 'SENSORIAL',
            order: 2,
            lessons: [
                { title: 'Introduction to Sensorial', content: 'Refining the senses...', order: 1 },
                { title: 'The Pink Tower', content: 'Visual discrimination of dimension...', isPractical: true, order: 2 },
                { title: 'The Brown Stair', content: 'Visual discrimination of width...', isPractical: true, order: 3 }
            ]
        },
        {
            title: 'Module 3: Mathematics',
            type: 'MATHEMATICS',
            order: 3,
            lessons: [
                { title: 'Number Rods', content: 'Introduction to quantity 1-10...', isPractical: true, order: 1 },
                { title: 'Sandpaper Numbers', content: 'Symbol association...', isPractical: true, order: 2 }
            ]
        },
        {
            title: 'Module 4: Child Psychology',
            type: 'PSYCHOLOGY',
            order: 4,
            lessons: [
                { title: 'Stages of Development', content: 'The Absorbent Mind...', order: 1 },
                { title: 'Sensitive Periods', content: 'Understanding windows of opportunity...', order: 2 }
            ]
        }
    ]

    for (const mod of modules) {
        await prisma.module.create({
            data: {
                courseId: diploma.id,
                title: mod.title,
                type: mod.type,
                order: mod.order,
                lessons: {
                    create: mod.lessons
                }
            }
        })
    }

    console.log('Seeded Courses and Modules')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
