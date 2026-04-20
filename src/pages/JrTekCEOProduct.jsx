import React from "react";
import {
  Lightbulb,
  Gamepad2,
  BookOpen,
  TrendingUp,
  Mic,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JrTekCEOProduct = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const features = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Entrepreneurial Mindset Program",
      description:
        "Comprehensive training covering idea formation, problem discovery, solution validation, and business model creation.",
    },
    {
      icon: <Gamepad2 className="w-10 h-10" />,
      title: "Real-World Simulation Games",
      description:
        "Virtual business setups with profit/loss simulations, decision-making scenarios, and market competition analysis.",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Skill Development Courses",
      description:
        "Master communication & presentation, leadership & negotiation, financial literacy, marketing basics, and design thinking.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Progress Dashboard",
      description:
        "Track learning progress, creativity score, critical thinking score, and leadership ability with detailed analytics.",
    },
    {
      icon: <Mic className="w-10 h-10" />,
      title: "Startup Pitch Training",
      description:
        "Learn how to pitch ideas with AI evaluation of pitch clarity, confidence, and structure, plus mock pitch competitions.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Mentor Ecosystem",
      description:
        "Get mentorship from industry professionals, attend weekly workshops, and optional startup exposure visits.",
    },
  ];

  const targetUsers = [
    "Students ages 10-18",
    "Schools",
    "Skill development academies",
    "NGOs & youth development programs",
  ];

  const businessModel = [
    "Subscription for students",
    "School partnerships",
    "Workshops & certification programs",
  ];

  const skillAreas = [
    "Communication & Presentation",
    "Leadership & Negotiation",
    "Financial Literacy",
    "Marketing Basics",
    "Design Thinking",
    "Problem Solving",
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
            {/* ⭐ Logo Added Here */}
            <img
              src="/assets/TekceoLogo.jpeg" // change the file name to your logo
              alt="JrTekCEO Logo"
              className="w-28 h-28 object-contain mx-auto mb-6 mix-blend-screen"
            />

            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-400 font-semibold">
                Entrepreneurship Learning Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                JrTekCEO
              </span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              India's First Structured Entrepreneurship Skill-Building Platform
              for Young Innovators
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  Request Demo
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>

              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-400 font-semibold">Entrepreneurship Learning Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">JrTekCEO</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              India's First Structured Entrepreneurship Skill-Building Platform for Young Innovators
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  Request Demo
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Product Description */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building Tomorrow's Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              JrTekCEO is India's first structured Entrepreneurship
              Skill-Building Platform for children and teenagers. It helps young
              learners develop critical thinking, creativity, innovation, and
              business leadership skills through engaging, gamified learning
              experiences and real-world simulations.
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
              Comprehensive entrepreneurship education for the next generation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-white hover:shadow-2xl transition-all duration-300 border-0 group"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skill Areas */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skills Students Will Develop
            </h2>
            <p className="text-xl text-gray-600">
              Essential entrepreneurial competencies for future success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skillAreas.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-gray-50 hover:shadow-xl transition-all duration-300 border-0 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3 group-hover:bg-blue-600 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{skill}</h3>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Target Users & Business Model */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Target Users */}
            <Card className="p-10 bg-white border-0 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Target Users
              </h3>
              <div className="space-y-4">
                {targetUsers.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-lg text-gray-700">{user}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Business Model */}
            <Card className="p-10 bg-white border-0 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Business Model
              </h3>
              <div className="space-y-4">
                {businessModel.map((model, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{model}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Empower Young Minds Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Give your students the entrepreneurial skills they need to succeed
            in tomorrow's world
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Started with JrTekCEO
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default JrTekCEOProduct;
