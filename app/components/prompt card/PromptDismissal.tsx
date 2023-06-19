'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

const PromptDismissal = ({
  textColor,
  hoverTextColor,
}: {
  textColor: string;
  hoverTextColor: string;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.back();
      }}
      className={`flex gap-4 items-center w-fit text-${textColor} hover:text-${hoverTextColor} cursor-pointer mb-2 transition-all ease-in-out duration-300`}
    >
      <ArrowBackIcon className="" />
      <p className="">back to feed</p>
    </div>
  );
};

export default PromptDismissal;
