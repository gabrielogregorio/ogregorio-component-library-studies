import { ReactElement, ReactNode } from 'react';
declare type ButtonProps = {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    content: string;
    onClick: () => void;
    isRisked?: boolean;
    isDisabled?: boolean;
};
export declare const Button: ({ iconLeft, iconRight, content, onClick, isRisked, isDisabled, }: ButtonProps) => ReactElement;
export {};
