import Link from 'next/link';
import PromptCard from '../components/prompt card/PromptCard';
import Card from '../ui/Card';
import { getAllPromptsData } from '../lib/prompts';
import { Prompt } from '../lib/types/prompts';

export const dynamic = 'force-dynamic';

const Feed = async () => {
  const prompts = await getAllPromptsData();

  let promptFeedComponent = prompts.extraInfo.map((data: Prompt) => {
    return (
      <Link href={`/prompts/${data.id}`} key={data.id}>
        <PromptCard promptData={data} />
      </Link>
    );
  });

  if (prompts.extraInfo.length === 0) {
    promptFeedComponent = (
      <p className="text-sm font-bold text-center">No prompts found</p>
    );
  }
  return (
    <Card>
      <section className="columns-1 min-[600px]:columns-2 min-[860px]:columns-3">
        {promptFeedComponent}
      </section>
    </Card>
  );
};

export default Feed;
