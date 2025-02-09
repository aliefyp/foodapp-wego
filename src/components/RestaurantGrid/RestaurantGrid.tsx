import { HiOutlinePlus } from 'react-icons/hi';
import { DEFAULT_LIMIT } from '../../constants';
import { Root as FoodList } from '../../types/foodList';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import MessageBlock from '../MessageBlock/MessageBlock';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantGrid.scss';

interface RestaurantGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FoodList['foods'];
  loading?: boolean;
  error?: string;
  onError?: () => void;
  onLoadMore?: () => void;
}

/**
 * RestaurantGrid component
 * 
 * @example
 * <RestaurantGrid
 *   items={[{ id: '1', name: 'Restaurant 1', imageUrl: 'https://example.com/1.jpg', rating: 4.5, promotion: '1+1', isNew: true, minCookTime: 10, maxCookTime: 20 }]}
 * />
 *
 * @prop {FoodList['foods']} items - Array of food items
 * @prop {boolean} [loading] - Whether the component is loading
 * @prop {string} [error] - Error message
 * @prop {() => void} [onError] - Function to call when error message is clicked
 * @prop {() => void} [onLoadMore] - Function to call when "Show more" button is clicked
 * @prop {string} [className] - Additional class name for the component
 *
 */
const RestaurantGrid: React.FC<RestaurantGridProps> = ({
  items,
  loading,
  error,
  className,
  onError,
  onLoadMore,
  ...restProps
}) => {
  if (loading) {
    return (
      <div className="rgrid__grid" data-testid="restaurant-grid-loader">
        {[...new Array(DEFAULT_LIMIT)].map((_, index) => (
          <Loader key={index} style={{ height: 280 }} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <MessageBlock
        data-testid="restaurant-grid-error"
        title="Something went wrong"
        message={error}
        image="/image-error.svg"
        actionText="Try Again"
        onClick={onError}
      />
    )
  }

  if (items.length === 0) {
    return (
      <MessageBlock
        data-testid="restaurant-grid-empty"
        title="Ooops..."
        message="No results found."
        image="/image-empty.svg"
      />
    )
  }

  return (
    <div className='rgrid'>
      <div className={`rgrid__grid ${className || ''}`} {...restProps}>
        {items.map((item) => (
          <RestaurantCard
            key={item.id}
            name={item.name}
            image={item.imageUrl}
            rating={item.rating}
            promotion={item.promotion}
            isNew={item.isNew}
            minCookTime={item.minCookTime}
            maxCookTime={item.maxCookTime}
          />
        ))}
      </div>
      {items.length > 0 && (
        <Button
          variant="secondary"
          startIcon={<HiOutlinePlus />}
          style={{ margin: 'auto' }}
          data-testid="load-more-button"
          onClick={onLoadMore}
        >
          Show more
        </Button>
      )}
    </div>
  )
}

export default RestaurantGrid;