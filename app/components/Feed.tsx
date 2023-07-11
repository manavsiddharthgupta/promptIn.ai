import { Prompt } from '../lib/types/prompts';
import PromptCard from './prompt card/PromptCard';
import Link from 'next/link';

const Feed = ({ dataArray }: { dataArray: Prompt[] }) => {
  return (
    <section className="columns-1 min-[600px]:columns-2 min-[860px]:columns-3">
      {dataArray.map((data) => {
        return (
          <Link href={`/prompts/${data.id}`} key={data.id}>
            <PromptCard promptData={data} />
          </Link>
        );
      })}
    </section>
  );
};

export default Feed;
