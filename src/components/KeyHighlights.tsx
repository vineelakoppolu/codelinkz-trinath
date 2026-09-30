import { motion } from 'framer-motion';
import { Award, Users, Zap, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: '10+ Scalable SaaS Products',
    description: 'Market-ready solutions serving enterprise and SMB segments across multiple industries.',
    accent: '#1863BA',
  },
  {
    icon: Globe,
    title: 'Multi-Industry Expertise',
    description: 'Proven track record across restaurants, healthcare, legal, HR, logistics, and more.',
    accent: '#00B2FE',
  },
  {
    icon: Zap,
    title: 'Cloud-Ready Solutions',
    description: 'Deployed on AWS/Azure with auto-scaling, high availability, and disaster recovery built-in.',
    accent: '#0076CE',
  },
  {
    icon: Users,
    title: 'AI-Integrated Platforms',
    description: 'Machine learning and automation features that grow smarter with usage and data.',
    accent: '#10B981',
  },
];

const stats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '8B+', label: 'Transactions Monthly' },
  { value: '40+', label: 'Industries Served' },
  { value: '99.99%', label: 'Platform Uptime' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function KeyHighlights() {
  return (
    <section className="py-20" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-800 mb-4">Why We Stand Out</h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Our unique combination of technical excellence, industry expertise, and customer-centric approach.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-2xl border transition-all group"
                style={{ background: 'var(--card)', borderColor: `${item.accent}33`, boxShadow: '0 10px 30px rgba(11,37,69,0.05)' }}
                whileHover={{ y: -8, boxShadow: `0 18px 40px ${item.accent}33` }}
              >
                <div className="h-1.5 w-16 rounded-full mb-5" style={{ background: item.accent }} />
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.accent}18` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.accent }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-700 mb-2">{item.title}</h3>
                    <p className="text-textSecondary text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl p-4 md:p-6"
          style={{ background: 'linear-gradient(135deg, #0B2545 0%, #1863BA 70%, #00B2FE 140%)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-2xl text-center"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.14)' }}
            >
              <div className="text-3xl font-800 mb-1 text-white">
                {stat.value}
              </div>
              <div className="text-xs font-500" style={{ color: '#00B2FE' }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
