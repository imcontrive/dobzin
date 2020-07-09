import React, { Component } from "react";

export default class Faq extends Component {
  render() {
    return (
      <main>
        <div class="preloader" style={{ display: "none" }}>
          <div class="loader">
            <div class="shadow"></div>
            <div class="box"></div>
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
        {/* <!-- End Navbar Area --> */}

        {/* <!-- Start Page Title Area --> */}
        <div
          className="page-title-area item-bg1 jarallax"
          data-jarallax='{"speed": 0.3}'
        >
          <div className="container">
            <div className="page-title-content">
              <h2>How can we help?</h2>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title Area --> */}

        {/* <!-- Start FAQ Area --> */}
        <section className="faq-area ptb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="faq-content">
                  <h2>Frequently Asked Questions</h2>
                  <div className="bar"></div>
                  <div className="faq-image">
                    <img src="/assets/media/faq.png" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="faq-accordion">
                  <ul className="accordion">
                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="fas fa-plus"></i>
                        What is Dobzin?
                      </a>
                      <p className="accordion-content">
                        Dobzin is India’s fastest way to get credit online. Just
                        download the Dobzin App and discover your unique credit
                        limit. Dobzin credit limit can be increased upto Rs
                        5,00,000 with an easy digital process. Use your credit
                        limit to pay later for your shopping online across 250+
                        of your favourite apps and websites. Withdraw from your
                        credit limit to your bank account and repay using easy
                        EMI options at affordable interest rates. All your
                        payments and EMIs are consolidated in a single
                        statement. You need to pay only a single bill on the 4th
                        and 19th of each month.
                      </p>
                    </li>

                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="fas fa-plus"></i>
                        What are the benefits of using Dobzin?
                      </a>
                      <p className="accordion-content">
                        Dobzin is the fastest and simplest way to make payment.
                        The speed of payment ensures that you never miss out on
                        your favorite products or your favorite movie. What’s
                        more, you need not pay us in advance. Just pay us after
                        you have availed the service.
                      </p>
                    </li>

                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="fas fa-plus"></i>
                        Should I trust Dobzin services?
                      </a>

                      <p className="accordion-content">
                        When you buy online, you have to painstakingly enter all
                        your details every time. Sadly, this complex
                        verification process only gives you the illusion of
                        security. In reality, the chances of fraud go up every
                        time you share information over the internet. With
                        Dobzin, your payment details are never passed to the
                        merchant. By drastically reducing the number of times
                        you give out your banking data online, we drastically
                        reduce the chances of fraud.
                      </p>
                    </li>

                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="fas fa-plus"></i>
                        How do I become eligible for this?
                      </a>

                      <p className="accordion-content">
                        Please check the section on increasing your credit
                        limit. If you are approved for a high credit limit and
                        have done your KYC and setup your bank for auto
                        repayment, you will become eligible to use this service.
                      </p>
                    </li>

                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="fas fa-plus"></i>
                        What is withdrawal from credit limit to bank?
                      </a>

                      <p className="accordion-content">
                        You can withdraw from your credit limit* directly into
                        your bank account. You can use these funds for your
                        emergency needs or shopping or wherever else you want
                        to. You will need to repay the amount you withdraw in
                        installments as chosen by you at the time of withdrawal.
                        You will also be charged interest and a processing fee
                        <br />
                        *But this is applicable only if you get an enhanced
                        credit limit and complete your KYC & auto repayment
                        setup
                      </p>
                    </li>

                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="fas fa-plus"></i>
                        How long do refunds take on Dobzin?
                      </a>

                      <p className="accordion-content">
                        Just like paying with Dobzin, refunds on Dobzin are
                        instant. In case you haven’t received a refund, it’s
                        probably because it hasn’t been initiated by the
                        merchant yet.
                        <br />
                        If you were promised a refund and it still isn’t showing
                        up on your Dobzin account, drop us a message. Include
                        the merchant name, transaction date, amount and your
                        phone number.
                        <br />
                        We’ll contact the merchant and have it resolved for you.
                      </p>
                    </li>

                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="fas fa-plus"></i>
                        When do I pay my Dobzin bill?
                      </a>

                      <p className="accordion-content">
                        Let’s take the month of June as an example.
                        <br />
                        All transactions from the 1st to the 15th will be
                        recorded in one bill, which is generated on the 15th
                        evening. You’ll have to settle it within 4 days(19th
                        June).
                        <br />
                        Transactions from the 16th to the 31st or last day of
                        the month will be recorded in the next bill, which is
                        generated on the last day of the month. Again, you’ll
                        have to settle it within 4 days(4th July).
                      </p>
                    </li>

                    <li className="accordion-item">
                      <a className="accordion-title" href="javascript:void(0)">
                        <i className="fas fa-plus"></i>
                        Whom should I contact for other queries?
                      </a>

                      <p className="accordion-content">
                        Please contact us at
                        <a href="mailto:support@dobzin.in">
                          support@dobzin.in
                        </a>{" "}
                        for any queries or if you change your phone number. This
                        is a critical security requirement, since your funds are
                        tied to your phone number and KYC details.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="faq-contact">
              <div className="contact-cta-box">
                <h3>Can’t find a solution?</h3>
                <p>Get in touch with us. Our team is on standby to help.</p>
                <a href="contact.html" className="btn btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End FAQ Area --> */}

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
                Copyright @2020 <a href="#">DOBZIN</a>. All rights reserved
              </p>
            </div>
          </div>
          <div className="map-image">
            <img src="/assets/media/map.png" alt="map" />
          </div>
        </footer>
        {/* <!-- End Footer Area --> */}
      </main>
    );
  }
}
