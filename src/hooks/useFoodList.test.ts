import { renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Root as FoodList } from '../types/foodList';
import useFoodList from './useFoodList';

describe('useFoodList', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  })

  it('should return food list', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      foods: [
        {
          id: '1',
          name: 'Restaurant 1',
          imageUrl: 'https://example.com/1.jpg',
          rating: 4.5,
          promotion: '1+1',
          isNew: true,
          minCookTime: 10,
          maxCookTime: 20,
          restaurant: 'Restaurant 1',
          categoryId: '1',
          index: 0
        },
        {
          id: '2',
          name: 'Restaurant 2',
          imageUrl: 'https://example.com/2.jpg',
          rating: 4.5,
          promotion: '1+1',
          isNew: false,
          minCookTime: 15,
          maxCookTime: 25,
          restaurant: 'Restaurant 2',
          categoryId: '2',
          index: 1
        }
      ],
   } as FoodList);

    vi.doMock('./useFetch', () => fetchMock);

    const { result, rerender } = renderHook(() => useFoodList());

    expect(result.current.loading).toBe(true);
    expect(result.current.foodList).toEqual([]);

    result.current.refetch();
    rerender()

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.foodList).toBeDefined();
      expect(result.current.foodList.length).toBeGreaterThan(0);
    }, { timeout: 5000 });

    vi.doUnmock('./useFetch');
  });
});

