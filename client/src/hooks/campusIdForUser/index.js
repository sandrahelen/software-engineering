import { useState, useEffect } from 'react';
import axios from 'axios';

export const getDorm = (campusId) => {
    const [campus, setCampus] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/api/studentby/${campusId}`)
            .then(response => {
                if (response.data) {
                    setDorm(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [campusId]);
    return { campus, setCampus };
}
