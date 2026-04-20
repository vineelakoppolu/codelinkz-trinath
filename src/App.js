import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PricingContactSection from "./components/pricingContact";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Collaboration from "./pages/Collaboration";
import CustomerSoftware from "./pages/ALL-Service/Customer-Software";
import MobileApp from "./pages/ALL-Service/Mobile-App";
import WebApp from "./pages/ALL-Service/Web-App";
import AIMachineLearing from "./pages/ALL-Service/AI-MachineLearning";
import CloudConsulting from "./pages/ALL-Service/Cloud-Consulting";
import UIUXDesign from "./pages/ALL-Service/UI-Design";
import EnterpriseSoftware from "./pages/ALL-Service/Enterprise-Software";
import SaasSolutions from "./pages/ALL-Service/Saas-Solutions";
import Frontend from "./pages/Technologies/Frontend";
import Backend from "./pages/Technologies/Backend";
import Mobile from "./pages/Technologies/Mobile";
import Cloud from "./pages/Technologies/Cloud";
import Devops from "./pages/Technologies/Devops";
import SkygetProduct from "./pages/SkygetProduct";
import JrTekCEOProduct from "./pages/JrTekCEOProduct";
import TrackLinkzProduct from "./pages/TrackLinkzProduct";
import SocialLinkzProduct from "./pages/SocialLinkzProduct";
import HelloDoctorzProduct from "./pages/HelloDoctorzProduct";
import Industries from "./pages/Industries";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/common/scrollTop";
import HrlinkzProduct from "./pages/Hrlinkz";
import WhatsAppButton from "./components/WhatsAppButton";

function AppContent() {
  const location = useLocation();

  // Hide the PricingContactSection on /contact page
  const hidePricingSection = location.pathname === "/contact";
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/services/software" element={<CustomerSoftware />} />
        <Route path="/services/mobileApp" element={<MobileApp />} />
        <Route path="/services/webApp" element={<WebApp />} />
        <Route
          path="/services/aiMachineLearning"
          element={<AIMachineLearing />}
        />
        <Route path="/services/cloudConsulting" element={<CloudConsulting />} />
        <Route path="/services/uiUXDesign" element={<UIUXDesign />} />
        <Route
          path="/services/enterpriseSoftware"
          element={<EnterpriseSoftware />}
        />
        <Route path="/services/saasSolutions" element={<SaasSolutions />} />
        <Route path="/technologies/frontend" element={<Frontend />} />
        <Route path="/technologies/backend" element={<Backend />} />
        <Route path="/technologies/mobile" element={<Mobile />} />
        <Route path="/technologies/cloud" element={<Cloud />} />
        <Route path="/technologies/devops" element={<Devops />} />
        <Route path="/products/skyget" element={<SkygetProduct />} />
        <Route path="/products/jrtekceo" element={<JrTekCEOProduct />} />
        <Route path="/products/hrlinkz" element={<HrlinkzProduct />} />
        <Route path="/products/tracklinkz" element={<TrackLinkzProduct />} />
        <Route path="/products/sociallinkz" element={<SocialLinkzProduct />} />
        <Route
          path="/products/hellodoctorz"
          element={<HelloDoctorzProduct />}
        />
        <Route path="/industries" element={<Industries />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {!hidePricingSection && <PricingContactSection />}
      <Footer />
      <Toaster />
      <WhatsAppButton />
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
export default App;
