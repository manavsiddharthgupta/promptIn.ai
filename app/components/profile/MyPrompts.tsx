import { Prompt } from '@/app/lib/types/prompts';
import Feed from '../Feed';

export const MyPrompts = ({ createdPrompts }: { createdPrompts: Prompt[] }) => {
  let feed = <Feed dataArray={createdPrompts} />;
  if (createdPrompts.length === 0) {
    feed = (
      <p className="text-center text-[#00000093]">
        This profile haven't created any prompt
      </p>
    );
  }

  return <div>{feed}</div>;
};
