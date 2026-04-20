import React, { useState } from "react";
import {
  Code,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Server,
  Shield,
  Layers,
  Gauge,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../../components/common/Modal";
import { FaMicrosoft, FaNodeJs, FaDatabase } from "react-icons/fa";
const BackendDevelopment = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Services
  const services = [
    {
      icon: Server,
      title: "Custom API Development",
      description:
        "Designing fully optimized REST & GraphQL APIs for any scale.",
    },
    {
      icon: Code,
      title: "Microservices Architecture",
      description:
        "Decoupled, scalable microservices for high-load applications.",
    },
    {
      icon: Database,
      title: "Database Engineering",
      description:
        "Performance-tuned SQL & NoSQL solutions with best practices.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Robust authentication, encryption, and modern access control.",
    },
    {
      icon: Gauge,
      title: "Backend Performance Optimization",
      description:
        "Reducing latency, improving API speed, caching systems, and optimizing database performance.",
    },
  ];

  // Features
  const features = [
    "Real-time Data Processing",
    "High Availability Architecture",
    "Zero-Downtime Deployment",
    "Cloud-Native API Engineering",
    "Advanced Database Optimization",
    "Enterprise Security Compliance",
  ];

  // Technologies (for modal)
  const backendTechnologies = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#3C873A] w-10 h-10" />, // Node green
      description:
        "Lightweight, event-driven runtime ideal for fast & scalable backend applications.",
      features: [
        "Event-driven",
        "Non-blocking I/O",
        "High performance",
        "Rich NPM ecosystem",
      ],
      useCases: ["REST APIs", "Microservices", "Real-time apps"],
      advantages: [
        "High concurrency",
        "Large community",
        "Cross-platform",
        "Open-source",
      ],
      projects: ["Chat Apps", "E-commerce APIs", "Tracking Systems"],
    },
    {
      name: "ASP.NET Core",
      icon: <FaMicrosoft className="text-[#0078D6] w-10 h-10" />, // Microsoft blue
      description:
        "Modern, extremely secure framework trusted for enterprise-level backend systems.",
      features: [
        "Cross-platform",
        "MVC Architecture",
        "Dependency Injection",
        "High performance",
      ],
      useCases: ["Enterprise Apps", "APIs", "Cloud Services"],
      advantages: [
        "Strong typing",
        "Secure",
        "Scalable",
        "Integrates with Azure",
      ],
      projects: ["CRM Systems", "Banking Apps", "Project Management Tools"],
    },
    {
      name: "MongoDB",
      icon: <FaDatabase className="text-[#47A248] w-10 h-10" />, // Mongo green
      description:
        "High-performance NoSQL database built for flexibility, scale, and real-time apps.",
      features: [
        "Schema-less",
        "High scalability",
        "Replication & Sharding",
        "Aggregation Framework",
      ],
      useCases: ["E-commerce", "Real-time Analytics", "Content Management"],
      advantages: [
        "Flexible schema",
        "High performance",
        "Horizontal scaling",
        "Cloud-ready",
      ],
      projects: [
        "Inventory Systems",
        "Analytics Dashboards",
        "Social Platforms",
      ],
    },
  ];
  const whyChooseUs = [
    {
      title: "Backend Specialists",
      description:
        "Our team builds stable, high-performance backend systems trusted by global clients.",
      icon: Code,
    },
    {
      title: "Security First",
      description:
        "We implement enterprise-grade protection including encryption and advanced access control.",
      icon: Shield,
    },
    {
      title: "Performance Optimized",
      description:
        "Low-latency, scalable, and cloud-ready backend infrastructure designed for long-term growth.",
      icon: Layers,
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
            Backend{" "}
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
            High-performance backend solutions engineered for speed,
            scalability, and enterprise-level security.
          </motion.p>
        </div>
      </section>

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
            <h2 className="text-4xl font-bold text-[#2B2B2B] mb-4">
              Innovative{" "}
              <span className="text-[#dc2626]">Backend Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We build reliable, secure, and scalable backend systems tailored
              to power complex business applications with efficiency and
              stability.
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
                  <CheckCircle className="w-6 h-6 text-[#dc2626] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#dc2626] text-white font-semibold rounded-xl hover:bg-[#b91c1c] transform hover:scale-105 transition-all duration-300 shadow-lg mt-6"
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
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Backend development"
                className="w-full h-96 object-cover"
              />
              {/* Overlay card for experience */}
              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <span className="text-3xl font-bold text-[#dc2626]">25+</span>
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
            Our Backend <span className="text-[#dc2626]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end backend development services tailored to your
            application's needs.
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
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#dc2626]/10 blur-2xl group-hover:bg-[#dc2626]/20 transition-all"></div>

                {/* Icon */}
                <div
                  className="w-20 h-20 mx-auto rounded-2xl bg-[#dc2626]/10 flex items-center justify-center mb-6 
                          group-hover:bg-[#dc2626]/20 transition-all"
                >
                  <service.icon className="w-10 h-10 text-[#dc2626]" />
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
                <div className="h-1 w-0 bg-[#dc2626] mt-6 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Backend Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Backend <span className="text-[#dc2626]">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click a technology to see details, features, and projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {backendTechnologies.map((tech, idx) => (
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
                <h4 className="text-xl font-bold text-[#2B2B2B] group-hover:text-[#b91c1c] transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {tech.description}
              </p>
              <div className="flex items-center text-[#dc2626] font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2B2B2B] mb-6">
            Why <span className="text-[#dc2626]">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Expertise, modern backend architectures, and focus on security
            ensure your backend succeeds.
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
                  <item.icon className="text-[#dc2626] w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-[#dc2626] mb-4">
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
                <h2 className="text-3xl font-bold text-[#2B2B2B] mb-2">
                  {selectedTech.name}
                </h2>
                <p className="text-lg text-gray-600">
                  {selectedTech.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {selectedTech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#dc2626] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">
                  Use Cases
                </h3>
                <div className="space-y-3">
                  {selectedTech.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className="w-5 h-5 text-[#dc2626] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">
                Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTech.advantages.map((adv, idx) => (
                  <div key={idx} className="bg-[#F3F6FA] p-4 rounded-lg">
                    <span className="text-gray-700">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#dc2626] text-white font-semibold rounded-xl hover:bg-[#b91c1c] transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start a Project with {selectedTech.name}{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        )}
      </Modal>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-50 text-white">
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
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BackendDevelopment;
