import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CampusView.css'

const dummyStudentbyId = 'Roar Fiksemann';

const CampusView = () => {
    const [campuses, setCampuses] = useState([]);
    const [adminName, setAdminName] = useState();
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/studentby')
            .then(response => {
                if (response.data) {
                    let filteredCampuses = response.data.filter(campus => campus.vaktmester === dummyStudentbyId)
                    setCampuses(filteredCampuses);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    return (
        <div className="campusView__body">
            <div className="campusView-header">
                <h1>Mine studentbyer</h1>
            </div>
            <div className="campusView-campuses">
                {campuses.map(campus =>
                    <Link className="campusView-text" to={`/AdminView?campusFromUrl=${campus._id}`}>
                        <p>{campus.navn}</p>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default CampusView;

