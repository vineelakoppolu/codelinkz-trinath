import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MadeInIndia from "./components/MadeInIndia";
import Modules from "./components/Modules";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import TrustedBy from "./components/TrustedBy";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Modules />
      <WhyChooseUs />
      <TechStack />
      <Features />
      <Process />
      <Testimonials />
      <MadeInIndia />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
