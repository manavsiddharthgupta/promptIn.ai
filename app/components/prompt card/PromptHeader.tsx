'use client';
import Image from 'next/image';
import copyIcon from '../../utils/images/copy_icon.png';
import { createdAtTimeStamp } from '@/app/lib/prompts';
import imgAvatar from '@/app/utils/images/avatar.png';
import { useRouter } from 'next/navigation';

interface PromptHeaderProps {
  creator?: {
    id: string;
    avatarName: string | null;
    image: string | null;
    profileTags: string[];
  };
  createdAt: string;
  userNameSize?: string;
}

const PromptHeader = ({
  creator,
  createdAt,
  userNameSize,
}: PromptHeaderProps) => {
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
        // copy to clipboard
        className={`border-[1px] cursor-pointer border-slate-400 bg-slate-300 min-w-[1.5rem] min-h-[1.5rem] h-6 rounded-full`}
      >
        <Image className="w-full h-full p-[5px]" src={copyIcon} alt="icon" />
      </div>
    </div>
  );
};

export default PromptHeader;
