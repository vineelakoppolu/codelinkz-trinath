import { motion } from 'framer-motion';
import { Award, HandshakeIcon, TrendingUp, Users } from 'lucide-react';
import { PageHero, ServiceCard, CTASection } from '../components/ui';
import { colors, shadows } from '@/theme';

const partnerTypes = [
  {
    icon: <HandshakeIcon className="w-6 h-6" />,
    title: 'Technology Partners',
    description: 'Integrate seamlessly with leading platforms. Build joint solutions using our APIs and SDKs.',
    highlight: true,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Service Partners',
    description: 'Resell our solutions, deliver implementations, and expand your service offerings.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Channel Partners',
    description: 'Leverage our solutions for your customer base with dedicated partner support.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Strategic Partners',
    description: 'Co-develop solutions, market jointly, and unlock new business opportunities.',
  },
];

const partnerBenefits = [
  {
    title: 'Revenue Growth',
    description: 'Expand your product portfolio and unlock new revenue streams',
    icon: '📈',
  },
  {
    title: 'Technical Support',
    description: 'Dedicated technical team to support your implementation and integration',
    icon: '🔧',
  },
  {
    title: 'Co-Marketing',
    description: 'Joint marketing initiatives, webinars, and case studies',
    icon: '📢',
  },
  {
    title: 'Training & Certification',
    description: 'Comprehensive partner training program and certifications',
    icon: '🎓',
  },
];

const integrations = [
  'Salesforce',
  'SAP',
  'Oracle',
  'Stripe',
  'Twilio',
  'AWS',
  'Google Cloud',
  'Azure',
  'Slack',
  'Microsoft Teams',
  'Jira',
  'Zendesk',
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

export default function PartnersPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Partnership"
        title="Partner Ecosystem"
        subtitle="Grow together with Codelinkz"
        description="Join our thriving partner ecosystem and unlock new opportunities. Whether you're a technology vendor, service provider, or reseller, we have partnership opportunities designed for you."
      />

      {/* Partner Types */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnerTypes.map((partner, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ServiceCard
                  icon={partner.icon}
                  title={partner.title}
                  description={partner.description}
                  highlight={partner.highlight}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits */}
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
              Partner Benefits
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnerBenefits.map((benefit, i) => (
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
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3
                  className="font-700 mb-3"
                  style={{
                    fontSize: '20px',
                    color: colors.textPrimary,
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    lineHeight: '22px',
                  }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
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
              Our Integrations
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              Seamlessly connect with 1000+ applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {integrations.map((integration, i) => (
              <motion.div
                key={i}
                className="px-6 py-3 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.sm,
                }}
                whileHover={{ y: -4 }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: colors.textPrimary,
                  }}
                >
                  {integration}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p
              style={{
                fontSize: '14px',
                color: colors.textSecondary,
              }}
            >
              Don't see your platform? We can build custom integrations.{' '}
              <span
                style={{
                  color: colors.primary,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Contact us
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How Partnership Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your partnership application through our partner portal',
              },
              {
                step: '2',
                title: 'Review',
                description: 'Our team reviews your application and conducts initial discussions',
              },
              {
                step: '3',
                title: 'Onboard',
                description: 'Get access to partner resources, training, and support programs',
              },
              {
                step: '4',
                title: 'Grow',
                description: 'Build solutions, expand offerings, and grow revenue together',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-700 text-white mb-4 mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
                    fontSize: '20px',
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.step}
                </motion.div>
                <h3
                  className="font-700 mb-2"
                  style={{
                    fontSize: '16px',
                    color: colors.textPrimary,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: colors.textSecondary,
                    lineHeight: '20px',
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
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
              Featured Partners
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'TechCorp Solutions',
                description: 'Leading technology reseller implementing Codelinkz for 50+ enterprise customers',
              },
              {
                name: 'CloudFirst Consulting',
                description: 'Cloud transformation partner delivering Codelinkz implementations globally',
              },
              {
                name: 'Innovation Labs',
                description: 'Co-developed AI integration solutions extending Codelinkz capabilities',
              },
              {
                name: 'Enterprise Services',
                description: 'Service partner providing managed services and 24/7 support',
              },
            ].map((partner, i) => (
              <motion.div
                key={i}
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
                    fontSize: '18px',
                    color: colors.primary,
                  }}
                >
                  {partner.name}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    lineHeight: '22px',
                  }}
                >
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Partner Ecosystem"
        description="Open new revenue streams and deliver better solutions to your customers. Let's grow together."
        buttonText="Apply Now"
        buttonSecondary="Partner Resources"
      />
    </div>
  );
}
