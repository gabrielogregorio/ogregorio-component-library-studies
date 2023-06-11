import React from 'react';
declare type ItemSimpleMenuProps = {
    content: string;
    level?: '0' | '1';
    onClick: () => void;
    isSelected?: boolean;
};
export declare const ItemSimpleMenu: ({ content, level, isSelected, onClick, }: ItemSimpleMenuProps) => React.JSX.Element;
export {};
