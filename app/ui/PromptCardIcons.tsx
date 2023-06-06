import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PromptCardIcons = ({ icon }: { icon: IconDefinition }) => {
  return (
    <div className="w-fit rounded-full p-[4px]">
      <FontAwesomeIcon icon={icon} size="xs" className="w-4 h-4 text-inherit" />
    </div>
  );
};

export default PromptCardIcons;
