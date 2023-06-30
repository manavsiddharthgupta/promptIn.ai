import { useState, useRef } from 'react';
export const useTagsField = () => {
  const [allTags, setTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddTagHandler = (tag: string): void => {
    setTags((state: string[]) => {
      return [...state, tag.trim()];
    });
  };

  const onPopLastTag = (): void => {
    if (allTags.length < 1) {
      return;
    }
    setTags((state: string[]) => {
      const newTags = [...state];
      newTags.pop();
      return [...newTags];
    });
  };

  const onKeyDownEvent = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const inpVal = inputRef.current?.value;
    if (
      event.key === 'Enter' &&
      inputRef.current !== null &&
      inpVal?.trim() !== ''
    ) {
      event.preventDefault();
      onAddTagHandler(inputRef.current.value);
      inputRef.current.value = '';
    } else if (event.key === 'Backspace' && inputRef.current?.value === '') {
      onPopLastTag();
    }
  };

  return {
    allTags,
    inputRef,
    onKeyDownEvent,
  };
};
