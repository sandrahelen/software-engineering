import React, { Component } from "react";
import "./../../App.css";
import logo from "./hybelvask.svg"

class FrontPage extends Component {

  render() {
    return (
      <div className="FrontPage">
        <header className="FrontPage-header">
        <img src={logo} style={ { height: 200, width: 200 } } className="FrontPage-logo" alt="logo" />
          <h1 className="FrontPage-title">
          Studentskipnaden i Fredrikstad
          </h1>
          <h3 className="FrontPage-title">
          Hybelvask
          </h3>
        </header>
        <p className="Frontpage-intro">
        Logg inn
        </p>
        <button className="Student-button">
        Student
        </button>
        <button className="Admin-button">
        Ansatt
        </button>
      </div>
    );
  }
}

export default FrontPage;
