import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Users,
  FileText,
  Building2,
  MapPinned,
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
    icon: Building2,
    name: 'Erplinkz',
    tagline: 'Enterprise Resource Planning',
    shortDescription: 'Unified finance, procurement, inventory, and reporting so operations, stock, and the books stay on one system.',
    description: 'Erplinkz is an ERP platform for growing companies that need procurement, inventory, finance, and reporting in one place. It replaces disconnected spreadsheets and tools with a single operating record for orders, stock, cost, and performance.',
    features: ['Finance & Procurement', 'Inventory Control', 'Multi-entity Reporting', 'Workflow Automation'],
    detailedFeatures: [
      'Purchase orders and supplier management',
      'Real-time inventory and stock reservations',
      'General ledger and cost-center tracking',
      'Invoice matching and approvals',
      'Multi-location operations',
      'Role-based workflows',
      'Management reporting dashboards',
      'Audit-ready transaction history',
    ],
    benefits: [
      'See finance and inventory in one view',
      'Shorten purchase-to-pay cycles',
      'Reduce stock surprises across locations',
      'Give leadership a current operating picture',
    ],
    stats: [
      { label: 'Business Units', value: '120+' },
      { label: 'Orders Processed', value: '2M+' },
      { label: 'Close Time Saved', value: '40%' },
      { label: 'Data Accuracy', value: '99.5%' },
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
    icon: MapPinned,
    name: 'Fieldlinkz',
    tagline: 'Field Service Management',
    shortDescription: 'Dispatch, live technician tracking, and mobile work orders so the right person arrives with the right job details.',
    description: 'Fieldlinkz is a field service platform for teams that work on site. It plans routes, assigns technicians, tracks progress, and closes work orders from a phone so dispatch and the customer stay in sync.',
    features: ['Smart Dispatch', 'Live Tracking', 'Mobile Work Orders', 'Customer Updates'],
    detailedFeatures: [
      'Skill-based technician assignment',
      'Route planning and live location',
      'Mobile work orders and checklists',
      'Parts and inventory on the job',
      'Customer notifications',
      'Photo and signature capture',
      'SLA and schedule tracking',
      'Service history on every site',
    ],
    benefits: [
      'Reach the right technician faster',
      'Cut wasted travel between jobs',
      'Close work orders before leaving the site',
      'Keep customers updated without extra calls',
    ],
    stats: [
      { label: 'Jobs Dispatched', value: '80K+' },
      { label: 'On-time Arrival', value: '96%' },
      { label: 'First-time Fix', value: '88%' },
      { label: 'Teams in the Field', value: '400+' },
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
        description="A comprehensive ecosystem of cloud-native SaaS products designed for modern businesses. From restaurants and sales teams to law firms, enterprise operations, and field service."
      />

      {/* Products Grid Section */}
      <section className="py-20 bg-background-soft">
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
              Five industry platforms solving critical business challenges across restaurants, sales, legal, ERP, and field service
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
      <section className="py-20 bg-background">
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
                  className="p-8 rounded-2xl border border-borderLight bg-background-soft hover:border-primary/30 transition-all"
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
      <section className="py-20 bg-background-soft">
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
                    background: colors.card,
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
