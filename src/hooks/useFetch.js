import { useState, useEffect, useRef } from 'react';
export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const options = useRef(_options).current;
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setError('Cannot fetch data');
        setIsPending(false);
      }
    };
    fetchData();

    return () => {};
  }, [url, options]);

  return { data, isPending, error };
};
