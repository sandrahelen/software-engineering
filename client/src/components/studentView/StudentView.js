import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDormWithDormId } from "../../hooks/dormForStudentID"
import { useCampusForStudentID } from "../../hooks/campusIdForUser"
import { useCleaningList } from "../../hooks/vaskeliste"
import queryString from 'query-string';

const StudentView = ({ location }) => {
    const { username } = queryString.parse(location.search);
    const [user, setUser] = useState({
        etternavn: "",
        fornavn: "",
        kollektiv: "",
        password: "",
        username: "",
        __v: 0,
        _id: "",
    });


    useEffect(() => {
        axios.get('http://localhost:5000/api/user')
            .then(response => {
                if (response.data) {
                    let filteredUsers = response.data.filter(
                        user => user.username === username)
                    setUser(filteredUsers[0])
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [location])
    
    const campusId = useDormWithDormId(user.kollektiv);
    const vaskelisteId = useCampusForStudentID(campusId);
    const { cleaningList, setCleaningList } = useCleaningList(vaskelisteId)
    return (
        <div>
            <h1>Mitt kollektiv</h1>
            {cleaningList.liste.map((listItem, index) =>
                <div key={index}>{listItem}</div>
            )}
        </div>
    )
}

export default StudentView;