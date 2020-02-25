import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCleaningList = (cleaningListId) => {
    const [cleaningList, setCleaningList] = useState([{liste:[]}]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/vaskeliste/')
            .then(response => {
                if (response.data) {
                    let filteredCleaningList = response.data.filter(
                        list => list._id === cleaningListId)
                        setCleaningList(filteredCleaningList);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [cleaningListId]);
    return { cleaningList, setCleaningList};
}

