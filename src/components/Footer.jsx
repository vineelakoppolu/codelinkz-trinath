import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-blue-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/assets/BlackLogo.jpeg"
                  alt="ZOMANT Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">ZOMANT</span>
                <span className="text-xs text-gray-600">Solutions Pvt Ltd</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              AI-powered full-stack mobile & web app innovation transforming
              businesses through digital excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products/skyget"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Skyget - AI EdTech Platform
                </Link>
              </li>
              <li>
                <Link
                  to="/products/jrtekceo"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  JrTekCEO - Entrepreneurship Platform
                </Link>
              </li>
              <li>
                <Link
                  to="/products/hrlinkz"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Hr Linkz - HR Management Software
                </Link>
              </li>
              <li>
                <Link
                  to="/products/tracklinkz"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  TrackLinkz - Fleet Management
                </Link>
              </li>
              <li>
                <Link
                  to="/products/sociallinkz"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  SocialLinkz - Marketing Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/products/hellodoctorz"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  HelloDoctorz - Practice Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/webApp"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Web & Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/aiMachineLearning"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  AI & Machine Learning Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloudConsulting"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Cloud Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/saasSolutions"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  SaaS Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/software"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/uiUXDesign"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/enterpriseSoftware"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Enterprise Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">
                  Zomant Solutions Private Limited, 1st floor, Highmark
                  chambers, 8/199/2, X Roads, Gachibowli, Khajaguda, Hyderabad,
                  Telangana 500032
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">+91 7093702655</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">
                  business@zomantsolutions.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              Copyright © 2026 | All Rights Reserved | Powered by Zomant
              Solutions Pvt Ltd
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
