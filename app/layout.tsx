import './globals.css';
import NavBar from './components/NavBar';
import React from 'react';

export const metadata = {
  title: 'Find your prompt',
  description: 'Find, create and share your prompt here',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        {modal}
      </body>
    </html>
  );
}
