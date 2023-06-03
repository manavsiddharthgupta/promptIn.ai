import React, { FC } from 'react';

interface ButtonProps {
	type: 'button' | 'submit' | 'reset';
	children: React.ReactNode;
	className?: string;
}

const Button: FC<ButtonProps> = ({ children, type, className }) => {
	return (
		<button
			className={
				className
					? className
					: 'bg-blue-500 text-white rounded-sm pt-1 px-3 pb-[5px]'
			}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
