import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
import ServicesData from "../ServiceData/ServiceData";
import basiccleaning from "../../Assets/img/serv-6.png";
import ContactSection from "../Contactsection";
import { Helmet } from "react-helmet";

function Floorcleaning() {
  const services = [
    {
      title: "Hardwood Cleaning",
      description:
        "We remove dirt and polish your hardwood floors for a lasting shine.",
    },
    {
      title: "Tile & Grout Cleaning",
      description:
        "Deep cleaning of tile and grout to eliminate stains and restore color.",
    },
    {
      title: "Vinyl Floor Care",
      description:
        "Restore the look of vinyl floors by removing scuffs and scratches.",
    },
    {
      title: "Stain Removal",
      description:
        "Safe, effective solutions to remove tough stains and odors.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          Professional Floor Cleaning Services | MM Build & Maintenance
        </title>
        <meta
          name="description"
          content="Transform your floors with MM Build & Maintenance’s expert Floor cleaning services. Enjoy spotless results for any space. Get a free quote today!"
        />
        <meta name="keywords" content="Floor Cleaning Services" />
      </Helmet>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Floor Cleaning</h2>
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
                <span>Floor Cleaning</span> -Gleaming Perfection
              </h2>
              <h6>
                Floors are a major focal point in any space, and keeping them
                clean is essential to maintaining a polished, professional
                appearance. Whether you have hardwood, tile, vinyl, or other
                flooring materials, our floor cleaning service is designed to
                bring out the natural beauty of your floors while preserving
                their longevity. Using advanced techniques and top-of-the-line
                equipment, we remove dirt, grime, scuff marks, and stains,
                ensuring your floors look pristine.
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
                Our floor cleaning service can be customized to fit the specific
                needs of your business or home. Whether it’s for high-traffic
                areas or regular maintenance, we ensure your floors remain
                spotless and vibrant, enhancing the overall appeal and
                cleanliness of your space.
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

export default Floorcleaning;
