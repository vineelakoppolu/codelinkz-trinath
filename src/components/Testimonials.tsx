import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    title: 'CEO, Spice Route',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    quote: 'Codelink transformed how we operate. Revenue up 24% in just 6 months.',
    rating: 5,
  },
  {
    name: 'Dr. Priya Nair',
    title: 'Founder, Wellness First',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    quote: 'Cut administrative burden by 60%. Our doctors focus on patients now.',
    rating: 5,
  },
  {
    name: 'Ankit Shah',
    title: 'COO, Vertex Legal',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    quote: 'Legal operations finally organized. Every case, contract tracked perfectly.',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Testimonials() {
  return (
    <section className="section-padding bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-sm font-700 text-primary uppercase tracking-wide inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Customer Stories
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Trusted by Leaders.{' '}
            <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
              Loved by Users.
            </span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="group glass-card hover:shadow-premium rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {[...Array(t.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                &quot;{t.quote}&quot;
              </p>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 4 }}
              >
                <motion.img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <div className="font-700 text-text-primary text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.title}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
