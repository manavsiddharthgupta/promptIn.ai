import { Prompt } from '@/app/lib/types/prompts';
import Feed from '../Feed';

export const StarredPrompts = ({
  starredPrompts,
}: {
  starredPrompts: {
    prompt: Prompt;
  }[];
}) => {
  let updatedPrompt = starredPrompts.map((prompt) => {
    return prompt.prompt;
  });
  let feed = <Feed dataArray={updatedPrompt} />;
  if (starredPrompts.length === 0) {
    feed = (
      <p className="text-center text-[#00000093]">
        This profile haven't starred any prompt
      </p>
    );
  }

  return <div>{feed}</div>;
};
