import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Typography, TypographyProps } from '.';
Typography;
export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  color: 'black',
  align: 'left',
  font: 'roboto',
  children: 'Heading 1',
  weight: 'bold',
  size: 'xl',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  color: 'black',
  align: 'center',
  font: 'roboto',
  children: 'Heading 2',
  weight: 'bold',
  size: 'lg',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  color: 'black',
  align: 'right',
  font: 'roboto',
  children: 'Heading 3',
  weight: 'normal',
  size: 'md',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'p',
  color: 'black',
  align: 'justify',
  font: 'roboto-Condensed',
  children: 'A sobrevivência requer perfeição. ',
  weight: 'normal',
  size: 'md',
};

export const Span = Template.bind({});
Span.args = {
  variant: 'span',
  color: 'black',
  align: 'center',
  font: 'roboto-Condensed',
  children: 'A sobrevivência requer perfeição. ',
  weight: 'light',
  size: 'sm',
};
