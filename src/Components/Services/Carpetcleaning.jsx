import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
import ServicesData from "../ServiceData/ServiceData";
import basiccleaning from "../../Assets/img/serv-1.png";
import ContactSection from "../Contactsection";
import { Helmet } from "react-helmet";

function Carpetcleaning() {
  const services = [
    {
      title: "Deep Cleaning",
      description:
        "Thorough cleaning process that penetrates deep into the fibers, removing ingrained dirt and stains.",
    },
    {
      title: "Stain Removal",
      description:
        "Specialized treatment for tough stains, restoring the appearance of your carpets.",
    },
    {
      title: "Allergen Reduction",
      description:
        "Eliminates dust mites, pollen, and allergens to improve air quality in your office.",
    },
    {
      title: "Deodorization",
      description:
        "Effective treatments to eliminate unpleasant odors, leaving your carpets smelling fresh.",
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
              <h2 data-aos="fade-up">Commercial Carpet Cleaning</h2>
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
                <span>Commercial Carpet Cleaning</span> -A Fresh Start
              </h2>
              <h6>
                Carpets can harbor dirt, stains, and allergens, negatively
                impacting the air quality and overall cleanliness of your
                workspace. Our professional carpet cleaning service is designed
                to rejuvenate your carpets, effectively removing deep-seated
                dirt, allergens, and odors. We use advanced cleaning techniques
                and eco-friendly products to ensure your carpets not only look
                great but also contribute to a healthier working environment.
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
                Investing in professional carpet cleaning not only enhances the
                aesthetic appeal of your workspace but also prolongs the life of
                your carpets. Our flexible scheduling options allow us to work
                around your business hours, ensuring minimal disruption while
                providing exceptional results. With our commitment to quality
                and customer satisfaction, you can trust us to deliver a carpet
                cleaning service that exceeds your expectations.
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

export default Carpetcleaning;
