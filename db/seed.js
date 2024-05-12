const { prisma } = require("./index");

const createUser = async (name) => {
  await prisma.user.create({
    data: {
      name,
    },
  });
};

const seed = async () => {
  console.log("starting seed");
  console.log("adding users");
  await createUser("Char");
  await createUser("Desmond");
  await createUser("Thomas");
  await createUser("Nick");
  console.log("finished seed");
};

seed();