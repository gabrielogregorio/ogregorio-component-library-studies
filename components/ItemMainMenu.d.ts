import React from 'react';
export declare type ItemMainMenuProps = {
    onClick: () => void;
    onHover?: () => void;
    content: string;
};
export declare const ItemMainMenu: ({ onClick, content, onHover, }: ItemMainMenuProps) => React.JSX.Element;
