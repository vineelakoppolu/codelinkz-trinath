import React from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  Database,
  Shield,
  Zap,
  ArrowRight,
  RefreshCw,
  Plug,
  Building2,
  Layers,
  History,
  CircuitBoard,
  ServerCog,
} from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CustomerSoftware = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const mainServices = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Enterprise App Development",
      description:
        "Custom enterprise-grade applications designed for scalability, security, and high performance.",
    },

    {
      icon: <Layers className="w-12 h-12" />,
      title: "SaaS Product Development",
      description:
        "We build reliable, multi-tenant SaaS platforms with subscription modules, analytics, and automation.",
    },

    {
      icon: <History className="w-12 h-12" />,
      title: "Legacy System Modernization",
      description:
        "Upgrade and modernize outdated systems with new technology, improved performance, and enhanced UI.",
    },

    {
      icon: <CircuitBoard className="w-12 h-12" />,
      title: "API Development & Integration",
      description:
        "Secure REST & GraphQL API development with seamless third-party integrations.",
    },
  ];

  const additionalServices = [
    {
      icon: <ServerCog className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Scalable and secure backend systems built with modern technologies.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Architecture",
      description:
        "Optimized database design for performance, reliability, and scalability.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Deployment",
      description:
        "Cloud hosting, deployment, and DevOps setup for AWS, Azure, and GCP.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "QA & Testing Services",
      description:
        "Manual and automated testing to ensure product quality and reliability.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}>
      {/* Hero Section */}
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
              Custom{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Software Development
              </span>
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Scalable, secure, high-performance custom software built to
              streamline your workflow and accelerate business growth.
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
              More ways we can help your business succeed
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Let's discuss how our services can help you achieve your business
            goals
          </p>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CustomerSoftware;
