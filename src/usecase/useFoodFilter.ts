import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Root as FoodList } from "../types/foodList";

interface UseFoodFilterInterface {
  filteredFoodList: FoodList['foods'];
  searchFood: (query: string) => void;
  loadMoreFood: () => void;
  changeDisplayLimit: (limit: number) => void;
}

interface UseFoodFilterProps {
  categoryId: string;
  foodList: FoodList['foods'];
}

const useFoodFilter = ({ foodList, categoryId }: UseFoodFilterProps): UseFoodFilterInterface => {
  const [searchQuery, setSearchQuery] = useState('');
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(12);

  const [debouncedQuery] = useDebounce(searchQuery, 500);

  const searchFood = useCallback((query: string) => {
    setSearchQuery(query);
    setSkip(0);
  }, []);

  const changeDisplayLimit = useCallback((limit: number) => {
    setLimit(limit);
    setSkip(0);
  }, []);

  const loadMoreFood = useCallback(() => {
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
    filteredFoodList,
    searchFood,
    loadMoreFood,
    changeDisplayLimit,
  }
}

export default useFoodFilter;

