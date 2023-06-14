'use client';
import PromptCardIcons from '../../ui/PromptCardIcons';

const InteractiveIconActions = () => {
  const onClickHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className="flex gap-4 items-center mt-2 px-1">
      <div
        onClick={onClickHandler}
        className="flex gap-[1px] items-center text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150"
      >
        <PromptCardIcons iconType="star" selected={false} />
        <span className="text-xs font-semibold mt-1 text-inherit">56</span>
      </div>
      <div
        onClick={onClickHandler}
        className="flex gap-[1px] items-center text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150"
      >
        <PromptCardIcons iconType="bookmark" selected={false} />
      </div>
      <div
        onClick={onClickHandler}
        className="text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150"
      >
        <PromptCardIcons iconType="share" />
      </div>
    </div>
  );
};

export default InteractiveIconActions;
