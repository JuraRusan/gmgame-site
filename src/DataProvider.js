import {useEffect, useState, useRef} from 'react'
import axios from "axios";

const useAxios = (url, method, payload, refresh) => {
  let [data, setData] = useState(null);
  let [error, setError] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [loading, setLoading] = useState(true);

  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    axios.request({
      data: payload,
      signal: controllerRef.current.signal,
      method,
      url,
    })
    .then((response) => {
      setData(response.data);
    })
    .catch(error => {
      if (error.response.status === 401) {
        window.location.replace("/login")
      }
      if (error.response.status === 402) {
        window.location.replace("/auth")
      }
      if (error.response.status === 403) {
        window.location.replace("/not_permitted")
      }
      setError(error.message);
    })
    .finally( () => {
      setLoaded(true);
      setLoading(false);
    })
  }, [method, url, refresh]);
  return {cancel: cancel, data: data, error: error, loaded: loaded, loading: loading};
};

 
async function sendRequest(url, method, payload) {
  return await axios.request({
    data: payload,
    method,
    url,
  })
  .then(response => response.data)
  .catch(error => error.message)
}

export {useAxios, sendRequest};