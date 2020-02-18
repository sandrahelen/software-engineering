import React, { Component } from "react";
import logo from "./../../logo.svg";
import "./../../App.css";

class FrontPage extends Component {
  render() {
    return (
      <div className="FrontPage">
        <header className="FrontPage-header">
          <img src={logo} className="FrontPage-logo" alt="logo" />
          <h3 className="FrontPage-title">
          Studentskipnaden i Fredrikstad
          </h3>
        </header>
        <p className="Frontpage-intro">
        Hybelvask
        </p>
      </div>
    );
  }
}

export default FrontPage;
