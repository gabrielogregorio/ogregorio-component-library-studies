import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ITextProps, Text, TextVariantEnum } from '../src/components/Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['filled', 'outlined'] },
    },
    color: {
      control: { type: 'radio', options: ['primary', 'secondary'] },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] },
    },
  },
} as Meta;

export const Colors = (args: ITextProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Text {...args} variant={TextVariantEnum.basicItemMenu}>
        Outlined
      </Text>
    </div>
    <div>
      <Text {...args} variant={TextVariantEnum.textTitle}>
        Filled
      </Text>
    </div>
  </div>
);

Colors.args = {
  variant: TextVariantEnum.textTitle,
};

export const Variants = (args: ITextProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Text {...args} variant={TextVariantEnum.basicItemMenu}>
        Outlined
      </Text>
    </div>
    <div>
      <Text {...args} variant={TextVariantEnum.basicItemMenu}>
        Filled
      </Text>
    </div>
  </div>
);

Variants.args = {
  color: 'primary',
};


