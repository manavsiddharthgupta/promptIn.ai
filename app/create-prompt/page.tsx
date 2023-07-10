'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TitleInputField from '../ui/TitleInputField';
import PromptTextArea from '../ui/PromptTextArea';
import PromptTagsField from '../ui/PromptTagsField';
import PromptHashTagField from '../ui/PromptHashTagField';
import Link from 'next/link';
import { useTagsField } from '../utils/hooks/useTagsField';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useInputField from '../utils/hooks/useInputField';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { postPromptData } from '../lib/prompts';
import { useRouter } from 'next/navigation';

const CreatePrompt = () => {
  const { allTags, inputRef, onKeyDownEvent } = useTagsField();
  const [isLoading, setIsLoading] = useState(false);

  const {
    inputValue: title,
    onChangeHandler: onTitleChange,
    isInputValueValid: isTitleValid,
    onBlurHandler: onTitleBlur,
    isTouched: isTitleTouched,
  } = useInputField('', () => true);

  const {
    inputValue: prompt,
    onChangeHandler: onPromptChange,
    isInputValueValid: isPromptValid,
    onBlurHandler: onPromptBlur,
    isTouched: isPromptTouched,
  } = useInputField('', () => true);

  const { data: session } = useSession() as { data: Session };
  const router = useRouter();

  const myId = session?.user?.id;

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(title, prompt, allTags, myId);
    if (isPromptValid && isTitleValid && allTags.length > 0 && myId) {
      const createdResponse = await postPromptData({
        title,
        body: prompt,
        tags: allTags,
        createdBy: myId,
      });
      console.log(createdResponse);
      if (createdResponse.status === 200) {
        toast.success('Prompt created successfully');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        toast.error('Prompt creation failed');
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <main className="px-4 min-[400px]:px-8 min-[600px]:px-4 lg:px-0 mt-8">
        <Card>
          <Link
            href="/"
            className="text-sm px-4 bg-black text-white pb-[3.75px] pt-[3px] rounded-lg flex gap-2 items-center w-fit"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 mr-1 pt-[1px]" />
            back to home
          </Link>
          <p className="font-bold text-4xl my-4">Create your prompt</p>
          <form
            onSubmit={onSubmitHandler}
            className="w-full flex flex-col gap-8"
          >
            <TitleInputField
              inputValue={title}
              onBlurHandler={onTitleBlur}
              onChangeHandler={onTitleChange}
            />
            <PromptTextArea
              inputValue={prompt}
              onBlurHandler={onPromptBlur}
              onChangeHandler={onPromptChange}
            />
            <PromptTagsField
              allTags={allTags}
              inpRef={inputRef}
              keyEvent={onKeyDownEvent}
            />
            <PromptHashTagField />
            <Button type="submit">
              {isLoading ? 'Creating...' : 'Create prompt'}
            </Button>
          </form>
        </Card>
      </main>
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
    </>
  );
};

export default CreatePrompt;
