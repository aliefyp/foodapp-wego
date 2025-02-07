import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import './SearchBar.scss';

interface SearchbarProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

const Searchbar = ({ value, onChange, onClear, ...rest }: SearchbarProps) => {
  return (
    <div className="gsearchbar">
      <HiOutlineSearch />
      <input
        type="search"
        placeholder="Enter Restaurant Name"
        value={value}
        onChange={onChange}
        data-testid="searchbar-input"
        {...rest}
      />
      {value && (
        <div className='gsearchbar__clear' data-testid="searchbar-clear" onClick={onClear}>
          <HiOutlineX size={16} />
        </div>
      )}
    </div>
  );
}

export default Searchbar;