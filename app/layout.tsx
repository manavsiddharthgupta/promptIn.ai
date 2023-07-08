import './globals.css';
import NavBar from './components/NavBar';
import React from 'react';
import FeedWrap from './ui/Feed';
import Search from './components/search bar/Search';
import { SessionWrap } from './ui/SessionWrap';
import Wrap from './ui/Wrap';
import { Session } from 'next-auth';

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
  session: Session;
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
