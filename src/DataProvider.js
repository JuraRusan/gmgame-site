import { useEffect, useState, Redirect } from 'react'
import axios from "axios";

const useAxiosGet = (url, props) => {
    const [data, setData] = useState({});
    // const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((error) => {
            if (error.response) {
                if (error.response.status === 401){
                    window.location.replace("/login")
                }
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
            // setError(error.message))
        })
        .finally(() => setLoaded(true));
    }, []);
    return { data, loaded };
};

export default useAxiosGet;