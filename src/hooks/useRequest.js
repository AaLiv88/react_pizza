import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const useRequest = (url, params, dependence) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        axios.get(url, { params })
            .then(response => setData(response.data))
            .catch(e => setError(e))
            .finally(() => setIsLoading(false));
    }, [dependence]);

    return [data, isLoading, error];
};


export default useRequest;



