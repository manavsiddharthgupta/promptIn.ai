import React, { FC } from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        className
          ? className
          : 'bg-black text-white rounded-sm pt-1 px-3 pb-[5px] mt-4'
      }
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
