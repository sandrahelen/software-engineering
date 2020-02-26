import { useState, useEffect } from "react";
import axios from "axios";

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
