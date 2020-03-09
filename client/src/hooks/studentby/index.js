import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCampuses = () => {
    const [campuses, setCampuses] = useState([]);
    const [url, setUrl] = useState('http://localhost:5000/api/studentby');

    const [campusIsLoading, setCampusIsLoading] = useState(false);
    const [campusIsError, setCampusIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setCampusIsError(false);
            setCampusIsLoading(false);
            try {
                const result = await axios(url);

                setCampuses(result.data);
            } catch (error){
                setCampusIsError(true);
            }
            setCampusIsLoading(false);
        };
        fetchData();
    }, [url]);
    return [{ campuses, campusIsLoading, campusIsError }, setUrl];
}


