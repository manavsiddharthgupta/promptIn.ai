'use client';
import Button from '@/app/ui/Button';
import { MailIcon, WebLink } from '@/app/ui/Icons';
import InputField from '@/app/ui/InputField';
import { ModalCard } from '@/app/ui/ModalCard';
import useInputField from '@/app/utils/hooks/useInputField';
import avatar from '../../utils/images/avatar.png';
import { ImageEdit } from './ImageEdit';
import { CropImage } from './Cropper';
import { ToastContainer } from 'react-toastify';
import { SetStateAction, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ProfileData } from './ProfileComponent';

const ProfileEdit = ({
  profileCardData: {
    extraInfo: {
      avatarName: initialAvatarName,
      email: initialEmail,
      name: initialName,
      image: initialImage,
      link: initailLink,
      oneLiner: initialOneLiner,
      profileTags,
    },
  },
  closeEditModalHandler,
}: {
  profileCardData: ProfileData;
  closeEditModalHandler: () => void;
}) => {
  const [croppedImage, setCroppedImage] = useState<string | null>(avatar.src); // initial by database
  const [showCropper, setCropper] = useState<boolean>(false); // cropper or image edit
  const [choosedImg, setChoosedImg] = useState<string | null>(null); // choosed image from file input

  const onSetChoosedImg = (value: SetStateAction<string | null>) => {
    setChoosedImg(value);
  };

  const {
    inputValue: avatarName,
    isInputValueValid: isAvatarNameValid,
    onChangeHandler: onAvatarNameChangeHandler,
    isTouched: isAvatarNameTouched,
    onBlurHandler: onAvatarNameBlurHandler,
  } = useInputField(initialAvatarName, () => true);

  const {
    inputValue: oneLiner,
    isInputValueValid: isoneLinerValid,
    onChangeHandler: onOneLinerChangeHandler,
    isTouched: isOneLinerTouched,
    onBlurHandler: onOneLinerBlurHandler,
  } = useInputField(initialOneLiner, () => true);

  const {
    inputValue: tags,
    isInputValueValid: isTagsValid,
    onChangeHandler: onTagsChangeHandler,
    isTouched: isTagsTouched,
    onBlurHandler: onTagsBlurHandler,
  } = useInputField(profileTags.join(' | '), (inputValue: string): boolean => {
    const tags: string[] = inputValue.split('|');

    if (tags.length > 3) {
      return false;
    }

    for (const tag of tags) {
      const alphanumericRegex = /^[a-zA-Z0-9/ ]+$/;
      if (!alphanumericRegex.test(tag.trim())) {
        return false;
      }
    }
    return true;
  });

  const {
    inputValue: email,
    isInputValueValid: isEmailValid,
    onChangeHandler: onEmailChangeHandler,
    isTouched: isEmailTouched,
    onBlurHandler: onEmailBlurHandler,
  } = useInputField(initialEmail, (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  });

  const {
    inputValue: website,
    isInputValueValid: isWebsiteValid,
    onChangeHandler: onWebsiteChangeHandler,
    isTouched: isWebsiteTouched,
    onBlurHandler: onWebsiteBlurHandler,
  } = useInputField(initailLink, (url) => {
    const pattern = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/;
    return pattern.test(url);
  });

  const onUpdateProfileHandler = () => {
    console.log('update profile : ', {
      avatarName,
      oneLiner,
      tags,
      email,
      website,
      image: croppedImage,
    });
  };

  return (
    <ModalCard>
      <div className="w-11/12 max-w-xl mx-auto bg-white rounded-lg h-full">
        <h1 className="text-[1.25rem] font-semibold px-8 py-3 border-[1px] border-[#69696970]">
          Edit Profile
        </h1>
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="my-4">
            {!showCropper && (
              <ImageEdit
                onSetChoosedImgHandler={onSetChoosedImg}
                srcImg={croppedImage!}
                onSetCropper={setCropper}
              />
            )}
            {showCropper && (
              <CropImage
                srcImg={choosedImg!}
                setCroppedImage={setCroppedImage}
                onSetCropper={setCropper}
              />
            )}
          </div>
          <div className="px-8">
            <InputField
              type="username"
              onChangeHandler={onAvatarNameChangeHandler}
              onBlurHandler={onAvatarNameBlurHandler}
              label="Avatar Name"
              value={avatarName}
              placeholder="Avatar Name"
            />
            <InputField
              type="text"
              onChangeHandler={onOneLinerChangeHandler}
              onBlurHandler={onOneLinerBlurHandler}
              label="One Liner"
              value={oneLiner}
              placeholder="Add a one liner"
            />
            <InputField
              type="text"
              onChangeHandler={onTagsChangeHandler}
              onBlurHandler={onTagsBlurHandler}
              label="Tags"
              value={tags}
              placeholder="E.g. Developer | AI | Prompter"
            />
            <label className="text-sm block mt-3">Social Accounts</label>
            <div className="flex gap-2 items-center">
              <MailIcon />
              <input
                value={email}
                className="block w-full rounded-sm py-1 px-2 outline-none border-[1px] border-black mt-1 font-normal text-xs"
                type="mail"
                placeholder="Add your email"
                onChange={onEmailChangeHandler}
                onBlur={onEmailBlurHandler}
              />
            </div>
            <div className="flex gap-2 items-center">
              <WebLink />
              <input
                value={website}
                className="block w-full rounded-sm py-1 px-2 outline-none border-[1px] border-black mt-1 font-normal text-xs"
                type="url"
                placeholder="Link your website"
                onChange={onWebsiteChangeHandler}
                onBlur={onWebsiteBlurHandler}
              />
            </div>
          </div>
          <div className="px-8 pb-4 flex justify-end gap-4">
            <Button
              onClick={closeEditModalHandler}
              className="hover:bg-black hover:text-white text-black rounded-md pt-1 px-3 pb-[5px] mt-4 transition-all ease-in-out duration-300"
              type="button"
            >
              Cancel
            </Button>
            <Button
              onClick={onUpdateProfileHandler}
              className="bg-black text-white rounded-md pt-1 px-3 pb-[5px] mt-4"
              type="button"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ModalCard>
  );
};

export default ProfileEdit;
