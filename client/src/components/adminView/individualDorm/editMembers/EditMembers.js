import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './EditMembers.css';

const EditMembers = ({ showEditMemebers, setShowEditMembers, members }) => {
    console.log(showEditMemebers)
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
                            <div key={index} >{member}<FaTrashAlt /></div>
                        )}
                    </div>
                    <button 
                        className="editMembers__addMember"
                        onClick={() => console.log("legg til")}
                    >
                        Legg til beboer
                    </button>
                </div>)
            }
        </div>
    )
}

export default EditMembers;