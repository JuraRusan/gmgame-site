import { useEffect, useState, useRef } from 'react'
import axios from "axios";

const useAxios = (url, method, payload) => {
  let [data, setData] = useState(null);
  let [error, setError] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [loading, setLoading] = useState(true);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url]);
  return { cancel: cancel, data: data, error: error, loaded: loaded, loading: loading };
};

// function sendRequest(url, method, payload) {
//   let {data, error, loaded, loading} = null;

//   try {
//     const response = axios.request({
//       data: payload,
//       method,
//       url,
//     });
//     data = response.data;
//   } catch (error) {
//       if (error.response.status === 401){
//           window.location.replace("/login")
//       }
//       error = error.message;
//   } finally {
//     loaded = true;
//     loading = false;
//   }

//   return { data: data, error: error, loaded: loaded, loading: loading };
// }

export {useAxios};