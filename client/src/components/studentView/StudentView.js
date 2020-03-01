import React, { useState, useEffect } from 'react';
import { useDormWithDormId } from "../../hooks/dormForStudentID"
import { useCampusForStudentID } from "../../hooks/campusIdForUser"
import { useCleaningList } from "../../hooks/vaskeliste"
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import './studentView.css'

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



    const dorm = useDormWithDormId(user._id);
    const vaskelisteId = useCampusForStudentID(dorm.vaskeliste);
    const { cleaningList, setCleaningList } = useCleaningList(vaskelisteId);
    console.log(dorm)
    return (
        <div className="studentView">
            <h1 className="studentView__header">Kollektiv Nr {dorm.kollektivnummer}</h1>
            <div className="studentView__body">
                <p className="studentView__header2">Vaskeliste</p>
                <div className="studentView__cleaningList">
                    {cleaningList.liste.map((listItem, index) =>
                        <div
                            className="studentView__listItem"
                            key={index}>{listItem}</div>
                    )}
                </div>
            </div>
            <div className="studentView__buttonWrapper">
                <Link to="/">
                    <button className="studentView__button">Log ut</button>
                </Link>
            </div>
        </div>
    )
}

export default StudentView;
