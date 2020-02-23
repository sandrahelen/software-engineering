import { useState, useEffect } from 'react';
import axios from 'axios';

export const useVaskeliste = (campusId) => {
    const [vaskeliste, setVaskeliste] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/vaskeliste/:${campusId}`)
            .then(response => {
                if (response.data) {
                    setVaskeliste(response.data.liste);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [campusId]);
    return { vaskeliste, setVaskeliste};
}

