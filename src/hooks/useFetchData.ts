import { useEffect, useState } from "react";

export const useFetchData = (getDataFn: any) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    try {
      getDataFn().then((res: any) => {
        setData(res);
        setIsLoading(false);
      });
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error };
};
