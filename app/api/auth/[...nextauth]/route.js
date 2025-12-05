// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import User from "@/app/models/User";
// import { connectDB } from "@/app/lib/mongodb";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//     }),

//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;

//         await connectDB();

//         const user = await User.findOne({ email: credentials.email });
//         if (!user) return null;

//         const isValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );
//         if (!isValid) return null;

//         return {
//           id: user._id.toString(),
//           name: user.name,
//           email: user.email,
//         };
//       },
//     }),
//   ],

//   secret: process.env.NEXTAUTH_SECRET || "fallback_secret",

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       session.user.id = token.id;
//       session.user.email = token.email;
//       session.user.name = token.name;
//       return session;
//     },
//   },

//   pages: {
//     signIn: "/auth",
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };



import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/app/lib/mongodb";
// import { connectDB } from "@/app/lib/mongodb";

import { compare } from "bcryptjs";

const client = await clientPromise
const db = client.db(process.env.MONGODB_DB);

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await db.collection("users").findOne({ email: credentials.email });
        if (!user) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
