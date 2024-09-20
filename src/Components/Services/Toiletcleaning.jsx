import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
import ServicesData from "../ServiceData/ServiceData";
import basiccleaning from "../../Assets/img/serv-2.png";
import ContactSection from "../Contactsection";
import { Helmet } from "react-helmet";
function Toiletcleaning() {
  const services = [
    {
      title: "Deep Cleaning and Disinfection",
      description:
        "Thorough cleaning and sanitization of all fixtures, ensuring that every surface is free from harmful bacteria and germs.",
    },
    {
      title: "Odor Control Solutions",
      description:
        "Our odor control solutions ensure that your restroom stays fresh and inviting.",
    },
    {
      title: "Stain Removal",
      description:
        "Effective removal of stains from tiles, grout, and other surfaces, leaving your restroom spotless.",
    },
    {
      title: "Stocking and Replenishment",
      description:
        "Restocking essential supplies such as toilet paper, soap, and paper towels for your convenience.",
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
              <h2 data-aos="fade-up">Toilet Cleaning</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="servicetab-section" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 tab-content">
              <img src={basiccleaning} alt="" />
              <h2>
                <span>Toilet Cleaning</span> -Refreshing Cleanliness
              </h2>
              <h6>
                {/* <b> */}
                We understand that a clean and hygienic restroom is crucial for
                the well-being and comfort of your employees, customers, and
                visitors. That’s why our professional toilet cleaning service is
                designed to maintain the highest standards of cleanliness. Our
                experienced team uses industry-grade cleaning agents and
                techniques to thoroughly clean and sanitize all areas, including
                toilet bowls, seats, sinks, floors, and other high-touch
                surfaces.
                {/* </b> */}
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
                By maintaining a fresh, germ-free restroom, we help you create a
                positive impression and a healthier environment. Whether you
                need daily, weekly, or monthly cleaning, our flexible service
                plans can be tailored to meet your specific requirements.
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

export default Toiletcleaning;
