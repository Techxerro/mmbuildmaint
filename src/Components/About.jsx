import React from "react";
import './About.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ContactSection from "./Contactsection";

const About = () => {
    return(
        <>
        <Header/>
        <section className="aboutus thumbnail d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 data-aos="fade-down">About Us</h2>
                        <p data-aos="fade-up">We've Got You Covered from Floor to Ceiling</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="ourstory">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <img src={require('../Assets/img/companyoverview.png')} alt="" data-aos="fade-up" data-aos-delay="0" width="90%"/>
                    </div>
                    <div className="col-sm-5 col-lg-6 col-md-6 col-sm-6 col-12 story-content">
                        <div>
                            <h3 data-aos="fade-down"><b>Company Overview</b></h3>
                            <p data-aos="fade-up" data-aos-delay="1000">At M&M, we specialize in comprehensive commercial cleaning services catering to your business's needs. From toilet cleaning to commercial window cleaning, floor cleaning to pressure washing, commercial carpet cleaning to porter services, we offer a wide range of solutions to ensure a spotless environment for your employees and clients.</p>    
                            <button className="btnstyle2"><a href="/contact-us" style={{color:"#000"}}>Contact us</a></button>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </section>
        <section className="note">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <h3 data-aos="fade-up">Our mission</h3>
                        <br />
                        <p data-aos="fade-up">Our mission is to deliver unmatched quality and reliability in every cleaning service we provide. We understand the importance of immaculate cleanliness in projecting a positive image and creating a healthy work environment. Through our meticulous attention to detail and use of advanced cleaning techniques, we aim to exceed your expectations and elevate your workplace experience.</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style={{position:'relative'}}>
                        <img data-aos="fade-left" src={require('../Assets/img/mission.png')} alt="" width="76%"/>
                    </div>
                </div>
            </div>        
        </section>

        
        <div className="container our-value" >
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <h3><b>Our Value</b></h3>
                    <h3>Welcome fresh air and bye bye unclean stains</h3>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <p>At our cleaning service, we hold the core value of unwavering dedication to cleanliness, aiming to create spaces that not only meet but exceed our clients' expectations. We believe that a clean environment is the foundation for a healthy and productive lifestyle.</p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <p>Our commitment extends beyond surface cleaning; we prioritize attention to detail, utilizing eco-friendly products and advanced techniques to ensure a thorough and sustainable clean. </p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="value-box" data-aos="fade-down">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.7399 16.18C23.6467 16.0874 23.5361 16.0141 23.4146 15.9642C23.293 15.9144 23.1628 15.8889 23.0314 15.8894C22.9 15.8899 22.77 15.9162 22.6488 15.9669C22.5276 16.0176 22.4175 16.0917 22.3249 16.185C22.2324 16.2782 22.159 16.3888 22.1092 16.5103C22.0593 16.6319 22.0339 16.7621 22.0344 16.8935C22.0348 17.0249 22.0612 17.1549 22.1119 17.2761C22.1626 17.3973 22.2367 17.5074 22.3299 17.6C23.1761 18.4372 23.8478 19.4339 24.3061 20.5325C24.7644 21.6311 25.0002 22.8096 24.9999 24C24.9999 25.22 21.4899 27 15.9999 27C10.5099 27 6.99994 25.22 6.99994 24C6.99835 22.8175 7.22981 21.6463 7.68108 20.5533C8.13235 19.4603 8.79458 18.4669 9.62994 17.63C9.81619 17.4426 9.92073 17.1892 9.92073 16.925C9.92073 16.6608 9.81619 16.4073 9.62994 16.22C9.44258 16.0337 9.18913 15.9292 8.92494 15.9292C8.66075 15.9292 8.4073 16.0337 8.21994 16.22C7.19505 17.2391 6.38267 18.4516 5.82993 19.7871C5.27719 21.1226 4.99507 22.5546 4.99994 24C4.99994 27.25 10.6699 29 15.9999 29C21.3299 29 26.9999 27.25 26.9999 24C27.0038 22.5452 26.7174 21.1043 26.1577 19.7616C25.5979 18.4188 24.776 17.2012 23.7399 16.18Z" fill="black"/>
                            <path d="M16 17C17.3845 17 18.7378 16.5895 19.889 15.8203C21.0401 15.0511 21.9373 13.9579 22.4672 12.6788C22.997 11.3997 23.1356 9.99224 22.8655 8.63437C22.5954 7.2765 21.9287 6.02922 20.9497 5.05026C19.9708 4.07129 18.7235 3.4046 17.3656 3.13451C16.0078 2.86441 14.6003 3.00303 13.3212 3.53285C12.0421 4.06266 10.9489 4.95987 10.1797 6.11101C9.41054 7.26216 9 8.61553 9 10C9 11.8565 9.7375 13.637 11.0503 14.9497C12.363 16.2625 14.1435 17 16 17ZM16 5C16.9889 5 17.9556 5.29325 18.7779 5.84265C19.6001 6.39206 20.241 7.17296 20.6194 8.08659C20.9978 9.00022 21.0969 10.0055 20.9039 10.9755C20.711 11.9454 20.2348 12.8363 19.5355 13.5355C18.8363 14.2348 17.9454 14.711 16.9755 14.9039C16.0055 15.0969 15.0002 14.9978 14.0866 14.6194C13.173 14.241 12.3921 13.6001 11.8427 12.7779C11.2932 11.9556 11 10.9889 11 10C11 8.67392 11.5268 7.40215 12.4645 6.46447C13.4021 5.52679 14.6739 5 16 5Z" fill="black"/>
                        </svg>
                        <div>
                            <h3 data-aos="fade-down">Client Satisfaction</h3>
                            <p data-aos="fade-up">
                            We prioritize your satisfaction above all else. Our dedicated team goes the extra mile to understand your specific requirements and deliver personalized cleaning solutions that meet your expectations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="value-box" data-aos="fade-down">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.351 8.36087C23.6185 6.24307 21.2201 4.77427 18.5462 4.19369C18.466 4.17646 18.3831 4.1752 18.3024 4.18999C18.2216 4.20478 18.1446 4.23532 18.0757 4.27988C18.0068 4.32444 17.9473 4.38213 17.9006 4.44968C17.854 4.51722 17.8211 4.59329 17.8039 4.67353C17.7867 4.75378 17.7854 4.83664 17.8002 4.91737C17.815 4.9981 17.8455 5.07513 17.8901 5.14406C17.9347 5.21299 17.9924 5.27247 18.0599 5.3191C18.1274 5.36573 18.2035 5.3986 18.2838 5.41583C20.7017 5.93861 22.8677 7.27368 24.4212 9.19883C25.9748 11.124 26.8222 13.5231 26.8224 15.9969C26.8224 21.9644 21.9675 26.8193 16 26.8193C15.4199 26.8193 14.8407 26.7729 14.2679 26.6803L16.3942 22.77C17.4402 20.8068 18.6987 19.9313 20.4744 19.9313H21.8804C22.0462 19.9313 22.2052 19.8655 22.3224 19.7482C22.4396 19.631 22.5054 19.4721 22.5054 19.3063V18.1513C22.5079 17.6967 22.6867 17.2609 23.0042 16.9355C23.3216 16.6102 23.753 16.4208 24.2073 16.4072H25.4065C25.5723 16.4072 25.7312 16.3414 25.8484 16.2242C25.9656 16.107 26.0315 15.948 26.0315 15.7822C26.0315 15.6165 25.9656 15.4575 25.8484 15.3403C25.7312 15.2231 25.5723 15.1572 25.4065 15.1572H24.2002C24.1959 15.1572 24.1915 15.1573 24.1871 15.1573C23.404 15.1738 22.6585 15.4965 22.1104 16.0561C21.5624 16.6158 21.2554 17.368 21.2554 18.1513V18.6813H20.4744C18.2108 18.6813 16.5637 19.7938 15.2935 22.1776L12.9997 26.396C11.5676 25.9792 10.2365 25.2721 9.08923 24.3189C7.942 23.3656 7.00317 22.1865 6.33112 20.8549C8.14771 20.5944 9.88107 19.9235 11.3996 18.893C12.918 17.8624 14.1817 16.4994 15.0947 14.9074C16.0076 13.3155 16.5457 11.5364 16.6682 9.70532C16.7907 7.87425 16.4943 6.03935 15.8016 4.33996C15.7518 4.21852 15.6652 4.11578 15.5539 4.0463C15.4425 3.97682 15.3122 3.9441 15.1812 3.95279C13.275 4.08306 11.4269 4.66375 9.78871 5.64716C8.15054 6.63057 6.76908 7.98862 5.75782 9.60974C4.74657 11.2309 4.13438 13.0688 3.97155 14.9725C3.80872 16.8762 4.0999 18.7914 4.82117 20.5607C4.82805 20.5776 4.83583 20.594 4.84406 20.61C6.6597 24.9846 10.9763 28.0693 16 28.0693C22.6567 28.0693 28.0724 22.6537 28.0724 15.9969C28.0706 13.2143 27.1095 10.5174 25.351 8.36087ZM8.10852 8.59143C9.86934 6.70909 12.2465 5.52014 14.8088 5.2402C15.3302 6.69198 15.5353 8.2384 15.4106 9.77592C15.2858 11.3134 14.834 12.8065 14.0853 14.1552C13.3366 15.504 12.3085 16.6771 11.0696 17.5962C9.8307 18.5153 8.40975 19.1591 6.90188 19.4844C7.14471 18.1936 7.76531 16.8558 8.39057 15.7547C9.6725 13.4973 11.2723 11.697 11.2949 11.6717C11.4054 11.5481 11.4624 11.3858 11.4532 11.2203C11.4441 11.0547 11.3696 10.8996 11.246 10.7891C11.1225 10.6785 10.9602 10.6216 10.7946 10.6307C10.6291 10.6399 10.474 10.7144 10.3635 10.8379C9.2129 12.1648 8.19171 13.5985 7.31379 15.1195C6.45226 16.6333 5.9048 18.0056 5.67141 19.2366C5.0988 17.4053 5.02271 15.4549 5.4509 13.5846C5.87909 11.7142 6.7962 9.99117 8.10852 8.59143Z" fill="black"/>
                        </svg>

                        <div>
                            <h3 data-aos="fade-down">Unmatched Quality and Reliability</h3>
                            <p data-aos="fade-up">
                            Our attention to detail ensures that no corner is left untouched, leaving your workspace or office space gleaming with perfection.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div className="value-box" data-aos="fade-down">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_97_657)">
                            <path d="M20 8V10H26.5859L18 18.5859L13.707 14.293C13.6142 14.2001 13.504 14.1264 13.3827 14.0761C13.2613 14.0258 13.1313 14 13 14C12.8687 14 12.7387 14.0258 12.6173 14.0761C12.496 14.1264 12.3858 14.2001 12.293 14.293L2 24.5859L3.4141 26L13 16.4141L17.293 20.707C17.3858 20.7999 17.496 20.8736 17.6173 20.9239C17.7386 20.9742 17.8687 21 18 21C18.1313 21 18.2614 20.9742 18.3827 20.9239C18.504 20.8736 18.6142 20.7999 18.707 20.707L28 11.4141V18H30V8H20Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_97_657">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                        <div>
                            <h3 data-aos="fade-down">Comprehensive Solutions</h3>
                            <p data-aos="fade-up">
                            We offer a comprehensive range of cleaning services to address all your cleaning needs. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ContactSection/>

        <Footer/>
        </>
    )
}

export default About;