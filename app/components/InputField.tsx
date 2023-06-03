import React, { FC } from 'react';

interface InputFieldProps {
  value: string;
  type: string;
  label: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  value,
  type,
  label,
  placeholder,
  onChangeHandler,
  onBlurHandler,
}) => {
  return (
    <label className="block mt-3 mb-1 text-sm">
      {label}
      <input
        className="block w-full rounded-sm py-1 px-2 outline-none border-[1px] border-black mt-1"
        onChange={onChangeHandler}
        value={value}
        type={type}
        placeholder={placeholder}
        onBlur={onBlurHandler}
      />
    </label>
  );
};

export default InputField;
