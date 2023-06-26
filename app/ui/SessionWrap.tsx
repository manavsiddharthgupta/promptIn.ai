'use client';
import { SessionProvider } from 'next-auth/react';
import { DefaultSession } from 'next-auth/core/types';

export const SessionWrap = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: DefaultSession;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
