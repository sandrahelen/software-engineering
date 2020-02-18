import React, { Component } from "react";
import "./FrontPage.css";
import { Link } from "react-router-dom";

class FrontPage extends Component {
  styles = {
    fontSize: 20,
    fontWwicht: "bold"
  };
  state = {
    count: 0
  };

  render() {
    return (
      <div className="FrontPage">
        <header className="FrontPage-header">
          <h1 className="FrontPage-title">Vaskeliste</h1>
        </header>
        <p className="Frontpage-intro">Studentskipnaden i Fredrikstad</p>
        <button style={this.styles} className="btn btn-secondary btn-sm m-2">
          Log in i mittkollektiv
        </button>
        <Link to="LoginPage">
          <button>Log in som admin</button>
        </Link>
      </div>
    );
  }
}

export default FrontPage;
