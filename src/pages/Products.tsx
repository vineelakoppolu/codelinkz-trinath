import { motion } from 'framer-motion';
import {
  BarChart3,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Layers,
  Settings,
  Brain,
  Network,
  Clock,
} from 'lucide-react';
import {
  PageHero,
  ProductCard,
  ServiceCard,
  StatsCard,
  HeroButton,
  GlassCard,
  GradientText,
} from '../components/ui';
import { colors, shadows } from '@/theme';

const productCategories = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'SaaS Platforms',
    description: 'Enterprise-grade software platforms for restaurants, healthcare, HRMS, and more.',
    highlight: true,
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI Automation',
    description: 'Intelligent workflow automation powered by machine learning and advanced analytics.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'CRM Suite',
    description: 'Customer relationship management with AI-powered insights and automation.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'HRMS Platform',
    description: 'Comprehensive human resources management with payroll and compliance tracking.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Field Service Mgmt',
    description: 'Real-time tracking and scheduling for mobile and field-based operations.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Analytics Engine',
    description: 'Advanced analytics and business intelligence for data-driven decisions.',
  },
];

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Lightning Fast',
    description: 'Sub-100ms response times across all modules',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II, end-to-end encryption, and compliance',
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: '1000+ Integrations',
    description: 'Seamless integration with your existing tools',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: '24/7 Support',
    description: 'Round-the-clock expert support and monitoring',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Real-time Analytics',
    description: 'Advanced insights and custom reporting',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'AI-Powered',
    description: 'Machine learning for intelligent automation',
  },
];

const productStats = [
  { label: 'Transactions/Month', value: '8B+' },
  { label: 'Enterprise Customers', value: '500+' },
  { label: 'Uptime SLA', value: '99.99%' },
  { label: 'Industries Served', value: '40+' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
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

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Product Suite"
        title="Enterprise SaaS Products"
        subtitle="Powerful platforms for every business need"
        description="Codelinkz delivers integrated, industry-specific SaaS solutions that streamline operations, reduce costs, and drive growth. From restaurants to healthcare, we have the platform for you."
      >
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <HeroButton variant="primary" size="lg">
            Start Free Trial
          </HeroButton>
          <HeroButton variant="glass" size="lg">
            Request Demo
          </HeroButton>
        </motion.div>
      </PageHero>

      {/* Product Categories Grid */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="mb-6 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              Our Product Categories
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {productCategories.map((category, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ServiceCard
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  highlight={category.highlight}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="mb-6 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              Featured Products
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              Industry-leading solutions with proven ROI
            </p>
          </div>

          {[
            {
              title: 'Restaurant OS',
              description:
                'Complete platform for restaurant operations including POS, inventory management, kitchen operations, and customer engagement.',
              metrics: ['95% faster operations', '40% cost reduction', 'Real-time inventory'],
              icon: '🍽️',
            },
            {
              title: 'Healthcare Suite',
              description:
                'HIPAA-compliant healthcare platform for appointments, patient records, billing, and engagement.',
              metrics: ['25% faster patient processing', 'HIPAA certified', '24/7 uptime'],
              icon: '⚕️',
            },
            {
              title: 'HRMS & Payroll',
              description:
                'Enterprise HR platform for hiring, employee management, payroll, and compliance tracking.',
              metrics: ['50% faster payroll', 'Zero compliance issues', 'Employee self-service'],
              icon: '👥',
            },
          ].map((product, i) => (
            <motion.div
              key={i}
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${
                i % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Image/Preview */}
              <motion.div
                className="rounded-2xl overflow-hidden h-64 md:h-96 flex items-center justify-center text-6xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.accentBlue}15 100%)`,
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
                whileHover={{ y: -8 }}
              >
                {product.icon}
              </motion.div>

              {/* Content */}
              <div>
                <h3
                  className="mb-4 font-700"
                  style={{
                    fontSize: '32px',
                    color: colors.primary,
                  }}
                >
                  {product.title}
                </h3>
                <p
                  className="mb-6"
                  style={{
                    fontSize: '16px',
                    lineHeight: '26px',
                    color: colors.textSecondary,
                  }}
                >
                  {product.description}
                </p>

                {/* Metrics */}
                <div className="mb-8 space-y-3">
                  {product.metrics.map((metric, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3"
                      style={{
                        fontSize: '14px',
                        color: colors.textSecondary,
                      }}
                    >
                      <span
                        style={{
                          color: colors.primary,
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      {metric}
                    </div>
                  ))}
                </div>

                <HeroButton variant="secondary">Learn More</HeroButton>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Features Grid */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="mb-6 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              Core Features Across All Products
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div
                  className="p-8 rounded-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.72)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${colors.borderLight}`,
                    boxShadow: shadows.premium,
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
                      color: 'white',
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3
                    className="mb-2 font-700"
                    style={{
                      fontSize: '18px',
                      color: colors.textPrimary,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: colors.textSecondary,
                      lineHeight: '22px',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Automation Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="mb-6 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              <GradientText>AI-Powered Automation</GradientText>
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              Intelligent workflows that learn and adapt to your business
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Smart Automation',
                description: 'AI-powered workflows that handle repetitive tasks automatically',
              },
              {
                title: 'Predictive Analytics',
                description: 'ML models that predict trends and help you make better decisions',
              },
              {
                title: 'Natural Language',
                description: 'Conversational AI for customer support and internal operations',
              },
              {
                title: 'Custom Training',
                description: 'Train AI models on your specific data for maximum accuracy',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
                whileHover={{ y: -4 }}
              >
                <h3
                  className="font-700 mb-3"
                  style={{
                    fontSize: '20px',
                    color: colors.primary,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    lineHeight: '22px',
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="mb-6 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              By The Numbers
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {productStats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <StatsCard label={stat.label} value={stat.value} highlight={i === 0} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="mb-6 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              Integrations & Ecosystem
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              Connect with 1000+ applications and platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.72)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${colors.borderLight}`,
                boxShadow: shadows.premium,
              }}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className="font-700 mb-4"
                style={{
                  fontSize: '20px',
                  color: colors.primary,
                }}
              >
                🔌 Native Integrations
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: '14px',
                  color: colors.textSecondary,
                  lineHeight: '22px',
                }}
              >
                Pre-built connectors for Salesforce, SAP, Oracle, Stripe, Twilio, and 100+ more
                platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Salesforce', 'SAP', 'Stripe', 'AWS', 'Google Cloud', 'Azure'].map((int) => (
                  <span
                    key={int}
                    className="px-3 py-1 rounded-full text-sm font-600"
                    style={{
                      background: colors.accentSky,
                      color: colors.primary,
                    }}
                  >
                    {int}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.72)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${colors.borderLight}`,
                boxShadow: shadows.premium,
              }}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3
                className="font-700 mb-4"
                style={{
                  fontSize: '20px',
                  color: colors.primary,
                }}
              >
                🔌 APIs & Webhooks
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: '14px',
                  color: colors.textSecondary,
                  lineHeight: '22px',
                }}
              >
                Comprehensive REST API, GraphQL, and Webhooks for custom integrations and
                workflows.
              </p>
              <div className="space-y-2">
                {['REST API', 'GraphQL', 'Webhooks', 'SDKs'].map((api) => (
                  <div key={api} style={{ fontSize: '14px', color: colors.textSecondary }}>
                    ✓ {api}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl p-12 lg:p-16"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}08 0%, ${colors.accentBlue}08 100%)`,
              border: `1px solid ${colors.borderLight}`,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h2
                className="mb-6 font-700"
                style={{
                  fontSize: '40px',
                  lineHeight: '48px',
                  color: colors.textPrimary,
                }}
              >
                Ready to Transform Your Business?
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: '18px',
                  color: colors.textSecondary,
                  maxWidth: '500px',
                  margin: '0 auto 32px',
                }}
              >
                Experience the power of enterprise SaaS. Start your free trial today.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <HeroButton variant="primary" size="lg">
                  Start Free Trial
                </HeroButton>
                <HeroButton variant="secondary" size="lg">
                  Schedule Demo
                </HeroButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
