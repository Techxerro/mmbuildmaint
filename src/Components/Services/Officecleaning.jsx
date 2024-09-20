import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Services.css";
import ServicesData from "../ServiceData/ServiceData";
import basiccleaning from "../../Assets/img/service7.jpg";
import ContactSection from "../Contactsection";
import { Helmet } from "react-helmet";

function Officecleaning() {
  const services = [
    {
      title: "Daily and Weekly Cleaning",
      description:
        "Customized cleaning schedules to fit your office's needs, ensuring your space remains consistently clean.",
    },
    {
      title: "Dusting and Vacuuming",
      description:
        "Comprehensive dusting of surfaces and thorough vacuuming to maintain air quality and eliminate allergens.",
    },
    {
      title: "Sanitizing Communal Areas",
      description:
        "Regular sanitization of high-touch surfaces to promote a healthy workplace.",
    },
    {
      title: "Restroom Cleaning",
      description:
        "Detailed cleaning and sanitization of restrooms to ensure they are always welcoming.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Expert Office Cleaning Services | MM Build & Maintenance</title>
        <meta
          name="description"
          content="Get a spotless, hygienic workspace with MM Build & Maintenance’s professional office cleaning services. Request your free quote today!"
        />
        <meta name="keywords" content="Office Cleaning Services" />
      </Helmet>
      <Header />
      <section className="servicebanner thumbnail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p data-aos="fade-down">Services </p>
              <h2 data-aos="fade-up">Office Cleaning</h2>
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
                <span>Office Cleaning</span>
              </h2>
              <h6>
                {/* <b> */}
                Our office cleaning services are designed to optimize the
                working environment, fostering productivity and professionalism.
                From bustling corporate headquarters to small-scale startups, we
                cater to diverse office settings with tailored cleaning
                solutions. Our dedicated team meticulously attends to every
                detail, from dusting and vacuuming to sanitizing communal areas
                and restrooms, creating a pristine and inviting workspace.
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
                By investing in professional office cleaning services, you
                create a healthier environment that enhances employee morale and
                productivity. Our flexible plans can be adapted to your schedule
                and specific needs, ensuring minimal disruption while providing
                a spotless workplace. With our commitment to quality and
                attention to detail, you can trust us to keep your office
                looking its best.
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

export default Officecleaning;
