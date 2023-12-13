import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import axios from "axios";
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/login",
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: "/signup", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("aftersignin=>", user, account);
      await axios
        .get(`${process.env.HOST_URL}/api/user`)
        .then((res) => {
          console.log("response", res.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
      return true;
      // if (isAllowedToSignIn) {
      //   return true
      // } else {
      //   // Return false to display a default error message
      //   return false
      //   // Or you can return a URL to redirect to:
      //   // return '/unauthorized'
      // }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
