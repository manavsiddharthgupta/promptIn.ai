import NextAuth, { DefaultSession, User } from 'next-auth';

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    avatarName: string | null;
    email: string;
    image: string | null;
    profileTags: string[];
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: string;
      avatarName: string | null;
      email: string;
      image: string | null;
      profileTags: string[];
    };
  }
}
