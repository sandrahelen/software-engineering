import React, { useState} from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import './EditMembers.css';
import { API_URL } from '../../../../URLs'


const EditMembers = ({ showEditMemebers, setShowEditMembers, members, setMembers, dormId, render, setRender}) => {
    const [newMemberUsername, setNewMemberUsername] = useState('');
    const [newMemberFirstName, setNewMemberFirstName] = useState('');
    const [newMemberLastName, setNewMemberLastName] = useState('');
    const [render2, setRender2] = useState(false);
    const deleteMember = (id) => {
        axios.delete(`${API_URL}/user/${id}`)
            .then(() => {
                setMembers(members.filter(member => member._id !== id));
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const addMember = () => {
        axios.post(`${API_URL}/user/register`,
            {
                "username": newMemberUsername,
                "fornavn": newMemberFirstName,
                "etternavn": newMemberLastName,
                "password": "12345",
                "__v": 0,
                "kollektiv": dormId,
            })
            .then(response => {
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div className={showEditMemebers ? 'editMembers__overlay' : ''}>
            {showEditMemebers && (
                <div className="editMembers__body">
                    <div className="editMembers__headerWrapper">
                        <p className="editMembers__header">Beboere</p>
                        <span
                            className="editMembers__cancel"
                            onClick={() => {
                                setShowEditMembers(false);
                            }}
                            role="button"
                        >
                            X
                    </span>
                    </div>
                    <div className="editMembers__list">
                        {members.map((member, index) =>
                            <div key={index} className="editMembers__listMember">
                                <div  >{member.username}</div>
                                <FaTrashAlt
                                    className="editMembers__delete"
                                    onClick={() => {
                                        deleteMember(member._id)
                                        setRender2(!render2);
                                        }} />
                            </div>
                        )}
                    </div>
                    <div className="editMembers__add">
                        <input
                            value={newMemberUsername}
                            onChange={e => setNewMemberUsername(e.target.value)}
                            type="text"
                            className="editMembers__input"
                            placeholder="Skriv brukernavn her" />
                        <input
                            value={newMemberFirstName}
                            onChange={e => setNewMemberFirstName(e.target.value)}
                            type="text"
                            className="editMembers__input"
                            placeholder="Skriv inn fornavn" />
                        <input
                            value={newMemberLastName}
                            onChange={e => setNewMemberLastName(e.target.value)}
                            type="text"
                            className="editMembers__input"
                            placeholder="Skriv inn etternavn" />
                        <button
                            className="editMembers__submit"
                            onClick={() => {
                                addMember()
                                setNewMemberUsername('')
                                setNewMemberFirstName('')
                                setNewMemberLastName('')
                                setRender(!render)
                                setRender2(!render2)
                            }
                            }
                        >
                            Legg til beboer
                    </button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default EditMembers;