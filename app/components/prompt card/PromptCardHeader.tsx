'use client';
import Image from 'next/image';
import copyIcon from '../../utils/images/copy_icon.png';

const onClickHandler = (event: { preventDefault: () => void }) => {
  event.preventDefault();
};

const PromptCardHeader = () => {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2 truncate">
        <div
          onClick={onClickHandler}
          className="border-[1px] border-black min-w-[2.5rem] min-h-[2.5rem] h-10 rounded-full"
        ></div>
        <div className="flex flex-col justify-center truncate overflow-ellipsis">
          <div className="flex gap-2">
            <p
              onClick={onClickHandler}
              className="text-[13px] font-semibold truncate"
            >
              @botter_code
            </p>
            <p className="text-[13px] font-black">·</p>
            <p className="text-[13px] font-semibold text-gray-600">2h ago</p>
          </div>
          <p className="text-[12px] text-gray-600 truncate">
            React Developer | Prompter | tester
          </p>
        </div>
      </div>
      <div
        onClick={onClickHandler}
        className="border-[1px] cursor-pointer border-slate-400 bg-slate-300 min-w-[1.5rem] min-h-[1.5rem] h-6 rounded-full"
      >
        <Image className="w-full h-full p-[5px]" src={copyIcon} alt="icon" />
      </div>
    </div>
  );
};

export default PromptCardHeader;
