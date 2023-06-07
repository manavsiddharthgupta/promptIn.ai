import Image from 'next/image';
import copyIcon from '../utils/images/copy_icon.png';
import PromptCardIcons from '../ui/PromptCardIcons';

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
          <div className="flex flex-col justify-center truncate overflow-ellipsis">
            <div className="flex gap-2">
              <p className="text-[13px] font-semibold truncate">@botter_code</p>
              <p className="text-[13px] font-black">·</p>
              <p className="text-[13px] font-semibold text-gray-600">2h ago</p>
            </div>
            <p className="text-[12px] text-gray-600 truncate">
              React Developer | Prompter | tester
            </p>
          </div>
        </div>
        <div className="border-[1px] cursor-pointer border-slate-400 bg-slate-300 min-w-[1.5rem] min-h-[1.5rem] h-6 rounded-full">
          <Image className="w-full h-full p-[5px]" src={copyIcon} alt="icon" />
        </div>
      </div>
      <div className="mt-2 px-1 flex flex-col gap-1">
        <h1 className="text-[15px] font-semibold">{promptData.title}</h1>
        <p className="text-[13px] text-slate-600 line-clamp-12">
          {promptData.prompt}
        </p>
      </div>
      <p className="mt-[2px] px-1 font-normal text-[#1d9bf0] text-[13px] truncate"></p>
      <div className="flex gap-4 items-center mt-2 px-1">
        <div className="flex gap-[1px] items-center text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150">
          <PromptCardIcons iconType="star" selected={false} />
          <span className="text-xs font-semibold mt-1 text-inherit">56</span>
        </div>
        <div className="flex gap-[1px] items-center text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150">
          <PromptCardIcons iconType="bookmark" selected={false} />
        </div>
        <div className="text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150">
          <PromptCardIcons iconType="share" />
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
