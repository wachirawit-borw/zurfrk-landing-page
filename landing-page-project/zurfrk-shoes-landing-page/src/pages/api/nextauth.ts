import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

//if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
// throw new Error("Missing GitHub OAuth environment variables");
// }

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    //GithubProvider({
    //clientId: process.env.GITHUB_ID,
    //clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
}

export default NextAuth(authOptions)
