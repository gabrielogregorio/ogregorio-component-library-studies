import React, { ReactElement, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
};

export const Button = ({
  children = '',
  iconLeft = undefined,
  iconRight = undefined,
  variant = 'primary',
  onClick = () => {},
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <button
      type="button"
      className={`flex items-center px-4 py-2 rounded ${buttonVariants[variant]}`}
      onClick={onClick}
      {...rest}>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}

      {children}

      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
