import React, { Component } from "react";
import "./../style.css";
import "./../flaticon.css";
import "./../bootstrap.min.css";
import "./../meanmenu.css";
import "./../slick.min.css";
import "./../responsive.css";
import "./../odometer.min.css";
import "./../nice-select.css";
import "./../magnific-popup.min.css";
import "./../fontawesome.min.css";
import "./../animate.min.css";

export default class Merchants extends Component {
  render() {
    return (
      <main>
        <div classname="preloader" style={{ display: "none" }}>
          <div classname="loader">
            <div classname="shadow"></div>
            <div classname="box"></div>
          </div>
        </div>
        <div classname="navbar-area">
          <div classname="luvion-responsive-nav">
            <div classname="container">
              {" "}
              <div classname="luvion-responsive-menu">
                <div classname="logo">
                  {" "}
                  <a href="index.html">
                    <img src="/assets/media/logo.png" alt="logo" />
                    <img src="/assets/media/black-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div classname="luvion-nav">
            <div classname="container">
              <nav classname="navbar navbar-expand-md navbar-light">
                <a classname="navbar-brand" href="index.html">
                  <img src="/assets/media/logo.png" alt="logo" />
                  <img src="/assets/media/black-logo.png" alt="logo" />
                </a>
                <div
                  classname="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul classname="navbar-nav">
                    <li classname="nav-item">
                      <a href="index.html" classname="nav-link">
                        Home
                      </a>
                    </li>
                    <li classname="nav-item">
                      <a href="about.html " classname="nav-link">
                        About Us
                      </a>
                    </li>
                    <li classname="nav-item">
                      <a href="merchants.html" classname="nav-link">
                        Merchants
                      </a>
                    </li>
                    <li classname="nav-item">
                      <a href="contact.html" classname="nav-link">
                        Need Help?
                      </a>
                    </li>
                  </ul>
                  <div classname="others-options">
                    <a href="login.html" classname="login-btn">
                      <i classname="flaticon-user"></i> Log In
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div
          classname="main-banner-section jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div classname="d-table">
            <div classname="d-table-cell">
              <div classname="container">
                <div classname="row align-items-center">
                  <div classname="col-lg-7 col-md-12">
                    <div classname="banner-content">
                      <h1>Grow with the Dobzin Merchant Program</h1>
                      <p>
                        Improve your customer experience with blazing fast
                        payments and increased transaction success rate. Let
                        them Pay Later with Dobzin.
                      </p>

                      <div classname="overview-content"></div>
                      <ul classname="services-list">
                        <p>
                          <i classname="flaticon-check-mark"></i> Build trust
                          with your loyal users
                        </p>
                        <p>
                          <i classname="flaticon-check-mark"></i> With our quick
                          and seamless onboarding, get partnered with Dobzin
                        </p>
                        <p>
                          <i classname="flaticon-check-mark"></i> Extend the
                          finest payment experience to your customers and grow
                          your business
                        </p>
                        <p>
                          <i classname="flaticon-check-mark"></i> Offer your
                          customers complete suite of payment products and
                          services
                        </p>
                      </ul>
                    </div>
                  </div>

                  <div classname="col-lg-5 col-md-12">
                    <div classname="money-transfer-form">
                      <form>
                        <div classname="money-transfer-info">
                          <strong
                            style={{ fontSize: "26px", marginTop: "18px" }}
                          >
                            Join Dobzin Merchant Program
                          </strong>
                        </div>
                        <br />
                        <input
                          type="text"
                          name="name"
                          id="name"
                          classname="form-control"
                          required
                          data-error="Please enter business name"
                          placeholder="Name of business"
                        />
                        <div classname="help-block with-errors"></div>
                        <br />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          classname="form-control"
                          required
                          data-error="Please enter your business email"
                          placeholder="Official email id"
                        />
                        <div classname="help-block with-errors"></div>
                        <br />
                        <input
                          type="text"
                          name="number"
                          id="number"
                          classname="form-control"
                          required
                          data-error="Please enter your phonr no"
                          placeholder="Mobile no"
                        />
                        <div classname="help-block with-errors"></div>
                        <br />
                        <textarea
                          name="message"
                          classname="form-control"
                          id="message"
                          cols="10"
                          rows="1"
                          required
                          data-error="Write your message"
                          placeholder="Business description"
                        ></textarea>
                        <div classname="help-block with-errors"></div>
                        <br />
                        <div classname="single-information-box">
                          <div classname="btn-box">
                            <button type="submit" classname="btn btn-primary">
                              Submit
                            </button>
                            <div
                              id="msgSubmit"
                              classname="h3 text-center hidden"
                            ></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="jarallax-container-0"></div>
        </div>

        <section classname="featured-boxes-area">
          <div classname="container">
            <div classname="featured-boxes-inner">
              <div classname="row m-0">
                <div classname="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div classname="single-featured-box">
                    <div classname="icon">
                      <i classname="flaticon-piggy-bank"></i>
                    </div>
                    <h3>25% Increase in Order Value</h3>
                    <p>
                      Credit provides competitive advantage and also tends to
                      increase cart size.
                    </p>
                  </div>
                </div>
                <div classname="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div classname="single-featured-box">
                    <div classname="icon color-fb7756">
                      <i classname="flaticon-shield"></i>
                    </div>
                    <h3>One click checkout</h3>
                    <p>
                      Even the best UX comes undone in the payment process. With
                      Dobzin, the user pays later and you keep full control.
                    </p>
                  </div>
                </div>
                <div classname="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div classname="single-featured-box">
                    <div classname="icon color-facd60">
                      <i classname="flaticon-data-encryption"></i>
                    </div>
                    <h3>Failure rate below 1%</h3>
                    <p>
                      20%-30% payment failures are somehow considered normal.
                      With Dobzin, that rate is closer to 0%.
                    </p>
                  </div>
                </div>
                <div classname="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div classname="single-featured-box">
                    <div classname="icon color-1ac0c6">
                      <i classname="flaticon-wallet"></i>
                    </div>
                    <h3>Bank grade security</h3>
                    <p>
                      Don’t let the smooth UX deceive you. With every tap,
                      multi-factor checks happen in the background.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section classname="how-it-works-area ptb-70">
          <div classname="container">
            <div classname="section-title">
              <h2>A checkout funnel?</h2>
              <div classname="bar"></div>
              <p>How about a checkout fire hose.</p>
            </div>
            <div classname="row">
              <div classname="col-lg-12 col-sm-6 col-md-6">
                <div classname="single-how-it-works">
                  <img src="/assets/media/c1.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section classname="funfacts-area ptb-70">
          <div classname="container">
            <div classname="section-title">
              <h2>We Always Try To Understand Customers Expectation</h2>
              <div classname="bar"></div>
            </div>
            <div classname="row">
              <div classname="col-lg-3 col-sm-3 col-md-3 col-6">
                <div classname="funfact">
                  <h3>
                    <span classname="odometer" data-count="2">
                      00
                    </span>
                    M+
                  </h3>
                  <p>Happy Consumers</p>
                </div>
              </div>
              <div classname="col-lg-3 col-sm-3 col-md-3 col-6">
                <div classname="funfact">
                  <h3>
                    <span classname="odometer" data-count="500">
                      00
                    </span>
                    K+
                  </h3>
                  <p>Credit Transactions</p>
                </div>
              </div>
              <div classname="col-lg-3 col-sm-3 col-md-3 col-6">
                <div classname="funfact">
                  <h3>
                    <span classname="odometer" data-count="250">
                      00
                    </span>
                    +
                  </h3>
                  <p>Merchants</p>
                </div>
              </div>
              <div classname="col-lg-3 col-sm-3 col-md-3 col-6">
                <div classname="funfact">
                  <h3>
                    <span classname="odometer" data-count="400">
                      00
                    </span>
                    Cr +
                  </h3>
                  <p>Credit Disbursed</p>
                </div>
              </div>
            </div>
            <div classname="map-bg">
              <img src="/assets/media/map.png" alt="map" />
            </div>
          </div>
        </section>

        <section classname="ready-to-talk">
          <div classname="container">
            <div classname="ready-to-talk-content">
              <h3>More that 1.5 million users and organizations use Dobzin</h3>
            </div>
          </div>
        </section>

        <div classname="partner-area">
          <div classname="container">
            <div classname="partner-inner">
              <div classname="row align-items-center">
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p1.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p1.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p2.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p2.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p3.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p3.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p4.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p4.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p5.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p5.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p6.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p6.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p7.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p7.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p8.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p8.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p9.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p9.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p10.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p10.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p11.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p11.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p12.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p12.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p13.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p13.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p14.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p14.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p15.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p15.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p16.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p16.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p17.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p17.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div classname="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="/assets/media/partner-image/p18.png"
                      alt="partner"
                    />
                    <img
                      src="/assets/media/partner-image/p18.png"
                      alt="partner"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Footer Area --> */}
        <footer classname="footer-area">
          <div classname="container">
            <div classname="row">
              <div classname="col-lg-3 col-sm-6 col-md-6">
                <div classname="single-footer-widget">
                  <div classname="logo">
                    <a href="index.html">
                      <img src="/assets/media/black-logo.png" alt="logo" />
                    </a>
                    <p>
                      Dobzin is a digital payment solution to provide app based
                      credit line.
                    </p>
                  </div>
                  <ul classname="social-links">
                    <li>
                      <a
                        href="https://www.facebook.com/dobzinindia"
                        target="_blank"
                      >
                        <i classname="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/dobzinindia" target="_blank">
                        <i classname="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/dobzin/"
                        target="_blank"
                      >
                        <i classname="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/dobzin"
                        target="_blank"
                      >
                        <i classname="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div classname="col-lg-3 col-sm-6 col-md-6">
                <div classname="single-footer-widget pl-5">
                  <h3>Company</h3>
                  <ul classname="list">
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
              <div classname="col-lg-3 col-sm-6 col-md-6">
                <div classname="single-footer-widget">
                  <h3>Quick Links</h3>
                  <ul classname="list">
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
              <div classname="col-lg-3 col-sm-6 col-md-6">
                <div classname="single-footer-widget">
                  <h3>Address</h3>
                  <ul classname="footer-contact-info">
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
            <div classname="copyright-area">
              <p>
                Copyright @2020 <a>DOBZIN</a>. All rights reserved
              </p>
            </div>
          </div>
          <div classname="map-image">
            <img src="/assets/media/map.png" alt="map" />
          </div>
        </footer>
        {/* <!-- End Footer Area --> */}

        <div classname="go-top">
          <i classname="fas fa-arrow-up"></i>
        </div>
      </main>
    );
  }
}
