import Image from 'next/image';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const ImageEdit = ({
  onSetChoosedImgHandler,
  srcImg,
  onSetCropper,
}: {
  onSetChoosedImgHandler: (prevState: string) => void;
  srcImg: string;
  onSetCropper: (prevState: boolean) => void;
}) => {
  return (
    <div className="relative w-fit mx-auto">
      <Image
        className="w-28 h-28 rounded-full drop-shadow-md border-[1px] border-[#96969693]"
        src={srcImg || ''}
        alt="edit-profile"
        width="90"
        height="90"
      />
      <div className="absolute bottom-0 left-0 w-8 h-8 rounded-full bg-black flex justify-center items-center text-white z-0">
        <div className="w-full h-full relative">
          <label
            className="w-full h-full absolute top-0 left-0 z-10"
            htmlFor="file-input"
          >
            <input
              type="file"
              name="file-input"
              onChange={(e) => {
                const file = e.target.files![0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  onSetChoosedImgHandler(reader.result as string);
                  onSetCropper(true);
                };
              }}
              id="file-input"
              className="opacity-0 w-full h-full"
            />
            <AddPhotoAlternateIcon className="top-2/4 left-2/4 absolute -translate-x-1/2 -translate-y-1/2" />
          </label>
        </div>
      </div>
    </div>
  );
};
