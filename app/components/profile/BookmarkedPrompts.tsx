import { Prompt } from '@/app/lib/types/prompts';
import Feed from '../Feed';

export const BookmarkedPrompts = ({
  bookmarkedPrompts,
}: {
  bookmarkedPrompts: Prompt[];
}) => {
  let feed = <Feed dataArray={bookmarkedPrompts} />;
  if (bookmarkedPrompts.length === 0) {
    feed = (
      <p className="text-center text-[#00000093]">
        You have not bookmarked any prompt
      </p>
    );
  }

  return <div>{feed}</div>;
};
