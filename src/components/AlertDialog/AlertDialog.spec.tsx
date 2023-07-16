import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AlertDialog } from './index';

describe('AlertDialog', () => {
  it('should render title and description correctly', () => {
    render(<AlertDialog title="Example Title" description="Example description" open />);

    expect(screen.getByText('Example Title')).toBeInTheDocument();
    expect(screen.getByText('Example description')).toBeInTheDocument();
  });

  it('should call onCancel and onAction correctly', () => {
    const onCancel = jest.fn();
    const onAction = jest.fn();

    render(
      <AlertDialog
        title="Example Title"
        description="Example description"
        onCancel={onCancel}
        onAction={onAction}
        cancelText="Cancel"
        yesText="Yes"
        open={true}
      />,
    );

    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Yes'));
    expect(onAction).toHaveBeenCalledTimes(1);
  });
});
