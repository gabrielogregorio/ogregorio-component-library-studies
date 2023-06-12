import React from 'react';
export declare type ItemSimpleMenuProps = {
    content: string;
    level?: '0' | '1';
    onClick: () => void;
    onHover?: () => void;
    isSelected?: boolean;
};
export declare const ItemSimpleMenu: ({ content, level, isSelected, onClick, onHover, }: ItemSimpleMenuProps) => React.JSX.Element;
