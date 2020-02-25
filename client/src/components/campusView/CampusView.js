import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCampuses } from '../../hooks/studentby';
import './CampusView.css'

const dummyStudentbyId = '5e4e6ac6b28d3b0a748c2ead';

const CampusView = () => {
    const  { campuses, setCampuses } = useCampuses(dummyStudentbyId);
    const [adminName, setAdminName] = useState();

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

