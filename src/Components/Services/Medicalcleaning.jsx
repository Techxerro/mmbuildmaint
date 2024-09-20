import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
import ServicesData from "../ServiceData/ServiceData";
import basiccleaning from "../../Assets/img/service8.png";
import ContactSection from "../Contactsection";
import { Helmet } from "react-helmet";

function Medicalcleaning() {
  const services = [
    {
      title: "Comprehensive Surface Disinfection",
      description:
        "Utilizing medical-grade disinfectants to ensure thorough cleaning and sanitization.",
    },
    {
      title: "High-Touch Surface Cleaning",
      description:
        "Focusing on areas like doorknobs and medical equipment to reduce cross-contamination.",
    },
    {
      title: "Examination Room Sanitization",
      description:
        "Meticulous cleaning and preparation of examination rooms for patient use.",
    },
    {
      title: "Waiting Area Maintenance",
      description:
        "Regular cleaning of seating, tables, and floors in waiting areas for patient comfort.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Medical Cleaning Services | MM Build & Maintenance</title>
        <meta
          name="description"
          content="Ensure a sterile environment with MM Build & Maintenance’s medical cleaning services. Expert, compliant service for healthcare facilities. Request a free quote!"
        />
        <meta name="keywords" content="Medical Cleaning Services" />
      </Helmet>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Medical Cleaning</h2>
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
                <span>Medical Cleaning</span>
              </h2>
              <h6>
                Sanitation is essential for healthcare environments, where
                cleanliness directly impacts patient safety and well-being. Our
                medical cleaning services are designed to meet the highest
                standards of hygiene and infection control. With specialized
                training and adherence to stringent protocols, our team ensures
                thorough disinfection of all surfaces, including waiting areas,
                examination rooms, and high-touch surfaces.
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
                Our commitment to quality and safety means you can trust us to
                provide a clean environment that promotes patient health and
                complies with all regulatory requirements. We understand the
                unique challenges of healthcare facilities, and our flexible
                scheduling allows us to perform our services with minimal
                disruption to your operations.
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

export default Medicalcleaning;
