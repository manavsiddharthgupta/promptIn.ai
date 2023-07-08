'use client';
import Button from '@/app/ui/Button';
import { MailIcon, WebLink } from '@/app/ui/Icons';
import InputField from '@/app/ui/InputField';
import { ModalCard } from '@/app/ui/ModalCard';
import useInputField from '@/app/utils/hooks/useInputField';
import avatar from '../../utils/images/avatar.png';
import { ImageEdit } from './ImageEdit';
import { CropImage } from './Cropper';
import { toast } from 'react-toastify';
import { SetStateAction, useState } from 'react';
import { ProfileData } from '@/app/lib/types/profile';
import FormFeedback from '@/app/ui/FormFeedback';
import { useRouter } from 'next/navigation';

const ProfileEdit = ({
  profileCardData: {
    extraInfo: {
      id: profileId,
      avatarName: initialAvatarName,
      email: initialEmail,
      link: initailLink,
      oneLiner: initialOneLiner,
      image: initialImage,
      profileTags,
    },
  },
  closeEditModalHandler,
}: {
  profileCardData: ProfileData;
  closeEditModalHandler: () => void;
}) => {
  const [croppedImage, setCroppedImage] = useState<string | null>(
    initialImage ? initialImage : avatar.src
  ); // initial by database
  const [showCropper, setCropper] = useState<boolean>(false); // cropper or image edit
  const [choosedImg, setChoosedImg] = useState<string | null>(null); // choosed image from file input
  const [isLoading, setIsLoading] = useState<boolean>(false); // loading state

  const router = useRouter();
  const {
    inputValue: avatarName,
    isInputValueValid: isAvatarNameValid,
    onChangeHandler: onAvatarNameChangeHandler,
    isTouched: isAvatarNameTouched,
    onBlurHandler: onAvatarNameBlurHandler,
  } = useInputField(initialAvatarName, (inputValue) => inputValue.length > 0);

  const {
    inputValue: oneLiner,
    isInputValueValid: isoneLinerValid,
    onChangeHandler: onOneLinerChangeHandler,
    isTouched: isOneLinerTouched,
    onBlurHandler: onOneLinerBlurHandler,
  } = useInputField(initialOneLiner, (inputValue) => inputValue.length > 0);

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

  const onSetChoosedImg = (value: SetStateAction<string | null>) => {
    setChoosedImg(value);
  };

  const onUpdateProfileHandler = () => {
    setIsLoading(true);
    if (
      isAvatarNameValid &&
      isoneLinerValid &&
      isTagsValid &&
      isEmailValid &&
      isWebsiteValid
    ) {
      const changedData: Record<string, any> = {};
      isAvatarNameTouched && (changedData['avatarName'] = avatarName);
      isOneLinerTouched && (changedData['oneLiner'] = oneLiner);
      isTagsTouched &&
        (changedData['profileTags'] = tags.split('|').map((tag) => tag.trim()));
      isEmailTouched && (changedData['email'] = email);
      isWebsiteTouched && (changedData['link'] = website);

      console.log('changedData : ', changedData);
      fetch('http://localhost:3000/api/user/' + profileId, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...changedData,
          image: croppedImage,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          console.log(data);
          if (data.status === 200) {
            toast.success('Profile updated successfully');
            router.refresh();
            closeEditModalHandler();
          } else {
            toast.error(data.message);
          }
        });
    } else {
      setIsLoading(false);
      toast.error('Please fill all the fields correctly');
    }
    // console.log('update profile : ', {
    //   avatarName,
    //   oneLiner,
    //   tags,
    //   email,
    //   website,
    //   image: croppedImage,
    // });
    // console.log(
    //   isAvatarNameValid,
    //   isoneLinerValid,
    //   isTagsValid,
    //   isEmailValid,
    //   isWebsiteValid
    // );
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
            {isAvatarNameTouched && !isAvatarNameValid && (
              <FormFeedback>Avatar name is invalid</FormFeedback>
            )}
            <InputField
              type="text"
              onChangeHandler={onOneLinerChangeHandler}
              onBlurHandler={onOneLinerBlurHandler}
              label="One Liner"
              value={oneLiner}
              placeholder="Add a one liner"
            />
            {isOneLinerTouched && !isoneLinerValid && (
              <FormFeedback>Your oneliner is invalid</FormFeedback>
            )}
            <InputField
              type="text"
              onChangeHandler={onTagsChangeHandler}
              onBlurHandler={onTagsBlurHandler}
              label="Tags"
              value={tags}
              placeholder="E.g. Developer | AI | Prompter"
            />
            {isTagsTouched && !isTagsValid && (
              <FormFeedback>Your tags are invalid</FormFeedback>
            )}
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
            {isEmailTouched && !isEmailValid && (
              <FormFeedback>
                <span className="text-xs">Your Email is not valid</span>
              </FormFeedback>
            )}
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
            {isWebsiteTouched && !isWebsiteValid && (
              <FormFeedback>
                <span className="text-xs">Your Link is not valid</span>
              </FormFeedback>
            )}
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
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </div>
      </div>
    </ModalCard>
  );
};
export default ProfileEdit;
