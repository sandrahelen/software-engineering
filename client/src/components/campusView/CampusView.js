import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { useCampuses } from '../../hooks/studentby';
import { useAdmins } from '../../hooks/admin';
import './CampusView.css'

const CampusView = ({ location }) => {
    //henter admins og campuses fra customhooks
    const [{ admins, isLoading, isError }, doAdminFetch] = useAdmins();
    const [{ campuses, campusIsLoading, campusIsError }, doCampusFetch] = useCampuses();

    const [filteredCampuses, setFilteredCampuses] = useState([]);
    const [admin, setAdmin] = useState({
        vaskeliste: "",
        navn: "",
        admin: "",
        _id: ""
    });

    //henter username fra URLen
    const { username } = queryString.parse(location.search);

    //finner den innloggede adminen
    useEffect(() => {
        let filteredAdmin = admins.find(
            admin => admin.username === username)

        if (filteredAdmin) {
            setAdmin(filteredAdmin)
        }
    }, [username, admins]);

    //Filtrerer ut de cmapusene som innlogget admin styrer
    useEffect(() => {
        setFilteredCampuses(campuses.filter(campus => campus.admin === admin._id))
    }, [admin])

    return (
        <div className="campusView__body">
            <div className="campusView__header">
                <h1>Mine studentbyer</h1>
            </div>
            <div className="campusView-campuses">
                {/* Viser alle campuser */}
                {filteredCampuses.map((campus, index) =>
                    <Link key={index} className="campusView-text" to={`/AdminView?campusId=${campus._id}&campusName=${campus.navn}&cleaningListId=${campus.vaskeliste}`}>
                        <p>{campus.navn}</p>
                    </Link>

                )}
            </div>
        </div>
    )
}

export default CampusView;

