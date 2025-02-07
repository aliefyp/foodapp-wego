import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render input field', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    expect(getByPlaceholderText('Enter Restaurant Name')).toBeInTheDocument();
  });

  it('should trigger onChange event when input value changes', () => {
    const onChange = vi.fn();
    const { getByTestId } = render(<SearchBar onChange={onChange} />);
    const input = getByTestId('searchbar-input');
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should trigger onClear event when clear button is clicked', async () => {
    const onClear = vi.fn();
    const { getByTestId } = render(<SearchBar value="Test" onClear={onClear} />);
    const clearButton = getByTestId('searchbar-clear');
    fireEvent.click(clearButton);
    await waitFor(() => expect(onClear).toHaveBeenCalledTimes(1))
  });
});
