import React from "react";
import { Palette, User, Layout, PenTool, Eye, Monitor, Zap, Shield, ArrowRight } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UIUXDesign = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const mainServices = [
    {
      icon: <User className="w-12 h-12" />,
      title: "User Research & Analysis",
      description:
        "Understand user behavior, needs, and preferences to guide design decisions.",
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Wireframing & Prototyping",
      description:
        "Create interactive wireframes and prototypes to visualize and test ideas.",
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Visual Design & Branding",
      description:
        "Design visually appealing interfaces aligned with your brand identity.",
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Usability Testing",
      description:
        "Test designs with real users to ensure intuitive and engaging experiences.",
    },
  ];

  const additionalServices = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Ensure seamless experiences across desktop, tablet, and mobile devices.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Interaction Design",
      description:
        "Create engaging and intuitive interactions that enhance user satisfaction.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accessibility & Compliance",
      description:
        "Design inclusive interfaces that meet accessibility standards and regulations.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Consistency",
      description:
        "Maintain a cohesive visual identity across all touchpoints and platforms.",
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
              UI/UX{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Design
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Beautiful, intuitive, and user-centered design that enhances user
              engagement and satisfaction.
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
              Enhance your design process with these additional UI/UX services
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
            Ready to Elevate Your Product Design?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Let’s craft intuitive and engaging experiences for your users.
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

export default UIUXDesign;
