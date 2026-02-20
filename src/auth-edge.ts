import NextAuth from "next-auth";
import authConfig from "@/auth.config";

// Lightweight auth instance for Edge Runtime (middleware).
// No MongoDB imports — only checks session/JWT.
export const { auth } = NextAuth(authConfig);
