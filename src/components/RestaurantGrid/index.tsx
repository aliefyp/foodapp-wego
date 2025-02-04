import './styles.css';

interface RestaurantGridProps {
  children: React.ReactNode;
}

const RestaurantGrid: React.FC<RestaurantGridProps> = ({ children }) => {
  return (
    <div className="restaurant-wrapper">
      {children}
    </div>
  )
}

export default RestaurantGrid;