import React from 'react';
import EditMembers from './editMembers/EditMembers';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm }) => {
    const approve = () => {
        alert("Kollektivet er godkjent")
    }
    
    return (
        <div className="dormBody">
            <p>Romnummer: {dorm.kollektivnummer}</p>
            <p>Medlemmer: {dorm.medlemmer.length}</p>
            <button
                onClick={() => approve()}
                className="approveButton">
                Godkjenn
            </button>
            <EditMembers />
        </div>
    )
}

export default IndividualDorm;