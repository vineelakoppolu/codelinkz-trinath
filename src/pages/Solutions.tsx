import { motion } from 'framer-motion';
import { BarChart3, Zap, Shield, Users, TrendingUp, Layers } from 'lucide-react';
import { PageHero, ServiceCard, CTASection, StatsCard } from '../components/ui';
import { colors, shadows } from '@/theme';

const solutions = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Healthcare Solutions',
    description: 'Streamline patient management, billing, and clinical operations with enterprise-grade HIPAA-compliant systems.',
    highlight: true,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'HRMS & Payroll',
    description: 'Comprehensive human resources management with automated payroll, attendance, and compliance tracking.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'CRM Solutions',
    description: 'Advanced customer relationship management with AI-powered insights and automation capabilities.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Field Service Management',
    description: 'Real-time tracking, scheduling, and management for field operations and mobile workforce.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'AI Business Automation',
    description: 'Intelligent workflow automation using machine learning for process optimization.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Enterprise Integration',
    description: 'Seamless integration with existing systems and third-party applications.',
  },
];

const stats = [
  { label: 'Active Customers', value: '500+', icon: <Users className="w-5 h-5" /> },
  { label: 'Industry Solutions', value: '15+', icon: <Layers className="w-5 h-5" /> },
  { label: 'Success Rate', value: '98.5%', icon: <TrendingUp className="w-5 h-5" /> },
  { label: 'Enterprise Partners', value: '200+', icon: <Shield className="w-5 h-5" /> },
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

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Industry Solutions"
        title="Enterprise Solutions for Every Industry"
        subtitle="Specialized software for healthcare, HRMS, CRM, and more"
        description="Codelinkz delivers industry-specific solutions that streamline operations, reduce costs, and drive growth. Built with enterprise reliability and AI-powered capabilities."
      />

      {/* Solutions Grid */}
      <section className="section-padding bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ServiceCard
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  highlight={solution.highlight}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
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
              Trusted by Industry Leaders
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              Our solutions power critical operations for enterprises worldwide
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <StatsCard
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                  highlight={i === 0}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="section-padding bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {[
            {
              title: 'Healthcare',
              description: 'HIPAA-compliant platforms for hospitals, clinics, and healthcare networks. Manage patient records, appointments, billing, and compliance with a unified system.',
            },
            {
              title: 'Financial Services',
              description: 'Secure, scalable solutions for banking, insurance, and fintech companies. Meet regulatory requirements while delivering superior customer experiences.',
            },
            {
              title: 'Retail & E-commerce',
              description: 'Omnichannel retail solutions with inventory management, POS integration, and customer analytics. Unified commerce across online and offline channels.',
            },
            {
              title: 'Manufacturing',
              description: 'Smart manufacturing platforms with supply chain optimization, quality management, and predictive maintenance powered by AI.',
            },
          ].map((industry, i) => (
            <motion.div
              key={i}
              className={`mb-16 grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className="rounded-xl overflow-hidden h-64 md:h-80"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.accentBlue}20 100%)`,
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
                  📊
                </div>
              </div>
              <div>
                <h3
                  className="mb-4 font-700"
                  style={{
                    fontSize: '28px',
                    color: colors.textPrimary,
                  }}
                >
                  {industry.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '26px',
                    color: colors.textSecondary,
                  }}
                >
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Industry?"
        description="Schedule a demo with our solutions specialists to see how Codelinkz can optimize your operations."
        buttonText="Schedule Demo"
        buttonSecondary="Learn More"
      />
    </div>
  );
}
