import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import TabItem from './TabItem';

describe('TabItem', () => {
  it('should render successfully', () => {
    const { getByText } = render(<TabItem>Test</TabItem>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with active class when active is true', () => {
    const { getByText } = render(<TabItem active>Test</TabItem>);
    expect(getByText('Test')).toHaveClass('gtab-item--active');
  });

  it('should trigger onClick event', () => {
    const onClick = vi.fn();
    const { getByText } = render(<TabItem onClick={onClick}>Test</TabItem>);
    getByText('Test').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
