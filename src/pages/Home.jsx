import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  Brain,
  Users,
  TrendingUp,
  CheckCircle,
  Award,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const Home = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const technologies = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Angular", icon: "🅰️" },
      { name: "Vue.js", icon: "🖖" },
      { name: "Next.js", icon: "▲" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: ".NET", icon: "🔷" },
    ],
    mobile: [
      { name: "React Native", icon: "📱" },
      { name: "Flutter", icon: "🎨" },
      { name: "iOS", icon: "🍎" },
      { name: "Android", icon: "🤖" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
    ],
  };

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud-native applications and migration services for modern enterprises.",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description:
        "Intelligent automation and AI-powered solutions that drive business transformation.",
    },
  ];

  const products = [
    {
      name: "Skyget",
      tagline: "AI-Powered EdTech Platform",
      description:
        "India's first AI-based learning & assessment platform for NEET, JEE, and Board exam preparation.",
      features: [
        "AI Learning Path",
        "Smart Assessments",
        "24x7 AI Doubt Solver",
        "HD Video Lectures",
      ],
      link: "/products/skyget",
    },
    {
      name: "JrTekCEO",
      tagline: "Entrepreneurship Skill Platform",
      description:
        "Revolutionary platform teaching entrepreneurship skills to children and teenagers through gamification.",
      features: [
        "Business Simulation",
        "Pitch Training",
        "Mentor Network",
        "Skill Development",
      ],
      link: "/products/jrtekceo",
    },
    {
      name: "Hrlinkz",
      tagline: "All-in-One HR Management SaaS",
      description:
        "Simplify employee management, payroll, attendance, recruitment, and performance with a modern HR platform",
      features: [
        "Employee Management  ",
        "Payroll",
        "Leave & Attendance Management",
        "Recruitment",
      ],
      link: "/products/hrlinkz",
    },
    {
      name: "TrackLinkz",
      tagline: "Fleet & Vehicle Management System",
      description:
        "Advanced fleet management solution with real-time GPS tracking, route optimization, and driver monitoring.",
      features: [
        "Real-Time GPS Tracking",
        "Route Optimization",
        "Driver Monitoring",
        "Advanced Analytics",
      ],
      link: "/products/tracklinkz",
    },
    {
      name: "SocialLinkz",
      tagline: "Social Media & Email Marketing Platform",
      description:
        "AI-powered platform for automated social media management, email campaigns, and content generation.",
      features: [
        "AI Content Generation",
        "Social Scheduler",
        "Email Marketing",
        "Campaign Analytics",
      ],
      link: "/products/sociallinkz",
    },
    {
      name: "HelloDoctorz",
      tagline: "Doctor Practice Management System",
      description:
        "Comprehensive clinic management system for appointments, patient records, billing, and medical workflows.",
      features: [
        "Appointment Management",
        "Patient Records",
        "Billing & Invoicing",
        "Admin Dashboard",
      ],
      link: "/products/hellodoctorz",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "1000+",
      label: "Projects Delivered",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "98%",
      label: "Client Satisfaction",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "10+",
      label: "Years Experience",
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
        className="relative bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold leading-tight">
                Transforming Businesses with
                <span className="block mt-2">Scalable SaaS &</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  AI Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-gray-600">
                From idea to execution, Codelink Solution builds powerful digital ecosystems including SaaS platforms, mobile apps, AI systems, and enterprise software that drive measurable growth.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}>
                  <Link to="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group">
                      Start Your Project
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full transition-all duration-300">
                      Book Free Consultation
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative">
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-3xl blur-2xl"
                />

                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { gradient: "from-blue-500 to-blue-600", direction: 1 },
                    { gradient: "from-blue-400 to-blue-500", direction: -1 },
                    { gradient: "from-blue-600 to-blue-700", direction: 1 },
                    { gradient: "from-blue-500 to-blue-600", direction: -1 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 360 * item.direction,
                      }}
                      transition={{
                        opacity: { delay: 0.2 + i * 0.1, duration: 0.6 },
                        scale: { delay: 0.2 + i * 0.1, duration: 0.6 },
                        rotate: {
                          duration: 6,
                          ease: "linear",
                          repeat: Infinity,
                        },
                      }}
                      className={`w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-2xl`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section {...sectionMotionProps} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trust Section */}
      <motion.section {...sectionMotionProps} className="py-12 bg-blue-50 border-t border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900">
              ✓ Trusted by startups, SMEs, and enterprises for digital transformation and product engineering.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-End Product Development, SaaS Product Engineering, AI-driven Automation, Business Process Optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white group cursor-pointer">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Key Highlights */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Key Highlights of Our Expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⭐', title: '10+ Scalable SaaS Products', desc: 'Built and deployed enterprise-grade solutions' },
              { icon: '🌍', title: 'Multi-Industry Expertise', desc: 'Serving healthcare, retail, logistics, and more' },
              { icon: '☁️', title: 'Cloud-Ready Solutions', desc: 'AWS, Azure, and Docker integrated' },
              { icon: '🤖', title: 'AI-Integrated Platforms', desc: 'OpenAI, TensorFlow, and ML-powered systems' }
            ].map((highlight, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 border border-blue-200">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Focus
            </h2>
            <p className="text-xl text-gray-600">
              We build powerful solutions tailored to your needs, using the
              latest tech and diverse tools
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger
                value="frontend"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Mobile
              </TabsTrigger>
              <TabsTrigger
                value="database"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Database
              </TabsTrigger>
            </TabsList>

            {Object.keys(technologies).map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {technologies[category].map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </div>
                      <span className="text-gray-900 font-semibold">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.section>

      {/* Why Codelink Solution */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Codelink Solution</h2>
            <p className="text-xl text-gray-600">
              What sets us apart in digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Faster Time to Market', icon: '⚡' },
              { title: 'Scalable Architecture', icon: '📈' },
              { title: 'Cost-Effective Development', icon: '💰' },
              { title: 'Strong Post-Launch Support', icon: '🛡️' }
            ].map((item, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Products Ecosystem</h2>
            <p className="text-xl text-gray-600">
              We are building an ecosystem of SaaS tools for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-white border border-blue-100 p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                <h3 className="text-3xl text-gray-900 font-bold mb-2">
                  {product.name}
                </h3>
                <p className="text-blue-600 text-lg mb-4">{product.tagline}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={product.link}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
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
            Let's turn your idea into a scalable product.
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our expert team is ready to help you build the next big thing
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Talk to Our Experts Today
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
