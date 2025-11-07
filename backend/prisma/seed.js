import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create sample users
  const user1 = await prisma.user.create({
    data: {
      email: 'john@example.com',
      name: 'John Doe',
      password: 'hashed_password_here', // In production, use bcrypt to hash passwords
      role: 'admin',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'jane@example.com',
      name: 'Jane Smith',
      password: 'hashed_password_here',
      role: 'user',
    },
  });

  // Create sample posts
  await prisma.post.createMany({
    data: [
      {
        title: 'Getting Started with Prisma',
        content: 'This is a guide to getting started with Prisma ORM.',
        published: true,
        authorId: user1.id,
      },
      {
        title: 'Building APIs with Express',
        content: 'Learn how to build REST APIs using Express.js.',
        published: true,
        authorId: user2.id,
      },
      {
        title: 'Draft Post',
        content: 'This is a draft post.',
        published: false,
        authorId: user1.id,
      },
    ],
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
