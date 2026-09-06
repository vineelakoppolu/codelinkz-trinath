import { motion } from 'framer-motion';
import { Code, Cloud, Database, Shield, Brain, Zap } from 'lucide-react';
import { PageHero, ServiceCard, TimelineSection, CTASection } from '../components/ui';
import { colors, shadows } from '@/theme';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your unique business requirements. From architecture to deployment.',
    highlight: true,
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & Automation',
    description: 'Machine learning solutions and workflow automation to reduce manual work and boost efficiency.',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Solutions',
    description: 'Secure cloud infrastructure, migration, and management on AWS, Azure, or Google Cloud.',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Database Management',
    description: 'Enterprise database design, optimization, and management for maximum performance and reliability.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security & Compliance',
    description: 'HIPAA, SOC 2, ISO 27001 compliance implementation and security infrastructure hardening.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Performance Optimization',
    description: 'System optimization, load testing, and infrastructure scaling for peak performance.',
  },
];

const timeline = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'In-depth analysis of your requirements, systems, and goals. We create a comprehensive roadmap.',
  },
  {
    step: 2,
    title: 'Architecture & Design',
    description: 'Expert system design following enterprise best practices and industry standards.',
  },
  {
    step: 3,
    title: 'Development & Integration',
    description: 'Agile development with regular updates, testing, and seamless integration with existing systems.',
  },
  {
    step: 4,
    title: 'Deployment & Support',
    description: 'Production deployment with monitoring, optimization, and 24/7 support from our team.',
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

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Our Services"
        title="Enterprise Software Services"
        subtitle="From concept to scale"
        description="Comprehensive software development, cloud solutions, and enterprise transformation services designed for businesses that demand excellence."
      />

      {/* Services Grid */}
      <section className="section-padding bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  highlight={service.highlight}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
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
              Service Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Expert Team',
                description: 'Senior engineers with 10+ years of enterprise experience across all major technologies and platforms.',
                stats: '50+ Engineers',
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock support, monitoring, and incident response for production systems.',
                stats: '99.99% Uptime',
              },
              {
                title: 'Agile Methodology',
                description: 'Flexible, iterative development with regular demos and continuous improvement based on feedback.',
                stats: '2-Week Sprints',
              },
              {
                title: 'Quality Assurance',
                description: 'Comprehensive testing, code reviews, and quality metrics at every stage of development.',
                stats: '95%+ Coverage',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl"
                style={{
                  background: colors.card,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="text-3xl font-700 mb-2"
                  style={{ color: colors.primary }}
                >
                  {feature.stats}
                </div>
                <h3
                  className="mb-3 font-700"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Timeline */}
      <section className="section-padding bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TimelineSection items={timeline} title="Our Process" description="Four-step engagement model ensuring success" />
        </div>
      </section>

      {/* Technology Stack */}
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
              Technology Stack
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              We work with the latest enterprise technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Backend', techs: ['Node.js', 'Python', 'Go', 'Java', 'C#'] },
              { title: 'Frontend', techs: ['React', 'Vue', 'Angular', 'TypeScript', 'Tailwind'] },
              { title: 'Cloud & DevOps', techs: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Terraform'] },
            ].map((category, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl"
                style={{
                  background: colors.card,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
                whileHover={{ y: -4 }}
              >
                <h3
                  className="font-700 mb-4"
                  style={{
                    fontSize: '18px',
                    color: colors.primary,
                  }}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-sm font-600"
                      style={{
                        background: colors.accentSky,
                        color: colors.primary,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Build Something Great"
        description="Start your transformation journey with our expert team. We're ready to tackle your toughest challenges."
        buttonText="Discuss Your Project"
        buttonSecondary="View Case Studies"
      />
    </div>
  );
}
