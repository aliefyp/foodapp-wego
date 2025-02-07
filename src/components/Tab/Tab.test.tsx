import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Tab from './Tab';

describe('Tab', () => {
  it('should render successfully', () => {
    const { getByText } = render(
      <Tab
        items={[
          {
            text: 'Tab 1',
            onClick: () => { }
          },
          {
            text: 'Tab 2',
            onClick: () => { }
          }
        ]}
      />
    );
    expect(getByText('Tab 1')).toBeInTheDocument();
    expect(getByText('Tab 2')).toBeInTheDocument();
  });

  it('should trigger onClick event', async () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Tab
        items={[
          {
            text: 'Tab 1',
            onClick
          },
          {
            text: 'Tab 2',
            onClick: () => { }
          }
        ]}
      />
    );
    const tab1 = getByText('Tab 1');
    fireEvent.click(tab1);
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1));
  });
});
