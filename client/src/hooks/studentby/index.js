import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../URLs'


export const useCampuses = (adminId) => {
    const [campuses, setCampuses] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/studentby`)
            .then(response => {
                if (response.data) {
                    //filter alle studentbyer som blir styrt av en vaktmester, men har nå bare en dummystudentbyid
                    console.log(response.data)
                    let filteredCampuses = response.data.filter(campus => campus.admin === adminId)
                    setCampuses(filteredCampuses);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [adminId]);
    return { campuses, setCampuses};
}

