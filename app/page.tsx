'use client';
import Hero from './components/Hero';
import Search from './components/Search';
import Card from './ui/Card';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <Card>
      <Hero />
      <Search />
    </Card>
  );
}
