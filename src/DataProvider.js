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
        if (error.response.status === 401) {
          window.location.replace("/login")
        }
        if (error.response.status === 402) {
          window.location.replace("/auth")
        }
        setError(error.message);
      } finally {
        setLoaded(true);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url]);
  return {cancel: cancel, data: data, error: error, loaded: loaded, loading: loading};
};

function sendRequest(url, method, payload) {
  let {data, error} = undefined || {};

  const xhr = new XMLHttpRequest();
  xhr.open(method, url, false);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  try {
    xhr.send(JSON.stringify(payload));
    if (xhr.status !== 200) {
      console.log(`Error ${xhr.status}`);
    } else {
      data = JSON.parse(xhr.response);
    }
  } catch (err) {
    error = err.message;
  }
  // (async () => {
  //   try {
  //     const response = await axios.request({
  //       data: payload,
  //       method,
  //       url,
  //     });
  //     data = response.data;
  //   } catch (err) {
  //       if (error.response.status === 401){
  //           window.location.replace("/login")
  //       }
  //       error = err.message;
  //   } finally {
  //     loaded = true;
  //     loading = false;
  //   }
  // })();

  return {body: data, error: error};
}

export {useAxios, sendRequest};