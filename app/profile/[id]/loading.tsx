'use client';

import Card from '@/app/ui/Card';
import { Skeleton } from '@mui/material';

const ProfileLoading = () => {
  return (
    <Card>
      <div className="flex items-center my-12 flex-col max-w-2xl min-[450px]:p-8 p-4 bg-[#00000012] mx-auto rounded-lg transition-all ease-in-out duration-200 relative">
        <Skeleton variant="circular" width={144} height={144} />
        <Skeleton
          variant="rectangular"
          className="mt-2"
          width={200}
          height={30}
        />
        <Skeleton
          variant="rectangular"
          className="mt-2"
          width={350}
          height={20}
        />
        <Skeleton
          variant="rectangular"
          className="mt-1"
          width={300}
          height={20}
        />
        <Skeleton variant="rounded" className="mt-2" width={350} height={40} />
      </div>
    </Card>
  );
};

export default ProfileLoading;
