import React from "react";
import {
  Brain,
  Video,
  ChartBar,
  BookOpen,
  HelpCircle,
  Trophy,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SkygetProduct = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const features = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI-Based Learning Path",
      description:
        "Personalized study plans generated using AI that identify strong & weak subjects automatically and suggest revision cycles based on performance patterns.",
    },
    {
      icon: <ChartBar className="w-10 h-10" />,
      title: "Smart Assessments & Analytics",
      description:
        "Chapter-wise, subject-wise, and full-length mock tests with detailed reports showing accuracy, speed, time spent, and difficulty level.",
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "HD Video Lectures",
      description:
        "High-quality recorded classes by expert faculty covering conceptual understanding, problem-solving, and revision-oriented content.",
    },
    {
      icon: <HelpCircle className="w-10 h-10" />,
      title: "AI Doubt Solver (24x7)",
      description:
        "Upload a question via image or text and get instant, step-by-step AI-powered explanations anytime, anywhere.",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Interactive Study Materials",
      description:
        "Notes, formulas, solved examples, and quick revision cards with bookmarking and personalized content suggestions.",
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Nationwide Ranking System",
      description:
        "Rank analysis vs other students with competitive heatmaps to track real exam readiness and performance.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Teacher & Institution Mode",
      description:
        "Teachers can create exams, track batches, monitor student progress, and generate comprehensive reports.",
    },
  ];

  const targetUsers = [
    "Students (Class 6-12)",
    "NEET/JEE Aspirants",
    "Schools & Junior Colleges",
    "Coaching Institutes",
  ];

  const businessModel = [
    "B2C: Student subscription plans",
    "B2B: Institutional licensing for schools/colleges",
    "Hybrid franchise learning centers",
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
            {/* 🔥 Logo Added Here */}
            <img
              src="/assets/SkygetLogo.jpeg"
              alt="Skyget Logo"
              className="w-24 h-24 object-contain mx-auto mb-6"
            />

            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-400 font-semibold">
                AI-Powered EdTech Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Skyget
              </span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              India's First AI-Based Learning & Assessment Platform for NEET,
              JEE, EAMCET & Board Exams
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
              <span className="text-blue-400 font-semibold">AI-Powered EdTech Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Skyget</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              India's First AI-Based Learning & Assessment Platform for NEET, JEE, EAMCET & Board Exams
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
              Revolutionizing Exam Preparation
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Skyget is a next-generation Artificial Intelligence based Learning
              & Assessment Platform designed for students preparing for Board
              exams, NEET, JEE, EAMCET, and other competitive exams. It combines
              personalized learning with real-time analytics to deliver a
              world-class learning experience that adapts to each student's
              unique needs.
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
              Powered by advanced AI technology to maximize learning outcomes
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

      {/* Target Users & Business Model */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Target Users */}
            <Card className="p-10 bg-gradient-to-br from-gray-50 to-white border-0 hover:shadow-2xl transition-all duration-300">
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
            <Card className="p-10 bg-gradient-to-br from-blue-50 to-white border-0 hover:shadow-2xl transition-all duration-300">
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
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students already benefiting from AI-powered
            learning
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Started with Skyget
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SkygetProduct;
