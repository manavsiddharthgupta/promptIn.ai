import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Find your prompt',
  description: 'Find, create and share your prompt here',
};

export default function RootLayout({
  children,
  feed,
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        {feed}
      </body>
    </html>
  );
}
