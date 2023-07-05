import React, { useState, useCallback } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import Slider from '@mui/material/Slider';
import getCroppedImg from '@/app/utils/cropper/cropImage';
import Button from '@/app/ui/Button';
import dogImg from '@/app/utils/images/avatar.png';
import { toast } from 'react-toastify';

import { generateReactHelpers } from '@uploadthing/react/hooks';

import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

interface croppedAreaPixels {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const CropImage = ({
  srcImg,
  setCroppedImage,
  onSetCropper,
}: {
  srcImg: string;
  setCroppedImage: (prevState: string) => void;
  onSetCropper: (prevState: boolean) => void;
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<croppedAreaPixels | null>(null);

  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onClientUploadComplete: () => {
      toast.success('Profile picture updated successfully!');
    },
    onUploadError: () => {
      toast.error('Error uploading profile picture!');
    },
  });

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const realImg = srcImg ? srcImg : dogImg.src;

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(realImg, croppedAreaPixels!);
      setCroppedImage(croppedImage!);

      const blobRes = await fetch(croppedImage!);
      const blob = await blobRes.blob();
      const file = new File([blob], 'avatar.jpg', {
        type: 'image/jpeg',
      });
      const response = await startUpload([file]);
      console.log(response); // save on database
      onSetCropper(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  return (
    <>
      <div className="px-8 text-center">
        <div className="h-[400px] relative overflow-hidden rounded-lg">
          <Cropper
            image={realImg}
            crop={crop}
            zoom={zoom}
            aspect={4 / 4}
            cropShape="round"
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className="relative">
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(Number(zoom))}
            classes={{ root: 'slider' }}
          />
        </div>
        <Button
          className="bg-black text-white pt-1 px-4 pb-[5px] rounded-md"
          type="button"
          disabled={isUploading}
          onClick={showCroppedImage}
        >
          {isUploading ? 'Loading...' : 'Upload Image'}
        </Button>
      </div>
    </>
  );
};
