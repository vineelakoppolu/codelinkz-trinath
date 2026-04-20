import React from "react";
import {
  Calendar,
  FileText,
  DollarSign,
  ClipboardList,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Lock,
  Phone,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HelloDoctorzProduct = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const modules = [
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Appointment Management",
      description:
        "Online appointment booking, calendar scheduling, doctor availability management, and automated reminders.",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Patient Records Management",
      description:
        "Digital patient profiles, medical history tracking, lab report uploads, and prescription management.",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Billing & Invoicing",
      description:
        "Consultation billing, service charges management, invoice generation, and payment tracking.",
    },
    {
      icon: <ClipboardList className="w-10 h-10" />,
      title: "Clinical Documentation",
      description:
        "Prescription templates, diagnosis tracking, follow-up scheduling, and case management.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Admin Dashboard",
      description:
        "Revenue tracking, daily patient count, doctor performance reports, and financial analytics.",
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Data Security",
      description:
        "Secure access control, encrypted data storage, and HIPAA compliance for patient privacy.",
    },
  ];

  const idealFor = ["Individual Practitioners", "Multi-Doctor Clinics", "Specialty Clinics"];

  const benefits = [
    "Reduce paperwork by 80%",
    "Faster appointment handling",
    "Improved patient communication",
    "Centralized medical records",
    "Better revenue tracking",
  ];

  const faqs = [
    {
      question: "Is patient data secure?",
      answer:
        "Yes, the system ensures secure access control and encrypted data storage.",
    },
    {
      question: "Can multiple doctors use it?",
      answer: "Yes, multi-user access with role permissions is available.",
    },
    {
      question: "Is it cloud-based?",
      answer: "Yes, accessible from anywhere securely.",
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
        className="relative bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Logo */}
          <img src="/assets/HellodoctorzLogo.jpeg" className="w-28 h-28 object-contain mx-auto mb-6 mix-blend-screen" alt="HelloDoctorz" />

          {/* Badge */}
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-400 font-semibold">Practice Management System</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">HelloDoctorz</span>
          </h1>

          {/* Description */}
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-6">
            Simplify Healthcare Management. Enhance Patient Care.
          </p>
          
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
            HelloDoctorz is a comprehensive practice management system built for doctors, clinics, and hospitals to streamline appointments, patient records, billing, and medical workflows. Designed to reduce administrative workload and improve patient satisfaction.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                Book a Demo <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300">
                Request Proposal
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Product Description */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Streamline Your Practice Management
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              HelloDoctorz is a comprehensive practice management system built for doctors, 
              clinics, and hospitals to streamline appointments, patient records, billing, 
              and medical workflows. Designed to reduce administrative workload and improve patient satisfaction.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Core Modules */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Modules
            </h2>
            <p className="text-xl text-gray-600">
              Complete tools for modern practice management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card
                key={index}
                className="p-8 bg-white hover:shadow-2xl transition-all duration-300 border-0 group">
                <div className="text-blue-600 mb-4">{module.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-600">{module.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Ideal For */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ideal For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {idealFor.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-blue-50 rounded-lg border border-blue-200 text-center hover:shadow-lg transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Benefits */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
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
            Modernize Your Clinic Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Deliver better patient care with smart digital management.
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
                Contact Healthcare Consultant
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HelloDoctorzProduct;
