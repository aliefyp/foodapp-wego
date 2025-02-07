import { DEFAULT_LIMIT } from '../../constants';
import Loader from '../Loader';
import './styles.css';

interface RestaurantGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  loading: boolean;
}

const RestaurantGrid: React.FC<RestaurantGridProps> = ({
  children,
  loading,
  className,
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

  return (
    <div className={`restaurant-wrapper ${className}`} {...restProps}>
      {children}
    </div>
  )
}

export default RestaurantGrid;