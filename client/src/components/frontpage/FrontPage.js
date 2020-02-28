import React, { Component } from "react";
import "./FrontPage.css";
import logo from "./hybelvask.svg";
import { Link } from "react-router-dom";
import { blue } from "color-name";

class FrontPage extends Component {
  styles = {
    fontSize: 20,
    fontWwicht: "bold",
    fontColor: "blue",
    borderRadius: 10,
    width: 300,
    height: 40
  };
  state = {
    count: 0
  };

  render() {
    return (
      <div className="FrontPage">
        <div className="FrontPage-header">
          <img
            src={logo}
            style={{ height: 300, width: 350 }}
            className="FrontPage-logo"
            alt="logo"
          />
          <h3 className="FrontPage-title">Studentskipnaden i Fredrikstad</h3>
          <h4 className="FrontPage-intro">Hybelvask</h4>
          <div className="buttons">
            <Link to="LoginPage2">
              <button style={this.styles}>Log in i mittkollektiv</button>
            </Link>
            <Link to="LoginPage">
              <button style={this.styles}>Log in som admin</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
