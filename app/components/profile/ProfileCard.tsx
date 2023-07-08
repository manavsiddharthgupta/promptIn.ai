import Image from 'next/image';
import avatar from '../../utils/images/avatar.png';
import { MailIcon, WebLink, EditBtn } from '@/app/ui/Icons';
import { ProfileData } from '@/app/lib/types/profile';
import { useSession } from 'next-auth/react';

export const ProfileCard = ({
  profileCardData: {
    extraInfo: { id, avatarName, email, image, link, oneLiner, profileTags },
  },
  openEditModalHandler,
}: {
  openEditModalHandler: () => void;
  profileCardData: ProfileData;
}) => {
  const { data: session, status } = useSession();
  return (
    <div className="flex items-center my-12 flex-col max-w-2xl min-[450px]:p-8 p-4 hover:bg-[#00000012] mx-auto rounded-lg transition-all ease-in-out duration-200 relative">
      <div
        onClick={openEditModalHandler}
        className="absolute right-4 top-4 cursor-pointer"
      >
        {status === 'authenticated' && session.user.id === id && <EditBtn />}
      </div>
      <Image
        className="w-36 h-36 border-[1px] border-[#454545] rounded-full"
        src={image ? image : avatar}
        alt="_profImg"
        width={144}
        height={144}
      />
      <h1 className="text-black mt-2 font-semibold text-xl">
        @{avatarName ? avatarName : email!.split('@')[0]}
      </h1>
      <p className="text-[#000000ba] mt-1 text-base text-center">{oneLiner}</p>
      <p className="text-[#000000ba] text-base text-center">
        {profileTags.join(' | ')}
      </p>
      {email && (
        <div className="flex items-center gap-2 mt-2 text-[#000000ba]">
          <MailIcon />
          <a href="mailto:manavsiddharthgupta@gmail.com" className="text-sm">
            {email}
          </a>
        </div>
      )}
      {link && (
        <div className="flex items-center gap-2 text-[#000000ba]">
          <WebLink />
          <a
            href="https://manavgupta.vercel.app/"
            target="_blank"
            className="text-sm"
          >
            {link}
          </a>
        </div>
      )}
    </div>
  );
};
