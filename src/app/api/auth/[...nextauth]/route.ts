import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { getUsers } from "@/utils/users";

// const users = [
//     { id: "1", email: "test@example.com", passwordHash: bcrypt.hashSync("password123", 10), language: "es", token: "my-token-fake-123" },
// ];

const users = getUsers()

const authenticateUser = async (email: string, password: string) => {
    const user = users.find(u => u.email === email);
    if (user && await bcrypt.compare(password, user.passwordHash)) {
        return { id: user.id, username: user.username, email: user.email, language: user.language, token: user.token };
    }
    return null;
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password"}
            },
            async authorize(credentials) {
                if(!credentials) return null;
                const user = await authenticateUser(credentials.email, credentials.password);
                if (user) {
                    return user;
                } else {
                    throw new Error("Invalid email or password");
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.username = user.username;
                token.language = user.language;
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            if(token) {
                session.user.id = token.id as string;
                session.user.email = token.email as string;
                session.user.username = token.username as string;
                session.user.language = token.language as string;
                session.user.token = token.token as string;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET || 'some-super-secret-key',
    session: { strategy: "jwt" }
})

export { handler as GET, handler as POST }