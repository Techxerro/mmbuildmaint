import React, {useRef} from "react";
import './ContactSection.css';
import emailjs from 'emailjs-com';

const ContactSection = () =>{    
    const form = useRef();
    const sendEmail = (event) =>{
        event.preventDefault();
        emailjs.sendForm('service_t4nb85n', 'template_x05p8j8', form.current, '4JRBoKphp9jEM56V7')
        .then((result) => {
            
            console.log(result.text);
            alert('Your mail has been sent successfully');
            
            window.location.reload(true);

            //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    
    } 
    return(
        <>
            <section className="contactsec" id="getintouch">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="title" data-aos="fade-down">
                                <h3>Book a trusted cleaner instantly below.</h3>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <form  ref={form} onSubmit={sendEmail}>
                                <div className="d-flex">
                                    <label>
                                        <input type="text" name="name" placeholder="Name" required/>
                                    </label>
                                    
                                    <label>
                                        <input type="email" name="email" placeholder="Email" required/>
                                    </label>
                                                               
                                </div>
                                <div className="d-flex">
                                    <label>
                                        <input type="tel" name="phone" placeholder="Phone" required/>
                                    </label> 
                                    <select name="services" required>
                                        <option selected>Select Services</option>
                                        <option value="Toilet Cleaning">Toilet Cleaning</option>
                                        <option value="Pressure Wash Cleaning">Pressure Wash Cleaning</option>
                                        <option value="Floor Cleaning">Floor Cleaning</option>
                                        <option value="Pressure washing">Pressure washing</option>
                                        <option value="Porter services">Porter services</option>
                                    </select>  
                                </div>
                                <div className="d-flex justify-content-center">
                                    <input type="submit" value="Get a Call"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection;