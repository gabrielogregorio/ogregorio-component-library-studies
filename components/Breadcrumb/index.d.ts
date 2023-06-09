import React from 'react';
interface IBreadcrumbProps {
    content: string;
    onReturns?: () => void;
}
export declare const Breadcrumb: ({ content, onReturns, }: IBreadcrumbProps) => React.JSX.Element;
export {};
