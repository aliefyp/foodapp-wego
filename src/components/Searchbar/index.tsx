import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import './styles.css';

interface SearchbarProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

const Searchbar = ({ value, onChange, onClear, ...rest }: SearchbarProps) => {
  return (
    <div className="searchbar-wrapper">
      <HiOutlineSearch />
      <input
        type="search"
        placeholder="Enter Restaurant Name"
        value={value}
        onChange={onChange}
        {...rest}
      />
      {value && (
        <div className='clear-button'>
          <HiOutlineX size={16} onClick={onClear} />
        </div>
      )}
    </div>
  );
}

export default Searchbar;