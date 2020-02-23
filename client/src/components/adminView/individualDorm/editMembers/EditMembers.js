import React, { useState} from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import './EditMembers.css';

const EditMembers = ({ showEditMemebers, setShowEditMembers, members, setMembers, dormId }) => {
    const [newMember, setNewMember] = useState('');

    const deleteMember = (id) => {
        axios.delete(`http://localhost:5000/api/user/${id}`)
            .then(response => {
                setMembers(members.filter(member => member._id !== id));
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const addMember = () => {
        axios.post('http://localhost:5000/api/user',
            {
                "username": newMember,
                "password": "12345",
                "__v": 0,
                "kollektiv": dormId,
            })
            .then(response => {
                console.log(response)
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
                            <div className="editMembers__listMember">
                                <div key={index} >{member.username}</div>
                                <FaTrashAlt
                                    className="editMembers__delete"
                                    onClick={() => deleteMember(member._id)} />
                            </div>
                        )}
                    </div>
                    <div className="editMembers__add">
                        <input
                            value={newMember}
                            onChange={e => setNewMember(e.target.value)}
                            type="text"
                            className="editMembers__input"
                            placeholder="Skriv inn navn her" />
                        <button
                            className="editMembers__submit"
                            onClick={() => {
                                addMember()
                                setNewMember('')
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