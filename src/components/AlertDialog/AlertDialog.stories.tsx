/* eslint-disable no-alert */
import React from 'react';
import { AlertDialog, AlertDialogProps } from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/AlertDialog',
  component: AlertDialog,
} as Meta;

const Template: Story<AlertDialogProps> = (args) => (
  <div className="bg-[url('https://gabrielogregorio.github.io/mfe-introduction/v1.0.0/a1318f8eac7f993ddc7b.webp')] min-h-[300px] min-w-[200px] bg-cover box-content">
    <AlertDialog {...args} />
  </div>
);

export const base = Template.bind({});
base.args = {
  title: 'Example Title',
  description: 'Example description',
  onCancel: () => alert('Cancelled!'),
  onAction: () => alert('Actioned!'),
  cancelText: 'Cancel',
  yesText: 'Yes',
  open: true,
};
