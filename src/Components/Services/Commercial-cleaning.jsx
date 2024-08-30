import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
// import ConsultancySection from "../ConsultancySection";
import ServicesData from "../ServiceData/ServiceData";
import basiccleaning from "../../Assets/img/serv-3.png";
import ContactSection from "../Contactsection";
import { Helmet } from "react-helmet";

const Commercialcleaning = () => {
  return (
    <>
      <Helmet>
        <title>
          Commercial Window Cleaning Services | MM Build & Maintenance
        </title>
        <meta
          name="description"
          content="Get streak-free, crystal-clear windows with MM Build & Maintenance's expert Commercial  Window Cleaning Service. Request a quote now!"
        />
        <meta name="keywords" content="Commercial Window Cleaning Services" />
      </Helmet>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Commercial Window Cleaning</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="servicetab-section" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="tab-contain">
                <h3>Categories</h3>
                {ServicesData.map((tab, index) => (
                  <div className="tab" key={index}>
                    <a href={tab.link}>{tab.head}</a>
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 0.5L6 5.5L1 10.5" stroke="black" />
                      <path d="M1 0.5L6 5.5L1 10.5" stroke="black" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="greenbox" data-aos="fade-down">
                <h3>
                  Keep everything <br />
                  clean with us
                </h3>
                <a href="/contact-us">
                  <button className="booknow">Book Now</button>
                </a>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-12 col-12 tab-content">
              <img src={basiccleaning} alt="" />
              <h2>
                <span>Commercial Window Cleaning</span> -A Clear View
              </h2>
              <h6>
                <b>
                  First impressions matter, and clean windows can make a
                  significant difference in how your business is perceived. Our
                  expert window cleaners will leave your glass surfaces crystal
                  clear, allowing natural light to flood your space and creating
                  an inviting atmosphere for your clients and employees.
                </b>
              </h6>

              <ol style={{ listStyle: "none", fontFamily: "myFirstFont" }}>
                <li>
                  <b>Trained and Professional Staff</b>
                </li>
                <li>
                  <b>Environmentally Friendly Practices</b>
                </li>
                <li>
                  <b>Flexible Scheduling</b>
                </li>
                <li>
                  <b>Quality Assurance</b>
                </li>
                <li>
                  <b>Competitive Pricing</b>
                </li>
                <li>
                  <b>Reliable and Trustworthy</b>
                </li>
                <li>
                  <b>Quality Assurance</b>
                </li>
                <li>
                  <b>Tailored Solutions</b>
                </li>
              </ol>

              <a href="/contact-us">
                <button className="booknow">Book Now</button>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="greenbox greenbox-visible-mobile" data-aos="fade-down">
          <h3>
            Keep everything <br />
            clean with us
          </h3>
          <a href="/contact-us">
            <button className="booknow">Book Now</button>
          </a>
        </div>
      </section>
      <ContactSection />
      {/* <ConsultancySection /> */}

      <Footer />
    </>
  );
};

export default Commercialcleaning;
