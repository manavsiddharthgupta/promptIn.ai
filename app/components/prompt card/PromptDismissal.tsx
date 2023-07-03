'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

const PromptDismissal = ({ textColor }: { textColor: string }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.back();
      }}
      className={`flex gap-4 items-center w-fit text-${textColor} cursor-pointer mb-2 transition-all ease-in-out duration-300`}
    >
      <ArrowBackIcon className="" />
      <p className="">back to feed</p>
    </div>
  );
};

export default PromptDismissal;
