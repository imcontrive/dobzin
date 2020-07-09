import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div className="preloader" style={{ display: "none" }}>
        <div className="loader">
          <div className="shadow"></div>
          <div className="box"></div>
        </div>
      </div>
    );
  }
}
