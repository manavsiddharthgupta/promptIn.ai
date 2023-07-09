import InteractiveIconActions from './InteractiveIconActions';
import PromptHeader from './PromptHeader';
import { PromptCardOutline } from './PromptCardOutline';
import { PromptAllTags } from './PromptHastags';
import { PromptBody } from './PromptBody';
import { Prompt } from '@/app/lib/types/prompts';

const PromptCard = ({
  promptData: { title, body, _count: count, createdAt, creator, tags },
}: {
  promptData: Prompt;
}) => {
  return (
    <PromptCardOutline className="mb-4 break-inside-avoid p-[10px] border-[1px] border-[#cacacac7]">
      <PromptHeader
        createdAt={createdAt}
        creator={creator}
        userNameSize="[13px]"
      />
      <PromptBody
        promptDesc={body}
        promptTitle={title}
        PromptTitleSize="[15px]"
        PromptDescSize="[13px]"
        extraStyle="line-clamp-12"
      />
      <PromptAllTags tags={tags} />
      <InteractiveIconActions count={count.starredby} />
    </PromptCardOutline>
  );
};

export default PromptCard;
