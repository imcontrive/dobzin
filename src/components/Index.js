import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
import Nav from "./Nav";
import NavList from "./NavList";
import QuickLinks from "./QuickLinks";

export default class Index extends Component {
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
                      <h1>Dobzin – India’s Leading Personal Line of Credit</h1>
                      <p>
                        Dobzin gives you credit for all your needs with flexible
                        repayment options.
                      </p>
                      <div className="overview-content"></div>

                      <ul className="services-list">
                        <p>
                          <i className="flaticon-check-mark"></i> Get instant
                          approval for a credit line online of up to ₹ 5 Lakh
                        </p>
                        <p>
                          <i className="flaticon-check-mark"></i> Shop Now and
                          Pay Us Later
                        </p>
                        <p>
                          <i className="flaticon-check-mark"></i> Withdraw as
                          little as ₹ 3,000 up to your full approved limit
                        </p>
                        <p>
                          <i className="flaticon-check-mark"></i> Pay interest
                          only on the amount used
                        </p>
                      </ul>

                      <NavLink to="sign-up" className="btn btn-primary">
                        Apply Now
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="money-transfer-form">
                      <form>
                        <img src="assets/media/5.png" alt="logo" />

                        <div className="money-transfer-info">
                          <strong
                            style={{ fontSize: "26px", marginTop: "18px" }}
                          >
                            Skip paying again & again. Pay ONE BILL instead.
                          </strong>
                        </div>
                        <div className="terms-info">
                          <p>
                            <br />
                            Get all your online purchases added up
                            <br />
                            And pay the total in one go.
                          </p>
                        </div>
                        <div className="single-information-box">
                          <div className="btn-box">
                            <a href="index.html" className="app-store-btn">
                              <i className="flaticon-apple"></i> Download on the{" "}
                              <span>App Store</span>{" "}
                            </a>
                            <a href="index.html" className="play-store-btn">
                              <i className="flaticon-play-store"></i> Get it on{" "}
                              <span>Google play</span>{" "}
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div id="jarallax-container-0">
                    {/* <div style={{backgroundPosition: 50% 50%, backgroundSize: 100%, backgroundRepeat: no-repeat, backgroundImage: `url(${"/assets/media/5.png"})`, position: fixed, top: 0, left: 0,width: "2304px", height: "1080px", overflow: hidden, pointerEvents: none, marginLeft: "-477.5px", marginTop: "-340px" visibility: visible, transform: translateY(60px) translateZ(0px)  }}
                    ></div> */}
                    <div className="lelio"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Begains here */}

        <section className="featured-boxes-area">
          <div className="container">
            <div className="featured-boxes-inner">
              <div className="row m-0">
                <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div className="single-featured-box">
                    <div className="icon color-fb7756">
                      <i className="flaticon-piggy-bank"></i>
                    </div>
                    <h3>Instant Credit</h3>
                    <p>
                      Enjoy credit limit upto ₹ 5 Lakh with a one time sign up.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div className="single-featured-box">
                    <div className="icon color-facd60">
                      <i className="flaticon-data-encryption"></i>
                    </div>
                    <h3>Quick Checkout</h3>
                    <p>
                      Finish placing orders in 10 seconds with a single click
                      checkout.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div className="single-featured-box">
                    <div className="icon color-1ac0c6">
                      <i className="flaticon-wallet"></i>
                    </div>
                    <h3>Secure Payments</h3>
                    <p>
                      Complete transactions without sharing any bank or card
                      details.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                  <div className="single-featured-box">
                    <div className="icon">
                      <i className="flaticon-shield"></i>
                    </div>
                    <h3>Offers</h3>
                    <p>Get exciting discount vouchers on timely repayments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works-area ptb-70">
          <div className="container">
            <div className="section-title">
              <h2>How DOBZIN Works</h2>
              <div className="bar"></div>
              <p>Fast and flexible money at your fingertips.</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-how-it-works">
                  <img
                    src="assets/media/how-it-works-image/1.png"
                    alt="how-it-works"
                  />
                  <h3>Instant credit</h3>
                  <p>
                    Get instant approval for a credit line online of up to ₹ 5
                    Lakh with an one time sign-up.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-how-it-works">
                  <img
                    src="assets/media/how-it-works-image/2.png"
                    alt="how-it-works"
                  />
                  <h3>Withdraw as low as ₹ 3,000</h3>
                  <p>
                    Borrow an amount as low as ₹ 3,000 from your personal line
                    of credit with DOBZIN.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-how-it-works">
                  <img
                    src="assets/media/how-it-works-image/3.png"
                    alt="how-it-works"
                  />
                  <h3>No usage, No interest</h3>
                  <p>
                    Interest rates are applied only on the amount you borrow and
                    not your entire approved limit.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-how-it-works">
                  <img
                    src="assets/media/how-it-works-image/6.png"
                    alt="how-it-works"
                  />
                  <h3>Big rewards with our credit card </h3>
                  <p>
                    DOBZIN credit card brings you attractive rewards on the very
                    first swipe along with discounts on food, fuel, and
                    entertainment.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-how-it-works">
                  <img
                    src="assets/media/how-it-works-image/5.png"
                    alt="how-it-works"
                  />
                  <h3>Credit limit available for a lifetime</h3>
                  <p>
                    Your credit limit is recharged as you repay your borrowed
                    amount giving you the flexibility to withdraw multiple
                    times.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-how-it-works">
                  <img
                    src="assets/media/how-it-works-image/4.png"
                    alt="how-it-works"
                  />
                  <h3>No collateral, No guarantors</h3>
                  <p>
                    Now you don’t have to sacrifice your savings or risk your
                    valuable assets. DOBZIN's credit line app lets you access
                    money when you need it the most without any collateral
                    backing!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start service Area */}
        <section className="services-area ptb-70 bg-f7fafd">
          <div className="container-fluid p-0">
            <div className="overview-box">
              <div className="overview-image">
                <div className="image">
                  <img src="assets/media/2.png" alt="med-img" />
                  <div className="circle-img">
                    <img src="assets/media/circle.png" alt="how-it-works" />
                  </div>
                </div>
              </div>
              <div className="overview-content">
                <div className="content">
                  <span className="sub-title">
                    Buy Now and checkout with just a click!
                  </span>
                  <h2>Shop Now. Pay Later</h2>
                  <div className="bar"></div>
                  <p>
                    Flexible no cost payment options on your favourite
                    merchants.
                  </p>

                  <ul className="services-list">
                    <li>
                      <span>
                        <i className="flaticon-check-mark"></i> One-tap payment
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check-mark"></i> Settle your
                        payments once every 15 days
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check-mark"></i> Repay via
                        affordable Instalment plans (No cost EMI available)
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check-mark"></i> Accepted across
                        250+ websites and apps
                      </span>
                    </li>
                  </ul>
                  <NavLink to="sign-up" className="btn btn-primary">
                    Get Credit Limit
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Area --> */}

        {/* <!-- Start Services Area --> */}
        <section className="services-area ptb-70">
          <div className="container-fluid p-0">
            <div className="overview-box">
              <div className="overview-content">
                <div className="content left-content">
                  <span className="sub-title">
                    Paperless and 100% digital process
                  </span>
                  <h2>Instant Credit Line Upto ₹ 5 Lac</h2>
                  <div className="bar"></div>
                  <p>Fast & Affordable at your fingertips.</p>

                  <ul className="services-list">
                    <li>
                      <span>
                        <i className="flaticon-check-mark"></i> Online process
                        with minimal documentation
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check-mark"></i> One time
                        approval for a lifetime of usage
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check-mark"></i> No bank visit,
                        no collateral needed
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="flaticon-check-mark"></i> Pay interest
                        only on amount taken and not approved
                      </span>
                    </li>
                  </ul>
                  <a href="sign-up.html" className="btn btn-primary">
                    Get Credit Limit
                  </a>
                </div>
              </div>

              <div className="overview-image">
                <div className="image">
                  <img src="assets/media/5.png" alt="how-it-works" />
                  <div className="circle-img">
                    <img src="assets/media/circle.png" alt="how-it-works" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Area --> */}

        <section className="features-section ptb-70 bg-f7fafd">
          <div className="container">
            <div className="section-title">
              {" "}
              <h2>Our Features</h2> <div className="bar"></div>
              <p>Painless. Transparent. Dobzin</p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="features-box-list">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6 col-md-6">
                      <div className="features-box">
                        <div className="icon">
                          <i className="flaticon-settings"></i>
                        </div>
                        <h3>No transaction failures</h3>
                        <p>Shopping with a tap is instant</p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6 col-md-6">
                      <div className="features-box">
                        <div className="icon bg-f78acb">
                          <i className="flaticon-envelope-of-white-paper"></i>
                        </div>
                        <h3>The best kind of security</h3>
                        <p>Never give bank info to websites</p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6 col-md-6">
                      <div className="features-box">
                        <div className="icon bg-cdf1d8">
                          <i className="flaticon-menu"></i>
                        </div>
                        <h3>Wallet balance? Don't bother</h3>
                        <p>Order first. And pay for it later</p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6 col-md-6">
                      <div className="features-box">
                        <div className="icon bg-c679e3">
                          <i className="flaticon-info"></i>
                        </div>
                        <h3>No more "Processing refund"</h3>
                        <p>Merchants can refund instantly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="features-image">
                  <img
                    src="assets/media/features-img1.png"
                    alt="how-it-works"
                  />
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
              <p> Skip paying again & again. Pay ONE BILL instead. </p>
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
            <div className="contact-cta-box">
              <h3>Want Dobzin anywhere else?</h3>
              <p> "Don't hesitate to contact us"</p>
              <a href="contact.html" className="btn btn-primary">
                Contact Us
              </a>
            </div>
            <div className="map-bg">
              <img src="assets/media/map.png" alt="map" />
            </div>
          </div>
        </section>
        <section className="ready-to-talk">
          <div className="container">
            <div className="ready-to-talk-content">
              <h3>Pay with Dobzin at these leading merchants</h3>
            </div>
          </div>
        </section>

        <div className="partner-area">
          <div className="container">
            <h3> "More that 1.5 million users and organizations use Dobzin"</h3>
            <div className="partner-inner">
              <div className="row align-items-center">
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p1.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p1.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p2.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p2.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p3.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p3.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p4.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p4.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p5.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p5.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p6.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p6.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p7.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p7.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p8.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p8.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p9.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p9.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p10.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p10.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p11.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p11.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p12.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p12.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p13.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p13.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p14.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p14.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p15.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p15.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p16.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p16.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p17.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p17.png"
                      alt="partner"
                    />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-4 col-md-3 col-6">
                  <a href="#">
                    <img
                      src="assets/media/partner-image/p18.png"
                      alt="partner"
                    />
                    <img
                      src="assets/media/partner-image/p18.png"
                      alt="partner"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Footer Area  */}
        <div className="footer-area footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <NavLink to="/">
                      <img src="assets/media/black-logo.png" alt="logo" />
                    </NavLink>
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
                        <i className="fab fa-facebook-f" />
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
            <img src="assets/media/map.png" alt="map" />
          </div>
        </div>

        <div className="go-top">
          <i className="fas fa-arrow-up" />
        </div>
      </main>
    );
  }
}
