import InteractiveIconActions from './InteractiveIconActions';
import PromptHeader from './PromptHeader';
import { PromptCardOutline } from './PromptCardOutline';
import { PromptAllTags } from './PromptHastags';
import { PromptBody } from './PromptBody';
import { Prompt } from '@/app/lib/types/prompts';

const PromptCard = async ({
  promptData: { title, body, _count: count, createdAt, creator, tags, id },
}: {
  promptData: Prompt;
}) => {
  return (
    <PromptCardOutline className="mb-4 break-inside-avoid p-[10px] border-[1px] border-[#cacacac7]">
      <PromptHeader
        createdAt={createdAt}
        creator={creator}
        userNameSize="[13px]"
        prompt={body}
      />
      <PromptBody
        promptDesc={body}
        promptTitle={title}
        PromptTitleSize="text-sm"
        PromptDescSize="[13px]"
        extraStyle="line-clamp-12"
      />
      <PromptAllTags tags={tags} />
      <InteractiveIconActions promptId={id} count={count.starredby} />
    </PromptCardOutline>
  );
};

export default PromptCard;
