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
  const services = [
    {
      title: "Crystal Clear Glass Surfaces",
      description:
        "Our expert cleaners ensure spotless glass, allowing natural light to brighten up your workspace and create a welcoming environment.",
    },
    {
      title: "Streak-Free Results",
      description:
        "We use professional techniques and tools to provide streak-free results, ensuring your windows look their best.",
    },
    {
      title: "Interior and Exterior Cleaning",
      description:
        "Our service includes both interior and exterior window cleaning, leaving every pane spotless inside and out.",
    },
    {
      title: "Custom Schedules to Suit Your Business",
      description:
        "We offer flexible cleaning schedules to fit your business needs, minimizing disruption while maintaining cleanliness.",
    },
  ];
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
                <span>Commercial Window Cleaning</span> -A Clear View
              </h2>
              <h6>
                First impressions are crucial, and sparkling clean windows can
                elevate the perception of your business. Our professional
                commercial window cleaning service ensures that your glass
                surfaces are spotless, allowing natural light to flood into your
                space and creating a welcoming environment for your customers
                and employees alike. We use safe and effective cleaning methods
                that leave your windows streak-free and gleaming.
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
                By maintaining the cleanliness of your windows, you not only
                enhance the aesthetic appeal of your property but also improve
                energy efficiency by maximizing natural light. Our team is fully
                trained and equipped to handle all types of commercial
                buildings, ensuring a professional and hassle-free service every
                time.
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
      {/* <ConsultancySection /> */}

      <Footer />
    </>
  );
};

export default Commercialcleaning;
