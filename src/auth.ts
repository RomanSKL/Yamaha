import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import { findUserByEmail, upsertGoogleUser } from "@/data/users";
import authConfig from "@/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: authConfig.providers.map((provider) => {
    if (provider.id === "credentials") {
      return {
        ...provider,
        authorize: async (credentials: Record<string, unknown>) => {
          const email = credentials?.email as string | undefined;
          const password = credentials?.password as string | undefined;

          if (!email || !password) return null;

          const user = await findUserByEmail(email);
          if (!user) return null;

          const valid = bcrypt.compareSync(password, user.password);
          if (!valid) return null;

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image ?? null,
          };
        },
      };
    }
    return provider;
  }),
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ account, profile }) {
      if (account?.provider === "google" && profile?.email) {
        await upsertGoogleUser({
          name: (profile.name as string) ?? "",
          email: profile.email as string,
          image: (profile.picture as string) ?? undefined,
        });
      }
      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      if (account?.provider === "google" && profile?.email) {
        const dbUser = await findUserByEmail(profile.email as string);
        if (dbUser) {
          token.id = dbUser.id;
        }
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
