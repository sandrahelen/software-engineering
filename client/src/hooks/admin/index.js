import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAdmins = () => {
    const [admins, setAdmins] = useState([{
        vaskeliste: "",
        navn: "",
        admin: "",
        _id: ""
    }]);
    const [url, setUrl] = useState('http://localhost:5000/api/admin');

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(false);
            try {
                const result = await axios(url);

                setAdmins(result.data);
            } catch (error){
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);
    return [{ admins, isLoading, isError }, setUrl];
}

