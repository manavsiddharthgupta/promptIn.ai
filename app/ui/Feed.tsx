'use client';
import { usePathname } from 'next/navigation';
const FeedWrap = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  if (path !== '/' && !path.startsWith('/prompts')) {
    return null;
  }
  return children;
};

export default FeedWrap;
