import React from 'react';
import { Target, Eye, Award, Users, Zap, Shield } from 'lucide-react';
import { Card } from '../components/ui/card';
import { motion } from 'framer-motion';

const About = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We embrace AI, automation, and modern engineering practices to stay ahead.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Customer Success',
      description: 'Every solution is crafted to achieve real business outcomes and measurable value.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity & Ownership',
      description: 'We deliver quality with transparency and responsibility in everything we do.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Scalability & Security',
      description: 'Enterprise-grade, future-proof architecture in every product we build.'
    }
  ];

  const reasons = [
    'Strong expertise in SaaS, AI/ML, and Cloud-native solutions',
    'Proven track record in building scalable platforms',
    'End-to-end technology partner: Ideation → Build → Launch → Growth',
    'Agile teams, rapid delivery, and enterprise-grade standards',
    'Transparent execution and measurable ROI for customers'
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}>
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Zomant Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A next-generation technology company transforming how businesses operate, scale, and succeed in the digital era.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Zomant Solutions Pvt Ltd is a next-generation technology company dedicated to transforming how businesses operate, scale, and succeed in the digital era. We combine deep industry expertise with innovative thinking to deliver intelligent software products and enterprise-grade solutions.
                </p>
                <p>
                  Founded with a vision to accelerate digital transformation, Zomant Solutions specializes in AI-driven platforms, custom software development, cloud-native applications, and end-to-end digital consulting.
                </p>
                <p>
                  Our portfolio includes cutting-edge products such as <strong className="text-blue-600">Skyget</strong> – India's first AI-powered EdTech learning platform, and <strong className="text-blue-600">JrTekCEO</strong> – a futuristic entrepreneurial skill-building ecosystem for young innovators.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl"></div>
                <div className="h-48 bg-white rounded-2xl mt-8"></div>
                <div className="h-48 bg-white rounded-2xl"></div>
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-10 bg-white hover:shadow-2xl transition-all duration-300 border-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To build world-class digital products and solutions that simplify complexity, accelerate business growth, and deliver transformative value through technology.
              </p>
            </Card>

            <Card className="p-10 bg-white hover:shadow-2xl transition-all duration-300 border-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To be a global leader in digital innovation, enabling businesses to scale faster through AI-driven, secure, and future-ready technology solutions.
              </p>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* What We Stand For */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Zomant */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Zomant</h2>
            <p className="text-xl text-gray-700">
              Your trusted partner for digital transformation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Industry Impact */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With a culture rooted in innovation, integrity, and excellence, Zomant Solutions continues to build powerful digital systems that impact millions of users across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['EdTech', 'Retail', 'Healthcare', 'Logistics', 'HRMS', 'SaaS'].map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-300 group">
                <span className="text-gray-900 font-semibold group-hover:text-blue-600">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
