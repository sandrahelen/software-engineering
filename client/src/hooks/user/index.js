import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUser = (dormId) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/user')
            .then(response => {
                if (response.data) {
                    let filteredUsers = response.data.filter(
                        user => user.kollektiv === dormId)
                    setUsers(filteredUsers)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [dormId]);
    return { users, setUsers };
}