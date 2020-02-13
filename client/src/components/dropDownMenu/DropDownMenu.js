import React, { useState } from 'react';
import './dropDownMenu.css';

const DropDownMenu = ({ dormMembers }) => {

    const [viewMenu, setViewMenu] = useState(false);

    const showMenu = () => {
        setViewMenu(true);
        document.addEventListener('click', closeMenu);
    }
    const closeMenu = () => {
        setViewMenu(false);
        document.removeEventListener('click', closeMenu)
    }
    
    return (
        <div>
            <button 
                onClick={showMenu}
                className="dropDownButton"
            >
                Medlemmer
            </button>
            {
                viewMenu &&
                <div className="menu">
                    {
                        dormMembers.map(dormMember => <button>{dormMember}</button>)
                    }
                </div>
            }

        </div>
    )
}

export default DropDownMenu;