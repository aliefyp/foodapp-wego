import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Root as FoodList } from '../../types/foodList';
import RestaurantGrid from './RestaurantGrid';

const foodListMock: FoodList['foods'] = [
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
    index: 0,
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
  },
];

describe('RestaurantGrid', () => {
  it('should render successfully', () => {
    const { getByText } = render(<RestaurantGrid items={[]} />);
    expect(getByText('No results found.')).toBeInTheDocument();
  });

  it('should render restaurant cards', () => {
    const { getAllByTestId } = render(<RestaurantGrid items={foodListMock} />);
    const cards = getAllByTestId('restaurant-card');
    expect(cards.length).toBe(2);
  });

  it('should call onLoadMore when button is clicked', () => {
    const onLoadMore = vi.fn();
    const { getByTestId } = render(<RestaurantGrid items={foodListMock} onLoadMore={onLoadMore} />);
    const button = getByTestId('load-more-button');
    fireEvent.click(button);
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it('should call onError when error message is clicked', () => {
    const onError = vi.fn();
    const { getByText } = render(<RestaurantGrid items={[]} error="Something went wrong" onError={onError} />);
    const button = getByText('Try Again');
    fireEvent.click(button);
    expect(onError).toHaveBeenCalledTimes(1);
  });

  it('should render empty state when items is empty', () => {
    const { getByText } = render(<RestaurantGrid items={[]} />);
    expect(getByText('No results found.')).toBeInTheDocument();
  });

  it('should render loading state when loading is true', async () => {
    const { getByTestId } = render(<RestaurantGrid items={[]} loading />);
    expect(getByTestId('restaurant-grid-loader')).toBeInTheDocument();
  });
});
