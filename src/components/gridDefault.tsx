import { ReactNode } from 'react';
import React from 'react';

type GridDefaultProps = {
  left: ReactNode;
  right: ReactNode;
};

export const GridDefault = ({ left, right }: GridDefaultProps) => {
  return (
    <div className="flex flex-1 w-full">
      <div className="flex-1 overflow-y-auto scrollbar">
        <div>{left}</div>
        <div className="h-[5rem]"></div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar px-[2rem]">
        <div>{right}</div>
        <div className="h-[15rem]"></div>
      </div>
    </div>
  );
};
