import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavList extends Component {
  render() {
    return (
      <ul className="list">
        <li>
          {/* <a href="about.html">About Us</a> */}
          <NavLink activeClassName="active" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/merchants">
            Merchants
          </NavLink>
          {/* <a href="merchants.html">Merchants</a> */}
        </li>
        <li>
          {/* <a href="partner.html">Partner With Us</a> */}
          <NavLink activeClassName="active" to="/partner">
            Partner With Us
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to="https://angel.co/company/dobzin/jobs"
          >
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/blog">
            Blog
          </NavLink>
          {/* <a href="#">Blog</a> */}
        </li>
      </ul>
    );
  }
}
