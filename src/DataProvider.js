import { useEffect, useState, useRef } from 'react'
import axios from "axios";

const useAxios = (url, method, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(true);

    const controllerRef = useRef(new AbortController());
    const cancel = () => {
      controllerRef.current.abort();
    };
    useEffect(() => {
      (async () => {
        try {
          const response = await axios.request({
            data: payload,
            signal: controllerRef.current.signal,
            method,
            url,
          });
          setData(response.data);
        } catch (error) {
            if (error.response.status === 401){
                window.location.replace("/login")
            }
          setError(error.message);
        } finally {
          setLoaded(true);
          setLoading(false);
        }
      })();
    }, [payload, method, url]);
    return { cancel: cancel, data: data, error: error, loaded: loaded, loading: loading };
  };

export default useAxios;