import Feed from './components/Feed';
import Hero from './components/Hero';
import Search from './components/Search';
import Card from './ui/Card';

export default function Home() {
  return (
    <main>
      <Card>
        <Hero />
        <Search />
        <Feed />
      </Card>
    </main>
  );
}
