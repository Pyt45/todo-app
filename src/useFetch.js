import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: controller.signal})
            .then(res => {
                if (!res.ok)
                    throw Error('could not fetch data');
                return res.json();
            })
            .then (data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError')
                    console.log('Fetch Abord');
                else {
                    setIsLoading(false);
                    setError(err.message);
                }
            })
        }, 1000);

        return () => {
            controller?.abort();
        }
    }, [url]);

    return { data, error, isLoading };
}

export default useFetch;