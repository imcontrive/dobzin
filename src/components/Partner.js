import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import Nav from "./Nav";

export default class Partner extends Component {
  render() {
    return (
      <main>
        <Loader />
        <Nav />
        {/* // <!-- Start Page Title Area --> */}
        <div
          className="page-title-area item-bg1 jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div className="container">
            <div className="page-title-content">
              <h2>Partner with us</h2>
            </div>
          </div>
        </div>

        <section className="faq-area ptb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="faq-content">
                  <a>
                    As leaders and innovators in the Indian Credit Line
                    business, we are always looking to build successful
                    partnerships with interested associates.
                  </a>
                  <div className="bar"></div>
                  <div className="faq-image">
                    <img src="/assets/media/2.png" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
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
                      <a
                        href="https://www.facebook.com/dobzinindia"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/dobzinindia" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/dobzin/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/dobzin"
                        target="_blank"
                      >
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
                      <span>Email :</span>
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
                Copyright @2020 <a>DOBZIN</a>. All rights reserved
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
