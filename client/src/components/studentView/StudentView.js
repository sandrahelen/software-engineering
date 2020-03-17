import React, { useState, useEffect } from "react";
import { useDormWithDormId } from "../../hooks/dormForStudentID";
import { useCampusForStudentID } from "../../hooks/campusIdForUser";
import { useCleaningList } from "../../hooks/vaskeliste";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/user";
import queryString from "query-string";
import axios from "axios";
import "./studentView.css";

const StudentView = ({ location }) => {
  const { username } = queryString.parse(location.search);
  const [user, setUser] = useState({
    etternavn: "",
    fornavn: "",
    kollektiv: "",
    password: "",
    username: "",
    __v: 0,
    _id: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user")
      .then(response => {
        if (response.data) {
          let filteredUser = response.data.find(
            user => user.username === username
          );
          setUser(filteredUser);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [location]);

  const dorm = useDormWithDormId(user.kollektiv);
  const vaskelisteId = useCampusForStudentID(dorm.vaskeliste);
  const { cleaningList } = useCleaningList(vaskelisteId);
  const { users } = useUser(dorm._id);
  return (
    <div className="studentView">
      <h1 className="studentView__header">
        Kollektiv Nr {dorm.kollektivnummer}
      </h1>
      <div className="studentView__body">
        <div className="studentView__studentList">
          <p
            style={{ height: 28, width: 300 }}
            className="studentView__header3"
          >
            Kollektivmedlemmer
          </p>
          {users.map((listStudent, index) => (
            <div className="studentView__students" key={index}>
              {listStudent.fornavn}
            </div>
          ))}
        </div>
        <div className="studentView__cleaningList">
          <p className="studentView__header2">Vaskeliste</p>
          {cleaningList.liste.map((listItem, index) => (
            <div className="studentView__listItem" key={index}>
              {listItem}
            </div>
          ))}
        </div>
      </div>
      <div className="studentView__buttonWrapper">
        <Link to="/">
          <button
            className="studentView__button"
            style={{ backgroundColor: "gray" }}
          >
            Logg ut
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StudentView;
