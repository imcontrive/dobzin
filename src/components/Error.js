import React, { Component } from "react";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

export default class Error extends Component {
  render() {
    return (
      <main>
        <Loader />
        <section className="error-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="error-content">
                  <img src="assets/media/404.png" alt="error" />

                  <h3>Page Not Found</h3>
                  <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </p>

                  <NavLink to="/" className="btn btn-primary">
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
