import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndividualDorm from '../individualDorm/IndividualDorm';
import './AdminView.css';

const AdminView = () => {
    const [dorms, setDorms] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:5000/api/kollektiv')
      .then(response => {
          console.log(response.data)
        if (response.data.length > 0) {
            setDorms(response.data)
        }
      })
      .catch((error) => {
        console.log(error);
      })
    },[]);
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
                    {dorms.map(dorm =>
                        <li key={dorm.id}>{dorm.nummer}</li>)}
                </ul>

            </div>
        </div>
    )
}

export default AdminView;