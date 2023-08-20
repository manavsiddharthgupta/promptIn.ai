'use client';
import { useCallback, useEffect, useState, useTransition } from 'react';
import PromptCardIcons from '../../ui/PromptCardIcons';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Skeleton } from '@mui/material';
import { toast } from 'react-toastify';

const InteractiveIconActions = ({
  count,
  promptId,
}: {
  count: number;
  promptId: string;
}) => {
  const [starred, setStarred] = useState(false);
  const [starCount, setStarCount] = useState(count);
  const [bookmarked, setBookmarked] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setLoading] = useState(false);
  const session = useSession();
  const path = usePathname();
  const getStarData = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/prompts/${promptId}/star`);
    const message = await response.json();
    console.log(message);
    if (message.status === 200) {
      setStarred(message.hasStar);
      setStarCount(message.totalStars);
    }
  }, []);

  const getBookmarkData = useCallback(async () => {
    const response = await fetch(`/api/prompts/${promptId}/bookmark`);
    const message = await response.json();
    console.log(message);
    if (message.status === 200) {
      setBookmarked(message.isBookmarked);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (
      path === '/' ||
      path === `/prompts/${promptId}` ||
      path.startsWith('/profile')
    ) {
      getStarData();
      getBookmarkData();
    }
  }, [path]);
  const toggleStar = async (promptId: string) => {
    const response = await fetch(`/api/prompts/${promptId}/star`, {
      method: 'PATCH',
    });
    const message = await response.json();

    return message;
  };

  const toggleBookmark = async (promptId: string) => {
    const response = await fetch(`/api/prompts/${promptId}/bookmark`, {
      method: 'PATCH',
    });
    const message = await response.json();
    return message;
  };
  const onShareClickHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigator.clipboard.writeText(
      `${window.location.origin}/prompts/${promptId}`
    );
  };

  const onBookmarkClickHandler = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    if (session.status === 'authenticated') {
      const res = await toggleBookmark(promptId);
      console.log(res);
      setBookmarked(!bookmarked);
    } else {
      toast.error('You need to be logged in to bookmark a prompt', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      console.log('not authenticated'); // custom modal
    }
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
      toast.error('★ You need to be logged in to star a prompt', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      console.log('not authenticated'); // custom modal
    }
  };

  return (
    <div className="flex gap-4 items-center mt-2 px-1">
      {!isLoading && (
        <>
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
            onClick={onBookmarkClickHandler}
            className="flex gap-[1px] items-center text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150"
          >
            <PromptCardIcons iconType="bookmark" selected={bookmarked} />
          </div>
          <div
            onClick={onShareClickHandler}
            className="text-gray-600 hover:text-blue-500 cursor-pointer transition-all ease-in-out duration-150"
          >
            <PromptCardIcons iconType="share" />
          </div>
        </>
      )}
      {isLoading && <Skeleton variant="rectangular" width={100} height={28} />}
    </div>
  );
};

export default InteractiveIconActions;
