import Link from 'next/link';
import PromptCard from '../components/prompt card/PromptCard';
import Card from '../ui/Card';
import { getAllPromptsData } from '../lib/prompts';
import { Prompt } from '../lib/types/prompts';
import Image from 'next/image';
import errorPage from '@/app/utils/images/404.png';

export const dynamic = 'force-dynamic';

const Feed = async () => {
  const prompts = await getAllPromptsData();

  if (prompts.status !== 200) {
    return (
      <div className="py-5 flex flex-col items-center gap-4">
        <Image src={errorPage} alt="404" width={340} height={200} />
        <p className="text-sm font-bold text-red-500">
          Oops data didn't get fetched successfully :)
        </p>
      </div>
    );
  }

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
