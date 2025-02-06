import { HiOutlineSearch } from 'react-icons/hi';
import './styles.css';

type SearchbarProps = React.HTMLAttributes<HTMLInputElement>;

const Searchbar = (props: SearchbarProps) => {
  return (
    <div className="searchbar-wrapper">
      <HiOutlineSearch />
      <input type="text" placeholder="Enter Restaurant Name" {...props} />
    </div>
  );
}

export default Searchbar;