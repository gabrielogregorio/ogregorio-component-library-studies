import React, { ReactNode } from 'react';
declare type Props = {
    href: string;
    icon?: ReactNode;
    content: string;
    level: '0' | '1';
};
export declare const LinkExternal: ({ href, icon, content, level }: Props) => React.JSX.Element;
export {};
