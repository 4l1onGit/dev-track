import { updateUserStreak } from "@/app/_actions/userActions";
import GitHub from "next-auth/providers/github";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHub
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {

      try {
        if (account.provider && user.id) {
          await updateUserStreak(user.id);
        }
      } catch (error) {
        console.error("Error updating user streak:", error);
      }

      return true;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) session.user.id = token.id;
      return session;
    },

  },
  pages: {
    signIn: '/login', 
  }
}

