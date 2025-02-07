import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RestaurantCard from './RestaurantCard';

const mockProps: RestaurantCardProps = {
  name: 'Test Restaurant',
  image: 'test.jpg',
  rating: 4.5,
  promotion: '1+1',
  isNew: true,
  minCookTime: 10,
  maxCookTime: 20,
};

describe('RestaurantCard', () => {
  it('should render successfully', () => {
    const { getByText } = render(<RestaurantCard {...mockProps} />);
    expect(getByText(mockProps.name)).toBeInTheDocument();
  });

  it('should render with correct rating', () => {
    const { getByText } = render(<RestaurantCard {...mockProps} />);
    expect(getByText(mockProps.rating.toString())).toBeInTheDocument();
  });

  it('should render with correct promotion', () => {
    const { getByText } = render(<RestaurantCard {...mockProps} />);
    expect(getByText('1+1')).toBeInTheDocument();
  });

  it('should render with correct cooking time', () => {
    const { getByText } = render(<RestaurantCard {...mockProps} />);
    expect(getByText(`${mockProps.minCookTime}-${mockProps.maxCookTime} min`)).toBeInTheDocument();
  });

  it('should trigger onClick event', () => {
    const onClick = vi.fn();
    const { getByText } = render(<RestaurantCard {...mockProps} onClick={onClick} />);
    fireEvent.click(getByText(mockProps.name));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
