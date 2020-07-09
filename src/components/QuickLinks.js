import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class QuickLinks extends Component {
  render() {
    return (
      <ul className="list">
        <li>
          {/* <a href="faq.html">FAQ's</a> */}
          <NavLink activeClassName="active" to="/faq">
            FAQ's
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/privacy-policy">
            Privacy Policy
          </NavLink>
          {/* <a href="privacy-policy.html">Privacy Policy</a> */}
        </li>
        <li>
          <NavLink activeClassName="active" to="/terms">
            Terms & Condition
          </NavLink>
          {/* <a href="terms.html">Terms & Condition</a> */}
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact Us
          </NavLink>
          {/* <a href="contact.html">Contact Us</a> */}
        </li>
      </ul>
    );
  }
}
