import React, { useState } from 'react';
import axios from 'axios';
import './AddDorm.css';

const AddDorm = ({ showAddDorm, setShowAddDorm, campusId ,render, setRender}) => {
    const [dormNr, setDormNr] = useState('');

    const addDorm = () => {
        axios.post('${API_URL}L/kollektiv',
            {
                "kollektivnummer": dormNr,
                "studentby": campusId,
                "__v": 0,
                "vaskeliste": "5e4beb3a651bf53950f51dff"
            })
            .then(response => {
                setRender(!render);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className={showAddDorm ? 'addDorm__overlay' : ''}>
            {showAddDorm && (
                <div className="addDorm__body">
                    <h2 className="header">Legg til kollektiv</h2>
                    <span
                        className="addDorm__cancel"
                        onClick={() => {
                            setShowAddDorm(false);
                        }}
                        role="button"
                    >
                        X
                    </span>
                    <input
                        value={dormNr}
                        onChange={e => setDormNr(e.target.value)}
                        className="addDorm__input"
                        placeholder="Kollektivnummer"
                        type="text">
                    </input>
                    <button
                        type="button"
                        className="addDorm__submit"
                        onClick={() => {
                            setDormNr('');
                            setShowAddDorm(false)
                            addDorm()
                            }
                        }
                    >
                        Legg til
                    </button>
                </div>
            )}
        </div>
    )
}

export default AddDorm;