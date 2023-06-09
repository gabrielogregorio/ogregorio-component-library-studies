import React from 'react';
import type { ReactNode } from 'react';
export declare enum TextVariantEnum {
    'default' = "font-roboto-Condensed font-normal text-[2rem] tracking-[0%]",
    'titleBreacrumb' = "font-roboto-Condensed font-normal text-[32px] tracking-[10%]",
    'button' = "font-roboto-Condensed font-normal text-[24px] tracking-[10%]",
    'mainMenu' = "font-roboto-Condensed font-normal text-[28px] tracking-[7%]",
    'basicItemMenu' = "font-roboto-Condensed font-normal text-[28px] tracking-[5%]",
    'textTitle' = "font-roboto-Condensed font-normal text-[26px] tracking-[12%]",
    'textDescription' = "font-roboto-Condensed font-normal text-[24px] tracking-[12%]"
}
export interface ITextProps {
    children: ReactNode;
    variant?: TextVariantEnum;
    isActive?: boolean;
    isDone?: boolean;
}
export declare const Text: ({ children, variant, isActive, isDone }: ITextProps) => React.JSX.Element;
