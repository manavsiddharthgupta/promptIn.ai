'use client';
import Image from 'next/image';
import { createdAtTimeStamp } from '@/app/lib/prompts';
import imgAvatar from '@/app/utils/images/avatar.png';
import { useRouter } from 'next/navigation';
import copy from '@/app/utils/images/copy.png';
import tick from '@/app/utils/images/double-tick.png';
import { toast } from 'react-toastify';
import { useState } from 'react';

interface PromptHeaderProps {
  creator?: {
    id: string;
    avatarName: string | null;
    image: string | null;
    profileTags: string[];
  };
  createdAt: string;
  userNameSize?: string;
  prompt: string;
}

const PromptHeader = ({
  prompt,
  creator,
  createdAt,
  userNameSize,
}: PromptHeaderProps) => {
  const [isCopying, setIsCopying] = useState(false);
  const router = useRouter();
  const timeStamp = createdAtTimeStamp(createdAt);

  const avatar = creator ? creator.avatarName : 'anonymous';
  const image = creator ? creator.image : imgAvatar.src;
  const profileTags = creator ? creator.profileTags : [];
  const id = creator ? creator.id : '';

  const onClickHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    router.push(`/profile/${id}`);
  };

  const onCopyHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!isCopying) {
      setIsCopying(true);
      navigator.clipboard.writeText(prompt);
      toast.info('Copied to clipboard');
      setTimeout(() => {
        setIsCopying(false);
      }, 2000);
    }
  };

  const icon = isCopying ? tick : copy;
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex gap-2 truncate">
        <Image
          onClick={onClickHandler}
          src={image!}
          alt="avatar"
          width={40}
          height={40}
          className="min-w-[2.5rem] min-h-[2.5rem] rounded-full cursor-pointer"
        />
        <div className="flex flex-col justify-center truncate overflow-ellipsis">
          <div className="flex gap-2">
            <p
              onClick={onClickHandler}
              className={`text-${userNameSize} font-semibold truncate hover:underline cursor-pointer`}
            >
              @{avatar}
            </p>
            <p className={`text-${userNameSize} font-black`}>·</p>
            <p className={`text-${userNameSize} font-semibold text-gray-600`}>
              {createdAt ? timeStamp : 0} ago
            </p>
          </div>
          <p className={`text-[12px] text-gray-600 truncate`}>
            {profileTags.join(' | ')}
          </p>
        </div>
      </div>
      <div
        onClick={onCopyHandler}
        className="border-[1px] cursor-pointer border-slate-300 min-w-[1.5rem] min-h-[1.5rem] h-6 rounded-full flex items-center justify-center"
      >
        <Image width={12} height={12} src={icon} alt="copy-to-clipboard" />
      </div>
    </div>
  );
};

export default PromptHeader;
