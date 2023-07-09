import InteractiveIconActions from '@/app/components/prompt card/InteractiveIconActions';
import { PromptBody } from '@/app/components/prompt card/PromptBody';
import { PromptCardOutline } from '@/app/components/prompt card/PromptCardOutline';
import PromptDismissal from '@/app/components/prompt card/PromptDismissal';
import { PromptAllTags } from '@/app/components/prompt card/PromptHastags';
import PromptHeader from '@/app/components/prompt card/PromptHeader';
import { getPromptData } from '@/app/lib/prompts';
import { ModalCard } from '@/app/ui/ModalCard';
import { Prompt as Promptype } from '../../../lib/types/prompts';

const PromptModal = async ({ params }: { params: { id: string } }) => {
  const prompt = await getPromptData(params.id);
  if (prompt.status !== 200)
    return (
      <ModalCard>
        <div className="w-11/12 max-w-[800px] mx-auto">
          <PromptDismissal textColor="white" />
          <div className="bg-white rounded-md">
            <PromptCardOutline className="p-4">
              <p className="text-center text-sm font-bold py-4">
                prompt not found
              </p>
            </PromptCardOutline>
          </div>
        </div>
      </ModalCard>
    );

  const {
    extraInfo: { body, title, tags, _count: count, createdAt, creator },
  } = prompt as {
    extraInfo: Promptype;
  };

  return (
    <ModalCard>
      <div className="w-11/12 max-w-[800px] mx-auto">
        <PromptDismissal textColor="white" />
        <div className="bg-white rounded-md">
          <PromptCardOutline className="p-4">
            <PromptHeader
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
            <InteractiveIconActions count={count.starredby} />
          </PromptCardOutline>
        </div>
      </div>
    </ModalCard>
  );
};

export default PromptModal;
