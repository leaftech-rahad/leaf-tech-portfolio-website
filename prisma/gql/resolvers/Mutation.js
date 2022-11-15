import prisma from "../../db";
import bcrypt from "bcryptjs";
export const Mutation = {
  signup: async (parent, { input }, { req }) => {
    //destructure from input
    const {
      firstName,
      lastName,
      email,
      userName,
      phone,
      address,
      password,
      photo,
    } = input;
    async function encrypt(password) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      return hash;
    }

    const savingUserData = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        userName: userName,
        phone: phone,
        address: address,
        password: (await encrypt(password)).toString(),
        photo: photo,
      },
    });
    return savingUserData;
  },
  delAccount: async (parent, { input }, { req }) => {
    const deletedUser = await prisma.user.delete({
      where: {
        id: input.id,
      },
    });
    if (deletedUser) return true;
  },
};
