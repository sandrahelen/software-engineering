import React, { Component } from "react";
import "./../../App.css";
import logo from "./hybelvask.svg"

class FrontPage extends Component {

  render() {
    return (
      <div className="FrontPage">
        <header className="FrontPage-header">
        <img src={logo} style={ { height: 200, width: 200 } } className="FrontPage-logo" alt="logo" />
          <h3 style={{ color: 'black' }} className="FrontPage-title">
          Studentskipnaden i Fredrikstad
          </h3>
        </header>
        <p style={{ color: 'black' }} className="Frontpage-intro">
        Hybelvask
        </p>
        <button className="Student-button">
        Logg inn som student
        </button>
        <button className="Admin-button">
        Logg inn som ansatt
        </button>
      </div>
    );
  }
}

export default FrontPage;
