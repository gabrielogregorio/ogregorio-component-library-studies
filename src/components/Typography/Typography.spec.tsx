import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './index';

describe('Typography', () => {
  test('should render typography', () => {
    render(
      <Typography variant="h1" color="black" align="left">
        any text
      </Typography>,
    );
    const textElement = screen.getByText(/any text/i);
    expect(textElement).toBeInTheDocument();
  });

  test('should render h1', () => {
    render(
      <Typography variant="h1" color="black" align="left">
        Test Text
      </Typography>,
    );
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  test('should render h2', () => {
    render(
      <Typography variant="h2" color="black" align="left">
        Test Text
      </Typography>,
    );
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toBeInTheDocument();
  });

  test('should render h3', () => {
    render(
      <Typography variant="h3" color="black" align="left">
        Test Text
      </Typography>,
    );
    const headingElement = screen.getByRole('heading', { level: 3 });
    expect(headingElement).toBeInTheDocument();
  });
});
