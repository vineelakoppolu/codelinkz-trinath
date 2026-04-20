import React from "react";
import {
  Sparkles,
  Calendar,
  Mail,
  BarChart3,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SocialLinkzProduct = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const features = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "AI-Powered Content Generation",
      description:
        "Smart caption and post generation, AI email subject line suggestions, campaign copy automation, and blog content creation.",
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Social Media Scheduler",
      description:
        "Schedule posts across multiple platforms with bulk scheduling, smart timing optimization, and calendar-based publishing.",
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email Marketing Engine",
      description:
        "Drag-and-drop email builder, list segmentation, automated drip campaigns, and open & click tracking.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Campaign Analytics",
      description:
        "Engagement tracking, performance comparisons, conversion insights, and growth metrics dashboard.",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Multi-Channel Integration",
      description:
        "Connect social platforms, email integrations, and optional CRM integrations for seamless workflow.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Marketing Automation",
      description:
        "Advanced automation workflows, drip sequences, and intelligent campaign management.",
    },
  ];

  const useCase = [
    "Digital Marketing Agencies",
    "E-commerce Brands",
    "Influencers & Creators",
    "Small & Medium Businesses",
    "Startups",
    "Corporate Marketing Teams",
  ];

  const benefits = [
    "Save 10+ hours weekly on manual posting",
    "Increase engagement with AI-optimized content",
    "Improve email open rates",
    "Centralized campaign management",
    "Boost ROI with automation",
  ];

  const faqs = [
    {
      question: "Can I manage multiple brands?",
      answer: "Yes, SocialLinkz supports multi-account management.",
    },
    {
      question: "Is it suitable for agencies?",
      answer: "Yes, it is designed for both agencies and individual marketers.",
    },
    {
      question: "Does it support automation workflows?",
      answer: "Yes, advanced automation and drip sequences are supported.",
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
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Logo */}
            <img
              src="/assets/SociallinkzLogo.jpeg"
              alt="SocialLinkz Logo"
              className="w-28 h-28 object-contain mx-auto mb-6 mix-blend-screen"
            />

            <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-400 font-semibold">
                Marketing Automation Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                SocialLinkz
              </span>
            </h1>

            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-6">
              Automate Marketing. Accelerate Growth.
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
              SocialLinkz is an AI-driven social media and email marketing automation platform designed to help businesses, agencies, and entrepreneurs manage, automate, and scale their digital presence effortlessly. From content creation to publishing and analytics, everything is unified in one intelligent system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                  Start Your Free Trial
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>

              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full transition-all duration-300">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Product Description */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your Marketing with AI Automation
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              SocialLinkz empowers businesses to manage social media platforms,
              automate email campaigns, generate AI-based content, and track
              performance metrics all within a single dashboard. Designed for
              marketers who want efficiency, automation, and measurable growth.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Core Features */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600">
              All the tools you need for successful marketing automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-white hover:shadow-2xl transition-all duration-300 border-0 group">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who Should Use */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who Should Use SocialLinkz?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        {...sectionMotionProps}
        className="relative bg-gradient-to-br from-blue-600 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Your Marketing into a Growth Machine
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start automating, analyzing, and scaling with SocialLinkz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
                Request a Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg rounded-full transition-all duration-300">
                Get Pricing Details
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SocialLinkzProduct;
