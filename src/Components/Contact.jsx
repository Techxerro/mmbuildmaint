import React, { useRef } from "react";
import "./contact.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_t4nb85n",
        "template_b67h43c",
        form.current,
        "4JRBoKphp9jEM56V7"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your mail has been sent successfully");

          window.location.reload(true);

          //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Header />

      <section className="contact thumbnail d-flex align-items-center ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 data-aos="fade-down">Contact Us</h2>
              <p data-aos="fade-up">
                We invite you to choose M&M Cleaning Services for all your
                cleaning needs and experience the difference we can make in
                maintaining a clean and inviting environment.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
              <div className="value-box" data-aos="fade-down">
                <svg
                  width="24"
                  height="32"
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9638 12.3451C23.9638 5.76374 18.6638 0.463745 12.0825 0.463745C5.50117 0.463745 0.201172 5.76374 0.201172 12.3451C0.201172 18.9264 12.0825 31.2154 12.0825 31.2154C12.0825 31.2154 23.9638 18.9264 23.9638 12.3451ZM6.54952 12.1121C6.54952 9.08353 9.05392 6.57913 12.0825 6.57913C15.1111 6.57913 17.6155 9.02528 17.6155 12.1121C17.6155 15.1407 15.1693 17.6451 12.0825 17.6451C9.05392 17.6451 6.54952 15.1407 6.54952 12.1121Z"
                    fill="black"
                  />
                </svg>

                <div>
                  <h3>Location</h3>
                  <p>
                    {/* <a href="https://www.google.com/maps/search/191+Integer+Road,+Unit+4+Avalon,+Los+Angeles/@33.8140348,-118.2665361,17z/data=!3m1!4b1?hl=en&entry=ttu" style={{color:"#000"}}> */}
                    Sunny Vale, CA <br /> California, USA
                    {/* </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
              <div className="value-box" data-aos="fade-down">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_85_388)">
                    <path
                      d="M9.9375 16.1925C12.0975 20.4375 15.57 23.91 19.8225 26.07L23.1225 22.7625C23.535 22.35 24.1275 22.23 24.645 22.395C26.325 22.95 28.1325 23.25 30 23.25C30.8325 23.25 31.5 23.9175 31.5 24.75V30C31.5 30.8325 30.8325 31.5 30 31.5C15.915 31.5 4.5 20.085 4.5 6C4.5 5.1675 5.175 4.5 6 4.5H11.25C12.0825 4.5 12.75 5.1675 12.75 6C12.75 7.8675 13.05 9.675 13.605 11.355C13.77 11.8725 13.65 12.465 13.2375 12.8775L9.9375 16.1925Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_85_388">
                      <rect width="36" height="36" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div>
                  <h3>Call us at</h3>
                  <p>
                    Phone <br />
                    <a href="tel:4803107466" style={{ color: "#000" }}>
                      (408) 310-7466
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
              <div className="value-box" data-aos="fade-down">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3H4C1.8 3 0 4.8 0 7V17C0 19.2 1.8 21 4 21H20C22.2 21 24 19.2 24 17V7C24 4.8 22.2 3 20 3ZM21.6 8.8L13.7 14.1C13.2 14.4 12.6 14.6 12 14.6C11.4 14.6 10.8 14.4 10.3 14.1L2.4 8.8C2 8.5 1.9 7.9 2.2 7.4C2.5 7 3.1 6.9 3.6 7.2L11.5 12.5C11.8 12.7 12.3 12.7 12.6 12.5L20.5 7.2C21 6.9 21.6 7 21.9 7.5C22.1 7.9 22 8.5 21.6 8.8Z"
                    fill="black"
                  />
                </svg>

                <div>
                  <h3>Mail</h3>
                  <p>
                    Email ID <br />
                    <a
                      href="mailto:info@mmbuildmaint.com"
                      style={{ color: "#000" }}
                    >
                      info@mmbuildmaint.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h3>Let's Talk</h3>
              <p>
                Contact us today for a free consultation, and let our team
                tailor a <br />
                cleaning plan that suits your unique requirements.{" "}
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="d-flex" style={{ gap: "20px" }}>
                  <label>
                    <input type="text" name="from_name" placeholder="Name" />
                  </label>
                  <label>
                    <input type="email" name="email" placeholder="Email" />
                  </label>
                </div>

                <div className="d-flex" style={{ gap: "20px" }}>
                  <label>
                    <input type="text" name="phone" placeholder="Phone no." />
                  </label>
                  <label>
                    <input type="text" name="subject" placeholder="Subject" />
                  </label>
                </div>
                <label>
                  <textarea
                    name="message"
                    rows={"4"}
                    placeholder="Your Message"
                  />
                </label>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
