import React, { useState } from "react";
import {
  Code,
  Palette,
  ArrowRight,
  Layers,
  CheckCircle,
  Star,
  Smartphone,
  Cpu,
  AppWindow,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../../components/common/Modal";
import { SiFlutter, SiKotlin, SiSwift, SiReact } from "react-icons/si";

const MobileDevelopment = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Smartphone,
      title: "iOS App Development",
      description:
        "High-performance iPhone & iPad apps built with Swift & SwiftUI.",
    },
    {
      icon: Cpu,
      title: "Android App Development",
      description:
        "Modern & scalable Android applications crafted using Kotlin.",
    },
    {
      icon: AppWindow,
      title: "Cross-Platform Apps",
      description:
        "Flutter & React Native apps with a single codebase for both iOS & Android.",
    },
  ];

  const technologies = [
    {
      name: "Flutter",
      icon: <SiFlutter className="text-[#42A5F5] w-10 h-10" />,
      description:
        "Build visually stunning & fast cross-platform apps with one codebase.",
      features: ["Single Codebase", "Hot Reload", "Fast Performance"],
      useCases: ["Finance Apps", "E-commerce", "Startups MVP"],
      advantages: ["Fast UI", "Reduced Cost", "Pixel-perfect UI"],
      projects: ["Delivery App", "Learning App", "Healthcare App"],
    },
    {
      name: "Swift",
      icon: <SiSwift className="text-[#FA7343] w-10 h-10" />,
      description: "Powerful native development for iOS and macOS apps.",
      features: ["SwiftUI", "Native APIs", "Secure & Stable"],
      useCases: ["iPhone Apps", "iPadOS Apps", "WatchOS Apps"],
      advantages: ["High Performance", "Native Speed", "Apple Ecosystem"],
      projects: ["Banking App", "Music App", "Fitness Tracking App"],
    },
    {
      name: "Kotlin",
      icon: <SiKotlin className="text-[#7F52FF] w-10 h-10" />,
      description: "Modern, clean, and efficient Android app development.",
      features: ["Jetpack Compose", "Null Safety", "Coroutines"],
      useCases: ["Enterprise Apps", "Utility Apps", "Automation Systems"],
      advantages: ["Official Android Language", "Stable", "Secure"],
      projects: ["Enterprise App", "Chat App", "Booking System"],
    },
    {
      name: "React Native",
      icon: <SiReact className="text-[#61DBFB] w-10 h-10" />,
      description:
        "Cross-platform apps with near-native performance using JavaScript.",
      features: ["Reusable Components", "Fast Refresh", "Large Ecosystem"],
      useCases: ["Social Apps", "Marketplace Apps", "Real-time Apps"],
      advantages: ["Fast Development", "Cost-Effective", "Scalable"],
      projects: ["Travel App", "Food App", "Community App"],
    },
  ];

  const features = [
    "High-Performance Architecture",
    "Clean & Scalable Codebase",
    "Secure API Integrations",
    "Ultra-Responsive UI",
    "App Store & Play Store Deployment",
  ];

  const whyChooseUs = [
    {
      title: "Expert Mobile Team",
      description:
        "Experienced developers specialized in iOS, Android, and cross-platform apps.",
      icon: Smartphone,
    },
    {
      title: "Modern Tech Stack",
      description:
        "We use Swift, Kotlin, Flutter, and React Native to build future-ready apps.",
      icon: Layers,
    },
    {
      title: "Performance First",
      description:
        "Optimized apps that launch fast, feel smooth, and scale with your business.",
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
      {/* HERO SECTION */}
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
            Mobile App{" "}
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
            Building world-class mobile apps with modern technologies, elegant
            UI, and outstanding performance.
          </motion.p>
        </div>
      </section>

      {/* SECTION 1 – MOBILE SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced{" "}
              <span className="text-blue-600">Mobile App Solutions</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We develop feature-rich, secure, and scalable mobile apps tailored
              for startups, SMBs, and enterprises.
            </p>

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
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
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

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mobile development"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg text-center">
                <span className="text-3xl font-bold text-blue-600">300+</span>
                <span className="text-sm text-gray-600">
                  Successful Mobile Apps
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 – SERVICES */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-gray-200/[0.4] bg-[size:22px_22px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Our Mobile{" "}
            <span className="text-blue-600">Development Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment — we handle everything with perfection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-600/10 blur-2xl group-hover:bg-blue-600/20 transition-all"></div>

                <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-all">
                  <service.icon className="w-10 h-10 text-blue-600" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">{service.description}</p>

                <div className="h-1 w-0 bg-blue-600 mt-6 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – MOBILE TECHNOLOGIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Mobile <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore powerful technologies behind world-class mobile apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {technologies.map((tech, idx) => (
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
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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

      {/* SECTION 4 – WHY CHOOSE US */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Trusted by businesses worldwide for delivering top-quality apps.
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

      {/* MODAL */}
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
                  <div key={i} className="bg-blue-50 p-4 rounded-lg">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-50 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Your Mobile App?
        </h2>

        <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
          Let’s bring your ideas to life with a high-performance mobile app.
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

export default MobileDevelopment;
