import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Company', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-blue-100/30 shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-cyan rounded-lg flex items-center justify-center shadow-blue-glow">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            <span className="font-800 text-lg tracking-tight text-primary hidden sm:inline">Codelink</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-600 text-text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="btn-base btn-glass px-5 py-2 rounded-full text-sm"
            >
              Sign in
            </a>
            <a
              href="#"
              className="btn-base btn-primary px-5 py-2 rounded-full text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-blue-100/30 py-4 px-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block py-3 text-sm font-600 text-text-secondary hover:text-primary">
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2 border-t border-blue-100/30 mt-4">
            <a href="#" className="btn-base btn-glass px-5 py-2.5 rounded-full text-sm text-center">
              Sign in
            </a>
            <a href="#" className="btn-base btn-primary px-5 py-2.5 rounded-full text-sm text-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
