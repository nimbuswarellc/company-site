import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/Company/About';
import Team from './pages/Company/Team';
import Mission from './pages/Company/Mission';
import WhyChooseUs from './pages/Company/WhyChooseUs';
import WebDevelopment from './pages/Services/WebDevelopment';
import MobileApps from './pages/Services/MobileApps';
import CloudSolutions from './pages/Services/CloudSolutions';
import ITConsulting from './pages/Services/ITConsulting';
import DigitalTransformation from './pages/Services/DigitalTransformation';
import Cybersecurity from './pages/Services/Cybersecurity';
import Healthcare from './pages/Industries/Healthcare';
import Finance from './pages/Industries/Finance';
import Retail from './pages/Industries/Retail';
import Manufacturing from './pages/Industries/Manufacturing';
import Education from './pages/Industries/Education';
import OpenPositions from './pages/Career/OpenPositions';
import LifeAtNimbusWare from './pages/Career/LifeAtNimbusWare';
import Benefits from './pages/Career/Benefits';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company/about" element={<About />} />
            <Route path="/company/team" element={<Team />} />
            <Route path="/company/mission" element={<Mission />} />
            <Route path="/company/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/finance" element={<Finance />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/career/open-positions" element={<OpenPositions />} />
            <Route path="/career/life-at-nimbusware" element={<LifeAtNimbusWare />} />
            <Route path="/career/benefits" element={<Benefits />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;