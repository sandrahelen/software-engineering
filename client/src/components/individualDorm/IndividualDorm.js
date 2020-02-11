import React from 'react';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm }) => {
    return (
        <div className="dormBody">
            <p>Romnummer: {dorm.roomNumber}</p>
            <p>Medlemmer</p>
            <div className="list">
            <ul>{dorm.members.map(member => <li>{member}</li>)}
            </ul>
            </div>
        </div>
    )
}

export default IndividualDorm;