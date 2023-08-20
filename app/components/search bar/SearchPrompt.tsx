'use client';
import { createdAtTimeStamp } from '@/app/lib/prompts';
import { SearchPromptType } from '@/app/lib/types/prompts';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Link from 'next/link';

export const SearchPrompt = ({ prompt }: { prompt: SearchPromptType }) => {
  const timeStamp = createdAtTimeStamp(prompt.createdAt);
  return (
    <Link href={`/prompts/${prompt.id}`}>
      <div className="hover:bg-[#00000008] px-4 py-2 mt-2 rounded-lg cursor-pointer border-[1px] border-[#00000021]">
        <h1 className="text-sm font-semibold truncate max-w-3xl w-full">
          {prompt.title}
        </h1>
        <p className="text-xs truncate max-w-3xl w-full">{prompt.body}</p>
        <div className="flex gap-4 items-center mt-1">
          <div className="flex items-center gap-1 w-fit py-[0.5px] pr-[3px] pl-[2px] text-base bg-[#0000001a] rounded-sm">
            <StarBorderIcon fontSize="inherit" />
            <p className="text-xs font-medium">{prompt._count.starredby}</p>
          </div>
          <p className="text-xs font-semibold text-gray-700">{timeStamp} ago</p>
        </div>
      </div>
    </Link>
  );
};
