import { ReactElement, ReactNode } from 'react';
export declare type ButtonProps = {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    content: string;
    onClick: () => void;
    onHover?: () => void;
    isRisked?: boolean;
    ariaLabel?: string;
    isDisabled?: boolean;
};
export declare const Button: ({ iconLeft, iconRight, content, onClick, onHover, isRisked, ariaLabel, isDisabled, }: ButtonProps) => ReactElement;
