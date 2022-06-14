import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const getData = async () => {

            try {

                const response = await fetch(url);
                const result = await response.json();

                setData(result.items);

            } catch (error) {

                console.log(error);

            }

        } 

        getData();

    }, [url]);

    return { data };

}