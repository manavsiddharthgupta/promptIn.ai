import Image from 'next/image';
import copyIcon from '../utils/images/copy_icon.png';

const PromptCard = ({
  promptData,
}: {
  promptData: {
    title: string;
    prompt: string;
  };
}) => {
  return (
    <div className="border-[1.5px] border-black w-full rounded-md mb-4 break-inside-avoid p-[10px]">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 truncate">
          <div className="border-[1px] border-black min-w-[2.5rem] min-h-[2.5rem] h-10 rounded-full"></div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-2">
              <p className="text-xs font-semibold">@botter_code</p>
              <p className="text-xs font-black">·</p>
              <p className="text-xs font-semibold text-gray-600">2h ago</p>
            </div>
            <p className="text-xs text-gray-600">
              React Developer | Prompter | tester
            </p>
          </div>
        </div>
        <div className="border-[1px] cursor-pointer border-slate-400 bg-slate-300 min-w-[1.5rem] min-h-[1.5rem] h-6 rounded-full">
          <Image className="w-full h-full p-[5px]" src={copyIcon} alt="icon" />
        </div>
      </div>
      <div className="mt-2 px-1 flex flex-col gap-1">
        <h1 className="text-sm font-semibold">{promptData.title}</h1>
        <p className="text-xs text-slate-600">{promptData.prompt}</p>
      </div>
    </div>
  );
};

export default PromptCard;
