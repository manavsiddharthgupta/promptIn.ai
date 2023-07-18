'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { MyPrompts } from './MyPrompts';
import { StarredPrompts } from './StarredPrompts';
import { BookmarkedPrompts } from './BookmarkedPrompts';
import { Prompt } from '@/app/lib/types/prompts';

export const ProfileFeed = ({
  params,
  bookmarked,
  starred,
  createdPrompts,
}: {
  params: { id: string };
  bookmarked: {
    prompt: Prompt;
  }[];
  starred: {
    prompt: Prompt;
  }[];
  createdPrompts: Prompt[];
}) => {
  const path = '/profile/' + params.id;

  let currentFeed = useSearchParams().get('feed');
  if (currentFeed === null) {
    currentFeed = 'prompts';
  }

  let feedComponent = <MyPrompts createdPrompts={createdPrompts} />;

  if (currentFeed === 'starred') {
    feedComponent = <StarredPrompts starredPrompts={starred} />;
  } else if (currentFeed === 'bookmarked') {
    feedComponent = <BookmarkedPrompts bookmarkedPrompts={bookmarked} />;
  }

  const feeds = [
    { type: 'prompts', link: '/' },
    { type: 'starred', link: '/?feed=starred' },
    { type: 'bookmarked', link: '/?feed=bookmarked' },
  ];

  return (
    <>
      <div
        id="feed"
        className="flex max-w-4xl mx-auto overflow-x-auto min-[450px]:px-6"
      >
        {feeds.map(({ type, link }) => {
          return (
            <Link
              key={type}
              className={`py-3 px-4 hover:bg-[#00000019] font-medium ${
                currentFeed === type ? 'border-b-2 border-black box-border' : ''
              }`}
              href={path + link + '#feed'}
            >
              {type}
            </Link>
          );
        })}
      </div>
      <div className="mx-auto min-[450px]:px-6 py-12">{feedComponent}</div>
    </>
  );
};
