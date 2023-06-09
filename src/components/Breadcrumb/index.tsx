import React from 'react';
import { ButtonWithSound } from '../buttonWithSound';
import { Text, TextVariantEnum } from '../Text';

interface IBreadcrumbProps {
  content: string;
  onReturns?: () => void;
}

export const Breadcrumb = ({
  content,
  onReturns = () => {},
}: IBreadcrumbProps) => {
  return (
    <div className="flex items-center animate-fadeIn">
      <ButtonWithSound
        onClick={() => onReturns()}
        variant={TextVariantEnum.titleBreacrumb}
        content="INICIO"
      />

      <div className="h-[25px] w-[2px] bg-white/70 mx-[24px]" />
      <Text variant={TextVariantEnum.titleBreacrumb}>{content}</Text>
      <div className="flex-1 bg-white/70 h-[2px] ml-[48px]" />
    </div>
  );
};
