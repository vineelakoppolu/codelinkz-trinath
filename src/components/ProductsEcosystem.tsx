import { motion } from 'framer-motion';
import { ShoppingCart, Users, Briefcase, FileText, Truck, Share2, ArrowRight } from 'lucide-react';
import { colors } from '@/theme';

const products = [
  {
    icon: ShoppingCart,
    name: 'Restolinkz',
    tagline: 'Cloud-based Restaurant Management',
    description:
      'End-to-end solution for restaurant operations including POS, inventory, staff management, and customer loyalty programs.',
    features: ['Cloud-based POS', 'Inventory Sync', 'Staff Management', 'Customer Analytics'],
    badge: '🍽️ For Restaurants',
    users: '1000+',
  },
  {
    icon: Users,
    name: 'Crmlinkz',
    tagline: 'Enterprise CRM & Sales Platform',
    description:
      'Comprehensive customer relationship management designed for sales teams to manage pipelines, track interactions, and close deals faster.',
    features: ['Sales Pipeline', 'Lead Scoring', 'Automation', 'Analytics Dashboard'],
    badge: '📊 For Sales Teams',
    users: '500+',
  },
  {
    icon: Briefcase,
    name: 'Hrlinkz',
    tagline: 'Human Resources Management System',
    description:
      'Streamlined HR operations covering recruitment, onboarding, payroll, performance management, and employee engagement.',
    features: ['Recruitment Suite', 'Payroll Engine', 'Performance Tracking', 'Employee Portal'],
    badge: '👥 For HR Teams',
    users: '200+',
  },
  {
    icon: FileText,
    name: 'Advocatelinkz',
    tagline: 'Legal Case Management Platform',
    description:
      'Specialized case management system for law firms enabling document management, time tracking, billing, and client communication.',
    features: ['Case Tracking', 'Document Management', 'Time Billing', 'Client Portal'],
    badge: '⚖️ For Law Firms',
    users: '150+',
  },
  {
    icon: Truck,
    name: 'Poslinkz',
    tagline: 'Billing, Inventory & POS',
    description:
      'Real-time fleet and logistics management with route optimization, delivery tracking, and supply chain visibility.',
    features: ['Fleet Tracking', 'Route Optimization', 'Delivery Tracking', 'Analytics'],
    badge: '🚚 For Logistics',
    users: '3000+',
  },
  {
    icon: Share2,
    name: 'Sociallinkz',
    tagline: 'Social Media Management Suite',
    description:
      'Unified platform for managing multiple social channels, scheduling content, analyzing engagement, and collaborating with teams.',
    features: ['Multi-Channel Posting', 'Analytics', 'Engagement Tracking', 'Team Collaboration'],
    badge: '📢 For Marketers',
    users: '800+',
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

export default function ProductsEcosystem() {
  return (
    <section className="py-24 bg-background-soft relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(600px at 50% 50%, ${colors.primary}10, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full border border-borderLight"
            style={{ background: `${colors.primary}05` }}
          >
            <span className="text-sm font-600" style={{ color: colors.primary }}>
              🧩 Complete Ecosystem
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-800 mb-6" style={{ color: colors.textPrimary }}>
            Our Products Ecosystem
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            We are building an ecosystem of SaaS tools designed to simplify operations, automate workflows, and help businesses scale efficiently. Six powerful products, infinitely connected.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <motion.div
                  className="group h-full rounded-3xl border border-borderLight overflow-hidden transition-all duration-300 hover:border-primary/40 cursor-pointer"
                  style={{
                    background: colors.card,
                    backdropFilter: 'blur(20px)',
                    boxShadow: `0 8px 16px ${colors.primary}08`,
                  }}
                  whileHover={{
                    y: -12,
                    boxShadow: `0 24px 48px ${colors.primary}15`,
                  }}
                >
                  {/* Premium Header */}
                  <div
                    className="relative h-32 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.primaryLight}15 100%)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(800px at 50% 50%, ${colors.primary}20, transparent)`,
                      }}
                    />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${colors.primary}20`,
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <Icon className="w-10 h-10" style={{ color: colors.primary }} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Badge */}
                    <div className="mb-4">
                      <span
                        className="inline-block text-xs font-600 px-3 py-1 rounded-full"
                        style={{
                          background: `${colors.primary}10`,
                          color: colors.primary,
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>

                    {/* Title and Tagline */}
                    <h3 className="text-2xl font-800 mb-2" style={{ color: colors.textPrimary }}>
                      {product.name}
                    </h3>
                    <p className="text-sm font-600 mb-4" style={{ color: colors.primary }}>
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 space-y-2">
                      {product.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: colors.primary }}
                          />
                          <span
                            className="text-sm font-500"
                            style={{ color: colors.textSecondary }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Users Count */}
                    <div
                      className="mb-6 pb-6 border-b border-borderLight"
                      style={{ borderColor: `${colors.primary}10` }}
                    >
                      <span className="text-xs font-600" style={{ color: colors.textMuted }}>
                        {product.users} companies using
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button
                      className="w-full py-3 px-4 rounded-xl font-700 text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      style={{
                        background: colors.primary,
                      }}
                    >
                      Explore Product
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6" style={{ color: colors.textSecondary }}>
            Ready to explore the complete ecosystem?
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-4 rounded-xl font-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
            }}
          >
            View All Products →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
