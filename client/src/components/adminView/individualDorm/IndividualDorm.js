import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditMembers from './editMembers/EditMembers';
import { useUser } from '../../../hooks/user';
import { useCleaningList } from '../../../hooks/vaskeliste';
import { FaTrashAlt } from 'react-icons/fa';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm, render, setRender }) => {
    const [showEditMemebers, setShowEditMembers] = useState(false);
    const { cleaningList } = useCleaningList(dorm.vaskeliste);
    const { users, setUsers } = useUser(dorm._id);

    useEffect(() => {
        axios.get('http://localhost:5000/api/user')
            .then(response => {
                if (response.data) {
                    let filteredUsers = response.data.filter(
                        user => user.kollektiv === dorm._id)
                    setUsers(filteredUsers)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [dorm._id, render]);
    
    const approve = () => {
        alert("Kollektivet er godkjent")
    }
    const deleteDorm = (id) => {
        axios.delete(`http://localhost:5000/api/kollektiv/${id}`)
            .then(() => {
                setUsers(users.filter(member => member._id !== id));
                setRender(!render);
            })
            .catch((error) => {
                console.log(error);
            })
    };
    console.log(render)
    return (
        <div className="dormBody">
            <p>Romnummer: {dorm.kollektivnummer}</p>
            <p onClick={() => setShowEditMembers(true)}>Medlemmer: {users.length}</p>
            <button
                onClick={() => approve()}
                className="approveButton">
                Godkjenn
            </button>
            <EditMembers showEditMemebers={showEditMemebers} setShowEditMembers={setShowEditMembers} members={users} setMembers={setUsers} dormId={dorm._id}/>
            {/* <EditCleaningList showEditCleaningList={showEditCleaningList} setShowEditCleaningList={setShowEditCleaningLsit}  dormId={dorm._id}/> */}
            {cleaningList[0].liste.map((item, index) => <div key={index}>{item}</div>)}
            <FaTrashAlt
                                    className="individualDorm__delete"
                                    onClick={() => deleteDorm(dorm._id)} />
        </div>
    )
}

export default IndividualDorm;