import { useState } from 'react';
import { useEffect } from 'react';

const useFetch = (url, options, ref) => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (ref.current) {
      (async () => {
        setIsLoading(true);
        fetch(url, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setData(result.data);
            setStatus(result.status);
            setMessage(result.message);
            setIsLoading(false);
          });
      })();
    }
    return () => (ref.current = false);
  }, [url, ref, options]);

  return { data, status, message, isLoading };
};

export default useFetch;
