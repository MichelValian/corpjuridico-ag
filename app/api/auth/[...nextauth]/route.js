import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "../../../../database/models";
const User = db.User;

// console.log("db:", db);
// console.log("db.User:", db.User);

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const user = await User.findOne({ where: { email: credentials.email } });
        if (!user) throw new Error("Usuario no encontrado");

        // console.log("▶ Comparando contraseña:");
        // console.log("Ingresada:", credentials.password);
        // console.log("Hash en DB:", user.password);

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Contraseña incorrecta");

        if (user.role !== "admin") throw new Error("No tienes permiso");

        console.log("Usuario autenticado:", user);

        return { id: user.id, email: user.email, role: user.role, name: user.name  };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.name = token.name;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
