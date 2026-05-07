import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  Products: ['Restaurant OS', 'Healthcare', 'HRMS & Payroll', 'Legal', 'Revenue', 'Marketing'],
  Solutions: ['Enterprise', 'SMB', 'Franchises', 'Healthcare Chains', 'Law Firms', 'Startups'],
  Resources: ['Documentation', 'API Docs', 'Blog', 'Case Studies', 'Status', 'Support'],
  Company: ['About', 'Careers', 'Press', 'Partners', 'Contact', 'Legal'],
};

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-light to-accent-cyan rounded-lg" />
              <span className="font-800 text-lg">Codelink</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              Enterprise SaaS platform for restaurants, healthcare, HR, legal, revenue, and marketing operations.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@codelink.in
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bengaluru, India
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-700 text-sm mb-4 uppercase tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Codelink. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
