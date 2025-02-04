import { HiStar } from 'react-icons/hi';
import './styles.css';

interface RestaurantCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string;
  rating: number;
  isNew: boolean;
  minCookTime: number;
  maxCookTime: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  image,
  rating,
  isNew,
  minCookTime,
  maxCookTime,
}) => {
  return (
    <div className="restaurant-card" tabIndex={0}>
      <img src={image} alt={name} />
      <div className="content">
        <h3>{name}</h3>
        <div className="tag-wrapper">
          <span className='tag'>
            <HiStar />
            {rating.toPrecision(2)}
          </span>
          <span className="tag">{minCookTime}-{maxCookTime} min</span>
          {isNew && <span className="tag highlight">New</span>}
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;