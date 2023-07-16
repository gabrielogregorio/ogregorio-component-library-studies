import React from 'react';

export type TitleTextProps = {
  content: string;
};

export const TitleText = ({ content }: TitleTextProps) => {
  return <p className="font-roboto-Condensed font-bold text-[1rem] text-white tracking-[7%] ">{content}</p>;
};
