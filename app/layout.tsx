import './globals.css';
import NavBar from './components/NavBar';
import React from 'react';
import FeedWrap from './ui/Feed';
import Search from './components/search bar/Search';
import { SessionWrap } from './ui/SessionWrap';
import { DefaultSession } from 'next-auth/core/types';
import Wrap from './ui/Wrap';

export const metadata = {
  title: 'Find your prompt',
  description: 'Find, create and share your prompt here',
};

export default function RootLayout({
  children,
  feed,
  modal,
  session,
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
  modal: React.ReactNode;
  session: DefaultSession;
}) {
  return (
    <html lang="en">
      <SessionWrap session={session}>
        <body>
          <NavBar />
          {children}
          <Wrap>
            <Search />
          </Wrap>
          <FeedWrap>{feed}</FeedWrap>
          {modal}
        </body>
      </SessionWrap>
    </html>
  );
}
