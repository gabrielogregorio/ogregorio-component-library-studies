import React from 'react';
import type { ReactNode } from 'react';
declare type levelsType = 1 | 2 | 3 | 4 | 5;
interface IProps {
    level: levelsType;
    children: ReactNode;
}
export declare const NavigationLevel: ({ children, level }: IProps) => React.JSX.Element;
export {};
