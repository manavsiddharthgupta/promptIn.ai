import Image from 'next/image';
import avatar from '../../utils/images/avatar.png';
import { MailIcon, WebLink, EditBtn } from '@/app/ui/Icons';
import Button from '@/app/ui/Button';

export const ProfileCard = () => {
  return (
    <div className="flex items-center my-12 flex-col max-w-2xl min-[450px]:p-8 p-4 hover:bg-[#00000012] mx-auto rounded-lg transition-all ease-in-out duration-200 relative">
      <Button type="button" className="absolute right-4 top-4 cursor-pointer">
        <EditBtn />
      </Button>
      <Image
        className="w-32 h-32 border-[1px] border-black rounded-full"
        src={avatar}
        alt="_profImg"
      />
      <h1 className="text-black mt-2 font-semibold text-xl">@botter_iter</h1>
      <p className="text-[#000000ba] mt-1 text-base text-center">
        Developer | Designer | Prompter
      </p>
      <p className="text-[#000000ba] text-base text-center">
        Hi, I am tech and ai enthusiast 🤖. I work on my projects when i'am
        free.
      </p>
      <div className="flex items-center gap-2 mt-2 text-[#000000ba]">
        <MailIcon />
        <a href="mailto:manavsiddharthgupta@gmail.com" className="text-sm">
          manavsiddharthgupta@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-2 text-[#000000ba]">
        <WebLink />
        <a
          href="https://manavgupta.vercel.app/"
          target="_blank"
          className="text-sm"
        >
          manavgupta.vercel.app
        </a>
      </div>
    </div>
  );
};
