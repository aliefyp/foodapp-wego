import { HiOutlinePlus } from 'react-icons/hi';
import { DEFAULT_LIMIT } from '../../constants';
import { Root as FoodList } from '../../types/foodList';
import Button from '../Button';
import Loader from '../Loader';
import MessageBlock from '../MessageBlock';
import RestaurantCard from '../RestaurantCard';
import './styles.css';

interface RestaurantGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FoodList['foods'];
  loading: boolean;
  error: string;
  onError: () => void;
  onLoadMore: () => void;
}

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
      <div className="restaurant-wrapper">
        {[...new Array(DEFAULT_LIMIT)].map((_, index) => (
          <Loader key={index} style={{ height: 280 }} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <MessageBlock
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
        title="Ooops..."
        message="No results found."
        image="/image-empty.svg"
      />
    )
  }

  return (
    <div className='restaurant-wrapper'>
      <div className={`restaurant-grid ${className}`} {...restProps}>
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
          onClick={onLoadMore}
        >
          Show more
        </Button>
      )}
    </div>
  )
}

export default RestaurantGrid;