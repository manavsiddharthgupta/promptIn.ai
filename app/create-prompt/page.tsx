import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TitleInputField from '../ui/TitleInputField';
import PromptTextArea from '../ui/PromptTextArea';

const CreatePrompt = () => {
  return (
    <main className="px-4 min-[400px]:px-8 min-[600px]:px-4 lg:px-0 mt-8">
      <Card>
        <Button
          type="button"
          className="px-4 bg-blue-500 text-white pb-[4.25px] pt-[3px] rounded-lg flex gap-2 items-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 mr-1 pt-[1.5px]" />
          back to home
        </Button>
        <p className="font-bold text-4xl my-4">Create your prompt</p>
        <form className="max-w-[700px] flex flex-col gap-8">
          <TitleInputField />
          <PromptTextArea />
        </form>
      </Card>
    </main>
  );
};

export default CreatePrompt;
