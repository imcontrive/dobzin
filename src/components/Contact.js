import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <main>
        <div classNameName="preloader" style={{ display: "none" }}>
          <div classNameName="loader">
            <div classNameName="shadow"></div>
            <div classNameName="box"></div>
          </div>
        </div>

        {/* <!-- Start Navbar Area --> */}
        <div className="navbar-area">
          <div className="luvion-responsive-nav">
            <div className="container">
              <div className="luvion-responsive-menu">
                <div className="logo">
                  <a href="index.html">
                    <img src="/assets/media/logo.png" alt="logo" />
                    <img src="/assets/media/black-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="luvion-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src="/assets/media/logo.png" alt="logo" />
                  <img src="/assets/media/black-logo.png" alt="logo" />
                </a>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="about.html" className="nav-link">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="merchants.html" className="nav-link">
                        Merchants
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        Need Help?
                      </a>
                    </li>
                  </ul>
                  <div className="others-options">
                    <a href="login.html" className="login-btn">
                      <i className="flaticon-user"></i> Log In
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div
          className="page-title-area item-bg2 jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div className="container">
            <div className="page-title-content">
              <h2>Can’t find a solution?</h2>
            </div>
          </div>
        </div>

        <section className="contact-area ptb-70">
          <div className="container">
            <div className="section-title">
              <h2>Drop us message for any query</h2>
              <div className="bar"></div>
              <p>Get in touch with us. Our team is on standby to help.</p>
            </div>

            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="contact-info">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <span>Address</span>
                      Innov8, ILD Trade Tower, Sector-47, Sohna Road, Gurugram,
                      Haryana 122018
                    </li>

                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <span>Email</span>
                      <a href="#">
                        <a href="mailto:support@dobzin.in">support@dobzin.in</a>
                      </a>
                    </li>

                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-volume"></i>
                      </div>
                      <span>Call Us</span>
                      <a href="#">+91 9015355470</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="contact-form">
                  <form id="contactForm">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                            data-error="Please enter your name"
                            placeholder="Your Name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                            data-error="Please enter your email"
                            placeholder="Email Address"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            required
                            data-error="Please enter your number"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="msg_subject"
                            id="msg_subject"
                            className="form-control"
                            required
                            data-error="Please enter your subject"
                            placeholder="Subject"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols="30"
                            rows="6"
                            required
                            data-error="Write your message"
                            placeholder="Your Message"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="btn btn-primary">
                          Send Message
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-map">
            <img src="/assets/media/bg-map.png" alt="image" />
          </div>
        </section>

        <footer className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <a href="index.html">
                      <img src="/assets/media/black-logo.png" alt="logo" />
                    </a>
                    <p>
                      Dobzin is a digital payment solution to provide app based
                      credit line.
                    </p>
                  </div>
                  <ul className="social-links">
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget pl-5">
                  <h3>Company</h3>
                  <ul className="list">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="merchants.html">Merchants</a>
                    </li>
                    <li>
                      <a href="partner.html">Partner With Us</a>
                    </li>
                    <li>
                      <a href="https://angel.co/company/dobzin/jobs">Careers</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget">
                  <h3>Quick Links</h3>
                  <ul className="list">
                    <li>
                      <a href="faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms.html">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget">
                  <h3>Address</h3>
                  <ul className="footer-contact-info">
                    <li>
                      <span>Location :</span> Innov8, ILD Trade Tower,
                      Sector-47, Sohna Road, Gurugram, Haryana 122018
                    </li>
                    <li>
                      <span>Email :</span>{" "}
                      <a href="mailto:support@dobzin.in">support@dobzin.in</a>
                    </li>
                    <li>
                      <span>Call Us :</span> <a>+91 9015355470</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <p>
                Copyright @2020 <a href="#">DOBZIN</a>. All rights reserved
              </p>
            </div>
          </div>
          <div className="map-image">
            <img src="/assets/media/map.png" alt="map" />
          </div>
        </footer>

        <div className="go-top">
          <i className="fas fa-arrow-up"></i>
        </div>
      </main>
    );
  }
}
