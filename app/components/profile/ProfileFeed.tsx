'use client';
import Link from 'next/link';
import { useParams, useSearchParams, usePathname } from 'next/navigation';
import { MyPrompts } from './MyPrompts';
import { StarredPrompts } from './StarredPrompts';
import { BookmarkedPrompts } from './BookmarkedPrompts';
import { useEffect, useState } from 'react';
import { ProfileData } from '@/app/lib/types/profile';
import { getMyProfileData } from '@/app/lib/profile';
import { Prompt, PromptExtend } from '@/app/lib/types/prompts';
import { CircularLoading } from '../CircularProgress';

export const ProfileFeed = () => {
  const [createdPrompts, setCreatedPrompts] = useState<Prompt[]>([]);
  const [starred, setStarred] = useState<PromptExtend[]>([]);
  const [bookmarked, setBookmarked] = useState<PromptExtend[]>([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const getPrompts = async () => {
      setLoading(true);
      const profileDetails: ProfileData = await getMyProfileData(params.id);
      console.log(profileDetails);
      setCreatedPrompts(profileDetails.extraInfo.createdPrompts);
      setStarred(profileDetails.extraInfo.starredPrompt);
      setBookmarked(profileDetails.extraInfo.bookmarkedPrompt);
      setLoading(false);
    };
    if (pathname.startsWith('/profile')) {
      getPrompts();
    }
  }, [pathname]);

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
      <div className="mx-auto min-[450px]:px-6 py-12">
        {loading ? <CircularLoading /> : feedComponent}
      </div>
    </>
  );
};
