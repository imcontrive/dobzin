import React, { Component } from "react";
import Loader from "./Loader";
import NavList from "./NavList";
import QuickLinks from "./QuickLinks";
import Nav from "./Nav";

export default class Merchants extends Component {
  render() {
    return (
      <main>
        <Loader />
        <Nav />

        <div
          className="main-banner-section jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="banner-content">
                      <h1>Grow with the Dobzin Merchant Program</h1>
                      <p>
                        Improve your customer experience with blazing fast
                        payments and increased transaction success rate. Let
                        them Pay Later with Dobzin.
                      </p>

                      <div className="overview-content"></div>
                      <ul className="services-list">
                        <p>
                          <i className="flaticon-check-mark"></i> Build trust
                          with your loyal users
                        </p>
                        <p>
                          <i className="flaticon-check-mark"></i> With our quick
                          and seamless onboarding, get partnered with Dobzin
                        </p>
                        <p>
                          <i className="flaticon-check-mark"></i> Extend the
                          finest payment experience to your customers and grow
                          your business
                        </p>
                        <p>
                          <i className="flaticon-check-mark"></i> Offer your
                          customers complete suite of payment products and
                          services
                        </p>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="money-transfer-form">
                      <form>
                        <div className="money-transfer-info">
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
                          className="form-control"
                          required
                          data-error="Please enter business name"
                          placeholder="Name of business"
                        />
                        <div className="help-block with-errors"></div>
                        <br />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your business email"
                          placeholder="Official email id"
                        />
                        <div className="help-block with-errors"></div>
                        <br />
                        <input
                          type="text"
                          name="number"
                          id="number"
                          className="form-control"
                          required
                          data-error="Please enter your phonr no"
                          placeholder="Mobile no"
                        />
                        <div className="help-block with-errors"></div>
                        <br />
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="10"
                          rows="1"
                          required
                          data-error="Write your message"
                          placeholder="Business description"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                        <br />
                        <div className="single-information-box">
                          <div className="btn-box">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <div
                              id="msgSubmit"
                              className="h3 text-center hidden"
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

        <section className="featured-boxes-area">
          <div className="container">
            <div className="featured-boxes-inner">
              <div className="row m-0">
                <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div className="single-featured-box">
                    <div className="icon">
                      <i className="flaticon-piggy-bank"></i>
                    </div>
                    <h3>25% Increase in Order Value</h3>
                    <p>
                      Credit provides competitive advantage and also tends to
                      increase cart size.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div className="single-featured-box">
                    <div className="icon color-fb7756">
                      <i className="flaticon-shield"></i>
                    </div>
                    <h3>One click checkout</h3>
                    <p>
                      Even the best UX comes undone in the payment process. With
                      Dobzin, the user pays later and you keep full control.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div className="single-featured-box">
                    <div className="icon color-facd60">
                      <i className="flaticon-data-encryption"></i>
                    </div>
                    <h3>Failure rate below 1%</h3>
                    <p>
                      20%-30% payment failures are somehow considered normal.
                      With Dobzin, that rate is closer to 0%.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div className="single-featured-box">
                    <div className="icon color-1ac0c6">
                      <i className="flaticon-wallet"></i>
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

        <section className="how-it-works-area ptb-70">
          <div className="container">
            <div className="section-title">
              <h2>A checkout funnel?</h2>
              <div className="bar"></div>
              <p>How about a checkout fire hose.</p>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-6 col-md-6">
                <div className="single-how-it-works">
                  <img src="/assets/media/c1.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="funfacts-area ptb-70">
          <div className="container">
            <div className="section-title">
              <h2>We Always Try To Understand Customers Expectation</h2>
              <div className="bar"></div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                <div className="funfact">
                  <h3>
                    <span className="odometer" data-count="2">
                      00
                    </span>
                    M+
                  </h3>
                  <p>Happy Consumers</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                <div className="funfact">
                  <h3>
                    <span className="odometer" data-count="500">
                      00
                    </span>
                    K+
                  </h3>
                  <p>Credit Transactions</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                <div className="funfact">
                  <h3>
                    <span className="odometer" data-count="250">
                      00
                    </span>
                    +
                  </h3>
                  <p>Merchants</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                <div className="funfact">
                  <h3>
                    <span className="odometer" data-count="400">
                      00
                    </span>
                    Cr +
                  </h3>
                  <p>Credit Disbursed</p>
                </div>
              </div>
            </div>
            <div className="map-bg">
              <img src="/assets/media/map.png" alt="map" />
            </div>
          </div>
        </section>

        <section className="ready-to-talk">
          <div className="container">
            <div className="ready-to-talk-content">
              <h3>More that 1.5 million users and organizations use Dobzin</h3>
            </div>
          </div>
        </section>

        <div className="partner-area">
          <div className="container">
            <div className="partner-inner">
              <div className="row align-items-center">
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
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
                  <NavList />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget">
                  <h3>Quick Links</h3>
                  <QuickLinks />
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
                Copyright @2020 <a>DOBZIN</a>. All rights reserved
              </p>
            </div>
          </div>
          <div className="map-image">
            <img src="/assets/media/map.png" alt="map" />
          </div>
        </footer>
        {/* <!-- End Footer Area --> */}

        <div className="go-top">
          <i className="fas fa-arrow-up"></i>
        </div>
      </main>
    );
  }
}
