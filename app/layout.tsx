import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Find your prompt',
  description: 'Find, create and share your prompt here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
