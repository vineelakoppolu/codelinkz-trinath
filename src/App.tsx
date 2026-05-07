import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Home';
import SolutionsPage from './pages/Solutions';
import ServicesPage from './pages/Services';
import ProductsPage from './pages/Products';
import TechnologiesPage from './pages/Technologies';
import PricingPage from './pages/Pricing';
import PartnersPage from './pages/Partners';
import CompanyPage from './pages/Company';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

