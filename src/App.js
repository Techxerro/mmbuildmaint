import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import WhyChooseUs from "./Components/Whychooseus";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Clients from "./Components/clients";
import Commercialcleaning from "./Components/Services/Commercial-cleaning";
import Floorcleaning from "./Components/Services/Floorcleaning";
import Porterservice from "./Components/Services/Porterservice";
import Officecleaning from "./Components/Services/Officecleaning";
import Medicalcleaning from "./Components/Services/Medicalcleaning";
import Toiletcleaning from "./Components/Services/Toiletcleaning";
import PressureWashing from "./Components/Services/PressureWashing";
import Carpetcleaning from "./Components/Services/Carpetcleaning";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/commercial-window-cleaning"
            element={<Commercialcleaning />}
          />
          <Route path="/services/floor-cleaning" element={<Floorcleaning />} />
          <Route path="/services/porter-service" element={<Porterservice />} />
          <Route
            path="/services/office-cleaning"
            element={<Officecleaning />}
          />
          <Route
            path="/services/medical-cleaning"
            element={<Medicalcleaning />}
          />
          <Route
            path="/services/toilet-cleaning"
            element={<Toiletcleaning />}
          />
          <Route
            path="/services/pressure-washing"
            element={<PressureWashing />}
          />
          <Route
            path="/services/commercial-carpet-cleaning"
            element={<Carpetcleaning />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

AOS.init({
  duration: 1500,
});

export default App;
