import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getGuest, createGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingGuest = await getGuest(user.email);
        console.log("existingGuest:", existingGuest);

        if (!existingGuest) {
          console.log("Guest not found, creating one...");
          // عطّل الإنشاء مؤقتًا
          // await createGuest({
          //   email: user.email,
          //   fullName: user.name,
          // });
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
