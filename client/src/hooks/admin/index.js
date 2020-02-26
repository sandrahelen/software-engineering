import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAdmin = (adminId) => {
    const [admin, setAdmin] = useState({});
    useEffect(() => {
        axios.get('http://localhost:5000/api/admin')
            .then(response => {
                if (response.data) {
                    //filter alle studentbyer som blir styrt av en vaktmester, men har nå bare en dummystudentbyid
                    let filteredDorms = response.data.filter(
                        dorm => dorm.studentby === campusId)
                    setAdmin(filteredDorms);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [campusId]);
    return { dorms, setDorms };
}

