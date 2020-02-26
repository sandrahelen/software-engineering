import React, { Component } from "react";
import "./StudentView.css"
import {useCleaningList} from "../../hooks/vaskeliste"
import { useCampuses } from "../../hooks/studentby"
import { useDorms } from "../../hooks/kollektiv"


const StudentView = () => {
  const kollekivId = "5e5529e91c9d440000a0d769"
  const { dorms, setDorms } = useDorms("5e552a301c9d440000a0d76a")

  const { campuses, setCampuses } = useCleaningList("5e552a301c9d440000a0d76a")

  const { cleaningList } = useCleaningList("5e552a301c9d440000a0d76a")
  console.log(cleaningList)
  return (
    <div className="studentView">
      <h3 className="studentView-title">Mitt kollektiv</h3>
    </div>
  )
}

export default StudentView;
