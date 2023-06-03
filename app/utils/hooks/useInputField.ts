import { useState, ChangeEvent } from 'react';

interface InputFieldState {
  inputValue: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: () => void;
  isInputValueValid: boolean;
  isTouched: boolean;
}

const useInputField = (
  validateFunc: (value: string) => boolean
): InputFieldState => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const isInputValueValid = validateFunc(inputValue);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    inputValue,
    onChangeHandler,
    isInputValueValid,
    onBlurHandler,
    isTouched,
  };
};

export default useInputField;
