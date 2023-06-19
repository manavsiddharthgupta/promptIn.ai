'use client';
import InteractiveIconActions from '@/app/components/prompt card/InteractiveIconActions';
import { PromptBody } from '@/app/components/prompt card/PromptBody';
import { PromptCardOutline } from '@/app/components/prompt card/PromptCardOutline';
import PromptDismissal from '@/app/components/prompt card/PromptDismissal';
import { PromptHashTags } from '@/app/components/prompt card/PromptHastags';
import PromptHeader from '@/app/components/prompt card/PromptHeader';
import dataArray from '@/app/utils/store/sampledata';

const PromptModal = ({ params }: { params: { id: number } }) => {
  const filteredData = dataArray.filter((data) => data.id === +params.id);
  const promptData = {
    title: filteredData[0].title,
    prompt: filteredData[0].prompt,
  };
  return (
    <>
      <div className="z-0 fixed w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.71)] p-4"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11/12 max-w-[800px]">
        <PromptDismissal textColor="[#cbc3c3]" hoverTextColor="white" />
        <div className="bg-white rounded-md">
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
    </>
  );
};

export default PromptModal;
