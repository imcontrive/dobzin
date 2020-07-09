import React, { Component } from "react";
import Loader from "./Loader";
import Nav from "./Nav";
import NavList from "./NavList";
import QuickLinks from "./QuickLinks";

export default class About extends Component {
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
              <h2>About Us</h2>
              <p>The Dobzin story</p>
            </div>
          </div>
        </div>
        {/* // <!-- End Page Title Area --> */}

        {/* // <!-- Start About Area --> */}
        <section className="about-area ptb-70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <span>Who We Are</span>
                  <h2>How we were founded</h2>
                  <p>
                    Dobzin is a technology company that works with merchants and
                    financial institutions to enable a world where every
                    monetary interaction is effortless and transparent. Dobzin
                    is India’s leading app-based credit line. Offered in
                    partnership with leading banks, it is not just a personal
                    loan, not just a credit card, but a personal credit line.
                  </p>
                  <p>
                    We are a team of dynamic professionals with a goal to
                    optimize the digital payment experience and make it
                    seamless, reliable and secure. We take pride in our aim to
                    bridge the credit divide that exists in India today.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <img src="/assets/media/3.png" alt="ab-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-area ptb-70 bg-f7fafd">
          <div className="container">
            <div className="section-title">
              <h2>People behind Dobzin</h2>
              <div className="bar"></div>
              <p>
                Dobzin is a millennial product built by the millennials. we are
                a team of passionate young people, who listen and appreciate
                your opinion and deserve your trust as a customer.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="/assets/media/t1.png" alt="ab-image" />

                    <ul className="social">
                      <li>
                        <a href="http://twitter.com/sunilpujee" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/sunilpujee/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="member-content">
                    <h3>Sunil Kumar</h3>
                    <span>Co Founder</span>
                    <p>
                      Sunil is an award-winning Digital leader & an entrepreneur
                      with 13+ years in leading media houses, Internet companies
                      & start-ups in India.
                    </p>
                  </div>
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
        {/* // <!-- End Footer Area --> */}

        <div className="go-top">
          <i className="fas fa-arrow-up"></i>
        </div>
      </main>
    );
  }
}
