import React, { useState } from 'react';
import IndividualDorm from '../individualDorm/IndividualDorm';
import './AdminView.css';

const AdminView = () => {
    const [dorms, setDorms] = useState([]);
    const dummyDorms = [
        {
            roomNumber: 1,
            members: ['magnus', 'fredrik']
        },
        {
            roomNumber: 2,
            members: ['Hans', 'Magne']
        }
    ];
    return (
        <div className="adminView">
            <div className="header">
                <h1>Mine Kollektiv</h1>
            </div>
            <div className="body">
                <ul className="dormList">
                    {dummyDorms.map(dorm =>
                        <li key={dorm.roomNumber}><IndividualDorm dorm={dorm} /></li>)}
                </ul>

            </div>
        </div>
    )
}

export default AdminView;