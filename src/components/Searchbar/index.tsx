import { HiOutlineSearch } from 'react-icons/hi';
import './styles.css';

function Searchbar() {
  return (
    <div className="searchbar-wrapper">
      <HiOutlineSearch />
      <input type="text" placeholder="Enter Restaurant Name" />
    </div>
  );
}

export default Searchbar;