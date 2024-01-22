import { PrismaClient } from '@prisma/client';
import process from 'process';
const prisma = new PrismaClient();

async function main() {
  // Seed the User table
  await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: 'securepassword',
      bookmarked: [{},],
    },
  });

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
