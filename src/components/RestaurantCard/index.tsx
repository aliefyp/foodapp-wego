import { memo } from 'react';
import { HiGift, HiStar } from 'react-icons/hi';
import './styles.css';

const PROMO_ATTRIBUTES = [
  {
    key: 'gift',
    color: '#3eb2ff',
    render: <HiGift size={20} />,
  },
  {
    key: '1+1',
    color: '#9166ff',
    render: <span>1+1</span>,
  },
  {
    key: 'discount',
    color: '#ff3e3e',
    render: <span>50%</span>,
  }
]

interface RestaurantCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string;
  rating: number;
  promotion?: string;
  isNew: boolean;
  minCookTime: number;
  maxCookTime: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  image,
  rating,
  promotion,
  isNew,
  minCookTime,
  maxCookTime,
  ...restProps
}) => {
  const activePromo = PROMO_ATTRIBUTES.find((item) => promotion?.toLowerCase().includes(item.key))

  return (
    <div
      className="restaurant-card"
      tabIndex={0}
      {...restProps}
    >
      <img src={image} alt={name} loading="lazy" />
      <div className="content">
        {activePromo && (
          <div className='promotion-wrapper' style={{ backgroundColor: activePromo.color }}>
            {activePromo.render}
          </div>
        )}
        <h3>{name}</h3>
        <div className="label-wrapper">
          <span className='label'>
            <HiStar />
            {rating.toPrecision(2)}
          </span>
          <span className="label">{minCookTime}-{maxCookTime} min</span>
          {isNew && <span className="label highlight">New</span>}
        </div>
      </div>
    </div>
  )
}

export default memo(RestaurantCard);