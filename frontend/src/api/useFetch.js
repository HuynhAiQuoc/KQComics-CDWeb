

import { useState, useEffect } from 'react'

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '626395e262msh02ba9742602b4e1p1d8a23jsnc6576cb24819',
//         'X-RapidAPI-Host': 'webtoon.p.rapidapi.com'
//     }
// };

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a231414b5fmshe281d486bd98338p11077ejsn24b8965962c2',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
};

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url]);

    return { data, loading, error };
};

export default useFetch;