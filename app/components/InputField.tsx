import React, { FC } from "react";

interface InputFieldProps {
  value: string;
  type: string;
  label: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  value,
  type,
  label,
  placeholder,
  onChangeHandler,
}) => {
  return (
    <label className="block mb-4">
      {label}
      <input
        className="block"
        onChange={onChangeHandler}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
