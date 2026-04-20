import React from "react";
import {
  Building2,
  Shield,
  Layers,
  Zap,
  Database,
  ArrowRight,
  Palette,
} from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EnterpriseSoftware = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const mainServices = [
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Scalable Architecture",
      description:
        "Robust software designed to handle growth, high traffic, and complex workflows.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security and compliance for sensitive data and regulatory standards.",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Management & Integration",
      description:
        "Seamless integration with existing databases and enterprise systems for efficient operations.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automation & Workflow",
      description:
        "Automated processes and workflows to improve productivity and reduce human error.",
    },
  ];
  const additionalServices = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "System Integration",
      description:
        "Seamless integration with existing enterprise systems and third-party services.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Architecture",
      description:
        "Optimized, secure, and scalable database design for enterprise-grade applications.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation & Workflow",
      description:
        "Implement automated processes to streamline operations and reduce manual effort.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Professional, intuitive, and user-centered designs tailored for enterprise users.",
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
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Software Development
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Custom enterprise-grade software solutions built for scalability,
              security, and high performance.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Services */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gray-50 group"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Additional Services */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              More cloud solutions to optimize and scale your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-0 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-50 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Enterprise Software?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Let’s create scalable, secure, and high-performance software for
            your business.
          </p>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default EnterpriseSoftware;
