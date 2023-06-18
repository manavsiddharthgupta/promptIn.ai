'use client';
import Button from '../ui/Button';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  if (pathname === '/create-prompt') {
    return null;
  }

  const isLoggedIn = true; // temp code

  return (
    <nav className="px-4 min-[400px]:px-8 min-[600px]:px-4 lg:px-0 flex rounded-md gap-3 py-4 items-center max-w-5xl mx-auto justify-between transition-all ease-in-out duration-300">
      <p className="text-xs min-[600px]:text-sm transition-all ease-in-out duration-300">
        Find Your Prompt
      </p>
      <div className="flex gap-2 min-[600px]:gap-4 items-center transition-all ease-in-out duration-300">
        {isLoggedIn && (
          <Link
            href="/create-prompt"
            className="flex bg-blue-500 text-white rounded-[10px] px-3 min-[600px]:px-6 min-[600px]:text-sm text-xs items-center gap-1 h-9 min-[600px]:h-10 transition-all ease-in-out duration-300 min-w-fit pb-[2px]"
          >
            Create a Prompt
            <FontAwesomeIcon
              className="w-[12px] h-[12px] font-bold mt-[2px]"
              icon={faAdd}
            />
          </Link>
        )}
        {!isLoggedIn && (
          <Link
            href="/signin"
            className="border-2 border-blue-500 text-blue-500 rounded-[10px] px-3 min-[600px]:px-6 min-[600px]:text-sm text-xs flex items-center gap-1 h-9 min-[600px]:h-10 hover:bg-blue-500 hover:text-white hover:border-transparent transition-all ease-in-out duration-300 min-w-fit pb-[2px]"
          >
            Sign In
          </Link>
        )}
        {isLoggedIn && (
          <div className="border-blue-500 border-2 min-w-[2rem] min-[600px]:w-10 min-[600px]:h-10 w-8 h-8 rounded-full cursor-pointer transition-all ease-in-out duration-300"></div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
