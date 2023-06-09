import type { ReactNode } from 'react';
import React from 'react'

interface IProps {
  children?: ReactNode;
}

export const NavigationSpace = ({ children = undefined }: IProps) => {
  return <div className="mt-[26px]">{children}</div>;
};
