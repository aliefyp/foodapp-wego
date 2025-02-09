import { renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Root as FoodCategories } from '../types/foodCategories';
import useFoodCategories from './useFoodCategories';

describe('useFoodCategories', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  })

  it('should return food categories', async () => {
    const fetchMock = vi.fn().mockResolvedValue([
      {
        id: '1',
        name: 'Category 1',
      },
      {
        id: '2',
        name: 'Category 2',
      },
    ] as FoodCategories);

    vi.doMock('./useFetch', () => fetchMock);

    const { result, rerender } = renderHook(() => useFoodCategories());

    expect(result.current.loading).toBe(true);
    expect(result.current.foodCategories).toEqual([]);

    result.current.refetch();
    rerender()

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.foodCategories).toBeDefined();
      expect(result.current.foodCategories.length).toBeGreaterThan(0);
    }, { timeout: 5000 });

    vi.doUnmock('./useFetch');
  });
});

