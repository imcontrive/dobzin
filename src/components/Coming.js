import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

export default class Coming extends Component {
  render() {
    return (
      <main>
        <Loader />
        <section className="error-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="error-content">
                  <h1>Coming soon.. </h1>
                  <br /> <br />
                  <NavLink to="/index" class="btn btn-primary">
                    Go to Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
