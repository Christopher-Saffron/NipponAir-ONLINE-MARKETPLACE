import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}
export default NextAuth(authOptions)