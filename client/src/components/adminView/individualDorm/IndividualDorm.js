import React, { useState } from 'react';
import EditMembers from './editMembers/EditMembers';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm }) => {
    const [showEditMemebers, setShowEditMembers] = useState(false)


    const approve = () => {
        alert("Kollektivet er godkjent")
    }
    
    return (
        <div className="dormBody" style={{borderStyle: 'solid'}}>
            <p>Romnummer: {dorm.kollektivnummer}</p>
            <p onClick={() => setShowEditMembers(true)}>Medlemmer: {dorm.medlemmer.length}</p>
            <button
                onClick={() => approve()}
                className="approveButton">
                Godkjenn
            </button>
            <EditMembers showEditMemebers={showEditMemebers} setShowEditMembers={setShowEditMembers} members={dorm.medlemmer} />
        </div>
    )
}

export default IndividualDorm;