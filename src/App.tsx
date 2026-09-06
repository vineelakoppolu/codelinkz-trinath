import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import { ThemeToggle } from './components/ui/ThemeToggle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Home.tsx';
import SolutionsPage from './pages/Solutions.tsx';
import ServicesPage from './pages/Services.tsx';
import ProductsPage from './pages/Products.tsx';
import TechnologiesPage from './pages/Technologies.tsx';
import PricingPage from './pages/Pricing.tsx';
import PartnersPage from './pages/Partners.tsx';
import CompanyPage from './pages/Company.tsx';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-300">
          <Navbar />
          <ThemeToggle />
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
    </ThemeProvider>
  );
}

export default App;

