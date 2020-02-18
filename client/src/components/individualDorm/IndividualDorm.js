import React from 'react';
import './IndividualDorm.css';
import DropDownMenu from '../dropDownMenu/DropDownMenu';

const IndividualDorm = ({ dorm }) => {
    const approve = () => {
        alert("Kollektivet er godkjent")
    }
    
    return (
        <div className="dormBody">
            <p>Romnummer: {dorm.kollektivnummer}</p>
            <DropDownMenu dormMembers={dorm.medlemmer} />
            <button
                onClick={() => approve()}
                className="approveButton">
                Godkjenn
            </button>
        </div>
    )
}

export default IndividualDorm;