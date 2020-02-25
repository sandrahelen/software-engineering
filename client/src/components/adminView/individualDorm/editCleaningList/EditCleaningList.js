import React, { useState} from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import './EditCleaningList.css';

const EditCleaningList = ({ showEditCleaningList, setShowEditCleaningList, CleaningList, setCleaningList, dormId }) => {
    const [newCleaningItem, setNewCleaningItem] = useState('');

    // const deleteCleaningList = (id) => {
    //     axios.delete(`http://localhost:5000/api/user/${id}`)
    //         .then(() => {
    //             setCleaningList(CleaningList.filter(member => member._id !== id));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // };

    // const addCleaningList = () => {
    //     axios.post('http://localhost:5000/api/vaskeliste',
    //         {
    //             "username": newMember,
    //             "password": "12345",
    //             "__v": 0,
    //             "kollektiv": dormId,
    //         })
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // };

    return (
        <div className={showEditMemebers ? 'editCleaningList__overlay' : ''}>
            {showEditMemebers && (
                <div className="editCleaningList__body">
                    <div className="editCleaningList__headerWrapper">
                        <p className="editCleaningList__header">Beboere</p>
                        <span
                            className="editCleaningList__cancel"
                            onClick={() => {
                                setShowEditCleaningList(false);
                            }}
                            role="button"
                        >
                            X
                    </span>
                    </div>
                    <div className="editCleaningList__list">
                        {CleaningList.map((member, index) =>
                            <div className="editCleaningList__listMember">
                                <div key={index} >{member.username}</div>
                                <FaTrashAlt
                                    className="editCleaningList__delete"
                                     />
                            </div>
                        )}
                    </div>
                    <div className="editCleaningList__add">
                        <input
                            value={newMember}
                            onChange={e => setNewCleaningItem(e.target.value)}
                            type="text"
                            className="editCleaningList__input"
                            placeholder="Skriv inn navn her" />
                        <button
                            className="editCleaningList__submit"
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

export default EditCleaningList;