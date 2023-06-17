'use client';
import Image from 'next/image';
import copyIcon from '../../utils/images/copy_icon.png';

const onClickHandler = (event: { preventDefault: () => void }) => {
  event.preventDefault();
};

const PromptHeader = ({
  profileIconSize,
  copyIconSize,
  userNameSize,
  tagsSize,
}: {
  profileIconSize: string;
  copyIconSize: string;
  userNameSize: string;
  tagsSize: string;
}) => {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2 truncate">
        <div
          onClick={onClickHandler}
          className={`border-[1px] border-black min-w-${profileIconSize} min-h-${profileIconSize} rounded-full`}
        ></div>
        <div className="flex flex-col justify-center truncate overflow-ellipsis">
          <div className="flex gap-2">
            <p
              onClick={onClickHandler}
              className={`text-${userNameSize} font-semibold truncate`}
            >
              @botter_code
            </p>
            <p className={`text-${userNameSize} font-black`}>·</p>
            <p className={`text-${userNameSize} font-semibold text-gray-600`}>
              2h ago
            </p>
          </div>
          <p className={`text-${tagsSize} text-gray-600 truncate`}>
            React Developer | Prompter | tester
          </p>
        </div>
      </div>
      <div
        onClick={onClickHandler}
        className={`border-[1px] cursor-pointer border-slate-400 bg-slate-300 min-w-${copyIconSize} min-h-${copyIconSize} h-6 rounded-full`}
      >
        <Image className="w-full h-full p-[5px]" src={copyIcon} alt="icon" />
      </div>
    </div>
  );
};

export default PromptHeader;
