import { useState, ChangeEvent } from "react";

interface InputFieldState {
  inputValue: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useInputField = (
  validateFunc: (value: string) => boolean
): InputFieldState => {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue, validateFunc(inputValue));

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return {
    inputValue,
    onChangeHandler,
  };
};

export default useInputField;
