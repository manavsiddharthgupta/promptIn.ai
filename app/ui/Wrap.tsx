'use client';
import { usePathname } from 'next/navigation';
const Wrap = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  if (path !== '/') {
    return null;
  }
  return children;
};

export default Wrap;
