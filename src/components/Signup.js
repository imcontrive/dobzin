import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <main>
        {/* <!-- Preloader --> */}
        <div className="preloader" style={{ display: "none" }}>
          <div className="loader">
            <div className="shadow"></div>
            <div className="box"></div>
          </div>
        </div>
        {/* <!-- End Preloader --> */}

        {/* <!-- Start Signup Area --> */}
        <section className="signup-area">
          <div className="row m-0">
            <div className="col-lg-12 col-md-12 p-0">
              <div className="signup-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="signup-form">
                      <div className="logo">
                        <a href="index.html">
                          <img src="/assets/media/black-logo.png" alt="image" />
                        </a>
                      </div>

                      <h3>Open up your Dobzin account now</h3>
                      <p>
                        Already signed up? <a href="login.html">Log in</a>
                      </p>

                      <form>
                        <div className="form-group">
                          <input
                            type="name"
                            name="name"
                            id="name"
                            required
                            data-error="Please enter your full name"
                            placeholder="Full Name"
                            className="form-control"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            data-error="Please enter your email address"
                            placeholder="Email address"
                            className="form-control"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                          <input
                            type="mobile"
                            name="mobile"
                            id="mobile"
                            required
                            data-error="Please enter your mobile no"
                            placeholder="Mobile No"
                            className="form-control"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            data-error="Please enter your password"
                            placeholder="Password"
                            className="form-control"
                          />
                          <div className="help-block with-errors"></div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Sign Up
                        </button>

                        <p>
                          By signing up you agree to our
                          <a href="privacy-policy.html">privacy policy</a> and
                          <a href="terms.html">terms of use</a>.
                        </p>

                        <div className="connect-with-social">
                          <span>Or</span>
                          <button type="submit" className="facebook">
                            <i className="fab fa-facebook-square"></i> Sign Up
                            with Facebook
                          </button>
                          <button type="submit" className="google">
                            <i className="fab fa-google"></i> Sign Up with
                            Google
                          </button>
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
