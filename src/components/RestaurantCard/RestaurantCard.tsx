import { memo } from 'react';
import { HiGift, HiStar } from 'react-icons/hi';
import './RestaurantCard.scss';

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
      className="rcard"
      tabIndex={0}
      {...restProps}
    >
      <img className="rcard__image" src={image} alt={name} loading="lazy" />
      <div className="rcard__content">
        {activePromo && (
          <div
            className="rcard__promo"
            style={{ backgroundColor: activePromo.color }}
          >
            {activePromo.render}
          </div>
        )}
        <h3 className="rcard__title">{name}</h3>
        <div className="rcard__label-block">
          <span className="rcard__label-item">
            <HiStar />
            {rating.toPrecision(2)}
          </span>
          <span className="rcard__label-item">
            {minCookTime}-{maxCookTime} min
          </span>
          {isNew && (
            <span className="rcard__label-item rcard__label-item--highlight">New</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(RestaurantCard);