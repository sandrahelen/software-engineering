import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditMembers from './editMembers/EditMembers';
import { useUser } from '../../../hooks/user';
import { useCleaningList } from '../../../hooks/vaskeliste';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaRegWindowClose } from 'react-icons/fa';
import './IndividualDorm.css';

const IndividualDorm = ({ dorm, render, setRender }) => {
    const [showEditMemebers, setShowEditMembers] = useState(false);
    const { cleaningList } = useCleaningList(dorm.vaskeliste);
    const { users, setUsers } = useUser(dorm._id);
    console.log(dorm)
    useEffect(() => {
        console.log("test")
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
        axios.put(`http://localhost:5000/api/kollektiv/${dorm._id}`,
        {
            "godkjentVask": !dorm.godkjentVask,
        }
        )
        .then(response => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
        setRender(!render);
        alert(`Kollektivet er ${!dorm.godkjentVask? "godkjent" : "underkjent"}`)
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
    return (
        <div className="dormBody">
            {dorm.godkjentVask ? 
                <FaRegCheckCircle className="check"/>
                :
                <FaRegWindowClose className="cross"/>
            }
            <p>Romnummer: {dorm.kollektivnummer}</p>
            <p onClick={() => setShowEditMembers(true)} className="individualDorm__members">Medlemmer: {users.length}</p>
            {dorm.godkjentVask ?

                <button
                    onClick={() => approve()}
                    className="approveButton">
                    Underkjenn
                </button>
                :
                <button
                    onClick={() => approve()}
                    className="approveButton">
                    Godkjenn
                </button>
            }
            <EditMembers showEditMemebers={showEditMemebers} setShowEditMembers={setShowEditMembers} members={users} setMembers={setUsers} dormId={dorm._id} render={render} setRender={setRender} />
            <FaTrashAlt
                className="individualDorm__delete"
                onClick={() => deleteDorm(dorm._id)} />
        </div>
    )
}

export default IndividualDorm;