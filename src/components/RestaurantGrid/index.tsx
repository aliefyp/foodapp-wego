import './styles.css';

interface RestaurantGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RestaurantGrid: React.FC<RestaurantGridProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={`restaurant-wrapper ${className}`} {...restProps}>
      {children}
    </div>
  )
}

export default RestaurantGrid;