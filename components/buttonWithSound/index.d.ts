import React from 'react';
import type { ReactNode } from 'react';
import { TextVariantEnum } from '../Text';
interface IProps {
    content: ReactNode;
    isActive?: boolean;
    onClick?: () => void;
    variant?: TextVariantEnum;
    isDone?: boolean;
}
export declare const ButtonWithSound: ({ content, isActive, isDone, onClick, variant, }: IProps) => React.JSX.Element;
export {};
