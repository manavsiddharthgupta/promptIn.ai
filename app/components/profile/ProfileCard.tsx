import Image from 'next/image';
import avatar from '../../utils/images/avatar.png';
import { MailIcon, WebLink, EditBtn } from '@/app/ui/Icons';
import { ProfileData } from '@/app/lib/types/profile';

export const ProfileCard = ({
  profileCardData: {
    extraInfo: { avatarName, email, name, image, link, oneLiner, profileTags },
  },
  openEditModalHandler,
}: {
  openEditModalHandler: () => void;
  profileCardData: ProfileData;
}) => {
  console.log(avatarName, email, name, image, link, oneLiner, profileTags);
  return (
    <div className="flex items-center my-12 flex-col max-w-2xl min-[450px]:p-8 p-4 hover:bg-[#00000012] mx-auto rounded-lg transition-all ease-in-out duration-200 relative">
      <div
        onClick={openEditModalHandler}
        className="absolute right-4 top-4 cursor-pointer"
      >
        <EditBtn />
      </div>
      <Image
        className="w-32 h-32 border-[1px] border-black rounded-full"
        src={avatar}
        alt="_profImg"
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
