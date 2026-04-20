// src/pages/services/CloudSolutions.jsx
import React, { useState } from "react";
import {
  Code,
  Layers,
  ArrowRight,
  CheckCircle,
  Star,
  Server,
  Database,
  Shield,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../../components/common/Modal";
import { FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";

const CloudSolutions = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Services offered
  const services = [
    {
      icon: Server,
      title: "Cloud Infrastructure Setup",
      description:
        "End-to-end infra design and provisioning on AWS, Azure, or GCP using IaC.",
    },
    {
      icon: Layers,
      title: "Cloud Migration",
      description:
        "Seamless lift-and-shift or re-architect migrations with minimal downtime.",
    },
    {
      icon: Code,
      title: "DevOps & CI/CD",
      description:
        "Automated pipelines, containerization, and continuous delivery for fast releases.",
    },
  ];

  // Key features / benefits
  const features = [
    "Multi-cloud architecture",
    "Infrastructure as Code (Terraform)",
    "Kubernetes / Containers (EKS / AKS / GKE)",
    "Serverless & Event-driven design",
    "Observability & Cost Optimization",
  ];

  // Cloud technologies to show in modal
  const cloudTechnologies = [
    {
      name: "AWS",
      icon: <FaAws className="w-8 h-8 text-[#FF9900]" />,
      description:
        "Comprehensive cloud platform with compute, storage, managed databases, serverless and advanced services.",
      features: [
        "EC2 / Autoscaling",
        "RDS / Aurora",
        "Lambda (serverless)",
        "EKS (Kubernetes)",
      ],
      useCases: [
        "Scale-out web backends",
        "Data pipelines & analytics",
        "Serverless microservices",
      ],
      advantages: [
        "Largest service catalog",
        "Global footprint",
        "Mature security controls",
      ],
    },
    {
      name: "Microsoft Azure",
      icon: <FaMicrosoft className="w-8 h-8 text-[#0078D6]" />,
      description:
        "Enterprise-grade cloud with deep Microsoft ecosystem integrations and hybrid solutions.",
      features: [
        "AKS (Kubernetes)",
        "Azure SQL & CosmosDB",
        "Azure Functions (serverless)",
        "Azure DevOps / Pipelines",
      ],
      useCases: [
        "Enterprise modernisation",
        "Hybrid cloud",
        "SAP & .NET workloads",
      ],
      advantages: [
        "Great enterprise support",
        "Hybrid tools (Azure Arc)",
        "Integrated dev tooling",
      ],
    },
    {
      name: "Google Cloud (GCP)",
      icon: <FaGoogle className="w-8 h-8 text-[#4285F4]" />,
      description:
        "Strong data, ML and container-first cloud with managed Kubernetes and analytics.",
      features: [
        "GKE (Kubernetes)",
        "BigQuery & Dataflow",
        "Cloud Functions",
        "Anthos (hybrid)",
      ],
      useCases: ["Data analytics", "ML workloads", "Container-native apps"],
      advantages: [
        "Best-in-class data services",
        "Container/ K8s leadership",
        "Innovative ML tooling",
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: "Enterprise-grade Security",
      description:
        "Design and run secure cloud environments with best practices and compliance.",
      icon: Shield,
    },
    {
      title: "Cost Optimization",
      description:
        "Right-sizing, reserved instances, and continuous cost monitoring to reduce spend.",
      icon: CheckCircle,
    },
    {
      title: "Reliable SRE/DevOps",
      description:
        "CI/CD, IaC, monitoring and runbooks to keep production healthy and predictable.",
      icon: Star,
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
            Cloud{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
              Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Secure, scalable cloud architecture — from migration and DevOps to
            serverless and data platforms on AWS, Azure, and GCP.
          </motion.p>
        </div>
      </section>

      {/* Section 1: Cloud Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-[#2B2B2B] mb-4">
              Modern <span className="text-[#dc2626]">Cloud Architecture</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              We design and operate cloud platforms that are resilient, secure,
              and cost-efficient — tailored to your business needs.
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Cloud infrastructure"
                className="w-full h-96 object-cover"
              />

              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
                <span className="text-3xl font-bold text-[#dc2626]">
                  99.99%
                </span>
                <span className="text-sm text-gray-600">Uptime SLAs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Services – Premium UI */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-gray-200/[0.04] bg-[size:22px_22px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Our Cloud <span className="text-[#dc2626]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cloud services for startups to large enterprises.
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
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#dc2626]/10 blur-2xl group-hover:bg-[#dc2626]/20 transition-all"></div>

                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#dc2626]/10 flex items-center justify-center mb-6 group-hover:bg-[#dc2626]/20 transition-all">
                  <service.icon className="w-10 h-10 text-[#dc2626]" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">{service.description}</p>

                <div className="h-1 w-0 bg-[#dc2626] mt-6 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Cloud Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Cloud <span className="text-[#dc2626]">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We architect and implement using market-leading cloud platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cloudTechnologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.12 }}
              onClick={() => openModal(tech)}
              className="bg-[#F9FAFB] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{tech.icon}</div>
                <h4 className="text-xl font-bold text-[#2B2B2B] group-hover:text-[#b91c1c] transition-colors">
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
            Proven cloud practices, strong SRE mindset, and cost-conscious
            operations.
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

      {/* Modal (Cloud Tech details) */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        {selectedTech && (
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{selectedTech.icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-[#2B2B2B] mb-2">
                  {selectedTech.name}
                </h2>
                <p className="text-gray-600">{selectedTech.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {selectedTech.features.map((f, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#dc2626] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">
                  Use Cases
                </h3>
                <div className="space-y-3">
                  {selectedTech.useCases.map((u, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className="w-5 h-5 text-[#dc2626] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
            Ready to Migrate or Modernize?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Schedule a cloud assessment and get a recommended roadmap and cost
            estimate.
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

export default CloudSolutions;
