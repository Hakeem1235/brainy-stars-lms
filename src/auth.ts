import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import db from "@/lib/db"
// import { PrismaClient } from "@prisma/client" // Removed in favor of singleton
// import bcrypt from "bcryptjs"

// const prisma = new PrismaClient() // Removed


export const { auth, signIn, signOut, handlers } = NextAuth({
    secret: "secret123", // Temporary hardcode to resolve env issues
    trustHost: true,
    providers: [
        Credentials({
            async authorize(credentials) {
                const { email } = credentials as { email: string };

                switch (email) {
                    case "admin@brainystars.com":
                        return {
                            id: "1",
                            name: "Head Office Admin",
                            email: "admin@brainystars.com",
                            role: "FRANCHISOR"
                        };
                    case "branch@brainystars.com":
                        return {
                            id: "2",
                            name: "Branch Owner",
                            email: "branch@brainystars.com",
                            role: "FRANCHISEE"
                        };
                    case "teacher@brainystars.com":
                        return {
                            id: "3",
                            name: "Fatima Teacher",
                            email: "teacher@brainystars.com",
                            role: "TEACHER"
                        };
                    case "parent@brainystars.com":
                        return {
                            id: "4",
                            name: "Zara Parent",
                            email: "parent@brainystars.com",
                            role: "PARENT"
                        };
                    case "student@brainystars.com":
                        return {
                            id: "5",
                            name: "Ali Student",
                            email: "student@brainystars.com",
                            role: "STUDENT"
                        };
                    case "reviewer@brainystars.com":
                        return {
                            id: "6",
                            name: "Sheikh Abdullah",
                            email: "reviewer@brainystars.com",
                            role: "ISLAMIC_REVIEWER"
                        };
                    case "support@brainystars.com":
                        return {
                            id: "7",
                            name: "Support Agent",
                            email: "support@brainystars.com",
                            role: "SUPPORT_AGENT"
                        };
                    default:
                        return null;
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            // @ts-ignore
            session.user.role = token.role;
            session.user.id = token.sub || "";
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                // @ts-ignore
                token.role = user.role;
            }
            return token;
        },
    },
    pages: {
        signIn: '/login',
    },
});
