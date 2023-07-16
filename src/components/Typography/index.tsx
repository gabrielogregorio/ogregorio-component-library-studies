import React, { ReactElement, ReactNode } from 'react';

type colors = 'white' | 'white60' | 'black';
type align = 'left' | 'right' | 'center' | 'justify';
type font = 'roboto' | 'roboto-Condensed';
type weight = 'light' | 'normal' | 'bold';
type size = 'sm' | 'md' | 'lg' | 'xl';

export type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  color?: colors;
  align?: align;
  font?: font;
  weight?: weight;
  size?: size;
  children?: ReactNode;
};

const theme = {
  colors: {
    black: 'text-black',
    white: 'text-white',
    white60: 'text-white/60',
  },
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  },
  font: {
    roboto: 'roboto-Condensed',
    'roboto-Condensed': 'font-roboto-Condensed',
  },
  weight: {
    light: 'font-light',
    normal: 'font-normal',
    bold: 'font-bold',
  },
  size: {
    sm: 'text-[1rem]',
    md: 'text-[1.25rem]',
    lg: 'text-[1.5rem]',
    xl: 'text-[2rem]',
  },
};

export const Typography = ({
  children = '',
  variant = 'p',
  color = 'white',
  align = 'left',
  font = 'roboto',
  weight = 'normal',
  size = 'md',
}: TypographyProps): ReactElement => {
  const Component = variant;

  const colorClass = theme.colors[color];
  const alignClass = theme.align[align];
  const fontClass = theme.font[font];
  const weightClass = theme.weight[weight];
  const sizeClass = theme.size[size];

  return (
    <Component className={`${colorClass} ${alignClass} ${fontClass} ${weightClass} ${sizeClass}`}>{children}</Component>
  );
};
