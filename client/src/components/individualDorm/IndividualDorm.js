import React from 'react';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm }) => {
    const approve = () => {
        alert("Kollektiv er godkjent")
    }
    return (
        <div className="dormBody">
            <p>Romnummer: {dorm.roomNumber}</p>
            <p>Medlemmer</p>
            <div>
                <ul className="memberList">
                    {dorm.members.map(member => <li>{member}</li>)}
                </ul>
            </div>
            <button
                onClick={() => approve()}
                className="approveButton">
                Godkjenn
            </button>
        </div>
    )
}

export default IndividualDorm;