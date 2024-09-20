import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <>
      <header>
        <section className="top-header" data-aos="fade-down">
          <div className="container ">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 social-icon">
                <a
                  href="https://www.instagram.com/mmbuildmaint/"
                  className="insta"
                  target="_blank"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_14_63)">
                      <path
                        d="M9.49992 1.5C11.6509 1.5 11.9193 1.5075 12.7632 1.545C13.6063 1.5825 14.1803 1.70775 14.6853 1.89375C15.2078 2.08425 15.648 2.34225 16.0882 2.7585C16.4907 3.13342 16.8022 3.58694 17.001 4.0875C17.1965 4.56525 17.3295 5.10975 17.3691 5.9085C17.4063 6.708 17.4166 6.96225 17.4166 9C17.4166 11.0378 17.4087 11.292 17.3691 12.0915C17.3295 12.8903 17.1965 13.434 17.001 13.9125C16.8028 14.4133 16.4912 14.867 16.0882 15.2415C15.6923 15.6227 15.2136 15.9178 14.6853 16.1063C14.181 16.2915 13.6063 16.4175 12.7632 16.455C11.9193 16.4903 11.6509 16.5 9.49992 16.5C7.34896 16.5 7.08059 16.4925 6.23667 16.455C5.39354 16.4175 4.81959 16.2915 4.3145 16.1063C3.78593 15.9184 3.30713 15.6232 2.91167 15.2415C2.50903 14.8666 2.19753 14.4131 1.99888 13.9125C1.80254 13.4347 1.67034 12.8903 1.63075 12.0915C1.59354 11.292 1.58325 11.0378 1.58325 9C1.58325 6.96225 1.59117 6.708 1.63075 5.9085C1.67034 5.109 1.80254 4.566 1.99888 4.0875C2.19698 3.58663 2.50855 3.13299 2.91167 2.7585C3.30724 2.37692 3.78601 2.0818 4.3145 1.89375C4.81959 1.70775 5.39275 1.5825 6.23667 1.545C7.08059 1.50975 7.34896 1.5 9.49992 1.5ZM9.49992 5.25C8.4501 5.25 7.44329 5.64509 6.70095 6.34835C5.95862 7.05161 5.54159 8.00544 5.54158 9C5.54159 9.99456 5.95862 10.9484 6.70095 11.6517C7.44329 12.3549 8.4501 12.75 9.49992 12.75C10.5497 12.75 11.5566 12.3549 12.2989 11.6517C13.0412 10.9484 13.4583 9.99456 13.4583 9C13.4583 8.00544 13.0412 7.05161 12.2989 6.34835C11.5566 5.64509 10.5497 5.25 9.49992 5.25ZM14.6458 5.0625C14.6458 4.81386 14.5415 4.5754 14.3559 4.39959C14.1703 4.22377 13.9186 4.125 13.6562 4.125C13.3937 4.125 13.142 4.22377 12.9564 4.39959C12.7708 4.5754 12.6666 4.81386 12.6666 5.0625C12.6666 5.31114 12.7708 5.5496 12.9564 5.72541C13.142 5.90123 13.3937 6 13.6562 6C13.9186 6 14.1703 5.90123 14.3559 5.72541C14.5415 5.5496 14.6458 5.31114 14.6458 5.0625ZM9.49992 6.75C10.1298 6.75 10.7339 6.98705 11.1793 7.40901C11.6247 7.83097 11.8749 8.40326 11.8749 9C11.8749 9.59674 11.6247 10.169 11.1793 10.591C10.7339 11.0129 10.1298 11.25 9.49992 11.25C8.87003 11.25 8.26594 11.0129 7.82054 10.591C7.37514 10.169 7.12492 9.59674 7.12492 9C7.12492 8.40326 7.37514 7.83097 7.82054 7.40901C8.26594 6.98705 8.87003 6.75 9.49992 6.75Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_63">
                        <rect width="19" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/mmbuildmaint"
                  className="facebook"
                  target="_blank"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_14_66)">
                      <path
                        d="M11.0837 10.1251H13.0628L13.8545 7.12511H11.0837V5.62511C11.0837 4.85261 11.0837 4.12511 12.667 4.12511H13.8545V1.60511C13.5964 1.57286 12.6219 1.50011 11.5927 1.50011C9.44333 1.50011 7.91699 2.74286 7.91699 5.02511V7.12511H5.54199V10.1251H7.91699V16.5001H11.0837V10.1251Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_66">
                        <rect width="19" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                {/* <a href="https://www.tiktok.com/@mmbuildingmaint">
                                `    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.71089 13.702V1.77914C9.71089 0.796548 10.5074 0 11.49 0C12.2711 0 12.9431 0.520123 13.2711 1.22895C14.0644 2.94315 15.1691 3.85573 16.1674 4.29687C17.0896 4.70438 18.0023 5.51828 18.0023 6.5265C18.0023 7.40444 17.3302 8.01875 16.4935 7.75271C16.3665 7.71232 16.2357 7.6692 16.1024 7.62398C14.6409 7.12822 13.0618 8.16127 13.0618 9.70455V14.0912C13.0618 19.109 8.67984 20.3062 6.48884 20.2776C4.28353 20.4208 -0.101319 19.384 0.00178678 14.0912C0.0834404 9.89962 2.77504 8.14376 4.9442 7.57323C5.77537 7.35462 6.48884 8.05242 6.48884 8.91187C6.48884 9.87998 5.51444 10.6587 4.72174 11.2144C4.21792 11.5677 3.84294 12.0448 3.65344 12.3728C3.13791 13.6186 2.81141 16.265 5.62963 16.8837C8.16872 17.441 9.29433 15.6922 9.62854 14.471C9.69693 14.2212 9.71089 13.9611 9.71089 13.702Z" fill="black"/>
                                    </svg>                                        
                                </a> */}
                <a
                  href="https://twitter.com/mmbuildmaint"
                  className="twitter"
                  target="_blank"
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_14_60)">
                      <path
                        d="M17.5447 4.24195C16.9404 4.49522 16.2994 4.66155 15.6432 4.73545C16.3349 4.34352 16.8526 3.72671 17.0998 2.99994C16.4507 3.36594 15.739 3.62244 14.9972 3.76119C14.4989 3.25613 13.8384 2.92117 13.1185 2.80838C12.3986 2.6956 11.6594 2.81131 11.0161 3.13753C10.3727 3.46376 9.86114 3.98221 9.56088 4.61229C9.26062 5.24237 9.1885 5.94878 9.35574 6.6217C8.03929 6.55919 6.75142 6.23509 5.57576 5.67044C4.4001 5.1058 3.36293 4.31323 2.53158 3.3442C2.23731 3.82303 2.08267 4.36736 2.08349 4.92144C2.08349 6.00894 2.66774 6.9697 3.55599 7.5322C3.03034 7.51652 2.51625 7.38203 2.05658 7.13995V7.17894C2.05674 7.90322 2.32129 8.60516 2.80537 9.16574C3.28946 9.72632 3.96329 10.1111 4.71262 10.2547C4.22465 10.38 3.71299 10.3984 3.21637 10.3087C3.42764 10.9321 3.83942 11.4773 4.39405 11.868C4.94868 12.2587 5.61839 12.4753 6.30941 12.4874C5.62263 12.9984 4.83626 13.3762 3.99528 13.5991C3.15429 13.822 2.27518 13.8856 1.4082 13.7864C2.92163 14.7085 4.6834 15.198 6.48279 15.1964C12.5731 15.1964 15.9036 10.4167 15.9036 6.27145C15.9036 6.13645 15.8997 5.99994 15.8933 5.86645C16.5416 5.42257 17.1011 4.87271 17.5455 4.24269L17.5447 4.24195Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_60">
                        <rect width="19" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 info align-items-center">
                <span>
                  <a href="mailto:info@mmbuildmaint.com">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16.5C11.2252 16.5 10.4503 16.2458 9.78938 15.7308L0 8.11875V18.75C0 19.9922 1.00734 21 2.25 21H21.75C22.9927 21 24 19.9927 24 18.75V8.11875L14.2125 15.7359C13.5516 16.2469 12.7734 16.5 12 16.5ZM0.763594 6.81094L10.7105 14.55C11.4694 15.1406 12.5325 15.1406 13.2914 14.55L23.2383 6.81094C23.6766 6.43594 24 5.85938 24 5.25C24 4.00734 22.9922 3 21.75 3H2.25C1.00734 3 0 4.00734 0 5.25C0 5.85938 0.281719 6.43594 0.763594 6.81094Z"
                        fill="#fff000"
                      />
                    </svg>
                    info@mmbuildmaint.com
                  </a>
                </span>
                <span style={{ display: "flex" }}>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 16.5667C14.6 16.9333 14.1333 17.1667 13.6 17.2667C13.5 17.3 13.3667 17.3 13.2667 17.3C13.2333 17.3 13.1667 17.3 13.0667 17.3H12.9C9.76666 17.4 6.73332 16.2667 4.36666 14.0333C1.73332 11.5667 0.166659 7.99999 0.0333252 4.26666C0.0333252 4.16666 0.0333252 4.06666 0.0333252 3.99999C0.0333252 3.96666 0.0333252 3.93332 0.0333252 3.89999C0.0333252 3.79999 0.0333252 3.69999 0.0333252 3.56666V3.53332C0.133325 1.93332 1.33333 0.69999 2.79999 0.666656C2.99999 0.666656 3.19999 0.666657 3.36666 0.69999C3.63332 0.766657 3.89999 0.866656 4.16666 0.99999L4.99999 5.86666C4.56666 6.39999 3.96666 6.76666 3.33332 6.86666C3.33332 6.86666 3.33333 6.86666 3.29999 6.86666C3.29999 6.86666 3.29999 6.86666 3.26666 6.86666C3.26666 6.86666 3.23333 6.86666 3.23333 6.89999C3.19999 6.89999 3.19999 6.93332 3.16666 6.93332C3.13332 6.93332 3.13333 6.96666 3.13333 6.96666L3.09999 6.99999C3.09999 7.03332 3.06666 7.03332 3.06666 7.06666C3.06666 7.09999 3.06666 7.09999 3.03332 7.13332C3.03332 7.16666 3.03332 7.16666 3.03332 7.19999V7.23332C3.03332 7.23332 3.03332 7.23332 3.03332 7.26666C3.03332 7.26666 3.03332 7.26666 3.03332 7.29999C4.13332 10.6667 6.66666 13.2333 9.86666 14.1667H9.89999C9.89999 14.1667 9.89999 14.1667 9.93332 14.1667H9.96666C9.99999 14.1667 10.0333 14.1667 10.0667 14.1333C10.0667 14.1333 10.1 14.1333 10.1 14.1C10.1333 14.1 10.1333 14.0667 10.1667 14.0667L10.2 14.0333C10.2 14 10.2333 14 10.2333 13.9667C10.2333 13.9667 10.2333 13.9333 10.2667 13.9333V13.9V13.8667V13.8333C10.3333 13.1333 10.6333 12.4667 11.1 11.9333L15.6 12.5667C15.7333 12.8 15.8333 13.0667 15.9 13.3333V13.3667C15.9333 13.5 15.9667 13.6667 15.9667 13.8C15.9667 13.8667 15.9667 13.9333 15.9667 14C16.0333 15.0667 15.6333 15.9667 15 16.5667Z"
                      fill="#FCC93A"
                    />
                  </svg>
                  <a href="tel:408-310-7466">(408)-310-7466</a>
                  &nbsp; | &nbsp;
                  <a href="tel:408-762-9279">(408)-762-9279</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <a href="/">
                  <img
                    src={require("../../Assets/img/logo.png")}
                    alt=""
                    className="logo"
                  />
                </a>
              </div>

              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 d-flex align-items-center justify-content-end">
                <ul className="menu">
                  <li className="menuList">
                    <a href="/">Home</a>
                  </li>
                  <li className="menuList">
                    <a href="/about">About Us</a>
                  </li>
                  <li className="menuList">
                    <a href="/Why-choose-us">Why Choose Us</a>
                  </li>
                  <li className="openMenu menuList">
                    <a href="/services">Service</a>
                    <div className="megaMenu">
                      <div className="megamenu-inner d-flex">
                        {/* <img src={require('../../Assets/img/megamenuimg.jpg')} alt="" /> */}
                        <div
                          className="d-flex"
                          style={{ paddingRight: "15px" }}
                        >
                          <ul>
                            <li>
                              <a href="/services/toilet-cleaning">
                                <img
                                  src={require("../../Assets/img/toilet-cleaning.png")}
                                  alt="Toilet Cleaning"
                                />
                                Toilet cleaning
                              </a>
                            </li>
                            <li>
                              <a href="/services/commercial-window-cleaning">
                                <img
                                  src={require("../../Assets/img/window-cleaning.png")}
                                  alt="Commercial window cleaning"
                                />
                                Commercial window cleaning
                              </a>
                            </li>
                            <li>
                              <a href="/services/porter-service">
                                <img
                                  src={require("../../Assets/img/poster-service.png")}
                                  alt="Porter services"
                                />
                                Porter services
                              </a>
                            </li>
                            <li>
                              <a href="/services/commercial-carpet-cleaning">
                                <img
                                  src={require("../../Assets/img/carpet-cleaning.png")}
                                  alt="Commercial carpet cleaning"
                                />
                                Commercial carpet cleaning
                              </a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="/services/pressure-washing">
                                <img
                                  src={require("../../Assets/img/pressure-washing.png")}
                                  alt="Pressure washing"
                                />
                                Pressure washing
                              </a>
                            </li>
                            <li>
                              <a href="/services/floor-cleaning">
                                <img
                                  src={require("../../Assets/img/floor-cleaning.png")}
                                  alt="Floor cleaning"
                                />
                                Floor cleaning
                              </a>
                            </li>
                            <li>
                              <a href="/services/office-cleaning">
                                <img
                                  src={require("../../Assets/img/commercial-icon.png")}
                                  alt="Office Cleaning"
                                />
                                Office Cleaning
                              </a>
                            </li>
                            <li>
                              <a href="/services/medical-cleaning">
                                <img
                                  src={require("../../Assets/img/medical-icon.png")}
                                  alt="Medical Cleaning"
                                />
                                Medical Cleaning
                              </a>
                            </li>
                          </ul>
                        </div>

                        <ul className="abtintro">
                          <li>
                            <div>8+ Years</div>
                            <div>Experience</div>
                          </li>
                          <li>
                            <div>5-Star</div>
                            <div> Rated Service</div>
                          </li>
                          <li>
                            <div>1000+ </div>
                            <div>Satified Customers</div>
                          </li>
                          <li>
                            <div>160+ </div>
                            <div>Trained Staff</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="menuList">
                    <a href="/contact-us">Contact</a>
                  </li>
                  <li>
                    <button>
                      <a href="#getintouch">Get in touch</a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="main-header-mobile">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src={require("../../Assets/img/logo.png")}
                  alt=""
                  className="logo"
                />
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <svg
                  width="36"
                  height="19"
                  viewBox="0 0 36 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setopenMenu(!openMenu)}
                >
                  <path
                    d="M1.98633 1.5H34.0056"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.99219 17H34.0115"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.99219 8.63495H34.0115"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </header>
      <div
        className="mobilemenu"
        style={{ display: openMenu ? "block" : "none" }}
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setopenMenu(!openMenu)}
        >
          <path
            d="M2 2L24.6411 24.6411"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2.68115 25.3206L25.3222 2.67948"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>

        <img
          src={require("../../Assets/img/logo.png")}
          alt=""
          width={"90px"}
          style={{ paddingBottom: "10px" }}
        />

        <br />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why-choose-us">Why Choose Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li>
            <a href="mailto:info@mmbuildmaint.com">Get a Quotes</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
