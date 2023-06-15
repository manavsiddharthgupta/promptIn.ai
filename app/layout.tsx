import './globals.css';
import NavBar from './components/NavBar';
import React from 'react';
import FeedWrap from './ui/Feed';

export const metadata = {
  title: 'Find your prompt',
  description: 'Find, create and share your prompt here',
};

export default function RootLayout({
  children,
  feed,
  modal,
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <FeedWrap>{feed}</FeedWrap>
        {modal}
      </body>
    </html>
  );
}
