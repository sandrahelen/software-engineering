import React from 'react';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm }) => {
    const approve = () => {
        alert("Kollektiv er")
    }
    console.log(dorm)
    return (
        <div className="dormBody">
            <p>Romnummer: {dorm.kollektivnummer}</p>
            <p>Medlemmer</p>
            <div>
                <ul className="memberList">
                    {dorm.medlemmer.map(member => <li>{member}</li>)}
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