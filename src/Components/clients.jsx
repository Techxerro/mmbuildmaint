import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ContactSection from "./Contactsection";
import './style.css';

const Clients = () => {
    return(
        <>
        <Header/>
           <section className="thumbnail d-flex justify-content-center align-items-center" style={{padding:'80px 0', background:'url(https://miro.medium.com/v2/resize:fit:1400/1*opn1wt7cJxF3a4KnqHItVw.jpeg)', position:'relative',backgroundSize:'cover', height:'500px', overflow:'hidden'}}>
                <div className="overlay" style={{background:'#000',height:'500px',width:'100%', position:'absolute', right:'0',top:'0', opacity:'0.3', zIndex:'0'}}> </div>
                <div className="container"  style={{position:'relative',  zIndex:'1'}}>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12  d-flex justify-content-center align-items-center">
                            <h2>Meet Our Clients</h2>
                        </div>
                    </div>
                </div>
           </section>

            <section>
                <div className="container clients">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <img src="https://static.wixstatic.com/media/6e00cd_97a120c2d716452793a56db8900843e2~mv2.png/v1/fill/w_769,h_769,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/note.png" alt=""  style={{width:'600px', height:'600px', objectFit:'cover'}}/>
                    </div>
                    <div className="col-lg-6 col-12 d-flex align-items-center">
                        <div>
                        <p>"I just wanted to say I don't know where you found the new cleaning crew or who referred them but they have been doing a STELLAR job. I have never seen the 
                            building this clean. Especially the 5th floor. Even the outside of the fridge is clean.. lol. It is appreciated especially in times like this."</p>
                        <p style={{fontSize:'20px',fontWeight:'bold'}}>- iHeartMedia Team</p>
                        </div>

                    </div>
                </div>
                </div>
            </section>
            
            <section> 
                <div className="container-fluid clients">
                <div className="row">
                    <div className="col-lg-1 col-12"/>
                    <div className="col-lg-5 col-12 d-flex align-items-center order-lg-1 order-2">
                        <div style={{padding:'30px 0'}}>
                            <h2>iHeartMedia</h2>
                            <h3> America's #1 Audio Company</h3>
                            <p>"This company is great! Reasonable rates, friendly service, fast, and quality work. I would highly recommend this service to anyone in need of office cleaning.
                            M&M Building Maintenance was selected in March 2020, as the primary janitorial service iHeartMedia's San Francisco five story office / studio building based on a combination of 
                            price, service and most importantly quality. Since they have started the management team has received zero complaints as they did with our prior service. The on air radio staff is not 
                            easily impressed and has been highly complementary of the extraordinary service provided directly by owners with over 40 years of experience Eric and Debbie."</p>
                            <p style={{fontSize:'16px',fontWeight:'400'}}>RAJ CHATTHA <br/>
                                Finance Director <br/>
                                iHeartMedia Markets Group - San Francisco</p>
                        </div>
                    </div>                    
                    <div className="col-lg-6 col-12 d-flex align-items-center  order-lg-2 order-1" style={{background:'#000'}}>
                        <img src="https://s24.q4cdn.com/216390268/files/design/iHM_stacked_logo.png" alt=""  style={{width:'100%', objectFit:'cover'}}/>
                    </div>
                    
                </div>
                </div>
            </section>
            <ContactSection/>
        <Footer/>
        </>
    )
}


export default  Clients;