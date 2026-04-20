import React, { useState } from "react";
import {
  Code,
  Palette,
  ArrowRight,
  Layers,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../../components/common/Modal";
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";

const FrontendDevelopment = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Code,
      title: "React Development",
      description: "Dynamic SPAs and enterprise dashboards built with React.js",
    },
    {
      icon: Layers,
      title: "Angular Development",
      description: "Robust, scalable Angular applications for enterprises",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centric interfaces with intuitive interactions",
    },
  ];

  const frontendTechnologies = [
    {
      name: "React",
      icon: <FaReact className="text-[#61DBFB] w-10 h-10" />,
      description: "Build modern and interactive SPAs with React.js",
      features: [
        "Virtual DOM",
        "Component Reusability",
        "Hooks API",
        "JSX Syntax",
      ],
      useCases: ["Web Apps", "PWAs", "React Native Apps"],
      advantages: [
        "Large ecosystem",
        "Strong community support",
        "High performance",
      ],
      projects: ["E-commerce Platform", "Social App", "Dashboard System"],
    },
    {
      name: "Angular",
      icon: <FaAngular className="text-[#DD0031] w-10 h-10" />,
      description: "Enterprise-grade applications with Angular framework",
      features: [
        "Two-way Binding",
        "TypeScript Support",
        "Dependency Injection",
      ],
      useCases: ["Enterprise Apps", "PWA", "Cross-platform Projects"],
      advantages: ["Strong typing", "CLI tools", "Enterprise-ready"],
      projects: ["CRM System", "Healthcare App", "Project Management Tool"],
    },
    {
      name: "Vue.js",
      icon: <FaVuejs className="text-[#42B883] w-10 h-10" />,
      description: "Flexible and lightweight frontend framework",
      features: [
        "Reactive Components",
        "Single File Components",
        "Virtual DOM",
      ],
      useCases: ["Interactive Apps", "Prototypes", "Portfolio Sites"],
      advantages: ["Easy to learn", "Flexible", "High performance"],
      projects: ["Portfolio Website", "Admin Dashboard", "Project Tracker"],
    },
  ];

  const features = [
    "Responsive & Adaptive Design",
    "High Performance",
    "Cross-browser Compatibility",
    "Reusable & Modular Components",
    "SEO Optimized",
  ];

  const whyChooseUs = [
    {
      title: "Expert Developers",
      description:
        "Experienced professionals delivering modern frontend solutions.",
      icon: Code,
    },
    {
      title: "Cutting-edge Technologies",
      description: "We work with the latest frameworks and best practices.",
      icon: Layers,
    },
    {
      title: "High Performance",
      description: "Optimized code for speed, scalability, and reliability.",
      icon: CheckCircle,
    },
  ];

  const openModal = (tech) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTech(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Frontend{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Development
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Crafting modern, responsive, and high-performing user interfaces
            using the latest frontend technologies.
          </motion.p>
        </div>
      </section>

      {/* Section 1: Frontend Solutions */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Innovative{" "}
              <span className="text-blue-600">Frontend Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We deliver scalable, interactive, and visually appealing frontend
              experiences using the latest frameworks and technologies.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg mt-6"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Frontend development"
                className="w-full h-96 object-cover"
              />
              {/* Overlay card for experience */}
              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <span className="text-3xl font-bold text-blue-600">25+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Services – Professional Premium UI (Image Illama) */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-gray-200/[0.4] bg-[size:22px_22px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Our Frontend <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer cutting-edge frontend development services with a focus on
            speed, scalability, and stunning UI/UX.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="
            relative group p-10 rounded-3xl 
            bg-white/60 backdrop-blur-xl 
            border border-gray-200 shadow-lg 
            hover:shadow-2xl hover:-translate-y-2
            transition-all duration-300
          "
              >
                {/* Glow Background Circle */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-600/10 blur-2xl group-hover:bg-blue-600/20 transition-all"></div>

                {/* Icon */}
                <div
                  className="w-20 h-20 mx-auto rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 
                          group-hover:bg-blue-600/20 transition-all"
                >
                  <service.icon className="w-10 h-10 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Line Accent */}
                <div className="h-1 w-0 bg-blue-600 mt-6 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Frontend Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Frontend <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on a technology to explore features, use cases, and projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {frontendTechnologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              onClick={() => openModal(tech)}
              className="bg-[#F9FAFB] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{tech.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {tech.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our expertise, modern tech stack, and commitment to quality ensure
            your project succeeds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="text-blue-600 w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-blue-600 mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        {selectedTech && (
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{selectedTech.icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedTech.name}
                </h2>
                <p className="text-gray-600">{selectedTech.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                {selectedTech.features.map((f, i) => (
                  <div key={i} className="flex items-center mb-2">
                    <CheckCircle className="text-blue-600 mr-2" /> {f}
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Use Cases</h3>
                {selectedTech.useCases.map((u, i) => (
                  <div key={i} className="flex items-center mb-2">
                    <Star className="text-blue-600 mr-2" /> {u}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Advantages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTech.advantages.map((a, i) => (
                  <div key={i} className="bg-[#F3F6FA] p-4 rounded-lg">
                    {a}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start a Project with {selectedTech.name}{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        )}
      </Modal>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your UI?</h2>
        <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
          Discuss your project with our expert frontend team and achieve your
          business goals.
        </p>
        <Link to="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
          Start Your Project <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default FrontendDevelopment;
