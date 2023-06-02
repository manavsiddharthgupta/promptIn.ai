import React, { FC } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, type }) => {
  return (
    <button className="bg-blue-500 text-white rounded-sm py-1 px-3" type={type}>
      {children}
    </button>
  );
};

export default Button;
