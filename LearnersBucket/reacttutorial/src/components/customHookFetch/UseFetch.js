import React, { useEffect, useState } from 'react'

function UseFetch(url) {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        fetch(url).then(response => response.json()).then(newdata => setData(newdata))

    }, [url])

    return data
}

export default UseFetch