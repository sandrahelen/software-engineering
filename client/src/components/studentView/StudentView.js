import React, { Component } from "react";
import "./StudentView.css"
import {useCleaningList} from "../../hooks/vaskeliste"
import { useCampusForUser } from "../../hooks/campusIdForUser"
import { useDormForUser } from "../../hooks/dormForStudentID"


const StudentView = () => {
  const kollektivId = "5e5529e91c9d440000a0d769"
  const { dorm, setDorm } =
  useDormForUser(kollektivId)
  console.log(dorm)
  const { campus, setCampus } = useCampusForUser(dorm.studenbyId)
  console.log(campus)
  const { cleaningList } = useCleaningList(campus)
  console.log(cleaningList.liste)
  return (
    <div className="studentView">
      <h3 className="studentView-title">Mitt kollektiv</h3>
      {cleaningList.liste.map((list, index) => {
        <div key={index}>{list}</div>
      })}
    </div>
  )
}

export default StudentView;
