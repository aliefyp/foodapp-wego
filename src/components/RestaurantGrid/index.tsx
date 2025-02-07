import { DEFAULT_LIMIT } from '../../constants';
import Loader from '../Loader';
import MessageBlock from '../MessageBlock';
import './styles.css';

interface RestaurantGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  loading: boolean;
  error: string;
  onError: () => void
}

const RestaurantGrid: React.FC<RestaurantGridProps> = ({
  children,
  loading,
  error,
  className,
  onError,
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

  return (
    <div className={`restaurant-wrapper ${className}`} {...restProps}>
      {children}
    </div>
  )
}

export default RestaurantGrid;