import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Test</Button>);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render with primary variant', () => {
    const { getByText } = render(<Button variant="primary">Test</Button>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with secondary variant', () => {
    const { getByText } = render(<Button variant="secondary">Test</Button>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should trigger onClick event', () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button onClick={onClick}>Test</Button>);
    getByText('Test').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

});