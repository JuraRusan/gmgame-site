import {useEffect, useState, useRef} from 'react'
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
    // (async () => {
      // try {
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
          setError(error.message);
        })
        .finally( () => {
          setLoaded(true);
          setLoading(false);
        })
      // } catch (error) {
      //   if (error.response.status === 401) {
      //     window.location.replace("/login")
      //   }
      //   if (error.response.status === 402) {
      //     window.location.replace("/auth")
      //   }
      //   setError(error.message);
      // } finally {
      //   setLoaded(true);
      //   setLoading(false);
      // }
    // })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url]);
  return {cancel: cancel, data: data, error: error, loaded: loaded, loading: loading};
};

 
async function sendRequest(url, method, payload) {
  let {data, error} = undefined || {};

  // const xhr = new XMLHttpRequest();
  // xhr.open(method, url, true);
  // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // try {
  //   xhr.send(JSON.stringify(payload));
  //   if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
  //     console.log(`Error ${xhr.status}`);
  //   } else {
  //     data = JSON.parse(xhr.response);
  //     console.log(data);
  //   }
  // } catch (err) {
  //   error = err.message;
  //   console.log(err);
  // }
 
  // return {body: data, error: error};

  // let [data, setData] = useState(null);
  // let [error, setError] = useState("");
  // let [loaded, setLoaded] = useState(false);
  // let [loading, setLoading] = useState(true);

  // const controllerRef = useRef(new AbortController());
  // const cancel = () => {
  //   controllerRef.current.abort();
  // };
  return await axios.request({
    data: payload,
    // signal: controllerRef.current.signal,
    method,
    url,
    // timeout: 3000
  })
  .then(response => response.data)
  .catch(error => error.message)
  // .finally( () => {
  //   setLoaded(true);
  //   setLoading(false);
  // })

  // return {cancel: cancel, data: data, error: error, loaded: loaded, loading: loading};
}

export {useAxios, sendRequest};