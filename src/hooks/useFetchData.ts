import { useEffect, useState } from "react";
import { getErrorMessage } from "../utils/utils";

export const useFetchData = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null); // TODO: replace any
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
     setIsLoading(true);
     setData(null);
     setError('');

      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, isLoading, error}
};
