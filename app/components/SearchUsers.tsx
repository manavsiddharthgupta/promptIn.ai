'use client';
import Image from 'next/image';

const onClickHandler = (event: { preventDefault: () => void }) => {
  event.preventDefault();
};

export const SearchUsers = () => {
  return (
    <div className="flex gap-4 truncate mt-2 px-4 py-2 hover:bg-[#00000017] rounded-lg cursor-pointer">
      <div
        onClick={onClickHandler}
        className={`border-[1px] border-black min-w-[2.5rem] min-h-[2.5rem] rounded-full`}
      ></div>
      <div className="flex flex-col justify-center truncate overflow-ellipsis">
        <div className="flex gap-2">
          <p
            onClick={onClickHandler}
            className={`text-[13px] font-semibold truncate`}
          >
            @botter_code
          </p>
          <p className={`text-[13px] font-black`}>·</p>
          <p className={`text-[13px] font-semibold text-gray-600`}>2h ago</p>
        </div>
        <p className={`text-[12px] text-gray-600 truncate`}>
          React Developer | Prompter | tester
        </p>
      </div>
    </div>
  );
};
