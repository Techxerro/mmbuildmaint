import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './Privacy.css';
import ContactSection from "./Contactsection";

const PrivacyPolicy = ()=>{
    return(
        <>
        <Header/>
        <section className="thumbnail privacy-policy d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 data-aos="fade-down">Privacy Policy</h2>                       
                    </div>
                </div>
            </div>
        </section>
        <section style={{padding:'80px 0',background:'#FEF5CC'}}>
            <div className="container">
                <div className="row">
                    <dov className="col-12 text-center">
                        <h2>Terms Of Services</h2>
                        <p>Our privacy policy is dedicated to safeguarding your personal information with unwavering commitment and stringent security measures</p>
                    </dov>
                </div>
            </div>
        </section>
        <section className="privacy-content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>Thank you for choosing M&M cleaning services! We are committed to maintaining the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide when using our website or services.</p>
                        <p><b>Information We Collect:</b></p>
                        <ol>
                            <li><b>Personal Information:</b> When you use our services or contact us, we may collect personal information such as your name, address, email, and phone number.</li>
                            <li><b>Payment Information:</b> If you make payments through our website, we may collect payment details such as credit card information, billing address, and transaction details.</li>
                            <li><b>Usage Information:</b> We may collect information about how you interact with our website, including IP addresses, browser type, pages visited, and other usage data.</li>
                        </ol>
                        <p>
                            <b>Information Sharing:</b>
                            <br />
                            We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share your information with trusted third parties who assist us in operating our website, conducting business, or servicing you, as long as they agree to keep this information confidential.
                        </p>
                        <p>
                            <b>Data Security: </b>
                            <br />
                            We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                        </p>
                        <p>
                            <b>Your Choices:</b>
                            <br />
                            You have the right to access, correct, or delete your personal information. If you have any concerns about the information we hold, please contact us.
                        </p>
                        <p>
                            <b>Changes to This Privacy Policy:</b>
                            <br />
                            We reserve the right to update this Privacy Policy periodically. Please review this page for any changes.
                        </p>
                        <p>
                        By using our website or services, you consent to the terms outlined in this Privacy Policy. <br />
                        If you have any questions or concerns, please contact us at  <b>info@mmbuildmaint.com</b>. <br />
                        Thank you for trusting M&M Cleaning Services with your cleaning needs!
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <ContactSection/>
        <Footer/>
        </>
    )
}
export default PrivacyPolicy;