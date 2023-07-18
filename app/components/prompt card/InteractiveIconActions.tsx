'use client';
import { useCallback, useEffect, useState, useTransition } from 'react';
import PromptCardIcons from '../../ui/PromptCardIcons';
import { useSession } from 'next-auth/react';

const InteractiveIconActions = ({
  count,
  promptId,
}: {
  count: number;
  promptId: string;
}) => {
  const [starred, setStarred] = useState(false);
  const [starCount, setStarCount] = useState(count);
  const [isPending, startTransition] = useTransition();
  const session = useSession();

  const getStarData = useCallback(async () => {
    const response = await fetch(`/api/prompts/${promptId}/star`);
    const message = await response.json();
    console.log(message);
    if (message.status === 200) {
      setStarred(message.hasStar);
      setStarCount(message.totalStars);
    }
  }, []);

  useEffect(() => {
    getStarData();
  }, []);
  const toggleStar = async (promptId: string) => {
    const response = await fetch(`/api/prompts/${promptId}/star`, {
      method: 'PATCH',
    });
    const message = await response.json();

    return message;
  };
  const onClickHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const onStarClickHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (session.status === 'authenticated') {
      if (!isPending) {
        const res = await toggleStar(promptId);
        console.log(res);
        startTransition(() => {
          setStarred(!starred);
          setStarCount(res.totalStars);
        });
      }
    } else {
      console.log('not authenticated');
    }
  };

  return (
    <div className="flex gap-4 items-center mt-2 px-1">
      <div
        onClick={onStarClickHandler}
        className="flex gap-[1px] items-center text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150"
      >
        <PromptCardIcons iconType="star" selected={starred} />
        <span className="text-xs font-semibold mt-1 text-inherit">
          {starCount}
        </span>
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
