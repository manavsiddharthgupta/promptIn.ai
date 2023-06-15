'use client';

import { useRouter } from 'next/navigation';

const PromptModal = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className="fixed w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.71)]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        prompt page {params.id}
      </div>
    </div>
  );
};

export default PromptModal;
