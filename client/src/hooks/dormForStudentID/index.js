import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDormWithDormId = (kollektivId) => {
    const [dorm, setDorm] = useState({
        kollektivnummer: null,
        studentby: "",
        _id: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:5000/api/kollektiv/${kollektivId}`)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setDorm(response.data[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [kollektivId]);
    return dorm.studentby;
}
