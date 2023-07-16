import React from 'react';
import * as AlertDialogRadix from '@radix-ui/react-alert-dialog';

export interface AlertDialogProps {
  title: string;
  description?: string;
  onCancel?: () => void;
  onAction?: () => void;
  cancelText?: string;
  yesText?: string;
  open: boolean;
}

export const AlertDialog = ({
  title = '',
  description = '',
  onCancel = undefined,
  onAction = undefined,
  cancelText = 'Cancelar',
  yesText = 'Sim',
  open,
}: AlertDialogProps) => (
  <AlertDialogRadix.Root open={open}>
    <AlertDialogRadix.Portal>
      <AlertDialogRadix.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />

      <AlertDialogRadix.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        {title && (
          <AlertDialogRadix.Title className="text-mauve12 m-0 text-[17px] font-medium">{title}</AlertDialogRadix.Title>
        )}

        {description && (
          <AlertDialogRadix.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
            {description}
          </AlertDialogRadix.Description>
        )}
        <div className="flex justify-end gap-[25px]">
          {onCancel && (
            <AlertDialogRadix.Cancel asChild>
              <button
                onClick={() => onCancel()}
                className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                {cancelText}
              </button>
            </AlertDialogRadix.Cancel>
          )}

          {onAction && (
            <AlertDialogRadix.Action asChild>
              <button
                onClick={() => onAction()}
                className="text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                {yesText}
              </button>
            </AlertDialogRadix.Action>
          )}
        </div>
      </AlertDialogRadix.Content>
    </AlertDialogRadix.Portal>
  </AlertDialogRadix.Root>
);
