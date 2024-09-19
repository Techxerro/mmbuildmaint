import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";
import ServicesData from "./ServiceData/ServiceData";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ContactSection from "./Contactsection.jsx";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";

const Home = () => {
  const owlOptions = {
    items: 3, // Display one item at a time
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    navText: [
      `<svg width="29" height="8" viewBox="0 0 29 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.7308 0.976313 4.7308 0.65973 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM29 3.5L1 3.5L1 4.5L29 4.5L29 3.5Z" fill="black"/>
        </svg>
        `,
      `<svg width="29" height="8" viewBox="0 0 29 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4.5H28V3.5H0V4.5Z" fill="black"/>
        </svg>
        
        `,
    ],

    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 1,
      },
      // breakpoint from 768 up
      768: {
        items: 3,
      },
    },
  };

  const testimonies = {
    nav: true,
    navText: [
      `<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21L2 11L12 1" stroke="black" stroke-width="1.5"/>
        </svg>
        `,
      `<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.999999L11 11L1 21" stroke="black" stroke-width="1.5"/>
        </svg>
        
        `,
    ],
  };
  return (
    <>
      <Helmet>
        <title>
          Expert Cleaning & Maintenance Services |MM Build & Maintenance
        </title>
        <meta
          name="description"
          content="MM Build & Maintenance provides reliable cleaning and maintenance services for homes. Enjoy top-quality, efficient solutions tailored to your needs."
        />
      </Helmet>
      <Header />
      <section className="hero-slider">
        <div className="container-fluid">
          <div
            className="row align-items-center justify-content-center"
            style={{ height: "800px" }}
          >
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 slider-content">
              <div className="whitebox" data-aos="fade-right">
                <h2>Experience M&M's Janitorial </h2>
                <h2>
                  Cleaning <b>Services</b>.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="checklist">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="checklist-wrapper" data-aos="fade-down">
                <div className="d-flex align-items-center">
                  <img src={require("../Assets/img/staricon.png")} alt="" />
                  All cleaners are bonded & insured
                </div>
                <div className="d-flex align-items-center">
                  <img src={require("../Assets/img/checkicon.png")} alt="" />
                  Trained with our checklists
                </div>
                <div className="d-flex align-items-center">
                  <img src={require("../Assets/img/leaficon.png")} alt="" />
                  Bring & use green products
                </div>
                <div className="d-flex align-items-center">
                  <img src={require("../Assets/img/starsicon.png")} alt="" />
                  Non-toxic treatments
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
              <div className="title" data-aos="fade-down">
                <h3>
                  Hire trusted made ready to clean and to make
                  <br /> your office shines like new.
                </h3>
                <p>
                  Reliable cleaners, prepared to refresh and sparkle your space.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-12">
              <div
                className="process-wrapper step1"
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                <div>
                  <h3>Get a price</h3>
                  <p>Discover the cost for our top-notch cleaning services.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-12">
              <div
                className="process-wrapper step2"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <div>
                  <h3>Book it</h3>
                  <p>
                    Book now and experience a spotless office transformation!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-12">
              <div
                className="process-wrapper step3"
                data-aos="fade-left"
                data-aos-delay="1000"
              >
                <div>
                  <h3>Smile & Relax</h3>
                  <p>
                    Indulge in relaxation as your surroundings gleam
                    post-cleaning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyus-section">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 whyus-content"
              data-aos="fade-right"
            >
              <h3>
                <b>Benefits</b>
              </h3>
              <h3>7 reasons why you should hire us</h3>
              <p>
                Experience the difference with our services. Here are seven
                compelling reasons to choose us:
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
              <a href="/services">
                <button className="buttonstyle" data-aos="fade-up">
                  Go to services
                </button>
              </a>
            </div>

            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 benfit-bg"
              data-aos="fade-left"
            >
              <img
                src={require("../Assets/img/Rectangle 14.png")}
                id="whyusimg"
                alt=""
                data-aos="fade-right"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className='Projects'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-3" data-aos="fade-down">
                            <h2><span className='colorgreen'>700+</span> Projects Done</h2>
                            <p>With over 700 successful projects under our belt, OKC Uptown Cleaning has earned a reputation for delivering outstanding results. Our track record speaks for itself, as we consistently exceed our clients' expectations and leave their spaces looking immaculate. Join the growing list of satisfied customers who have experienced the OKC Uptown Cleaning difference.</p>
                            <button className="greenbtn"  data-aos="fade-down">Know More
                                <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z" fill="#000" />
                                </svg>
                                 </button>
                        </div>
                        <div className="col-xl-8">
                            <OwlCarousel margin={20} loop {...owlOptions}>
                                <div className="item custom-first-item">
                                    <img src={require('../Assets/img/project1.png')} alt="" data-aos="fade-left"/>
                                    <h3>Kitchen Cleaning</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/img/project2.png')} alt=""  data-aos="fade-left"/>
                                    <h3>Bedroom</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/img/project1.png')} alt="" data-aos="fade-left" />
                                    <h3>Bathroom</h3>
                                </div>
                                <div className="item">
                                    <img src={require('../Assets/img/project2.png')} alt="" data-aos="fade-left" />
                                    <h3>Deep Cleaning</h3>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section> */}

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 justify-content-center text-center">
              <h2 data-aos="fade-down">Our Services</h2>
              <p data-aos="fade-up">
                Elevate your space with our unparalleled service excellence.{" "}
              </p>
            </div>
            <div className=" row service-outer-wrapper">
              {ServicesData.map((obj, index) => {
                return (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                      <div
                        className="services-wrapper"
                        key={index}
                        style={{ background: `url(${obj.img})` }}
                        data-aos="fade-left"
                      >
                        <div>
                          <a href={obj.link}>
                            <h3>
                              {obj.head}
                              <svg
                                width="41"
                                height="16"
                                viewBox="0 0 41 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z"
                                  fill="white"
                                />
                              </svg>
                            </h3>
                            <p>{obj.subtitle}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="mobile-slider row ">
              <OwlCarousel margin={20} loop {...owlOptions}>
                {ServicesData.map((obj, index) => {
                  return (
                    <>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div
                          className="services-wrapper"
                          key={index}
                          style={{ background: `url(${obj.img})` }}
                          data-aos="fade-left"
                        >
                          <div>
                            <a href={obj.link}>
                              <h3>
                                {obj.head}
                                <svg
                                  width="41"
                                  height="16"
                                  viewBox="0 0 41 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0V9Z"
                                    fill="white"
                                  />
                                </svg>
                              </h3>
                              <p>{obj.subtitle}</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="pad100 bggreen testimonials text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <h4 data-aos="fade-down">What clients say's</h4>
              <p className="sub-title" data-aos="fade-up">
                Discover the essence of satisfaction in our clients'
                testimonials
              </p>
              <br />
              <OwlCarousel margin={20} loop items={1} {...testimonies}>
                <div className="testimonials-wrapper">
                  <img
                    src={require("../Assets/img/profile-1.png")}
                    alt=""
                    className="profile"
                    data-aos="fade-down  "
                  />
                  <img
                    src={require("../Assets/img/quotes.png")}
                    alt=""
                    className="vector"
                    data-aos="fade-down  "
                  />

                  <div className="testimonials-content" data-aos="fade-zoom-in">
                    <p>
                      "I have been working with Eric and his team for over one
                      year. I have been impressed at all levels with this
                      organization. I own a small office building in Cupertino
                      that M&M looks after.First, they do a quality job on the
                      cleaning.Second, they are very responsive and do a great
                      job in communicating with their clients. Finally, whenever
                      we have asked for additional services,they have responded
                      right away.I would highly recommend Eric and his staff at
                      M&M. They are definitely worth the 5-Star review."
                    </p>
                    <h4>Jay C</h4>
                  </div>
                </div>
                <div className="testimonials-wrapper">
                  <img
                    src={require("../Assets/img/profile-2.png")}
                    alt=""
                    className="profile"
                    data-aos="fade-down  "
                  />
                  <img
                    src={require("../Assets/img/quotes.png")}
                    alt=""
                    className="vector"
                    data-aos="fade-down  "
                  />

                  <div className="testimonials-content" data-aos="fade-zoom-in">
                    <p>
                      "Our company has been working with Eric and his team for
                      over 7 years and we are very pleased with the quality of
                      service they provided. We used three different facilities
                      in Santa Clara and Milpitas before we used Eric's team and
                      finally decided to stay with them because of their
                      professional service. They are reliable, on time, and
                      doing excellent job on cleaning and annual waxing of the
                      floor. "
                    </p>
                    <h4>Gua T</h4>
                  </div>
                </div>
                <div className="testimonials-wrapper">
                  <img
                    src={require("../Assets/img/profile.png")}
                    alt=""
                    className="profile"
                    data-aos="fade-down  "
                  />
                  <img
                    src={require("../Assets/img/quotes.png")}
                    alt=""
                    className="vector"
                    data-aos="fade-down  "
                  />

                  <div className="testimonials-content" data-aos="fade-zoom-in">
                    <p>
                      "Very happy with the M&M Building Maintenance. Highly
                      recommend them for small offices. Reliable, honest and
                      quality work. You can reach them when you need them. Apart
                      from cleaning they take care of other small maintenance
                      issues - great help for small businesses."
                    </p>
                    <h4>Sanjay J</h4>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="pad100 cleaning-services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 text-center">
              <h3 data-aos="fade-down">
                We'll clean your space weekly, every two weeks, or every three
                weeks. All our plans include low-cost or free err and running
                services.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div
                className="stats-box"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <h2>
                  <CountUp end={20} enableScrollSpy />
                  k+
                </h2>
                <h4>Cleanings</h4>
                <p>
                  Transforming spaces with meticulous care, we redefine
                  cleanliness.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className="stats-box"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <h2>
                  <CountUp end={10} enableScrollSpy />k
                </h2>
                <h4>Happy Clients</h4>
                <p>
                  Our success is measured by the smiles of our delighted
                  clients.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className="stats-box"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <h2>
                  <CountUp end={100} enableScrollSpy />%
                </h2>
                <h4>Client Satisfaction</h4>
                <p>
                  Dedicated to exceeding expectations, our commitment is your
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promotion-section pad100 text-center bggreen">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="whitebox">
                <h2 data-aos="fade-down">
                  Ready to create a positive and professional image for your
                  business?
                </h2>
                <p data-aos="fade-up">
                  Don't wait any longer to make a positive change. Contact us
                  today to learn more about how our janitorial maintenance
                  services can benefit your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </>
  );
};

export default Home;
