import React from "react";
import {
  MapPin,
  BarChart3,
  AlertCircle,
  TrendingDown,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrackLinkzProduct = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const features = [
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Real-Time GPS Tracking",
      description:
        "Live vehicle location on interactive maps with multiple vehicle monitoring on a single dashboard.",
    },
    {
      icon: <TrendingDown className="w-10 h-10" />,
      title: "Route History & Playback",
      description:
        "Complete trip history tracking with playback mode to review routes and trip duration insights.",
    },
    {
      icon: <AlertCircle className="w-10 h-10" />,
      title: "Driver Behaviour Monitoring",
      description:
        "Overspeed alerts, harsh braking detection, idle time monitoring, and driver performance scoring.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Advanced Reporting & Analytics",
      description:
        "Daily/weekly/monthly fleet reports with fuel usage insights and downloadable PDF/Excel reports.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Smart Alerts & Notifications",
      description:
        "Geofencing alerts, maintenance reminders, engine notifications, and SOS emergency alerts.",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Mobile & Web Access",
      description:
        "Access dashboard via desktop, tablet, or mobile for on-the-go fleet monitoring.",
    },
  ];

  const industries = [
    "Logistics & Transport Companies",
    "Courier & Delivery Businesses",
    "Construction & Equipment Rental",
    "Corporate Vehicle Fleets",
    "Taxi & Ride Services",
  ];

  const benefits = [
    "Reduce fuel consumption by up to 20%",
    "Improve on-time delivery performance",
    "Increase driver accountability",
    "Prevent vehicle misuse",
    "Improve fleet utilization rate",
    "Lower maintenance costs",
  ];

  const faqs = [
    {
      question: "Can TrackLinkz integrate with GPS hardware devices?",
      answer: "Yes, it supports multiple GPS hardware integrations.",
    },
    {
      question: "Is it suitable for small businesses?",
      answer:
        "Absolutely. The system is scalable from small fleets to enterprise operations.",
    },
    {
      question: "Is it cloud-based?",
      answer: "Yes, secure cloud hosting ensures anytime access.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}>
      {/* Hero Section */}
      <motion.section
        {...sectionMotionProps}
        className="relative bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Logo */}
            <img
              src="/assets/TracklinkzLogo.jpeg"
              alt="TrackLinkz Logo"
              className="w-28 h-28 object-contain mx-auto mb-6 mix-blend-screen"
            />

            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-400 font-semibold">
                Fleet & Vehicle Management System
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                TrackLinkz
              </span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-6">
              Smart Fleet Intelligence. Real-Time Control.
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
              TrackLinkz is an advanced fleet and vehicle management system designed to give businesses complete visibility, control, and performance insights over their vehicles and drivers. Whether you manage 5 vehicles or 500, TrackLinkz helps you reduce operational costs, improve route efficiency, and increase driver accountability with real-time GPS tracking and intelligent analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  Book a Live Demo
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>

              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300">
                Request Pricing
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Product Description */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced Fleet Management Made Simple
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              TrackLinkz is a powerful cloud-based fleet management solution
              that enables organizations to monitor vehicle movement, track
              driver behaviour, optimize routes, and generate real-time
              operational reports all from one central dashboard. Built for
              logistics, transport companies, delivery services, rental fleets,
              and enterprise vehicle operations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for complete fleet control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-white hover:shadow-2xl transition-all duration-300 border-0 group">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Business Benefits */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Business Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        {...sectionMotionProps}
        className="relative bg-gradient-to-br from-blue-600 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gain Full Control of Your Fleet Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let TrackLinkz transform your fleet operations with smart automation
            and live tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
                Schedule a Free Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg rounded-full transition-all duration-300">
                Talk to Our Fleet Experts
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TrackLinkzProduct;
