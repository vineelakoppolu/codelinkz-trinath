import React from 'react';
import { Users, Zap, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Collaboration = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const collaborators = [
    {
      icon: <Users className="w-12 h-12" />,
      name: 'Startups',
      description: 'Scale your ideas with our technology expertise and go-to-market support.'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      name: 'Agencies',
      description: 'Expand your service offerings with our white-label solutions and team augmentation.'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      name: 'Freelancers',
      description: 'Join our partner network and access high-quality projects and revenue opportunities.'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      name: 'Enterprises',
      description: 'Partner with us for strategic digital transformation and innovation initiatives.'
    }
  ];

  const benefits = [
    {
      title: 'Revenue Sharing',
      description: 'Earn recurring commissions and revenue from successful implementations.'
    },
    {
      title: 'Technical Support',
      description: 'Get dedicated technical resources and ongoing assistance for project success.'
    },
    {
      title: 'Marketing Assistance',
      description: 'Leverage co-marketing opportunities and promotional support for growth.'
    },
    {
      title: 'Product Training',
      description: 'Access comprehensive training and certification programs for your team.'
    }
  ];

  const partnershipTypes = [
    {
      type: 'Channel Partner',
      description: 'Sell our SaaS products and earn recurring commissions.'
    },
    {
      type: 'Technology Partner',
      description: 'Co-build and integrate solutions for enhanced value.'
    },
    {
      type: 'Implementation Partner',
      description: 'Deploy and customize our solutions for end clients.'
    },
    {
      type: 'Affiliate Partner',
      description: 'Refer qualified leads and earn attractive commissions.'
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
              Build Together,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                Grow Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with businesses and individuals to create scalable solutions and drive mutual success.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Who Can Collaborate */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Can Collaborate</h2>
            <p className="text-xl text-gray-600">
              Multiple ways to partner with us based on your expertise and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborators.map((collab, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-2xl transition-all duration-300 border-0 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {collab.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{collab.name}</h3>
                <p className="text-gray-600">{collab.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partnership Benefits */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600">
              What you'll gain by partnering with Codelink Solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 bg-blue-50 hover:shadow-xl transition-all duration-300 border border-blue-200">
                <div className="flex items-start space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partnership Types */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-600">
              Choose the partnership model that fits your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((partner, index) => (
              <Card key={index} className="p-10 bg-white hover:shadow-2xl transition-all duration-300 border-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{partner.type}</h3>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <Link to="/contact">
                      <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's explore collaboration opportunities and create value together.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Start the Conversation
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Collaboration;
