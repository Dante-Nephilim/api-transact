import { useEffect, useState } from "react";
import React from "react";
export default function useFetch(url: string) {
    const [data, setData] = useState<any[]>([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoaded(true);
            });

    }, [url]);
    return { data, loaded };
}
