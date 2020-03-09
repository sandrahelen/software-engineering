import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditMembers from './editMembers/EditMembers';
import { useUsers } from '../../../hooks/user';
import { useCleaningList } from '../../../hooks/vaskeliste';
import { FaTrashAlt } from 'react-icons/fa';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm, render, setRender }) => {
    const [{ users, setUsers }, doFetcth] = useUsers();
    const [showEditMemebers, setShowEditMembers] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([])

    //Finner de userne som bor i kollektivet
    useEffect(() => {
        let filter = users.filter(
            user => user.kollektiv === dorm._id)
        setFilteredUsers(filter)

    }, [dorm._id, render, users]);

    const approve = () => {
        alert("Kollektivet er godkjent")
    }
    
    const deleteDorm = (id) => {
        axios.delete(`http://localhost:5000/api/kollektiv/${id}`)
            .then(() => {
                setRender(!render);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    console.log(filteredUsers)
    return (
        <div className="dormBody">
            <p>Romnummer: {dorm.kollektivnummer}</p>
            <p onClick={() => setShowEditMembers(true)} className="individualDorm__members">Medlemmer: {filteredUsers.length}</p>
            <button
                onClick={() => approve()}
                className="approveButton">
                Godkjenn
            </button>
            <EditMembers showEditMemebers={showEditMemebers} setShowEditMembers={setShowEditMembers} members={filteredUsers} setMembers={setFilteredUsers} dormId={dorm._id} render={render} setRender={setRender} />
            <FaTrashAlt
                className="individualDorm__delete"
                onClick={() => deleteDorm(dorm._id)} />
        </div>
    )
}

export default IndividualDorm;