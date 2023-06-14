import InteractiveIconActions from './InteractiveIconActions';
import PromptCardHeader from './PromptCardHeader';

const PromptCard = ({
  promptData,
}: {
  promptData: {
    title: string;
    prompt: string;
  };
}) => {
  return (
    <div className="border-[1.5px] border-black w-full rounded-md mb-4 break-inside-avoid p-[10px] cursor-pointer">
      <PromptCardHeader />
      <div className="mt-2 px-1 flex flex-col gap-1">
        <h1 className="text-[15px] font-semibold">{promptData.title}</h1>
        <p className="text-[13px] text-slate-600 line-clamp-12">
          {promptData.prompt}
        </p>
      </div>
      <p className="mt-[2px] px-1 font-normal text-[#1d9bf0] text-[13px] truncate"></p>
      <InteractiveIconActions />
    </div>
  );
};

export default PromptCard;
