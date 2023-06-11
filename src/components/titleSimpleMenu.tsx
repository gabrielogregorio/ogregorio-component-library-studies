import React from 'react';

export type TitleSimpleMenuProps = {
  content: string;
};

export const TitleSimpleMenu = ({ content }: TitleSimpleMenuProps) => {
  return (
    <div className="w-full flex justify-between items-center">
      <button
        type="button"
        className="text-white font-roboto-Condensed font-normal text-[1.25rem] tracking-[5%] mb-[0px] text-left"
      >
        {content}
      </button>

      <div className="flex-1 ml-[0.938rem] h-[0.063rem] w-full bg-white/20"></div>
    </div>
  );
};
