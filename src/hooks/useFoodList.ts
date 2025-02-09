import { useCallback, useEffect, useState } from "react";
import { Root as FoodList } from "../types/foodList";
import useFetch from "./useFetch";

interface UseFoodList {
  error: string;
  loading: boolean;
  foodList: FoodList['foods'];
  refetch: () => Promise<void>;
}

  /**
   * Hook to fetch food list from a predefined API endpoint.
   *
   * It will fetch the list of food items and return the list of food items,
   * loading state, error message and a function to refetch the list.
   *
   * @returns An object with the following properties:
   *   error: string - The error message if the fetch fails.
   *   loading: boolean - The loading state of the fetch.
   *   foodList: FoodList['foods'] - The list of food items.
   *   refetch: () => Promise<void> - A function to refetch the list of food items.
   */
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

