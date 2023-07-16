import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  children: 'Click me',
  variant: 'primary',
  onClick: () => console.log('Button clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Click me',
  variant: 'secondary',
  onClick: () => console.log('Button clicked'),
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  children: 'Click me',
  iconLeft: '🙂',
  iconRight: '😃',
  variant: 'primary',
  onClick: () => console.log('Button clicked'),
};
