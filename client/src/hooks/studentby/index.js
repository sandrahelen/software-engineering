import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCampuses = (adminId) => {
    const [campuses, setCampuses] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/studentby')
            .then(response => {
                if (response.data) {
                    //filter alle studentbyer som blir styrt av en vaktmester, men har nå bare en dummystudentbyid
                    let filteredCampuses = response.data.filter(campus => campus.user === adminId)
                    setCampuses(filteredCampuses);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [adminId]);
    return { campuses, setCampuses};
}

