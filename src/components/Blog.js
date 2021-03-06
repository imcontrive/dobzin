import React, { Component } from "react";
import Loader from "./Loader";
import Nav from "./Nav";
import NavList from "./NavList";
import QuickLinks from "./QuickLinks";

export default class Blog extends Component {
  render() {
    return (
      <main>
        <Loader />
        <Nav />

        <div
          className="page-title-area item-bg2 jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div className="container">
            <div className="page-title-content">
              <h2>Blog</h2>
              <p>
                Explore our blog for insightful articles, personal reflections,
                impactful resources, and ideas that inspire us at Dobzin
              </p>
            </div>
          </div>
        </div>

        <section className="blog-area ptb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src="/assets/media/blog-image/1.jpg"
                        alt="blog-images"
                      />
                    </a>

                    <div className="date">
                      <i className="far fa-calendar-alt"></i> September 15, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">
                        The security risks of changing package owners
                      </a>
                    </h3>

                    <span>
                      by <a href="#">admin</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src="/assets/media/blog-image/2.jpg"
                        alt="blog-images"
                      />
                    </a>

                    <div className="date">
                      <i className="far fa-calendar-alt"></i> September 17, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">Tips to Protecting Business and Family</a>
                    </h3>

                    <span>
                      by <a href="#">admin</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src="/assets/media/blog-image/3.jpg"
                        alt="blog-images"
                      />
                    </a>

                    <div className="date">
                      <i className="far fa-calendar-alt"></i> September 19, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">Protect Your Workplace from Cyber Attacks</a>
                    </h3>

                    <span>
                      by <a href="#">admin</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src="/assets/media/blog-image/4.jpg"
                        alt="blog-images"
                      />
                    </a>

                    <div className="date">
                      <i className="far fa-calendar-alt"></i> September 15, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">Business Debit Fees to Increase in 2019</a>
                    </h3>

                    <span>
                      by <a href="#">admin</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src="/assets/media/blog-image/5.jpg"
                        alt="blog-images"
                      />
                    </a>

                    <div className="date">
                      <i className="far fa-calendar-alt"></i> September 17, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">
                        10 Tips To Reduce Your Card Processing Costs
                      </a>
                    </h3>

                    <span>
                      by <a href="#">admin</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <a href="#">
                      <img
                        src="/assets/media/blog-image/6.jpg"
                        alt="blog-images"
                      />
                    </a>

                    <div className="date">
                      <i className="far fa-calendar-alt"></i> September 19, 2019
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <h3>
                      <a href="#">PayPal Here Card Reader Review 2019</a>
                    </h3>

                    <span>
                      by <a href="#">admin</a>
                    </span>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <a href="#" className="read-more-btn">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
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

        <div className="go-top">
          <i className="fas fa-arrow-up"></i>
        </div>
      </main>
    );
  }
}
