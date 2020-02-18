import React, { Component } from "react";
import "./FrontPage.css";

class FrontPage extends Component {
  styles = {
    fontSize: 20,
    fontWwicht: "bold"
  };
  state = {
    count: 0
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment Clicked", this);
  }
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
        <button
          onClick={this.handleIncrement}
          style={this.styles}
          className="btn btn-secondary btn-sm"
        >
          Log in som admin
        </button>
      </div>
    );
  }

  buttonClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default FrontPage;
