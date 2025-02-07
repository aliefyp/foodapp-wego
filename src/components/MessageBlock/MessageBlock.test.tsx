import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import MessageBlock from './MessageBlock';

describe('MessageBlock', () => {
  it('should render title, message, and image when provided', () => {
    const { getByText, getByAltText } = render(
      <MessageBlock
        title="Test Title"
        message="Test Message"
        image="/test-image.jpg"
        imageAlt="Test Image"
      />
    );

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Message')).toBeInTheDocument();
    expect(getByAltText('Test Image')).toBeInTheDocument();
  });

  it('should render action button with text and trigger onClick when provided', () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <MessageBlock
        actionText="Click Me"
        onClick={onClick}
      />
    );

    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

