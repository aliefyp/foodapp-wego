import { useCallback, useEffect, useState } from "react";
import { Root as Categories } from "../types/foodCategories";
import useFetch from "./useFetch";

interface UseFoodCategories {
  error: string;
  loading: boolean;
  foodCategories: Categories;
  refetch: () => Promise<void>;
}

/**
 * A custom hook that fetches food categories from a remote endpoint.
 * 
 * @returns {UseFoodCategories} An object containing:
 * - `error`: A string that holds any error message if the fetch fails.
 * - `loading`: A boolean indicating whether the data is currently being fetched.
 * - `foodCategories`: An array of category objects fetched from the endpoint.
 * - `refetch`: A function to manually refetch the food categories.
 */

const useFoodCategories = (): UseFoodCategories => {
  const [loading, setLoading] = useState(true);
  const [error, setError] =  useState('');
  const [foodCategories, setFoodCategories] = useState<Categories>([]);
  const fetchData = useFetch();

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetchData<Categories>(
        "https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/33cd31ce75ba72a809d48944463b53b74b9ccae8/categories.json"
      );
      setFoodCategories(response);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [fetchData]);

  useEffect(() => {
    fetchCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    error,
    loading,
    foodCategories,
    refetch: fetchCategories
  }
}

export default useFoodCategories;