import CTA from "../components/CTA";
import Features from "../components/Features";
import Hero from "../components/Hero";
import MadeInIndia from "../components/MadeInIndia";
import Modules from "../components/Modules";
import Process from "../components/Process";
import TechStack from "../components/TechStack";
import Testimonials from "../components/Testimonials";
import TrustedBy from "../components/TrustedBy";
import WhyChooseUs from "../components/WhyChooseUs";
import Statistics from "../components/Statistics";
import Integrations from "../components/Integrations";
import Blog from "../components/Blog";
import PricingPreview from "../components/PricingPreview";
import FAQ from "../components/FAQ";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Modules />
      <WhyChooseUs />
      <Statistics />
      <TechStack />
      <Features />
      <Process />
      <Integrations />
      <PricingPreview />
      <Testimonials />
      <Blog />
      <FAQ />
      <MadeInIndia />
      <CTA />
    </div>
  );
}
