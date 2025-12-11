import { PrismaClient } from "@prisma/client";
import path from "path";

const prismaClientSingleton = () => {
    // Explicitly set the absolute path database URL in env before instantiation
    // This bypasses constructor option validation issues in newer Prisma versions
    const startSymbol = process.platform === 'win32' ? '' : ''; // handle potential file:// prefix issues if needed, but standard file: works.
    process.env.DATABASE_URL = "file:" + path.join(process.cwd(), "dev.db");

    return new PrismaClient();
};

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const db = globalThis.prisma ?? prismaClientSingleton();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
