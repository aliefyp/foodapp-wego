import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Toaster from './Toaster';

describe('Toaster', () => {
  it('should render successfully when show is true', () => {
    const onClose = vi.fn();
    const { getByText } = render(
      <Toaster show={true} message="Test Message" variant="success" onClose={onClose} />
    );
    expect(getByText('Test Message')).toBeVisible();
  });
});

