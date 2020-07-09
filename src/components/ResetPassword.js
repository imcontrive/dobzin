import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

export default class ResetPassword extends Component {
  render() {
    return (
      <main>
        <Loader />

        {/* <!-- Start Login Area --> */}
        <section className="login-area">
          <div className="row m-0">
            <div className="col-lg-12 col-md-12 p-0">
              <div className="login-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="login-form">
                      <div className="logo">
                        <NavLink to="/index">
                          <img
                            src="/assets/media/black-logo.png"
                            alt="med-img"
                          />
                        </NavLink>
                      </div>

                      <h3>Reset your password</h3>
                      <p>
                        Enter your email address so we can reset your password.
                      </p>

                      <form>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            data-error="Please enter your email address"
                            placeholder="Email address or mobile no"
                            className="form-control"
                          />
                          <div className="help-block with-errors"></div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Reset Password
                        </button>

                        <div className="forgot-password">
                          Back to <NavLink to="/login">Log In</NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Login Area --> */}
      </main>
    );
  }
}
