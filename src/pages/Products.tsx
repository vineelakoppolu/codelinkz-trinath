import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Users,
  Briefcase,
  FileText,
  Truck,
  Share2,
  BarChart3,
  Zap,
  Shield,
  Network,
  Clock,
  Brain,
} from 'lucide-react';
import { PageHero, CTASection } from '../components/ui';
import { ProductCard } from '../components/products/ProductCard';
import { DetailedProductShowcase } from '../components/products/DetailedProductShowcase';
import { colors, shadows } from '@/theme';

const productsData = [
  {
    icon: ShoppingCart,
    name: 'Restolinkz',
    tagline: 'Cloud-based Restaurant Management',
    shortDescription: 'End-to-end solution for restaurant operations including POS, inventory, staff management, and customer loyalty programs.',
    description: 'Restolinkz is a comprehensive restaurant management system built for modern food service establishments. From table management to kitchen operations, inventory tracking to customer analytics, Restolinkz streamlines every aspect of your restaurant business with real-time insights and automation.',
    features: ['Cloud-based POS', 'Inventory Sync', 'Staff Management', 'Customer Analytics'],
    detailedFeatures: [
      'Advanced POS with multiple payment methods',
      'Real-time kitchen display system',
      'Inventory management with auto-reorder',
      'Staff scheduling and performance tracking',
      'Table reservation system',
      'Customer loyalty programs',
      'Multi-location management',
      'Analytics and reporting dashboard',
    ],
    benefits: [
      'Reduce operational costs by 30% with automated workflows',
      'Improve customer satisfaction with faster service',
      'Gain real-time insights into sales and inventory',
      'Streamline staff management and scheduling',
    ],
    stats: [
      { label: 'Restaurants Served', value: '1000+' },
      { label: 'Transactions/Day', value: '50K+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Support Available', value: '24/7' },
    ],
  },
  {
    icon: Users,
    name: 'Crmlinkz',
    tagline: 'Enterprise CRM & Sales Automation',
    shortDescription: 'Comprehensive customer relationship management designed for sales teams to manage pipelines, track interactions, and close deals faster.',
    description: 'Crmlinkz is a powerful CRM platform that helps sales teams manage customer relationships, track opportunities, and close deals faster. With AI-powered insights, automation, and seamless integrations, Crmlinkz empowers sales organizations to achieve higher conversion rates and revenue growth.',
    features: ['Sales Pipeline', 'Lead Scoring', 'Automation', 'Analytics Dashboard'],
    detailedFeatures: [
      'Visual sales pipeline management',
      'AI-powered lead scoring',
      'Automated follow-up workflows',
      'Email and call integration',
      'Customer activity tracking',
      'Quote and proposal generation',
      'Revenue forecasting',
      'Mobile CRM access',
    ],
    benefits: [
      'Increase sales productivity by 40%',
      'Reduce sales cycle by 25%',
      'Improve lead conversion rates',
      'Better visibility into sales pipeline',
    ],
    stats: [
      { label: 'Sales Teams', value: '500+' },
      { label: 'Deals Tracked', value: '100K+' },
      { label: 'Avg Deal Value +', value: '35%' },
      { label: 'Customer Retention', value: '95%' },
    ],
  },
  {
    icon: Briefcase,
    name: 'Hrlinkz',
    tagline: 'Human Resources & Payroll Platform',
    shortDescription: 'Streamlined HR operations covering recruitment, onboarding, payroll, performance management, and employee engagement.',
    description: 'Hrlinkz is an integrated HRMS platform that streamlines all aspects of human resource management. From recruitment and onboarding to payroll processing, performance management, and employee engagement, Hrlinkz helps HR teams focus on strategic initiatives while automating routine tasks.',
    features: ['Recruitment Suite', 'Payroll Engine', 'Performance Tracking', 'Employee Portal'],
    detailedFeatures: [
      'End-to-end recruitment management',
      'Digital onboarding process',
      'Automated payroll processing',
      'Attendance and leave management',
      'Performance appraisal system',
      'Employee self-service portal',
      'Compliance and regulatory reports',
      'Employee engagement tools',
    ],
    benefits: [
      'Reduce HR administrative time by 50%',
      'Ensure 100% payroll compliance',
      'Improve employee satisfaction scores',
      'Faster recruitment and onboarding',
    ],
    stats: [
      { label: 'Employees Managed', value: '50K+' },
      { label: 'Companies Using', value: '200+' },
      { label: 'Payroll Accuracy', value: '99.95%' },
      { label: 'Avg Time Saved', value: '20hrs/mo' },
    ],
  },
  {
    icon: FileText,
    name: 'Advocatelinkz',
    tagline: 'Legal Case Management Platform',
    shortDescription: 'Specialized case management system for law firms enabling document management, time tracking, billing, and client communication.',
    description: 'Advocatelinkz is purpose-built for law firms and legal professionals. Manage cases, documents, billable hours, and client communications in one integrated platform. With secure document storage, automated billing, and client portals, Advocatelinkz simplifies legal practice management.',
    features: ['Case Tracking', 'Document Management', 'Time Billing', 'Client Portal'],
    detailedFeatures: [
      'Comprehensive case management',
      'Secure document repository',
      'Time tracking and billing',
      'Client communication portal',
      'Court deadline reminders',
      'Matter templates',
      'Financial reports and analytics',
      'Client document sharing',
    ],
    benefits: [
      'Improve case management efficiency',
      'Automate billing and reduce errors',
      'Enhance client communication',
      'Ensure compliance and security',
    ],
    stats: [
      { label: 'Law Firms', value: '150+' },
      { label: 'Cases Managed', value: '10K+' },
      { label: 'Billing Accuracy', value: '99.8%' },
      { label: 'Client Satisfaction', value: '4.9/5' },
    ],
  },
  {
    icon: Truck,
    name: 'Poslinkz',
    tagline: 'Billing, Inventory & POS Platform',
    shortDescription: 'Real-time fleet and logistics management with route optimization, delivery tracking, and supply chain visibility.',
    description: 'Poslinkz is a comprehensive billing and inventory management platform designed for retail and logistics businesses. Manage multiple stores, track inventory in real-time, process GST-compliant billing, and generate detailed reports with advanced analytics.',
    features: ['Fleet Tracking', 'Route Optimization', 'Delivery Tracking', 'Analytics'],
    detailedFeatures: [
      'Multi-location billing system',
      'Real-time inventory tracking',
      'Automated GST compliance',
      'Sales and purchase management',
      'Stock transfer between locations',
      'Barcode scanning',
      'Supplier management',
      'Business intelligence reports',
    ],
    benefits: [
      'Reduce inventory carrying costs',
      'Ensure GST and tax compliance',
      'Improve inventory visibility',
      'Streamline multi-store operations',
    ],
    stats: [
      { label: 'Stores Connected', value: '3000+' },
      { label: 'Daily Transactions', value: '500K+' },
      { label: 'Inventory Accuracy', value: '99%' },
      { label: 'Processing Time', value: '<2sec' },
    ],
  },
  {
    icon: Share2,
    name: 'Sociallinkz',
    tagline: 'Social Media Marketing Automation',
    shortDescription: 'Unified platform for managing multiple social channels, scheduling content, analyzing engagement, and collaborating with teams.',
    description: 'Sociallinkz empowers marketing teams to manage their entire social media presence from one platform. Schedule posts, track engagement, capture leads, and analyze performance across all major social networks. With AI-powered insights, Sociallinkz helps optimize your social media strategy.',
    features: ['Multi-Channel Posting', 'Analytics', 'Engagement Tracking', 'Team Collaboration'],
    detailedFeatures: [
      'Multi-channel post scheduling',
      'Content calendar management',
      'Real-time engagement monitoring',
      'Lead capture forms',
      'Competitor analysis',
      'Influencer identification',
      'Team collaboration tools',
      'Performance analytics and reporting',
    ],
    benefits: [
      'Save 10+ hours per week on social media',
      'Increase engagement by 50%',
      'Track ROI on social campaigns',
      'Build cohesive social strategy',
    ],
    stats: [
      { label: 'Marketing Teams', value: '800+' },
      { label: 'Posts Scheduled', value: '1M+/mo' },
      { label: 'Avg Engagement +', value: '45%' },
      { label: 'Customer Acquisition -', value: '30%' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const featureHighlights = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-100ms response times across all modules for optimal user experience',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption and compliance',
  },
  {
    icon: Network,
    title: '1000+ Integrations',
    description: 'Seamless integration with your existing tools and platforms',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock expert support and monitoring for peace of mind',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Advanced insights and custom reporting for data-driven decisions',
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Machine learning for intelligent automation and predictions',
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Our Products"
        title="Enterprise SaaS Solutions"
        subtitle="Build, Scale, and Succeed"
        description="A comprehensive ecosystem of cloud-native SaaS products designed for modern businesses. From restaurants to law firms, from HR to logistics, we have solutions for every industry and business need."
      />

      {/* Products Grid Section */}
      <section className="py-20 bg-backgroundSoft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-800 mb-4" style={{ color: colors.textPrimary }}>
              Our Products Ecosystem
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: colors.textSecondary }}
            >
              Six industry-leading SaaS platforms solving critical business challenges across different sectors
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {productsData.map((product, idx) => (
              <ProductCard
                key={idx}
                icon={product.icon}
                name={product.name}
                description={product.shortDescription}
                features={product.features}
                onLearnMore={() => {
                  // Smooth scroll to detailed section
                  const element = document.getElementById(`product-${idx}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-800 mb-4" style={{ color: colors.textPrimary }}>
              Common Features Across All Products
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: colors.textSecondary }}
            >
              Every Codelink product comes with enterprise-grade features built in
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {featureHighlights.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 rounded-2xl border border-borderLight bg-backgroundSoft hover:border-primary/30 transition-all"
                  whileHover={{ y: -8, boxShadow: `0 20px 40px ${colors.primary}15` }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${colors.primary}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: colors.primary }} />
                  </div>
                  <h3 className="text-xl font-700 mb-3" style={{ color: colors.textPrimary }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: colors.textSecondary }}>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Detailed Product Showcases */}
      {productsData.map((product, idx) => (
        <div key={idx} id={`product-${idx}`}>
          <DetailedProductShowcase
            icon={product.icon}
            name={product.name}
            tagline={product.tagline}
            description={product.description}
            features={product.detailedFeatures}
            benefits={product.benefits}
            stats={product.stats}
            imagePosition={idx % 2 === 0 ? 'left' : 'right'}
            accentColor={colors.primary}
          />
        </div>
      ))}

      {/* Integration Section */}
      <section className="py-20 bg-backgroundSoft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-800 mb-4" style={{ color: colors.textPrimary }}>
              Seamless Integrations & Ecosystem
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: colors.textSecondary }}
            >
              All our products work together and integrate with your existing tools
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                title: 'API-First Architecture',
                description: 'RESTful APIs and webhooks for seamless integrations with any platform',
                icon: Network,
              },
              {
                title: 'Cloud Native',
                description: 'Built on AWS/Azure for reliability, scalability, and security',
                icon: Zap,
              },
              {
                title: 'Data Sync',
                description: 'Real-time data synchronization across all products in your ecosystem',
                icon: Brain,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 rounded-2xl border border-borderLight text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.72)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: shadows.premium,
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: `${colors.primary}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: colors.primary }} />
                  </div>
                  <h3 className="text-xl font-700 mb-3" style={{ color: colors.textPrimary }}>
                    {item.title}
                  </h3>
                  <p style={{ color: colors.textSecondary }}>{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Choose one product or build your complete SaaS ecosystem with our integrated solutions. Get started with a free demo and consultation."
        buttonText="Schedule Your Demo"
        buttonSecondary="View Case Studies"
      />
    </div>
  );
}
