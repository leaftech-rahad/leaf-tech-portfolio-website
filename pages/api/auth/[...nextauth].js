import NextAuth from "next-auth";
import prisma from "../../../prisma/db";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
async function encrypt(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
    updateAge: 2 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        userName: {
          label: "Username",
          type: "text",
        },
        password: { label: "Password", type: "password" },
        phone: { label: "Phone", type: "text" },
        firstName: { label: "First Name", type: "text" },
        lastName: { label: "Last Name", type: "text" },
        address: { label: "Address", type: "text" },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (credentials.firstName) {
          const dataz = await prisma.user.create({
            data: {
              firstName: credentials.firstName,
              lastName: credentials.lastName,
              email: credentials.email,
              userName: credentials.userName,
              phone: credentials.phone,
              address: credentials.address,
              password: (await encrypt(credentials.password)).toString(),
            },
          });
        }
        let user;
        if (credentials.email) {
          user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
        } else {
          user = await prisma.user.findUnique({
            where: {
              userName: credentials.userName,
            },
          });
        }

        /* if (credentials.userName) {
          user = await prisma.user.findUnique({
            where: {
              userName: credentials.userName,
            },
          });
        } */

        if (bcrypt.compareSync(credentials.password, user.password)) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            id: user.id,
            userName: user.userName,
            email: user.email,
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        (token.id = user.id), (token.userName = user.userName);
      }
      return token;
    },

    session: ({ session, token, user }) => {
      if (token) {
        (session.id = token.id), (session.userName = token.userName);
      }
      return session;
    },
  },

  jwt: {
    encryption: true,
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
    },
    //   async signOut(message) {
    //     /* on signout */
    //   },
    //   async createUser(message) {
    //     /* user created */
    //   },
    //   async updateUser(message) {
    //     /* user updated - e.g. their email was verified */
    //   },
    //   async linkAccount(message) {
    //     /* account (e.g. Twitter) linked to a user */
    //   },
    //   async session(message) {
    //     /* session is active */
    //   },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
});
