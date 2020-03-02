import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import IndividualDorm from './individualDorm/IndividualDorm';
import AddDorm from './addDorm/AddDorm';
import './AdminView.css';
import { Link } from 'react-router-dom';
import EditCleaningList from './editCleaningList/EditCleaningList';


const AdminView = ({ location }) => {
    const [dorms, setDorms] = useState([]);
    const [campusId, setCampusId] = useState();
    const [campusName, setcampusName] = useState();
    const [cleaningListId, setCleaningListId] = useState();

    //hook for å rerendre kollektivene etter å ha lagt til et nytt
    const [render, setRender] = useState(false);

    //hook for å vise addDormcomponenten
    const [showAddDorm, setShowAddDorm] = useState(false)
    const [showCleaningList, setShowCleaningList] = useState(false)

    useEffect(() => {
        const { campusId, campusName, cleaningListId } = queryString.parse(location.search);
        setCampusId(campusId);
        setcampusName(campusName);
        setCleaningListId(cleaningListId);
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
    }, [campusId, render]);
    return (
        <div className="adminView__body">
            {/* <Link className="adminView__back" to={'CampusView'}>
                <p>Tilbake</p>
            </Link> */}
            <div className="adminView__header">
                <h1>{campusName}</h1>
            </div>
            <div className="adminView__dorms">

                {/*Maper hele dormlisten inn i IndividualDormkomponoenter*/}
                <ul className="dormList">
                    {dorms.map((dorm, index) =>
                        <li key={index}><IndividualDorm dorm={dorm} render={render} setRender={setRender} /></li>)}
                </ul>

            </div>
            <div className="buttons__wrapper">
                <button
                    className="adminView__button"
                    onClick={() =>
                        setShowCleaningList(true)
                    }
                >
                    Endre vaskeliste
                </button>
                <button
                    className="adminView__button"
                    onClick={() =>
                        setShowAddDorm(true)
                    }
                >
                    Legg til kollektiv
                </button>
                <Link to="/">
                    <button className="adminView__button" style={{backgroundColor: "gray"}}>Log ut</button>
                </Link>
            </div>
            <EditCleaningList  showCleaningList={showCleaningList} setShowCleaningList={setShowCleaningList} cleaningListId={cleaningListId}/> 
            <AddDorm showAddDorm={showAddDorm} setShowAddDorm={setShowAddDorm} campusId={campusId} render={render} setRender={setRender} />
        </div>
    )
}

export default AdminView;