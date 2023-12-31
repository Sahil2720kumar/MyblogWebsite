import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@/models/user";
import { Author } from "@/models/author";
import { connectToDB } from "@/utils/database";
import { redirect } from "next/navigation";

export const authOptions = {
    pages: {
        signIn: "/signin"
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                await connectToDB();
                const findUser = await User.findOne({
                    email: user.email,
                    authenticate_method: account.provider
                });
                const findAuthor = await Author.findOne({
                    email: user.email,
                    authenticate_method: account.provider
                });
                if (findAuthor) {
                    if (findAuthor) {
                        user = findAuthor;
                        return true;
                    } else {
                        return "/dashboard/signin?message=login failed";
                    }
                }
                if (findUser) {
                    if (findUser) {
                        user = findUser;
                        return true;
                    } else {
                        const findUserByEmail = await User.findOne({
                            email: user.email
                        });
                        if (!findUserByEmail) {
                            await User.create({
                                name: user.name,
                                email: user.email,
                                avatar: user.image,
                                role: "User",
                                authenticate_method: account.provider
                            });
                            return true;
                        }
                        return "/signin?message=login with your credentials";
                    }

                    return "/signin?message=login with your credentials";
                }

                return "/signin?message=login with your credentials";
            } catch (error) {
                console.log(" sign error ", error);
            }
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (!user) {
                await connectToDB();
                const findUser = await User.findOne({
                    email: token.user.email
                });
                const findAuthor = await Author.findOne({
                    email: token.user.email
                });

                if (findUser) {
                    token.user = findUser;
                }
                if (findAuthor) {
                    token.user = findAuthor;
                }
            }

            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token, user }) {
            session.user = token.user;

            return session;
        }
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Next auth for blog website",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password"
                }
            },
            async authorize(credentials, req) {
                await connectToDB();
                console.log("credentials", credentials);

                const author = await Author.findOne({
                    email: credentials?.email
                }).select("-password");
                if (author) {
                    const user = author;
                    return user;
                }

                const normalUser = await User.findOne({
                    email: credentials?.email
                }).select("-password");
                if (normalUser) {
                    const user = normalUser;
                    return user;
                }

                return null;
            }
        })
    ]
};
