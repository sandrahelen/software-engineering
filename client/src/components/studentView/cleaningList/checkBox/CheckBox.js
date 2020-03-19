import React from 'react';
import "./checkBox.css";

const CheckBox = ({ name, checked, onChange }) => {
    return (
        <div className="checkBox__item">
            <label className="container">{name}
            <input type="checkbox" name={name} checked={checked} onChange={onChange} />
            <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default CheckBox;