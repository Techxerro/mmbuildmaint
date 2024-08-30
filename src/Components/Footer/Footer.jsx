import React from "react";
import '../Footer/Footer.css';

const Footer = () =>{
    return(
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <img src={require('../../Assets/img/logo.png')} alt="" width='50%' id="logo"/>
                            <p style={{color:'#00000070'}}>Don't wait any longer to make a positive change.</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="footer-menu">
                                <h3 className='footertitle'>Navigation</h3>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/why-choose-us">Why Choose us</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/contact-us">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="footerInfo">
                                <h3 className='footertitle'>Get In Touch</h3>
                                
                                <div className="footerInfo-inner">
                                    <span>
                                        Phone  
                                        <br/>
                                        <a href="tel:408-310-7466">408 310-7466</a>     
                                    </span>
                                </div>  
                                <div className="footerInfo-inner">
                                    <span>
                                        Email Address
                                        <br/>
                                        <a href="mailto:info@mmbuiltmaint.com">info@mmbuiltmaint.com</a>
                                    </span>
                                </div>           
                             </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm--3">
                            <div className="footer-social-media">
                                <h3 className='footertitle'>Social Media</h3>
                                <ul>
                                    <li>
                                        <a href="https://www.instagram.com/mmbuildmaint/" target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_22_21)">
                                            <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="#FACE8D"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_22_21">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/mmbuildmaint" target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_22_24)">
                                            <path d="M14.0003 13.5H16.5003L17.5003 9.5H14.0003V7.5C14.0003 6.47 14.0003 5.5 16.0003 5.5H17.5003V2.14C17.1743 2.097 15.9433 2 14.6433 2C11.9283 2 10.0003 3.657 10.0003 6.7V9.5H7.00031V13.5H10.0003V22H14.0003V13.5Z" fill="black"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_22_24">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="https://www.tiktok.com/@mmbuildingmaint">
                                        `    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.71089 13.702V1.77914C9.71089 0.796548 10.5074 0 11.49 0C12.2711 0 12.9431 0.520123 13.2711 1.22895C14.0644 2.94315 15.1691 3.85573 16.1674 4.29687C17.0896 4.70438 18.0023 5.51828 18.0023 6.5265C18.0023 7.40444 17.3302 8.01875 16.4935 7.75271C16.3665 7.71232 16.2357 7.6692 16.1024 7.62398C14.6409 7.12822 13.0618 8.16127 13.0618 9.70455V14.0912C13.0618 19.109 8.67984 20.3062 6.48884 20.2776C4.28353 20.4208 -0.101319 19.384 0.00178678 14.0912C0.0834404 9.89962 2.77504 8.14376 4.9442 7.57323C5.77537 7.35462 6.48884 8.05242 6.48884 8.91187C6.48884 9.87998 5.51444 10.6587 4.72174 11.2144C4.21792 11.5677 3.84294 12.0448 3.65344 12.3728C3.13791 13.6186 2.81141 16.265 5.62963 16.8837C8.16872 17.441 9.29433 15.6922 9.62854 14.471C9.69693 14.2212 9.71089 13.9611 9.71089 13.702Z" fill="black"/>
                                            </svg>                                        
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="https://twitter.com/mmbuildmaint" target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_22_18)">
                                            <path d="M22.1618 5.65593C21.3984 5.99362 20.5888 6.2154 19.7598 6.31393C20.6336 5.79136 21.2875 4.96894 21.5998 3.99993C20.7798 4.48793 19.8808 4.82993 18.9438 5.01493C18.3144 4.34151 17.4802 3.89489 16.5708 3.74451C15.6614 3.59413 14.7277 3.74842 13.9151 4.18338C13.1024 4.61834 12.4562 5.30961 12.0769 6.14972C11.6976 6.98983 11.6066 7.93171 11.8178 8.82893C10.1549 8.74558 8.52814 8.31345 7.0431 7.56059C5.55805 6.80773 4.24794 5.75097 3.19781 4.45893C2.8261 5.09738 2.63076 5.82315 2.63181 6.56193C2.63181 8.01193 3.36981 9.29293 4.49181 10.0429C3.82782 10.022 3.17844 9.84271 2.59781 9.51993V9.57193C2.59801 10.5376 2.93218 11.4735 3.54366 12.221C4.15513 12.9684 5.00629 13.4814 5.95281 13.6729C5.33642 13.84 4.69012 13.8646 4.06281 13.7449C4.32968 14.5762 4.84982 15.3031 5.5504 15.824C6.25099 16.3449 7.09694 16.6337 7.96981 16.6499C7.10229 17.3313 6.10899 17.8349 5.04669 18.1321C3.98439 18.4293 2.87394 18.5142 1.77881 18.3819C3.69051 19.6114 5.9159 20.264 8.18881 20.2619C15.8818 20.2619 20.0888 13.8889 20.0888 8.36193C20.0888 8.18193 20.0838 7.99993 20.0758 7.82193C20.8947 7.23009 21.6014 6.49695 22.1628 5.65693L22.1618 5.65593Z" fill="black"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_22_18">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
                        <ul>
                            <li><span>ALL RIGHT RESERVED. Copyright @ 2024</span></li>
                            <li>
                                <span>
                                    <a href="/privacy-policy">
                                        Privacy Policy
                                    </a>
                                </span>
                            </li>
                        </ul>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end footer-weblink">                        
                            <span>Powered by <a href="https://techxerro.com" target="_blank">Techxerro</a></span>                        
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
