import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Root as FoodList } from "../types/foodList";
import useFetch from "./useFetch";

interface UseFoodList {
  error: string;
  loading: boolean;
  foodList: FoodList['foods'];
  refetch: () => Promise<void>;
  search: (query: string) => void;
  loadMore: () => void;
  filterByCategory: (categoryId: string) => void;
}

const useFoodList = (): UseFoodList => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [foodList, setFoodList] = useState<FoodList['foods']>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(9);
  const fetchData = useFetch();

  const [debouncedQuery] = useDebounce(searchQuery, 500);

  const fetchFoodList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetchData<FoodList>(
        "https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/f1b04f9afe0fcc0c9270cb486b927641b7d27436/food.json"
      );
      setFoodList(response.foods);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [fetchData]);

  useEffect(() => {
    if (loading) {
      fetchFoodList();
    }
  }, [fetchFoodList, fetchData, loading]);

  const search = useCallback((query: string) => {
    setSearchQuery(query);
    setSkip(0);
  }, []);

  const loadMore = useCallback(() => {
    setSkip(skip + limit);
  }, [skip, limit]);

  const filterByCategory = useCallback((categoryId: string) => {
    setCategoryFilter(categoryId);
    setSkip(0);
  }, []);

  const filteredFoodList = foodList
    .filter(item => item.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
    .filter(item => categoryFilter ? item.categoryId === categoryFilter : true)
    .slice(0, skip + limit);

  return {
    error,
    loading,
    foodList: filteredFoodList,
    refetch: fetchFoodList,
    search,
    loadMore,
    filterByCategory
  }
}

export default useFoodList;

