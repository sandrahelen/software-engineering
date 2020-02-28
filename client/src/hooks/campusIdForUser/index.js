import { useState, useEffect } from "react";
import axios from "axios";

export const useCampusForStudentID = (campusId) => {
    const [campus, setCampus] = useState({
        admin: "",
        navn: "",
        vaskeliste: "5e552a301c9d440000a0d76a",
        _id: "5e552a781c9d440000a0d76b"});
    useEffect(() => {
        axios.get(`http://localhost:5000/api/studentby/${campusId}`)
            .then(response => {
                if (response.data) {
                    setCampus(response.data[0]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [campusId]);
    return campus.vaskeliste;
}
export const useCampusForUser = campusId => {
  const [campus, setCampus] = useState({studentby: ""});
  useEffect(() => {
    if (campusId) {
      axios
        .get(`http://localhost:5000/api/studentby/${campusId}`)
        .then(response => {
          if (response.data) {
            setCampus(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [campusId]);
  return { campus, setCampus };
};
