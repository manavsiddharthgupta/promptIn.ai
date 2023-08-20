import { Prompt } from '@/app/lib/types/prompts';
import Feed from '../Feed';

export const BookmarkedPrompts = ({
  bookmarkedPrompts,
}: {
  bookmarkedPrompts: {
    prompt: Prompt;
  }[];
}) => {
  let updatedPrompt = bookmarkedPrompts.map((prompt) => {
    return prompt.prompt;
  });

  let feed = <Feed dataArray={updatedPrompt} />;
  if (bookmarkedPrompts.length === 0) {
    feed = (
      <p className="text-center text-[#00000093]">
        This profile haven't bookmarked any prompt
      </p>
    );
  }

  return <div>{feed}</div>;
};
