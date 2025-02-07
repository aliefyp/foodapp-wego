import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId('darkmode-toggle')).toBeInTheDocument();
  });
});
