import { NextAuthOptions, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export const authOption: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        avatar: { label: 'Avatar', type: 'text', placeholder: 'botter..' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { avatar, password } = credentials;

        const user = await prisma.user.findUnique({
          where: { avatarName: avatar },
        });

        if (!user) {
          return null;
        }
        const match = await bcrypt.compare(password, user.hashedPassword);
        if (!match) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (token.id) {
        const userData = await prisma.user.findUnique({
          where: {
            id: token.id,
          },
          select: {
            avatarName: true,
            email: true,
            image: true,
            profileTags: true,
          },
        });

        if (userData && token) {
          session.user.avatarName = userData.avatarName;
          session.user.email != userData.email;
          session.user.image = userData.image;
          session.user.profileTags = userData.profileTags;
          session.user.id = token.id;
          return session;
        }
      }

      return session;
    },
    jwt: ({ token, user }) => {
      if (user) {
        return { ...token, id: user.id };
      }
      return token;
    },
  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  debug: true,
};

export const getAuthSession = () => getServerSession(authOption);
