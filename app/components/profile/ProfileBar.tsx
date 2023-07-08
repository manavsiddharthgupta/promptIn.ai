import Image from 'next/image';
import test from '../../utils/images/avatar.png';
import Button from '@/app/ui/Button';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Session } from 'next-auth';

export const ProfileBar = () => {
  const [isOn, setIsOn] = useState(false);

  const { data: session } = useSession() as { data: Session };

  const avatarName = session.user.avatarName
    ? session.user.avatarName
    : session.user.name;

  const imageUrl = session.user.image ? session.user.image : test;
  const id = session.user.id;
  const ProfilerTags = session.user.profileTags.join(' | ');

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div>
      <div className="flex gap-2 items-center p-1 rounded-md">
        <Image
          className="w-10 h-10 rounded-full"
          src={imageUrl}
          alt="__user"
          width={40}
          height={40}
        />
        <div className="truncate">
          <h2 className="text-sm font-semibold">{avatarName}</h2>
          <p className="text-[10px] text-gray-600">{ProfilerTags}</p>
        </div>
      </div>
      <Link
        className="h-9 flex items-center text-sm text-black px-3 my-1 hover:bg-black hover:text-white rounded-md"
        href="/" // temp code
      >
        Dashboard
      </Link>
      <Link
        className="h-9 flex items-center text-sm text-black px-3 my-1 hover:bg-black hover:text-white rounded-md"
        href={`/profile/${id}`} // temp code
      >
        My Profile
      </Link>
      <div className="flex justify-between my-1 px-3 py-2 items-center">
        <h2 className="text-sm">Dark Mode</h2>
        <div className="w-8">
          <div
            className={`flex bg-[#00000065] rounded-xl p-1 cursor-pointer ${
              isOn ? 'justify-end' : 'justify-start'
            }`}
            onClick={toggleSwitch}
          >
            <motion.div
              className={`w-3 h-3 rounded-full ${
                isOn ? 'bg-black' : 'bg-white'
              }`}
              layout
              transition={spring}
            />
          </div>
        </div>
      </div>
      <Button
        className="text-sm w-full bg-black text-white pt-1 pb-[6px] rounded-lg"
        type="button"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};
