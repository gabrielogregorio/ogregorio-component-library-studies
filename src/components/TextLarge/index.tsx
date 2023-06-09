import React from 'react'
import type { ReactNode } from 'react';

export const TextLarge = ({ children }: { children: ReactNode }) => {
  return <p className="text-white font-roboto text-[1rem] font-normal mt-[12px] text-left">{children}</p>;
};
