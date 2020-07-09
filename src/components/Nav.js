import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar-area">
        <div className="luvion-responsive-nav">
          <div className="container">
            <div className="luvion-responsive-menu">
              <div className="logo">
                {/* <NavLink exact activeClassName="active" to="/">
                  <img src="assets/media/logo.png" alt="logo" />
                  <img src="assets/media/black-logo.png" alt="logo" />
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>

        <div className="luvion-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <NavLink exact activeClassName="active" to="/">
                <img src="assets/media/logo.png" alt="logo" />
                {/* <img src="assets/media/black-logo.png" alt="logo" /> */}
              </NavLink>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" to="/merchants">
                      Merchants
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" to="/contact">
                      Need Help?
                    </NavLink>
                  </li>
                </ul>
                <div className="others-options">
                  <NavLink activeClassName="active" to="/login">
                    <i className="flaticon-user"></i> Log In
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
