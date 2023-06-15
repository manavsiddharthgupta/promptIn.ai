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

  return (
    <nav className="flex rounded-md gap-6 py-4 items-center max-w-5xl mx-auto justify-between">
      <p>Find Your Prompt</p>
      <div className="flex gap-4">
        <Link
          href="/create-prompt"
          className="bg-blue-500 text-white rounded-[10px] px-6 text-sm flex items-center gap-1 h-10"
        >
          Create a Prompt
          <FontAwesomeIcon
            className="w-[12px] h-[12px] font-bold mt-[2px]"
            icon={faAdd}
          />
        </Link>
        <Button
          type="button"
          className="border-2 border-blue-500 text-blue-500 rounded-[10px] px-6 text-sm flex items-center gap-1 h-10 hover:bg-blue-500 hover:text-white hover:border-transparent"
        >
          Sign In
        </Button>
        <div className="border-blue-500 border-2 w-10 h-10 rounded-full"></div>
      </div>
    </nav>
  );
};

export default NavBar;
