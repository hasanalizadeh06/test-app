// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import db from "@/../lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const existingUser = db.prepare("SELECT * FROM users WHERE id = ?").get(user.id);

      if (!existingUser) {
        db.prepare(
          "INSERT INTO users (id, name, email, image) VALUES (?, ?, ?, ?)"
        ).run(user.id, user.name, user.email, user.image);
      }

      return true;
    },
    async session({ session }) {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
