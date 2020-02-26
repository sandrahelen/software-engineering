import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCleaningList = (cleaningListId) => {
    const [cleaningList, setCleaningList] = useState({liste:[]});
    useEffect(() => {
        if (cleaningListId) {
            axios.get(`http://localhost:5000/api/vaskeliste/${cleaningListId}`)
            .then(response => {
                if (response.data) {
                    setCleaningList(response.data[0]);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            }
    }, [cleaningListId]);
    return { cleaningList, setCleaningList};
}

