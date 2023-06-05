import Feed from './components/Feed';
import Hero from './components/Hero';
import Search from './components/Search';
import Card from './ui/Card';

export default function Home() {
  return (
    <main className="px-4 min-[400px]:px-8 min-[600px]:px-4 lg:px-0">
      <Card>
        <Hero />
        <Search />
        <Feed />
      </Card>
    </main>
  );
}
