import React, { Component } from "react";

export default class Error404 extends Component {
  render() {
    return (
      <main>
        <div className="preloader" style={{ display: "none" }}>
          <div className="loader">
            <div className="shadow"></div>
            <div className="box"></div>
          </div>
        </div>

        <section className="error-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="error-content">
                  <img src="/assets/media/404.png" alt="error" />

                  <h3>Page Not Found</h3>
                  <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </p>

                  <a href="index.html" className="btn btn-primary">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
