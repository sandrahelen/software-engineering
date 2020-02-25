import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCampuses } from '../../hooks/studentby';
import './CampusView.css'

const dummyAdmin = {
    username: "Vaktmester",
    password: "passord",
    _id: "5e4e6ac6b28d3b0a748c2ead",
    __v: 0
}

const CampusView = () => {
    const { campuses, setCampuses } = useCampuses(dummyAdmin);
    const [adminName, setAdminName] = useState();
    console.log(campuses)
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

