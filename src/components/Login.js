import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <main>
        <div className="preloader" style={{ display: "none" }}>
          <div className="loader">
            <div className="shadow"></div>
            <div className="box"></div>
          </div>
        </div>

        <section className="login-area">
          <div className="row m-0">
            <div className="col-lg-12 col-md-12 p-0">
              <div className="login-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="login-form">
                      <div className="logo">
                        <a href="index.html">
                          <img src="assets/media/black-logo.png" alt="image" />
                        </a>
                      </div>

                      <h3>Welcome back</h3>
                      <p>
                        New to Dobzin? <a href="sign-up.html">Sign up</a>
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

                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            data-error="Please enter your password"
                            placeholder="Your password"
                            className="form-control"
                          />
                          <div className="help-block with-errors"></div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>

                        <div className="forgot-password">
                          <a href="reset-password.html">Forgot Password?</a>
                        </div>

                        <div className="connect-with-social">
                          <button type="submit" className="facebook">
                            <i className="fab fa-facebook-square"></i> Login
                            with Facebook
                          </button>
                          <button type="submit" className="google">
                            <i className="fab fa-google"></i> Login with Google
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
      </main>
    );
  }
}
