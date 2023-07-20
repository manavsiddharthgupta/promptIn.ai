'use client';
import { CircularProgress } from '@mui/material';

export const CircularLoading = () => {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <CircularProgress />
    </div>
  );
};
