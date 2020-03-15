import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../URLs'

export const useCleaningList = (cleaningListId) => {
    const [cleaningList, setCleaningList] = useState({liste:[]});
    useEffect(() => {
        if (cleaningListId) {
            axios.get(`${API_URL}/vaskeliste/${cleaningListId}`)
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

