import { useState, useEffect } from "react";

export default function useFetchData(url) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            }   catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
    }, [url]); //arreglo de dependencias

    return { loading, result, error };
}
