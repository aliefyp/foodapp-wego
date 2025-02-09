/**
 * Hook to perform a GET request to a given URL, with optional `RequestInit` options.
 *
 * @example
 * const fetchData = useFetch();
 * const response = await fetchData('https://example.com/api/data');
 *
 * @function
 * @returns {function} A function that takes a URL and optional `RequestInit` options,
 * and returns a Promise that resolves with the response data.
 */
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