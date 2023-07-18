import InteractiveIconActions from '@/app/components/prompt card/InteractiveIconActions';
import { PromptBody } from '@/app/components/prompt card/PromptBody';
import { PromptCardOutline } from '@/app/components/prompt card/PromptCardOutline';
import PromptDismissal from '@/app/components/prompt card/PromptDismissal';
import { PromptAllTags } from '@/app/components/prompt card/PromptHastags';
import PromptHeader from '@/app/components/prompt card/PromptHeader';
import { Prompt as Promptype } from '../../lib/types/prompts';
import { getPromptData } from '@/app/lib/prompts';
import { notFound } from 'next/navigation';

const PromptPage = async ({ params }: { params: { id: string } }) => {
  const prompt = await getPromptData(params.id);
  if (prompt.status !== 200) return notFound();

  const {
    extraInfo: { body, title, tags, _count: count, createdAt, creator, id },
  } = prompt as {
    extraInfo: Promptype;
  };

  return (
    <div className="h-[calc(100vh-72px)] flex justify-center items-center">
      <div className="w-full max-w-[800px] bg-white rounded-md">
        <PromptDismissal textColor="black" />
        <PromptCardOutline className="p-4">
          <PromptHeader
            prompt={body}
            userNameSize="[13px]"
            createdAt={createdAt}
            creator={creator}
          />
          <PromptBody
            promptDesc={body}
            promptTitle={title}
            PromptTitleSize="[16px]"
            PromptDescSize="[14px]"
            extraStyle="max-h-[200px] overflow-auto"
          />
          <PromptAllTags tags={tags} />
          <InteractiveIconActions
            promptId={params.id}
            count={count.starredby}
          />
        </PromptCardOutline>
      </div>
    </div>
  );
};

export default PromptPage;
