import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Loader from './Loader';

describe('Loader', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('global-loader')).toBeInTheDocument();
  });

  it('should render with custom class', () => {
    const { getByTestId } = render(<Loader className='test' />);
    expect(getByTestId('global-loader')).toHaveClass('test');
  });

  it('should render with custom styles', () => {
    const { getByTestId } = render(<Loader style={{ width: '100px' }} />);
    expect(getByTestId('global-loader')).toHaveStyle({ width: '100px' });
  });
});
