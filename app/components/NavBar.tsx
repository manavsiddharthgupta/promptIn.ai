'use client';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ProfileBar } from './profile/ProfileBar';
import { useRef, useState } from 'react';
import { useClosePanel } from '../utils/hooks/useClosePanel';
import avatar from '../utils/images/avatar.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NavBar = () => {
  const pathname = usePathname();
  if (pathname === '/create-prompt') {
    return null;
  }

  const [isPanelOpened, setPanelStatus] = useState(false);
  const profileBarRef = useRef<HTMLInputElement>(null);
  const profileBtnRef = useRef<HTMLInputElement>(null);

  const onClosePanel = () => {
    setPanelStatus(false);
  };
  const onProfileBtnHandler = () => {
    setPanelStatus((state) => {
      return !state;
    });
  };

  useClosePanel(onClosePanel, profileBarRef, profileBtnRef);

  const { data: session, status } = useSession();

  console.log(session, status);

  let isLoggedIn = false;

  if (status != undefined && status === 'authenticated') {
    isLoggedIn = true;
  }

  return (
    <nav className="px-4 min-[400px]:px-8 min-[600px]:px-4 lg:px-4 flex rounded-md gap-3 py-4 items-center max-w-[70rem] mx-auto justify-between transition-all ease-in-out duration-300 relative">
      <p className="text-xs min-[600px]:text-sm transition-all ease-in-out duration-300">
        Find Your Prompt
      </p>
      <div className="flex gap-2 min-[600px]:gap-4 items-center transition-all ease-in-out duration-300">
        {isLoggedIn && (
          <Link
            href="/create-prompt"
            className="flex bg-black text-white rounded-[10px] px-3 min-[600px]:px-6 min-[600px]:text-sm text-xs items-center gap-1 h-9 min-[600px]:h-10 transition-all ease-in-out duration-300 min-w-fit pb-[2px]"
          >
            Create a Prompt
            <FontAwesomeIcon
              className="w-[12px] h-[12px] font-bold mt-[2px]"
              icon={faAdd}
            />
          </Link>
        )}
        {!isLoggedIn && pathname !== '/signin' && (
          <Link
            href="/signin"
            className="border-2 border-black text-black rounded-[10px] px-3 min-[600px]:px-6 min-[600px]:text-sm text-xs flex items-center gap-1 h-9 min-[600px]:h-10 hover:bg-black hover:text-white hover:border-transparent transition-all ease-in-out duration-300 min-w-fit pb-[2px]"
          >
            Sign In
          </Link>
        )}
        {!isLoggedIn && pathname === '/signin' && (
          <Link
            href="/signup"
            className="border-2 border-black text-black rounded-[10px] px-3 min-[600px]:px-6 min-[600px]:text-sm text-xs flex items-center gap-1 h-9 min-[600px]:h-10 hover:bg-black hover:text-white hover:border-transparent transition-all ease-in-out duration-300 min-w-fit pb-[2px]"
          >
            Sign Up
          </Link>
        )}

        {isLoggedIn && (
          <div ref={profileBtnRef}>
            <Image
              src={session?.user?.image || avatar}
              alt="avatar"
              onClick={onProfileBtnHandler}
              className="drop-shadow-sm min-w-[2rem] min-[600px]:w-10 min-[600px]:h-10 w-8 h-8 rounded-full cursor-pointer transition-all ease-in-out duration-300"
              width={32}
              height={32}
            />
          </div>
        )}
      </div>

      {isLoggedIn && isPanelOpened && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className="w-full max-w-[280px] rounded-md border-[#d1d1d1] border-[1px] drop-shadow-md absolute right-4 min-[400px]:right-8 min-[600px]:right-4 lg:right-4 top-16 bg-white p-2 z-20"
          ref={profileBarRef}
          children={<ProfileBar />}
        />
      )}
    </nav>
  );
};

export default NavBar;
