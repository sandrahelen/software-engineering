import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import IndividualDorm from './individualDorm/IndividualDorm';
import AddDorm from './addDorm/AddDorm';
import './AdminView.css';

const AdminView = ({ location }) => {
    const [dorms, setDorms] = useState([]);
    const [campusId, setCampusId] = useState()

    //hook for å vise addDormcomponenten
    const [showAddDorm, setShowAddDorm] = useState(false)

    useEffect(() => {
        const { campusFromUrl } = queryString.parse(location.search);
       setCampusId(campusFromUrl)
    }, [location])
    
    useEffect(() => {
        axios.get('http://localhost:5000/api/kollektiv')
            .then(response => {
                if (response.data) {
                    //filtrer så bare kollektivene i riktig studentby vises
                    let dormsById = response.data.filter(dorm => dorm.studentby === campusId)
                    setDorms(dormsById)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [campusId]);
    return (
        <div className="adminView">
            <div className="header">
                <h1>Mine Kollektiv</h1>
            </div>
            <div className="adminView__dorms">

                {/*Maper hele dormlisten inn i IndividualDormkomponoenter*/}
                <ul className="dormList">
                    {dorms.map((dorm, index) =>
                        <li key={index}><IndividualDorm dorm={dorm} /></li>)}
                </ul>
                
            </div>
            <div className="addDorm__wrapper">
                <span 
                    className="addDorm__plus"
                    onClick={() =>
                        setShowAddDorm(true)
                    }>+</span>
                <span
                    className="addDorm__text"
                    onClick={() =>
                        setShowAddDorm(true)
                    }
                >
                    Legg til kollektiv
            </span>
            </div>
            <AddDorm showAddDorm={showAddDorm} setShowAddDorm={setShowAddDorm} campusId={campusId} />
        </div>
    )
}

export default AdminView;