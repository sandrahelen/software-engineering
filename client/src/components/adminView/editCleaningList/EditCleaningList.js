import React, { useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import './EditCleaningList.css';

const EditCleaningList = ({ dorms, cleaningList, setCleaningList, showCleaningList, setShowCleaningList}) => {
    const [newCleaningItem, setNewCleaningItem] = useState('');
    const [render, setRender] = useState(false);

    const newCleaningList = cleaningList.liste;
    
    const addCleaningItem = (newCleaningItem) => {
        newCleaningList.push(newCleaningItem);
        setCleaningList({
            _id: cleaningList._id,
            liste: newCleaningList
        })
        editCheckBoxFromDorm(0, false);
        updateCleaningList(cleaningList._id, newCleaningList)
        .then(response => {
            //console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
    };
    
    
    //metode for å slette eller legge til checkboxer, true er å slette, false er lege til
    const editCheckBoxFromDorm = (index, bool) => {
        let checkBoxList;
        let dormId;
        for (let i = 0; i < dorms.length; i++) {
            checkBoxList = dorms[i].checkBoxes;
            dormId = dorms[i]._id;
            //dersom bool er true, slett, dersom bool er false, legg til
            (bool ? checkBoxList.splice(index, 1) : checkBoxList.push(false));
            updateCheckboxList(dormId, checkBoxList)
            .then(response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
    
    const deleteCleaningItem = (index) => {
        newCleaningList.splice(index, 1)
        setCleaningList({
            _id: cleaningList._id,
            liste: newCleaningList
        })
        editCheckBoxFromDorm(index, true)
        updateCleaningList(cleaningList._id, newCleaningList)
            .then(response => {
                //console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const updateCheckboxList = async (dormId, checkBoxList) => {
        console.log(dormId, ": ", checkBoxList)
        const response = await axios.patch(`http://localhost:5000/api/kollektiv/${dormId}`,
        {
            "checkBoxes": checkBoxList
        })
        return response;
    }
    const updateCleaningList = async (cleaningListId, cleaningList) => {
        const response = axios.put(`http://localhost:5000/api/vaskeliste/${cleaningListId}`,
            {
                "liste": cleaningList
            }
        )
        return response;
    }
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
                            type="submit"
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