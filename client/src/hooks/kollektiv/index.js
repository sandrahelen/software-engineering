import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../URLs'


export const useDorms = (campusId) => {
    const [dorms, setDorms] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/studentby`)
            .then(response => {
                if (response.data) {
                    //filter alle studentbyer som blir styrt av en vaktmester, men har nå bare en dummystudentbyid
                    let filteredDorms = response.data.filter(
                        dorm => dorm.studentby === campusId)
                    setDorms(filteredDorms);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [campusId]);
    return { dorms, setDorms };
}

