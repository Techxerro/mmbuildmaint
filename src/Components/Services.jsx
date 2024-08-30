import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Services.css";
import ContactSection from "./Contactsection";

const Services = () => {
  const tabs = [
    { label: "Tab 1", content: "Content for Tab 1" },
    { label: "Tab 2", content: "Content for Tab 2" },
    { label: "Tab 3", content: "Content for Tab 3" },
  ];
  return (
    <>
      <Header />
      <section className="servicebanner thumbnail d-flex align-items-center ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 data-aos="fade-down">Our Services </h2>
              <p data-aos="fade-up">
                Transform your surroundings with our top-tier cleaning services,
                sustainable practices, and commitment to customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="box-container how-we-work desktop-vissible">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 title justify-content-center">
              <h3>How we work</h3>
              <p>
                With our expertise, professionalism, and commitment to
                delivering exceptional results, <br />
                we are here to transform your space into a spotless sanctuary.
              </p>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-12 d-flex align-items-center left-box-wrapper">
              <div>
                <div className="detail-bx">
                  <h2>1</h2>
                  <h3>Schedule a cleaning</h3>
                  <p>
                    Easily book a convenient time for your cleaning service.{" "}
                  </p>
                </div>
                <div className="detail-bx" data-aos="fade-down">
                  <h2>3</h2>
                  <h3>Meet the team</h3>
                  <p>
                    Our experienced and friendly cleaning professionals will
                    arrive at your location fully equipped and ready to deliver
                    exceptional service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 text-center">
              <img
                src={require("../Assets/img/ourwork.png")}
                alt=""
                id="ourwork"
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-12  d-flex align-items-center right-box-wrapper">
              <div>
                <div className="detail-bx" data-aos="fade-down">
                  <h2>2</h2>
                  <h3>Prepare for the clean</h3>
                  <p>
                    As the cleaning date approaches, we'll provide helpful tips
                    to prepare your space for our team's arrival.{" "}
                  </p>
                </div>
                <div className="detail-bx" data-aos="fade-down">
                  <h2>4</h2>
                  <h3>Enjoy the clean</h3>
                  <p>
                    Sit back, relax, and enjoy your sparkling clean space as we
                    take care of all the cleaning tasks with meticulous
                    attention to detail.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box-container how-we-work mobile-vissible">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 title justify-content-center">
              <h3>How we work</h3>
              <p>
                With our expertise, professionalism, and commitment to
                delivering exceptional results, <br />
                we are here to transform your space into a spotless sanctuary.
              </p>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-12 d-flex align-items-center left-box-wrapper">
              <div>
                <img
                  src={require("../Assets/img/ourwork.png")}
                  alt=""
                  id="ourwork"
                />
                <div className="detail-bx">
                  <h2>1</h2>
                  <h3>Schedule a cleaning</h3>
                  <p>
                    Easily book a convenient time for your cleaning service.{" "}
                  </p>
                </div>

                <div className="detail-bx" data-aos="fade-down">
                  <h2>2</h2>
                  <h3>Prepare for the clean</h3>
                  <p>
                    As the cleaning date approaches, we'll provide helpful tips
                    to prepare your space for our team's arrival.{" "}
                  </p>
                </div>

                <div className="detail-bx" data-aos="fade-down">
                  <h2>3</h2>
                  <h3>Meet the team</h3>
                  <p>
                    Our experienced and friendly cleaning professionals will
                    arrive at your location fully equipped and ready to deliver
                    exceptional service.
                  </p>
                </div>
                <div className="detail-bx" data-aos="fade-down">
                  <h2>4</h2>
                  <h3>Enjoy the clean</h3>
                  <p>
                    Sit back, relax, and enjoy your sparkling clean space as we
                    take care of all the cleaning tasks with meticulous
                    attention to detail.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-service-section" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-12 title">
              <h3>Your Solution for Spotless Spaces</h3>
              <p>
                We take pride in offering a wide range of cleaning services that
                cater to both residential and commercial needs.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail bgyellow" id="toilet-cleaning">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={require("../Assets/img/serv-2.png")} alt="" />
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Toilet Cleaning: Refreshing Cleanliness</h3>
              <p>
                We know that a clean and hygienic restroom is essential for both
                your employees and visitors. Our dedicated team of professionals
                will ensure that your toilets are thoroughly cleaned and
                sanitized, leaving them fresh, germ-free, and ready for use.
              </p>
              <ul>
                <li>Trained and Professional Staff</li>
                <li>Environmentally Friendly Practices </li>
                <li>Flexible Scheduling</li>
                <li>Quality Assurance</li>
                <li>Competitive Pricing</li>
                <li>Reliable and Trustworthy</li>
                <li>Tailored Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail" id="commercial-window-cleaning">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Commercial Window Cleaning: A Clear View</h3>
              <p>
                First impressions matter, and clean windows can make a
                significant difference in how your business is perceived. Our
                expert window cleaners will leave your glass surfaces crystal
                clear, allowing natural light to flood your space and creating
                an inviting atmosphere for your clients and employees.
              </p>
              <ul>
                <li>Trained and Professional Staff</li>
                <li>Environmentally Friendly Practices </li>
                <li>Flexible Scheduling</li>
                <li>Quality Assurance</li>
                <li>Competitive Pricing</li>
                <li>Reliable and Trustworthy</li>
                <li>Tailored Solutions</li>
              </ul>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={require("../Assets/img/serv-3.png")} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail bgyellow" id="porter-service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={require("../Assets/img/serv-4.png")} alt="" />
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Porter Services: Tidiness at Your Fingertips</h3>
              <p>
                Maintaining a clean and organized facility requires continuous
                attention. Our porter services ensure that your premises are
                kept in pristine condition throughout the day. From emptying
                trash cans to tidying up common areas, our dedicated porters
                will keep your space looking its best.
              </p>
              <ul>
                <li>Trained and Professional Staff</li>
                <li>Environmentally Friendly Practices </li>
                <li>Flexible Scheduling</li>
                <li>Quality Assurance</li>
                <li>Competitive Pricing</li>
                <li>Reliable and Trustworthy</li>
                <li>Tailored Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail" id="pressure-washing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Pressure Washing: Reviving Your Surfaces</h3>
              <p>
                Over time, dirt, grime, and mildew can build up on various
                surfaces, diminishing the overall appeal of your property. Our
                pressure washing service will restore the beauty of your
                exteriors, including sidewalks, parking lots, and building
                facades, bringing them back to their original shine.
              </p>
              <ul>
                <li>Trained and Professional Staff</li>
                <li>Environmentally Friendly Practices </li>
                <li>Flexible Scheduling</li>
                <li>Quality Assurance</li>
                <li>Competitive Pricing</li>
                <li>Reliable and Trustworthy</li>
                <li>Tailored Solutions</li>
              </ul>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={require("../Assets/img/service5.jpg")} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="service-detail bgyellow"
        id="commercial-carpet-cleaning"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={require("../Assets/img/serv-1.png")} alt="" />
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Commercial Carpet Cleaning: A Fresh Start</h3>
              <p>
                Carpets can harbor dirt, stains, and allergens, affecting the
                air quality and overall cleanliness of your workspace. Our
                professional carpet cleaning service will rejuvenate your
                carpets, removing deep-seated dirt and leaving them fresh, soft,
                and odor-free.
              </p>
              <ul>
                <li>Trained and Professional Staff</li>
                <li>Environmentally Friendly Practices </li>
                <li>Flexible Scheduling</li>
                <li>Quality Assurance</li>
                <li>Competitive Pricing</li>
                <li>Reliable and Trustworthy</li>
                <li>Tailored Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail" id="floor-cleaning">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Floor Cleaning: Gleaming Perfection</h3>
              <p>
                Whether you have hardwood, tile, or vinyl floors, our floor
                cleaning service will restore their luster and shine. Our
                skilled technicians use industry-leading techniques and
                equipment to remove dirt, scuffs, and stains, leaving your
                floors looking immaculate and enhancing the overall appeal of
                your space.
              </p>
              <ul>
                <li>Trained and Professional Staff</li>
                <li>Environmentally Friendly Practices </li>
                <li>Flexible Scheduling</li>
                <li>Quality Assurance</li>
                <li>Competitive Pricing</li>
                <li>Reliable and Trustworthy</li>
                <li>Tailored Solutions</li>
              </ul>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={require("../Assets/img/serv-6.png")} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="service-detail bgyellow"
        id="commercial-carpet-cleaning"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={require("../Assets/img/service7.jpg")} alt="" />
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Commercial Cleaning</h3>
              <p>
                Our office cleaning services are designed to optimize the
                working environment, fostering productivity and professionalism.
                From bustling corporate headquarters to small-scale startups, we
                cater to diverse office settings with tailored cleaning
                solutions. Our dedicated team meticulously attends to every
                detail, from dusting and vacuuming to sanitizing communal areas
                and restrooms, creating a pristine and inviting workspace.{" "}
              </p>
              <ul>
                <li>Trained and Professional Staff</li>
                <li>Environmentally Friendly Practices </li>
                <li>Flexible Scheduling</li>
                <li>Quality Assurance</li>
                <li>Competitive Pricing</li>
                <li>Reliable and Trustworthy</li>
                <li>Tailored Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-detail" id="floor-cleaning">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
              <h3>Medical Office Cleaning</h3>
              <p>
                Sanitation essential for healthcare environments. With
                specialized training and adherence to stringent protocols, our
                team ensures thorough disinfection of all surfaces, including
                waiting areas, examination rooms, and high-touch surfaces,
                reducing the risk of infections and promoting patient
                well-being.
              </p>
              <ul>
                <li>Trained and Professional Staff</li>
                <li>Environmentally Friendly Practices </li>
                <li>Flexible Scheduling</li>
                <li>Quality Assurance</li>
                <li>Competitive Pricing</li>
                <li>Reliable and Trustworthy</li>
                <li>Tailored Solutions</li>
              </ul>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
              <img src={require("../Assets/img/service8.png")} alt="" />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </>
  );
};

export default Services;
