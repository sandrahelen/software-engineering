import React, { useState} from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import { useCleaningList } from '../../../hooks/vaskeliste';
import './EditCleaningList.css';

const EditCleaningList = ({ showCleaningList, setShowCleaningList, dormId }) => {
    const [cleaningList, setCleaningList] = useState('');

    return (
        <div className={showCleaningList ? 'editCleaningList__overlay' : ''}>
            {showCleaningList && (
                <div className="editCleaningList__body">
                    <div className="editCleaningList__headerWrapper">
                        <p className="editCleaningList__header">Beboere</p>
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
                        {cleaningList.map((member, index) =>
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
                            value={'newMember'}
                            type="text"
                            className="editCleaningList__input"
                            placeholder="Skriv inn navn her" />
                        <button
                            className="editCleaningList__submit"
                            onClick={() => {
                               
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