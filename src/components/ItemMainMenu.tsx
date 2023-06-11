import React from 'react';

type ItemMainMenuProps = {
  onClick: () => void;
  content: string;
};

export const ItemMainMenu = ({ onClick, content }: ItemMainMenuProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="font-roboto-Condensed text-[1.25rem] tracking-[5%] mt-[0.625rem] mb-[0px] px-[0.875rem] py-[0.438rem] border border-transparent hover:border-white/60 text-white hover:bg-black/30"
    >
      {content}
    </button>
  );
};
