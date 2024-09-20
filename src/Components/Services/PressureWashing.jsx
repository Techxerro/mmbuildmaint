import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
// import ConsultancySection from "../ConsultancySection";
import ServicesData from "../ServiceData/ServiceData";

import basiccleaning from "../../Assets/img/service5.jpg";
import ContactSection from "../Contactsection";
import { Helmet } from "react-helmet";

function PressureWashing() {
  const services = [
    {
      title: "Exterior Building Facades",
      description:
        "Remove dirt, algae, and other contaminants to restore your building’s original beauty.",
    },
    {
      title: "Sidewalks and Walkways",
      description:
        "Ensure safe, clean pathways by removing dirt, gum, oil stains, and mildew.",
    },
    {
      title: "Parking Lots and Driveways",
      description:
        "Enhance curb appeal and prolong the life of surfaces by removing oil, grease, and tire marks.",
    },
    {
      title: "Decks, Patios, and Fences",
      description:
        "Revitalize wooden, concrete, or composite surfaces by eliminating dirt, mold, and grime buildup.",
    },
  ];
  return (
    <>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Pressure Washing</h2>
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
                <span>Pressure Washing</span> -Reviving Your Surfaces
              </h2>
              <h6>
                Over time, dirt, grime, mold, and mildew can build up on various
                surfaces, diminishing the overall appeal of your property. Our
                pressure washing service will restore the beauty of your
                exteriors, including sidewalks, parking lots, and building
                facades, bringing them back to their original shine.
              </h6>

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
                Whether it’s for commercial or residential properties, our
                pressure washing service can enhance the look of your exteriors
                and maintain their integrity for years to come. We offer
                flexible scheduling and custom cleaning plans to suit your
                specific needs, ensuring every surface shines like new.
              </h6>
              <br />
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

export default PressureWashing;
