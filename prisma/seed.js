const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const testUser = await prisma.user.create({
    data: {
      username: "test",
      email: "test@email.com",
      password: "testpassword",
    },
  });

  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
