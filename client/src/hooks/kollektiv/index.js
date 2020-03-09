import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDorms = () => {
    const [dorms, setDorms] = useState([]);
    const [url, setUrl] = useState('http://localhost:5000/api/kollektiv');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(url);

                setDorms(result.data);
            } catch (error){
                console.log(error)
            }
        };
        fetchData();
    }, [url]);
    return [{ dorms, setDorms }, setUrl];
}

