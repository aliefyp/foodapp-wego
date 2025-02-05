const useFetch = () => {
  async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json() as T;
  }

  return fetchData;
}

export default useFetch;