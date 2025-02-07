import { useCallback, useEffect, useState } from "react";
import { Root as FoodList } from "../types/foodList";
import useFetch from "./useFetch";

interface UseFoodList {
  error: string;
  loading: boolean;
  foodList: FoodList['foods'];
  refetch: () => Promise<void>;
}

const useFoodList = (): UseFoodList => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [foodList, setFoodList] = useState<FoodList['foods']>([]);
  const fetchData = useFetch();

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
    fetchFoodList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    error,
    loading,
    foodList,
    refetch: fetchFoodList,
  }
}

export default useFoodList;

