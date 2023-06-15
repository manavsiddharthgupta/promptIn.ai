import Link from 'next/link';
import PromptCard from '../components/prompt card/PromptCard';
import Card from '../ui/Card';
import dataArray from '../utils/store/sampledata';

const Feed = () => {
  return (
    <Card>
      <section className="columns-1 min-[600px]:columns-2 min-[860px]:columns-3">
        {dataArray.map((data) => {
          return (
            <Link href={`/prompts/${data.id}`} key={data.id}>
              <PromptCard promptData={data} />
            </Link>
          );
        })}
      </section>
    </Card>
  );
};

export default Feed;
