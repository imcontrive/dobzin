import React, { Component } from "react";

export default class BlogDetails extends Component {
  render() {
    return (
      <main>
        <div className="preloader" style={{ display: "none" }}>
          <div className="loader">
            <div className="shadow"></div>
            <div className="box"></div>
          </div>
        </div>

        <div class="navbar-area">
          <div class="luvion-responsive-nav">
            <div class="container">
              <div class="luvion-responsive-menu">
                <div class="logo">
                  <a href="index.html">
                    <img src="/assets/media/logo.png" alt="logo" />
                    <img src="/assets/media/black-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="luvion-nav">
            <div class="container">
              <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" href="index.html">
                  <img src="/assets/media/logo.png" alt="logo" />
                  <img src="/assets/media/black-logo.png" alt="logo" />
                </a>

                <div
                  class="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a href="index.html" class="nav-link">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="about.html" class="nav-link">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="merchants.html" class="nav-link">
                        Merchants
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="contact.html" class="nav-link">
                        Need Help?
                      </a>
                    </li>
                  </ul>
                  <div class="others-options">
                    <a href="login.html" class="login-btn">
                      <i class="flaticon-user"></i> Log In
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- End Navbar Area --> */}

        {/* <!-- Start Page Title Area --> */}
        <div
          class="page-title-area item-bg2 jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div class="container">
            <div class="page-title-content">
              <h2>Blog</h2>
              <p>
                Explore our blog for insightful articles, personal reflections,
                impactful resources, and ideas that inspire us at Dobzin
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title Area --> */}

        {/* <!-- Start Blog Area --> */}
        <section class="blog-area ptb-70">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <div class="blog-image">
                    <a href="#">
                      <img src="/assets/media/blog-image/1.jpg" alt="image" />
                    </a>

                    <div class="date">
                      <i class="far fa-calendar-alt"></i> September 15, 2019
                    </div>
                  </div>

                  <div class="blog-post-content">
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

                    <a href="#" class="read-more-btn">
                      Read More <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <div class="blog-image">
                    <a href="#">
                      <img src="/assets/media/blog-image/2.jpg" alt="image" />
                    </a>

                    <div class="date">
                      <i class="far fa-calendar-alt"></i> September 17, 2019
                    </div>
                  </div>

                  <div class="blog-post-content">
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

                    <a href="#" class="read-more-btn">
                      Read More <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <div class="blog-image">
                    <a href="#">
                      <img src="/assets/media/blog-image/3.jpg" alt="image" />
                    </a>

                    <div class="date">
                      <i class="far fa-calendar-alt"></i> September 19, 2019
                    </div>
                  </div>

                  <div class="blog-post-content">
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

                    <a href="#" class="read-more-btn">
                      Read More <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <div class="blog-image">
                    <a href="#">
                      <img src="/assets/media/blog-image/4.jpg" alt="image" />
                    </a>

                    <div class="date">
                      <i class="far fa-calendar-alt"></i> September 15, 2019
                    </div>
                  </div>

                  <div class="blog-post-content">
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

                    <a href="#" class="read-more-btn">
                      Read More <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <div class="blog-image">
                    <a href="#">
                      <img src="/assets/media/blog-image/5.jpg" alt="image" />
                    </a>

                    <div class="date">
                      <i class="far fa-calendar-alt"></i> September 17, 2019
                    </div>
                  </div>

                  <div class="blog-post-content">
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

                    <a href="#" class="read-more-btn">
                      Read More <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <div class="blog-image">
                    <a href="#">
                      <img src="/assets/media/blog-image/6.jpg" alt="image" />
                    </a>

                    <div class="date">
                      <i class="far fa-calendar-alt"></i> September 19, 2019
                    </div>
                  </div>

                  <div class="blog-post-content">
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

                    <a href="#" class="read-more-btn">
                      Read More <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Blog Area --> */}

        {/* <!-- Start Footer Area --> */}
        <footer class="footer-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="single-footer-widget">
                  <div class="logo">
                    <a href="index.html">
                      <img src="/assets/media/black-logo.png" alt="logo" />
                    </a>
                    <p>
                      Dobzin is a digital payment solution to provide app based
                      credit line.
                    </p>
                  </div>
                  <ul class="social-links">
                    <li>
                      <a
                        href="https://www.facebook.com/dobzinindia"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/dobzinindia" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/dobzin/"
                        target="_blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/dobzin"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="single-footer-widget pl-5">
                  <h3>Company</h3>
                  <ul class="list">
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
              <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="single-footer-widget">
                  <h3>Quick Links</h3>
                  <ul class="list">
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
              <div class="col-lg-3 col-sm-6 col-md-6">
                <div class="single-footer-widget">
                  <h3>Address</h3>
                  <ul class="footer-contact-info">
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
            <div class="copyright-area">
              <p>
                Copyright @2020 <a>DOBZIN</a>. All rights reserved
              </p>
            </div>
          </div>
          <div class="map-image">
            <img src="/assets/media/map.png" alt="map" />
          </div>
        </footer>
        {/* <!-- End Footer Area --> */}

        <div class="go-top">
          <i class="fas fa-arrow-up"></i>
        </div>
      </main>
    );
  }
}
