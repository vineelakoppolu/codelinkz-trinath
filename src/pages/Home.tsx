import Hero from '../components/Hero';
import TrustMarquee from '../components/TrustMarquee';
import ITServices from '../components/ITServices';
import ProductsEcosystem from '../components/ProductsEcosystem';
import IndustriesWeServe from '../components/IndustriesWeServe';
import TechStacksWeUse from '../components/TechStacksWeUse';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustMarquee />
      <ProductsEcosystem />
      <ITServices />
   
      <IndustriesWeServe />
      <TechStacksWeUse />
    </div>
  );
}
