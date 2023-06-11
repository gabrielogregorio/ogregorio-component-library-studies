import React from 'react';
import { ReactNode } from 'react';

type FirstLevelMenuProps = {
  children: ReactNode;
};

export const FirstLevelMenu = ({ children }: FirstLevelMenuProps) => {
  return <div className="ml-[1.75rem]">{children}</div>;
};
