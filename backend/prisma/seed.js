import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const START_INDEX = 21;
  const TOTAL_USERS = 12;

  for (let i = 0; i < TOTAL_USERS; i++) {
    const userIndex = START_INDEX + i;

    const user = await prisma.user.create({
      data: {
        name: `User ${userIndex}`,
        email: `user${userIndex}@example.com`,
        password: 'test1234', // Not hashed (for testing only)
        profilePicture: `https://i.pravatar.cc/150?img=${(userIndex % 70) + 1}`,
        bio: `I'm User ${userIndex}, ready to share my knowledge.`,
        location: ['New York', 'London', 'Berlin', 'Tokyo'][i % 4],
      },
    });

    await prisma.skill.create({
      data: {
        userId: user.id,
        skillsOffered: [`Skill ${userIndex}A`, `Skill ${userIndex}B`],
        skillsWanted: [`Skill ${userIndex}X`, `Skill ${userIndex}Y`],
        category: ['Music', 'Language', 'Coding', 'Art'][i % 4],
        description: `This is the skill description for User ${userIndex}`,
        image: `https://source.unsplash.com/random/400x300?sig=${userIndex}`,
        duration: `${30 + i * 5} mins`,
        location: ['Online', 'In-Person'][i % 2],
        availability: {
          monday: true,
          wednesday: false,
          friday: true,
        },
      },
    });

    console.log(`✅ Seeded User ${userIndex}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Error seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
