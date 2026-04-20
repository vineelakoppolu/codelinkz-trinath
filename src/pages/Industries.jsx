import React from "react";
import {
  GraduationCap,
  ShoppingCart,
  Heart,
  Truck,
  Users,
  Server,
  ArrowRight,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Industries = () => {
  const industries = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      name: "EdTech",
      description:
        "Transforming education with AI-powered learning platforms, assessment tools, and personalized learning experiences.",
      solutions: [
        "Learning Management Systems",
        "AI-Based Assessment Platforms",
        "Virtual Classrooms",
        "Student Performance Analytics",
      ],
      caseStudy:
        "Skyget - AI-powered EdTech platform serving 100,000+ students",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      name: "Retail & E-Commerce",
      description:
        "Building scalable e-commerce platforms with advanced inventory management, payment integrations, and customer analytics.",
      solutions: [
        "Multi-vendor Marketplaces",
        "B2B/B2C E-commerce Platforms",
        "Inventory Management Systems",
        "Customer Analytics & CRM",
      ],
      caseStudy: "Built platforms processing 1M+ transactions monthly",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      name: "Healthcare",
      description:
        "Innovative healthcare solutions including telemedicine, patient management systems, and health data analytics.",
      solutions: [
        "Telemedicine Platforms",
        "Patient Management Systems",
        "Health Records Management",
        "Medical Appointment Scheduling",
      ],
      caseStudy: "HIPAA-compliant solutions serving 50+ clinics",
    },
    {
      icon: <Truck className="w-12 h-12" />,
      name: "Logistics",
      description:
        "End-to-end logistics and supply chain management solutions with real-time tracking and route optimization.",
      solutions: [
        "Fleet Management Systems",
        "Real-time Tracking Solutions",
        "Warehouse Management",
        "Route Optimization",
      ],
      caseStudy: "Optimized delivery operations for 200+ fleet vehicles",
    },
    {
      icon: <Users className="w-12 h-12" />,
      name: "HRMS",
      description:
        "Comprehensive human resource management systems for employee lifecycle management and payroll automation.",
      solutions: [
        "Employee Management",
        "Payroll Automation",
        "Performance Management",
        "Recruitment & Onboarding",
      ],
      caseStudy: "Managing 10,000+ employees across multiple organizations",
    },
    {
      icon: <Server className="w-12 h-12" />,
      name: "SaaS & Cloud",
      description:
        "Building scalable SaaS products and cloud-native applications with microservices architecture.",
      solutions: [
        "SaaS Product Development",
        "Cloud Migration Services",
        "Microservices Architecture",
        "API Development",
      ],
      caseStudy: "Deployed 50+ SaaS products serving global customers",
    },
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Transform
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building powerful digital systems that impact millions of users
              across diverse industries
            </p>
          </div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Card className="p-10 hover:shadow-2xl transition-all duration-300 border-0 bg-gray-50">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                        {industry.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {industry.name}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {industry.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Our Solutions:
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li
                              key={idx}
                              className="flex items-center space-x-2 text-gray-700"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm font-medium text-blue-600 mb-1">
                          Case Study
                        </p>
                        <p className="text-gray-700">{industry.caseStudy}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              Industry-specific expertise combined with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white border-0 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-900 font-semibold mb-2">
                Years Experience
              </p>
              <p className="text-gray-600 text-sm">
                Deep industry knowledge across sectors
              </p>
            </Card>
            <Card className="p-8 text-center bg-white border-0 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-900 font-semibold mb-2">
                Projects Delivered
              </p>
              <p className="text-gray-600 text-sm">
                Proven track record of success
              </p>
            </Card>
            <Card className="p-8 text-center bg-white border-0 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-900 font-semibold mb-2">
                Client Satisfaction
              </p>
              <p className="text-gray-600 text-sm">
                Excellence in delivery and support
              </p>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your digital
            transformation goals
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Industries;
