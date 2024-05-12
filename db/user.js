const { prisma } = require("./index");

const getAllUsers = async () => {
  try {
    const allUsers = await prisma.user.findMany({});
    return allUsers;
  } catch (error) {
    console.error("error getting users from db", error);
  }
};

module.exports = { getAllUsers };
