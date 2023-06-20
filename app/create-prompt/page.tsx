'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TitleInputField from '../ui/TitleInputField';
import PromptTextArea from '../ui/PromptTextArea';
import PromptTagsField from '../ui/PromptTagsField';
import PromptHashTagField from '../ui/PromptHashTagField';
import Link from 'next/link';

const CreatePrompt = () => {
  return (
    <main className="px-4 min-[400px]:px-8 min-[600px]:px-4 lg:px-0 mt-8">
      <Card>
        <Link
          href="/"
          className="text-sm px-4 bg-black text-white pb-[3.25px] pt-[3px] rounded-lg flex gap-2 items-center w-fit"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 mr-1 pt-[0.5px]" />
          back to home
        </Link>
        <p className="font-bold text-4xl my-4">Create your prompt</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="w-full flex flex-col gap-8"
        >
          <TitleInputField />
          <PromptTextArea />
          <PromptTagsField />
          <PromptHashTagField />
          <Button type="submit">Create prompt</Button>
        </form>
      </Card>
    </main>
  );
};

export default CreatePrompt;
