import InteractiveIconActions from '@/app/components/prompt card/InteractiveIconActions';
import { PromptBody } from '@/app/components/prompt card/PromptBody';
import { PromptCardOutline } from '@/app/components/prompt card/PromptCardOutline';
import PromptDismissal from '@/app/components/prompt card/PromptDismissal';
import { PromptHashTags } from '@/app/components/prompt card/PromptHastags';
import PromptHeader from '@/app/components/prompt card/PromptHeader';
import dataArray from '@/app/utils/store/sampledata';

const PromptPage = ({ params }: { params: { id: number } }) => {
  const filteredData = dataArray.filter((data) => data.id === +params.id);
  const promptData = {
    title: filteredData[0].title,
    prompt: filteredData[0].prompt,
  };
  return (
    <div className="h-[calc(100vh-72px)] flex justify-center items-center">
      <div className="w-full max-w-[800px] bg-white rounded-md">
        <PromptDismissal textColor="black" />
        <PromptCardOutline className="p-4">
          <PromptHeader userNameSize="[13px]" />
          <PromptBody
            promptDesc={promptData.prompt}
            promptTitle={promptData.title}
            PromptTitleSize="[16px]"
            PromptDescSize="[14px]"
            extraStyle="max-h-[200px] overflow-auto"
          />
          <PromptHashTags />
          <InteractiveIconActions />
        </PromptCardOutline>
      </div>
    </div>
  );
};

export default PromptPage;
