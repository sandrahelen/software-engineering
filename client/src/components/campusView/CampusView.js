import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CampusView.css'

const dummyStudentbyId = '5e4e6ac6b28d3b0a748c2ead';

const CampusView = () => {
    const [campuses, setCampuses] = useState([]);
    const [adminName, setAdminName] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/api/studentby')
            .then(response => {
                if (response.data) {
                    //filter alle studentbyer som blir styrt av en vaktmester, men har nå bare en dummystudentbyid
                    let filteredCampuses = response.data.filter(campus => campus.user === dummyStudentbyId)
                    setCampuses(filteredCampuses);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    return (
        <div className="campusView__body">
            <div className="campusView__header">
                <h1 >Mine studentbyer</h1>
            </div>
            <div className="campusView-campuses">
                {campuses.map((campus, index) =>
                    <Link key={index} className="campusView-text" to={`/AdminView?campusId=${campus._id}&campusName=${campus.navn}`}>
                        <p>{campus.navn}</p>
                    </Link>

                )}
            </div>
        </div>
    )
}

export default CampusView;

