import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [url, setUrl] = useState('http://localhost:5000/api/user');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(url);

                setUsers(result.data);
            } catch (error){
                console.log(error)
            }
        };
        fetchData();
    }, [url]);
    return [{ users, setUsers }, setUrl];
}

