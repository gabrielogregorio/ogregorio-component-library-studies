import React from 'react';

type Props = {
  content: string;
};

export const Text = ({ content }: Props) => {
  return (
    <p className="font-roboto-Condensed font-normal mb-[0.625rem] text-[1rem] text-white tracking-[7%] text-left">
      {content}
    </p>
  );
};
