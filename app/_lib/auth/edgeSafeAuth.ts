import NextAuth from "next-auth";
import { authOptions} from "./edgeSafeAuthOptions";

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);