const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "file:./dev.db"
    }
  }
});

async function main() {
  try {
    console.log('Connecting to Prisma...');
    await prisma.$connect();
    console.log('Connected!');
    const users = await prisma.user.findMany({ take: 1 });
    console.log('User count:', users.length);
  } catch (e) {
    console.error('Connection failed:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
