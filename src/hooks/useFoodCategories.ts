import { useCallback, useEffect, useState } from "react";
import { Root as Categories } from "../types/foodCategories";
import useFetch from "./useFetch";

interface UseFoodCategories {
  error: string;
  loading: boolean;
  foodCategories: Categories;
  refetch: () => Promise<void>;
}

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
    if (loading) {
      fetchCategories();
    }
  }, [fetchCategories, fetchData, loading]);

  return {
    error,
    loading,
    foodCategories,
    refetch: fetchCategories
  }
}

export default useFoodCategories;