import React, { useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import './EditCleaningList.css';

const EditCleaningList = ({ cleaningList, showCleaningList, setShowCleaningList}) => {
    
    const [newCleaningItem, setNewCleaningItem] = useState('');
    const [render, setRender] = useState(false);

    const newCleaningList = cleaningList.liste;

    const addCleaningItem = (newCleaningItem) => {
        newCleaningList.push(newCleaningItem);
        axios.put(`http://localhost:5000/api/vaskeliste/${cleaningList._id}`,
            {
                "liste": newCleaningList
            }
        )
            .then(response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const deleteCleaningItem = (index) => {
        newCleaningList.splice(index, 1)
        axios.put(`http://localhost:5000/api/vaskeliste/${cleaningList._id}`,
            {
                "liste": newCleaningList
            }
        )
            .then(response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    };


    return (
        <div className={showCleaningList ? 'editCleaningList__overlay' : ''}>
            {showCleaningList && (
                <div className="editCleaningList__body">
                    <div className="editCleaningList__headerWrapper">
                        <p className="editCleaningList__header">Vaskeliste</p>
                        <span
                            className="editCleaningList__cancel"
                            onClick={() => {
                                setShowCleaningList(false);
                            }}
                            role="button"
                        >
                            X
                    </span>
                    </div>
                    <div className="editCleaningList__list">
                        {cleaningList.liste.map((listItem, index) =>
                            <div key={index} className="editCleaningList__listMember">
                                <div key={index} >{listItem}</div>
                                <FaTrashAlt
                                    className="editCleaningList__delete"
                                    onClick={() => {
                                        deleteCleaningItem(index)
                                        setRender(!render)
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="editCleaningList__add">
                        <input
                            value={newCleaningItem}
                            onChange={e => setNewCleaningItem(e.target.value)}
                            type="text"
                            className="editCleaningList__input"
                            placeholder="Skriv inn navn her" />
                        <button
                            className="editCleaningList__submit"
                            onClick={() => {
                                setNewCleaningItem('');
                                addCleaningItem(newCleaningItem);
                            }
                            }
                        >
                            Legg til gjøremål
                    </button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default EditCleaningList;