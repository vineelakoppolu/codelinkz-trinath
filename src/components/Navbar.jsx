import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/assets/WhiteLogo.jpeg"
                alt="ZOMANT Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">ZOMANT</span>
              <span className="text-xs text-gray-400">Solutions Pvt Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2 ${
                  isActive("/services") ? "text-blue-600" : ""
                }`}>
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Services
                  </Link>
                  <Link
                    to="/services/software"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Custom Software Development
                  </Link>
                  <Link
                    to="/services/mobileApp"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Mobile App Development
                  </Link>
                  <Link
                    to="/services/webApp"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Web Development
                  </Link>
                  <Link
                    to="/services/aiMachineLearning"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI & ML Solutions
                  </Link>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("products")}
                className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2 ${
                  isActive("/products") ? "text-blue-600" : ""
                }`}>
                <span className="font-medium">Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/products/skyget"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Skyget AI
                  </Link>
                  <Link
                    to="/products/jrtekceo"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    JrTekCEO
                  </Link>
                  <Link
                    to="/products/hrlinkz"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Hrlinkz
                  </Link>
                  <Link
                    to="/products/tracklinkz"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    TrackLinkz
                  </Link>
                  <Link
                    to="/products/sociallinkz"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    SocialLinkz
                  </Link>
                  <Link
                    to="/products/hellodoctorz"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    HelloDoctorz
                  </Link>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("technologies")}
                className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2 ${
                  isActive("/technologies") ? "text-blue-600" : ""
                }`}>
                <span className="font-medium">Technologies</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link
                    to="/technologies/frontend"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Frontend
                  </Link>
                  <Link
                    to="/technologies/backend"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Backend
                  </Link>
                  <Link
                    to="/technologies/mobile"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Mobile
                  </Link>
                  <Link
                    to="/technologies/cloud"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Cloud
                  </Link>
                  <Link
                    to="/technologies/devops"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    DevOps
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/industries"
              className={`text-gray-700 hover:text-blue-600 font-medium ${
                isActive("/industries") ? "text-blue-600" : ""
              }`}>
              Industries
            </Link>

            <Link
              to="/about"
              className={`text-gray-700 hover:text-blue-600 font-medium ${
                isActive("/about") ? "text-blue-600" : ""
              }`}>
              About Us
            </Link>

            <Link
              to="/career"
              className={`text-gray-700 hover:text-blue-600 font-medium ${
                isActive("/career") ? "text-blue-600" : ""
              }`}>
              Career
            </Link>

            <Link
              to="/blog"
              className={`text-gray-700 hover:text-blue-600 font-medium ${
                isActive("/blog") ? "text-blue-600" : ""
              }`}>
              Blog
            </Link>

            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 font-medium ${
                isActive("/contact") ? "text-blue-600" : ""
              }`}>
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/services"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <div className="pl-4 space-y-2">
              <Link
                to="/services/software"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                Custom Software Development
              </Link>
              <Link
                to="/services/mobileApp"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                Mobile App Development
              </Link>
              <Link
                to="/services/webApp"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                Web Development
              </Link>
              <Link
                to="/services/aiMachineLearning"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                AI & ML Solutions
              </Link>
            </div>

            <Link
              to="/products"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <div className="pl-4 space-y-2">
              <Link
                to="/products/skyget"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                Skyget AI
              </Link>
              <Link
                to="/products/jrtekceo"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                JrTekCEO
              </Link>
              <Link
                to="/products/hrlinkz"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                HrLinkz
              </Link>
              <Link
                to="/products/tracklinkz"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                TrackLinkz
              </Link>
              <Link
                to="/products/sociallinkz"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                SocialLinkz
              </Link>
              <Link
                to="/products/hellodoctorz"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                HelloDoctorz
              </Link>
            </div>

            <Link
              to="/technologies"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              Technologies
            </Link>
            <div className="pl-4 space-y-2">
              <Link
                to="/technologies/frontend"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                Frontend
              </Link>
              <Link
                to="/technologies/backend"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                Backend
              </Link>
              <Link
                to="/technologies/mobile"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                Mobile
              </Link>
              <Link
                to="/technologies/cloud"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                Cloud
              </Link>
              <Link
                to="/technologies/devops"
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}>
                DevOps
              </Link>
            </div>

            <Link
              to="/industries"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              Industries
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link
              to="/career"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              Career
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
