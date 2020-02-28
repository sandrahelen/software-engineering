import React from 'react';
import { useDormWithDormId } from "../../hooks/dormForStudentID";
import { useCampusForStudentID } from "../../hooks/campusIdForUser";
import { useCleaningList } from "../../hooks/vaskeliste";
import './studentView.css';

const StudentView = () => {

    const kollektivId = "5e5529e91c9d440000a0d769";

    const dorm = useDormWithDormId(kollektivId);
    const vaskelisteId = useCampusForStudentID(dorm.vaskeliste);
    const { cleaningList, setCleaningList } = useCleaningList(vaskelisteId);
    console.log(dorm)
    return (
        <div className="studentView">
            <h1 className="studentView__header">Kollektiv Nr {dorm.kollektivnummer}</h1>
            <div className="studentView__body">
                <p className="studentView__header2">Vaskeliste</p>
                <div className="studentView__cleaningList">
                    {cleaningList.liste.map((listItem, index) =>
                        <div
                            className="studentView__listItem"
                            key={index}>{listItem}</div>
                    )}
                </div>
            </div>
            <div className="studentView__buttonWrapper">
                <button className="studentView__button">Log ut</button>
            </div>
        </div>
    )
}

export default StudentView;