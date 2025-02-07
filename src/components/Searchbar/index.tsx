import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import './styles.css';

type SearchbarProps = React.HTMLAttributes<HTMLInputElement>;

const Searchbar = (props: SearchbarProps) => {
  return (
    <div className="searchbar-wrapper">
      <HiOutlineSearch />
      <input type="search" placeholder="Enter Restaurant Name" {...props} />
      <HiOutlineX size={18} />
    </div>
  );
}

export default Searchbar;