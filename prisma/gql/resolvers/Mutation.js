import prisma from "../../db";
/* console.log(prisma); */
export const Mutation = {
  signup: async (parent, { input }, { req }) => {
    //destructure from input
    /* const {
      firstName,
      lastName,
      email,
      userName,
      phone,
      address,
      password,
      photo,
    } = input; */

    const savingUserData = await prisma.user.create({
      /* data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        userName: userName,
        phone: phone,
        address: address,
        password: password,
        photo: photo,

        //hashing the password value using encrypt function in bcrypt.js
        // password: (await encrypt(password)).toString(),
      }, */
      data: input,
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
