import React, { Component } from "react";

export default class Coming extends Component {
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
                  <h1>Coming soon.. </h1>
                  <br /> <br />
                  <a href="index.html" class="btn btn-primary">
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
