import React, { Component } from "react";
import TaskList from "./TaskList"
import "./StudentView.css"

const tasks = ["Støvsuge", "Tørke støv", "Vaske overflater"];
const listItems = tasks.map((tasks) =>
  <li>{tasks}</li>
);

class StudentView extends Component {
  state = { checked: false }

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

  render() {
    return (
      <div className="studentView">
        <h3 className="studentView-title">Mitt kollektiv</h3>
        <label>
          <TaskList checked={this.state.checked} onChange={this.handleCheckboxChange} />
          <span className="taskList">{listItems}</span>
        </label>
      </div>
    )
  }
}

export default StudentView;
