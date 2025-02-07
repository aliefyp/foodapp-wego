import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { DEFAULT_LIMIT } from "../constants";
import { Root as FoodList } from "../types/foodList";

interface UseFoodFilterInterface {
  searchQuery: string;
  filteredFoodList: FoodList['foods'];
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoadMore: () => void;
  handleDisplayLimitChange: (limit: number) => void;
  handleSearchClear: () => void;
}

interface UseFoodFilterProps {
  categoryId: string;
  foodList: FoodList['foods'];
}

const useFoodFilter = ({ foodList, categoryId }: UseFoodFilterProps): UseFoodFilterInterface => {
  const [searchQuery, setSearchQuery] = useState('');
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  const [debouncedQuery] = useDebounce(searchQuery, 500);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setSkip(0);
  }, []);

  const handleSearchClear = useCallback(() => {
    setSearchQuery('');
    setSkip(0);
  }, [])

  const handleDisplayLimitChange = useCallback((limit: number) => {
    setLimit(limit);
    setSkip(0);
  }, []);

  const handleLoadMore = useCallback(() => {
    setSkip(skip + limit);
  }, [skip, limit]);

  const filteredFoodList = foodList
    .filter(item => item.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
    .filter(item => categoryId ? item.categoryId === categoryId : true)
    .slice(0, skip + limit);

  useEffect(() => {
    setSkip(0);
  }, [categoryId])

  return {
    searchQuery,
    filteredFoodList,
    handleSearchChange,
    handleLoadMore,
    handleDisplayLimitChange,
    handleSearchClear,
  }
}

export default useFoodFilter;

