import { RefObject } from 'react';

interface PromptTagsFieldProps {
  allTags: string[];
  inpRef: RefObject<HTMLInputElement>;
  keyEvent: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PromptTagsField = ({
  allTags,
  inpRef,
  keyEvent,
}: PromptTagsFieldProps) => {
  return (
    <div
      onClick={() => {
        inpRef.current?.focus();
      }}
      className="p-4 border-[1px] border-gray-500 rounded-sm"
    >
      {allTags.map((tag, index) => {
        return (
          <span
            key={`${tag}-${index}`}
            className="text-xs border-[0.5px] border-black px-1 mr-1 rounded-xl inline-block"
          >
            {tag}
          </span>
        );
      })}
      <input
        ref={inpRef}
        onKeyDown={keyEvent}
        className="text-sm px-2 py-[2px] outline-blue-600 border-[1px] border-gray-500 outline-[0.5px] rounded-sm max-w-[200px] w-full"
        type="text"
        placeholder="Add a tag"
      />
    </div>
  );
};

export default PromptTagsField;
