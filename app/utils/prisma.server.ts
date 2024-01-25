// https://remix.run/docs/en/main/file-conventions/-server
// *.server.ts on file names to force them out of client bundles

import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;
// error - ReferenceError: _db is not defined
//declare global {
    let _db: PrismaClient | undefined;
//}

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
    prisma.$connect();
} else {
    // in development mode only connect if there is no connection with a live remode feature
    if (!_db) {
        _db = new PrismaClient();
        _db.$connect();
    }
    prisma = _db;
}

// exports prisma to use in other areas of the code
export { prisma }