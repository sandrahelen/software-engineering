import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCampuses } from '../../hooks/studentby';
import { API_URL } from '../../URLs'

import './CampusView.css'

const CampusView = ({ location }) => {
    const [admin, setAdmin] = useState({
        vaskeliste: "",
        navn: "",
        admin: "",
        _id: ""
    });

    const { username } = queryString.parse(location.search);

    useEffect(() => {
        axios.get(`${API_URL}/admin`)
            .then(response => {
                if (response.data) {
                    let filteredadmin = response.data.find(
                        admin => admin.username === username)
                    setAdmin(filteredadmin);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [location]);
    
    const { campuses } = useCampuses(admin._id);

    return (
        <div className="campusView__body">
            <div className="campusView__header">
                <h1>Mine studentbyer</h1>
            </div>
            <div className="campusView-campuses">
                {campuses.map((campus, index) =>
                    <Link key={index} className="campusView-text" to={`/AdminView?campusId=${campus._id}&campusName=${campus.navn}&cleaningListId=${campus.vaskeliste}`}>
                        <p>{campus.navn}</p>
                    </Link>

                )}
            </div>
        </div>
    )
}

export default CampusView;

