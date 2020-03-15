import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../URLs'

export const useDormWithDormId = (kollektivId) => {
    const [dorm, setDorm] = useState({
        kollektivnummer: null,
        studentby: "",
        _id: "",
    });
    useEffect(() => {
        axios.get(`${API_URL}/kollektiv/${kollektivId}`)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setDorm(response.data[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [kollektivId]);
    return dorm;
}
