import React, { useState } from 'react';
import { Briefcase, Users, TrendingUp, Award, Heart, Coffee, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Clear career paths with regular performance reviews and promotions'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible work hours and remote work options'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Access to courses, certifications, and conferences'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '4-6 years',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      description: 'Build scalable web applications and lead technical architecture decisions.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      description: 'Develop AI-powered features for our EdTech and SaaS products.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '5-7 years',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'UX'],
      description: 'Drive product vision and roadmap for our flagship products.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Hyderabad, India / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      description: 'Create beautiful and intuitive user experiences for our products.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      description: 'Build and maintain cloud infrastructure and deployment pipelines.'
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '4-6 years',
      skills: ['B2B Sales', 'Relationship Management', 'Negotiation'],
      description: 'Identify and close new business opportunities for our services and products.'
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Sales'];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(pos => pos.department === selectedDepartment);

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
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Be part of a dynamic team building innovative solutions that impact millions of users worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                View Open Positions
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Join Us */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work at Zomant?</h2>
            <p className="text-xl text-gray-600">
              We're building the future of technology, and we want you to be part of it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-300 border-0 bg-gray-50 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Culture Section */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  At Zomant, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our team members to take ownership and make meaningful contributions.
                </p>
                <p>
                  Our diverse team of talented individuals works together to solve complex problems and create products that make a real difference in people's lives.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Innovation-driven mindset</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Collaborative work environment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Continuous learning opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Work-life balance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl"></div>
              <div className="h-48 bg-white rounded-2xl mt-8"></div>
              <div className="h-48 bg-white rounded-2xl"></div>
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mt-8"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 mb-8">
              Find your next career opportunity
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  variant={selectedDepartment === dept ? 'default' : 'outline'}
                  className={`${
                    selectedDepartment === dept
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  } rounded-full`}
                >
                  {dept === 'all' ? 'All Positions' : dept}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredPositions.map((position, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gray-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">{position.type}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📍</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="border-blue-600 text-blue-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <Link to="/contact">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No positions available in this department at the moment.</p>
            </div>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-50 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't See the Right Position?</h2>
          <p className="text-xl mb-8 text-gray-700">
            Send us your resume and we'll keep you in mind for future opportunities
          </p>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Send Your Resume
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Career;
