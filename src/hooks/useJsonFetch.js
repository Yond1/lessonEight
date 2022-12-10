import axios from "axios";
import { useEffect, useState } from "react";

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(url, {
          method: "GET",
        });
        if (!response.status) throw new Error(response.statusText);
        const data = await response.data;
        setData(data);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [data, isLoading, hasError];
};
