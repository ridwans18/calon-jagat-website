import { useEffect, useState } from "react";

const useFetch = (fetchFunction, autofetch = true) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchFunction();
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // const reset = () => {
  //   setData(null);
  //   setLoading(false);
  //   setError(null);
  // };

  useEffect(() => {
    if (autofetch) fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
