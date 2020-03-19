import React, { useState, useEffect } from 'react';
import CheckBox from "../checkBox/CheckBox";
import axios from "axios";
import "./cleaningList.css";

const CleaningList = ({ cleaningList, checkList, kollektivId }) => {
    const [checkedItems, setCheckedItems] = useState({});

    //Lager et objekt som består av f. eks {gang: true, stue: false}
    useEffect(() => {
        let vask = cleaningList
        let checkbox = checkList
        if (checkbox.length > 0 && vask.length > 0) {
            var result = checkbox.reduce(function (result, field, index) {
                result[vask[index]] = field;
                return result;
            }, {})
            setCheckedItems(result)
        }
    }, [cleaningList, checkList])

    //Hver gang man checker av en checkbox endrer man staten
    const handleChange = (event) => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked
        })
    }

    //når man trykker submit sender man til backenden
    const handleSubmit = (event) => {
        event.preventDefault();
        var returnCheckList = Object.keys(checkedItems).map(function (key) { 
            return checkedItems[key]; 
        });
        axios.put(`http://localhost:5000/api/kollektiv/${kollektivId}`,
            {
                "checkBoxes": returnCheckList,
            }
        )
            .then(response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
        console.log("submit")
    }

    return (
        <div className="cleanigList__body">
            <p className="studentView__header2">Vaskeliste</p>
            <form onSubmit={handleSubmit} className="cleaningList__list">
                {cleaningList.map((listItem, index) => (
                    <CheckBox
                        name={listItem}
                        checked={checkedItems[listItem]}
                        onChange={handleChange} />
                ))}
                <button className="cleaningList__submit" type="submit">
                    Send inn
                </button>
            </form>
        </div>
    )
}

export default CleaningList;