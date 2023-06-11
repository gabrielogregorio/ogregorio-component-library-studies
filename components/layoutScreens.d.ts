import React, { ReactNode } from 'react';
declare type LayoutScreenProps = {
    children: ReactNode;
    bg: string;
    screenTitle: string;
    onReturn: () => void;
};
export declare const LayoutScreen: ({ children, bg, screenTitle, onReturn, }: LayoutScreenProps) => React.JSX.Element;
export {};
