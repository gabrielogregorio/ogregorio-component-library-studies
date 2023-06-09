import React from 'react';
import type { ReactNode } from 'react';
// import HoverSound from './hoverSound.mp3'
// import ClickSound from './clickSound.mp3'

import { Text, TextVariantEnum } from '../Text';
// import { useAudio } from '../../hooks/useAudio';

interface IProps {
  content: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  variant?: TextVariantEnum;
  isDone?: boolean;
}



export const ButtonWithSound = ({
  content,
  isActive = false,
  isDone = false,
  onClick = () => {},
  variant = undefined,
}: IProps) => {
  // const clickSound = useAudio(ClickSound);
  // const hoverSound = useAudio(HoverSound);

  const handleMouseEnter = () => {
    // hoverSound.play();
  };

  const handleClick = () => {
    onClick();
    // clickSound.play();
  };

  return (
    <button onMouseEnter={handleMouseEnter} onClick={handleClick} type="button">
      <Text variant={variant} isActive={isActive} isDone={isDone}>
        {content}
      </Text>
    </button>
  );
};
