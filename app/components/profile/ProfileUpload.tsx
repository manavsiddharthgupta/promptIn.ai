'use client';

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import '@uploadthing/react/styles.css';

import { generateComponents } from '@uploadthing/react';

import type { OurFileRouter } from '@/app/api/uploadthing/core';

import Image from 'next/image';
import avatar from '../../utils/images/avatar.png';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormFeedback from '../../ui/FormFeedback';

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();

export default function ProfileUpload() {
  const [image, setImage] = useState<string | undefined>(avatar.src);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <Image
        className="w-28 h-28 rounded-full mx-auto"
        src={image || ''}
        alt="edit-profile"
        width="90"
        height="90"
      />
      <div className="mt-1">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(
            res?:
              | {
                  fileUrl: string;
                  fileKey: string;
                }[]
              | undefined
          ) => {
            setError(null);
            if (res) {
              const data = res[0].fileUrl;
              setImage(data);
            }
            toast.success('Profile picture updated successfully!');
          }}
          onUploadError={(error: Error) => {
            setError(error.message);
            toast.error('Error uploading profile picture!');
          }}
        />
      </div>
      {error && (
        <div className="text-center">
          <FormFeedback>{error}</FormFeedback>
        </div>
      )}
    </>
  );
}
