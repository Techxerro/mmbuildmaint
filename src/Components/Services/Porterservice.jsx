import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
import ServicesData from "../ServiceData/ServiceData";
import basiccleaning from "../../Assets/img/serv-4.png";
import ContactSection from "../Contactsection";
import { Helmet } from "react-helmet";

function Porterservice() {
  const services = [
    {
      title: "Trash Removal",
      description:
        "Regularly emptying trash cans and replacing liners to maintain a clean environment.",
    },
    {
      title: "Restroom Maintenance",
      description:
        "Keeping restrooms stocked, sanitized, and ready for use throughout the day.",
    },
    {
      title: "Common Area Tidying",
      description:
        "Ensuring lobbies, hallways, and break rooms remain clean and presentable.",
    },
    {
      title: "Spill and Accident Cleanup",
      description:
        "Quick response to spills and accidents to maintain safety and cleanliness.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          Top-Quality Porter Cleaning Services | MM Build & Maintenance
        </title>
        <meta
          name="description"
          content="Elevate your property with MM Build & Maintenance’s expert porter Cleaning Services. Enjoy a clean, polished environment. Request a quote today!"
        />
        <meta name="keywords" content="Porter Cleaning Services" />
      </Helmet>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Porter Services</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="servicetab-section" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-4 col-lg-4 col-md-12 col-12">
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
            </div> */}

            <div className="col-xl-12 col-lg-12 col-md-12 col-12 tab-content">
              <img src={basiccleaning} alt="" />
              <h2>
                <span>Porter Services</span> -Tidiness at Your Fingertips
              </h2>
              <h6>
                Keeping your facility clean and organized is crucial for
                maintaining a professional and welcoming environment. Our porter
                services provide continuous upkeep throughout the day to ensure
                your space remains in top condition. Whether it's removing
                trash, cleaning common areas, or addressing unexpected messes,
                our team of dedicated porters is always on hand to take care of
                the details, so you don't have to.
              </h6>
              <br />
              <h6>
                <b>We focus on:</b>
              </h6>
              <div className="cards-container">
                {services.map((service, index) => (
                  <div className="card" key={index}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
              <h6>
                Our porter services are designed to handle day-to-day cleaning
                tasks, so you can focus on running your business. We work around
                your schedule to ensure minimal disruption while keeping your
                facility in peak condition throughout the day. With our reliable
                and professional team, you can trust that your space will always
                look its best.
              </h6>
              <br />

              {/* <ol style={{ listStyle: "none", fontFamily: "myFirstFont" }}>
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
              </ol> */}

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
      <Footer />
    </>
  );
}

export default Porterservice;
