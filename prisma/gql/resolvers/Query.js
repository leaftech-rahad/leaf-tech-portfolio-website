import prisma from "../../db";
export const Query = {
  allUsers: async (parent, { input }, { req }) => {
    const users = prisma.user.findMany({});
    return users;
  },
};
