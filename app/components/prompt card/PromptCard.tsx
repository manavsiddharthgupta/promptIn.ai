import InteractiveIconActions from './InteractiveIconActions';
import PromptHeader from './PromptHeader';
import { PromptCardOutline } from './PromptCardOutline';
import { PromptHashTags } from './PromptHastags';
import { PromptBody } from './PromptBody';

const PromptCard = ({
  promptData,
}: {
  promptData: {
    title: string;
    prompt: string;
  };
}) => {
  return (
    <PromptCardOutline className="mb-4 break-inside-avoid p-[10px]">
      <PromptHeader
        profileIconSize="[2.5rem]"
        copyIconSize="6"
        userNameSize="[13px]"
        tagsSize="[12px]"
      />
      <PromptBody
        promptDesc={promptData.prompt}
        promptTitle={promptData.title}
        PromptTitleSize="[15px]"
        PromptDescSize="[13px]"
        extraStyle="line-clamp-12"
      />
      <PromptHashTags />
      <InteractiveIconActions />
    </PromptCardOutline>
  );
};

export default PromptCard;
