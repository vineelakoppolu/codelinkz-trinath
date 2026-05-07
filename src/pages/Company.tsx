import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Users, Target, Globe } from 'lucide-react';
import { PageHero, StatsCard, TimelineSection, CTASection } from '../components/ui';
import { colors, shadows } from '@/theme';

const companyStats = [
  { label: 'Employees', value: '200+', icon: <Users className="w-5 h-5" /> },
  { label: 'Customers', value: '500+', icon: <Globe className="w-5 h-5" /> },
  { label: 'Countries', value: '25+', icon: <Target className="w-5 h-5" />, highlight: true },
  { label: 'Year Founded', value: '2015', icon: <Zap className="w-5 h-5" /> },
];

const coreValues = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions that drive digital transformation.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Trust & Security',
    description: 'Enterprise-grade security and reliability are non-negotiable. Your data is protected.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Customer Success',
    description: 'Your success is our success. We invest in long-term partnerships and outcomes.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Excellence',
    description: 'We are committed to delivering exceptional quality in everything we do.',
  },
];

const timeline = [
  {
    step: 1,
    title: '2015 - Founded',
    description: 'Codelinkz founded with a mission to deliver enterprise software solutions',
  },
  {
    step: 2,
    title: '2017 - Series A',
    description: '$10M Series A funding round to accelerate product development',
  },
  {
    step: 3,
    title: '2019 - Global Expansion',
    description: 'Opened offices in Singapore, Dubai, and London',
  },
  {
    step: 4,
    title: '2021 - Enterprise Growth',
    description: 'Achieved $50M ARR with 500+ enterprise customers',
  },
  {
    step: 5,
    title: '2023 - Series B',
    description: '$50M Series B funding for AI and platform expansion',
  },
  {
    step: 6,
    title: '2024 - Market Leader',
    description: 'Recognized as leader in enterprise SaaS by Gartner',
  },
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

export default function CompanyPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="About Codelinkz"
        title="Transforming Enterprise Software"
        subtitle="Trusted by 500+ global organizations"
        description="Since 2015, Codelinkz has been delivering enterprise software solutions that empower businesses to scale, innovate, and succeed in the digital age."
      />

      {/* Statistics */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {companyStats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <StatsCard
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                  highlight={stat.highlight}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="mb-6 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              Our Story
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'The Beginning',
                content:
                  'Codelinkz was founded on a simple belief: enterprise software should be intuitive, reliable, and accessible. Our founders, frustrated by complex legacy systems, set out to build something better.',
              },
              {
                title: 'Rapid Growth',
                content:
                  'In just three years, we grew from a lean startup to a team of 50+ engineers, serving customers across healthcare, finance, and retail. Our focus on customer success and product excellence fueled our growth.',
              },
              {
                title: 'Global Expansion',
                content:
                  'By 2019, we had expanded to four continents with offices in major business hubs. Our global team brings diverse perspectives and deep expertise across industries and technologies.',
              },
              {
                title: 'Market Leadership',
                content:
                  'Today, Codelinkz is recognized as a market leader in enterprise SaaS, trusted by Fortune 500 companies and innovative startups alike. We continue to push innovation through AI, automation, and cloud-native technologies.',
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3
                  className="font-700 mb-3"
                  style={{
                    fontSize: '20px',
                    color: colors.primary,
                  }}
                >
                  {section.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '26px',
                    color: colors.textSecondary,
                  }}
                >
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((value, i) => (
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
                <motion.div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {value.icon}
                </motion.div>
                <h3
                  className="font-700 mb-3"
                  style={{
                    fontSize: '20px',
                    color: colors.textPrimary,
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    lineHeight: '22px',
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TimelineSection items={timeline} title="Our Journey" description="Key milestones in our growth" />
        </div>
      </section>

      {/* Team & Culture */}
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
              Our Team & Culture
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              Built by passionate engineers and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Diverse Talent',
                description: 'Our team of 200+ spans 30+ countries, bringing diverse perspectives and expertise.',
              },
              {
                title: 'Continuous Learning',
                description: 'We invest in our people with regular training, conferences, and development opportunities.',
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements, competitive benefits, and mental health support.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl text-center"
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
          </div>
        </div>
      </section>

      {/* Leadership */}
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
              Leadership Team
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Rajesh Kumar', role: 'CEO & Founder' },
              { name: 'Priya Sharma', role: 'CTO & Co-Founder' },
              { name: 'Marco Rodriguez', role: 'VP Sales & Partnerships' },
              { name: 'Sarah Chen', role: 'VP Product Engineering' },
            ].map((leader, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.accentBlue}20 100%)`,
                  }}
                >
                  👤
                </div>
                <h3
                  className="font-700 mb-1"
                  style={{
                    fontSize: '16px',
                    color: colors.textPrimary,
                  }}
                >
                  {leader.name}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: colors.textSecondary,
                  }}
                >
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Mission"
        description="Help us transform enterprise software. We're hiring talented engineers and innovators."
        buttonText="View Careers"
        buttonSecondary="Contact Us"
      />
    </div>
  );
}
