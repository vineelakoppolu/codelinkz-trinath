import { motion } from 'framer-motion';
import { Database, Cloud, Lock, Zap, Brain, Network } from 'lucide-react';
import { PageHero, ProductCard, CTASection } from '../components/ui';
import { colors, shadows } from '@/theme';

const technologies = [
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Modern Databases',
    description: 'PostgreSQL, MongoDB, Redis, Elasticsearch, DynamoDB for every data need.',
    features: ['ACID Compliance', 'Real-time Sync', 'Auto-scaling', 'Global Replication'],
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud Infrastructure',
    description: 'AWS, Google Cloud, Azure with Kubernetes, Docker, and serverless computing.',
    features: ['Multi-region', 'Auto-scaling', 'CDN Integration', 'Disaster Recovery'],
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Security First',
    description: 'End-to-end encryption, OAuth2, JWT, SAML, and compliance frameworks.',
    features: ['SOC 2 Type II', 'HIPAA Ready', 'ISO 27001', 'Penetration Testing'],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & ML',
    description: 'TensorFlow, PyTorch, OpenAI APIs for intelligent automation and predictions.',
    features: ['NLP Processing', 'Computer Vision', 'Predictive Analytics', 'Chatbots'],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Real-time Processing',
    description: 'Apache Kafka, Apache Spark, RabbitMQ for high-throughput data processing.',
    features: ['Event Streaming', 'Message Queuing', 'Stream Analytics', 'Batch Processing'],
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'API & Integration',
    description: 'RESTful APIs, GraphQL, Webhooks, and 1000+ third-party integrations.',
    features: ['OpenAPI/Swagger', 'Rate Limiting', 'API Versioning', 'Developer Portal'],
  },
];

const architectures = [
  {
    name: 'Microservices',
    description: 'Independently deployable services for maximum scalability and flexibility.',
    benefits: 'Fast deployments, easy scaling, independent team ownership',
  },
  {
    name: 'Serverless',
    description: 'Event-driven computing with automatic scaling and pay-per-use pricing.',
    benefits: 'Cost-effective, instant scaling, reduced operational overhead',
  },
  {
    name: 'Event-Driven',
    description: 'Asynchronous messaging for decoupled systems and real-time processing.',
    benefits: 'High throughput, loose coupling, resilient systems',
  },
  {
    name: 'Domain-Driven',
    description: 'Domain-focused architecture with bounded contexts and strategic design.',
    benefits: 'Clear boundaries, easier testing, business alignment',
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

export default function TechnologiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Technology Stack"
        title="Enterprise-Grade Technologies"
        subtitle="Built on the most reliable and scalable platforms"
        description="Codelinkz leverages cutting-edge technologies to deliver robust, secure, and scalable solutions that power the world's most demanding applications."
      />

      {/* Technologies Grid */}
      <section className="section-padding bg-background-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ProductCard
                  icon={tech.icon}
                  title={tech.title}
                  description={tech.description}
                  features={tech.features}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architecture Patterns */}
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
              Architecture Patterns
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              Proven patterns for scalable, maintainable systems
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {architectures.map((arch, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 rounded-2xl"
                style={{
                  background: colors.card,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
                whileHover={{ y: -4 }}
              >
                <h3
                  className="mb-3 font-700"
                  style={{
                    fontSize: '20px',
                    color: colors.primary,
                  }}
                >
                  {arch.name}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    lineHeight: '22px',
                  }}
                >
                  {arch.description}
                </p>
                <div
                  style={{
                    fontSize: '13px',
                    color: colors.accentBlue,
                    fontWeight: 600,
                  }}
                >
                  ✓ {arch.benefits}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack by Layer */}
      <section className="section-padding bg-background-soft">
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
              Complete Tech Stack
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                layer: 'Frontend',
                techs: 'React, Vue, Angular, Next.js, Svelte, TypeScript, Tailwind CSS, Framer Motion',
              },
              {
                layer: 'Backend',
                techs: 'Node.js, Python, Go, Java, C#, Rust, Spring Boot, Django, FastAPI',
              },
              {
                layer: 'Data & Analytics',
                techs: 'PostgreSQL, MongoDB, Redis, Elasticsearch, Apache Spark, BigQuery, Snowflake',
              },
              {
                layer: 'Cloud & DevOps',
                techs: 'AWS, Google Cloud, Azure, Kubernetes, Docker, Terraform, GitLab CI/CD, Jenkins',
              },
              {
                layer: 'Security & Auth',
                techs: 'OAuth2, JWT, SAML, OpenID Connect, HashiCorp Vault, SSL/TLS, Okta',
              },
              {
                layer: 'AI & ML',
                techs: 'TensorFlow, PyTorch, Scikit-learn, OpenAI, Hugging Face, LangChain, Vertex AI',
              },
            ].map((stack, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl"
                style={{
                  background: i % 2 === 0 ? colors.card : colors.accentSky,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
                whileHover={{ x: 4 }}
              >
                <h3
                  className="font-700 mb-3"
                  style={{
                    fontSize: '16px',
                    color: i % 2 === 0 ? colors.primary : colors.textPrimary,
                  }}
                >
                  {stack.layer}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: i % 2 === 0 ? colors.textSecondary : colors.textPrimary,
                    lineHeight: '22px',
                  }}
                >
                  {stack.techs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
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
              Performance & Reliability
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '99.99%', label: 'Uptime SLA', desc: 'Enterprise-grade availability' },
              { metric: '<100ms', label: 'Response Time', desc: 'Optimized for speed' },
              { metric: '∞', label: 'Scalability', desc: 'Handles any load' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-8 rounded-xl"
                style={{
                  background: colors.card,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.premium,
                }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="text-4xl font-700 mb-2"
                  style={{ color: colors.primary }}
                >
                  {stat.metric}
                </div>
                <h3
                  className="font-700 mb-2"
                  style={{
                    fontSize: '16px',
                    color: colors.textPrimary,
                  }}
                >
                  {stat.label}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: colors.textSecondary,
                  }}
                >
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Modernize Your Tech Stack?"
        description="Our experts can help you select and implement the right technologies for your specific needs."
        buttonText="Consult Our Team"
        buttonSecondary="View Case Studies"
      />
    </div>
  );
}
