import React from 'react';
import { Code, Smartphone, Cloud, Brain, Palette, Database, Shield, Zap, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const mainServices = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Software Development',
      description: 'End-to-end custom software solutions tailored to your business needs. We build scalable, secure, and high-performance applications.',
      features: [
        'Enterprise Application Development',
        'SaaS Product Development',
        'Legacy System Modernization',
        'API Development & Integration'
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      features: [
        'iOS & Android Native Apps',
        'React Native & Flutter Development',
        'Mobile App UI/UX Design',
        'App Store Optimization'
      ]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Web App Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      features: [
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'E-commerce Platforms',
        'Content Management Systems'
      ]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning to automate and optimize business processes.',
      features: [
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Chatbots & Virtual Assistants'
      ]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Consulting',
      description: 'Expert cloud strategy, migration, and optimization services for AWS, Azure, and Google Cloud Platform.',
      features: [
        'Cloud Architecture Design',
        'Cloud Migration Services',
        'DevOps & CI/CD Implementation',
        'Cloud Cost Optimization'
      ]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive, and user-centered design that enhances user engagement and satisfaction.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Usability Testing'
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Data Engineering',
      description: 'Robust data infrastructure and analytics solutions to help you make data-driven decisions.',
      features: [
        'Data Warehouse Design',
        'ETL Pipeline Development',
        'Big Data Processing',
        'Business Intelligence Solutions'
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Staff Augmentation',
      description: 'Skilled technology professionals to augment your team and accelerate project delivery.',
      features: [
        'Dedicated Development Teams',
        'On-demand Tech Talent',
        'Flexible Engagement Models',
        'Quality Assurance Specialists'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Startup IT Services',
      description: 'Complete technology solutions for startups from MVP to scale.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development to validate your ideas.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Salesforce Development',
      description: 'Custom Salesforce solutions and integrations.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI UX Services',
      description: 'Comprehensive design services for digital products.'
    }
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
        className="relative bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 pt-32 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth in the digital age.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Services */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gray-50 group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Services */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">
              More ways we can help your business succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 bg-white hover:shadow-xl transition-all duration-300 border-0 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Services;
