import { useState, useEffect } from 'react';
import axios from 'axios';

export const getDorm = (kollektivId) => {
    const [dorm, setDorm] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/api/kollektiv/${kollektivId}`)
            .then(response => {
                if (response.data) {
                    setDorm(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [kollektivId]);
    return { dorm, setDorm };
}
