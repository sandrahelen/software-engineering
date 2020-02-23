import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditMembers from './editMembers/EditMembers';
import { useUser } from '../../../hooks/user';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm }) => {
    const [showEditMemebers, setShowEditMembers] = useState(false);
    const [members, setMembers] = useState([]);
    const [cleaningList, setCleaningList] = useState([]);
    const { users, setUsers } = useUser(dorm._id);

    useEffect(() => {
        axios.get('http://localhost:5000/api/user')
            .then(response => {
                if (response.data) {
                    let filteredUsers = response.data.filter(
                        user => user.kollektiv === dorm._id)
                    setMembers(filteredUsers)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [dorm._id]);
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/vaskeliste')
    //         .then(response => {
    //             if (response.data) {
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [dorm.id]);

    const approve = () => {
        alert("Kollektivet er godkjent")
    }
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
        </div>
    )
}

export default IndividualDorm;