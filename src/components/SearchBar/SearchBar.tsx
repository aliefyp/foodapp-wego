import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import './SearchBar.scss';

interface SearchbarProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

/**
 * Represents a search bar component with an input field for entering text.
 * 
 * @param {string} [value] - The current value of the search input.
 * @param {function} [onChange] - Callback function triggered when the input value changes.
 * @param {function} [onClear] - Callback function triggered when the clear button is clicked.
 * @param {Object} [rest] - Additional HTML attributes for the input element.
 * 
 * @returns {JSX.Element} The rendered search bar component.
 */

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