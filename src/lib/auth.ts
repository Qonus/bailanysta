import db from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const adapter = DrizzleAdapter(db);
export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: adapter,
    providers: [Google],
})