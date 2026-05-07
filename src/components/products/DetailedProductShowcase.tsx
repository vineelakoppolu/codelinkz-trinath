import { motion } from 'framer-motion';
import { type LucideIcon, Check } from 'lucide-react';
import { colors, shadows } from '@/theme';

interface DetailedProductProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  stats: { label: string; value: string }[];
  imagePosition?: 'left' | 'right';
  accentColor?: string;
}

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

export function DetailedProductShowcase({
  icon: Icon,
  name,
  tagline,
  description,
  features,
  benefits,
  stats,
  imagePosition = 'left',
  accentColor = colors.primary,
}: DetailedProductProps) {
  const isLeftImage = imagePosition === 'left';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: `${accentColor}15` }}
          >
            <Icon className="w-8 h-8" style={{ color: accentColor }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-800 mb-4" style={{ color: colors.textPrimary }}>
            {name}
          </h2>
          <p className="text-xl mb-2" style={{ color: accentColor, fontWeight: 600 }}>
            {tagline}
          </p>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
            {description}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left Content or Image */}
          <motion.div
            variants={itemVariants}
            className={isLeftImage ? 'order-1' : 'order-2'}
          >
            {/* Dashboard/Product Preview */}
            <div
              className="rounded-2xl p-8 border border-borderLight overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colors.backgroundSoft} 0%, #F0F7FF 100%)`,
                boxShadow: `0 20px 40px ${accentColor}15`,
              }}
            >
              <div className="space-y-4">
                {/* Dashboard Header */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#EF4444' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#F59E0B' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#10B981' }} />
                </div>

                {/* Mock Dashboard Content */}
                <div className="space-y-3">
                  <div className="h-2 bg-borderLight rounded-full w-3/4" />
                  <div className="h-2 bg-borderLight rounded-full w-1/2" />
                </div>

                {/* Mock Chart Area */}
                <div className="mt-6 p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.5)' }}>
                  <div className="flex items-end gap-2 h-20 justify-center">
                    <div className="w-2 h-8" style={{ background: accentColor, borderRadius: '4px' }} />
                    <div className="w-2 h-12" style={{ background: accentColor, borderRadius: '4px' }} />
                    <div className="w-2 h-10" style={{ background: accentColor, borderRadius: '4px' }} />
                    <div className="w-2 h-14" style={{ background: accentColor, borderRadius: '4px' }} />
                    <div className="w-2 h-9" style={{ background: accentColor, borderRadius: '4px' }} />
                  </div>
                </div>

                {/* Mock Metrics */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.5)' }}>
                      <div className="h-2 bg-borderLight rounded-full mb-2" />
                      <div className="h-1.5 bg-borderLight rounded-full w-2/3" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content or Features */}
          <motion.div
            variants={itemVariants}
            className={isLeftImage ? 'order-2' : 'order-1'}
          >
            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-700 mb-6" style={{ color: colors.textPrimary }}>
                Key Features
              </h3>
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ background: `${accentColor}15` }}
                    >
                      <Check className="w-4 h-4" style={{ color: accentColor }} />
                    </div>
                    <span style={{ color: colors.textSecondary }} className="font-500">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-700 mb-6" style={{ color: colors.textPrimary }}>
                Business Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-borderLight"
                    style={{
                      background: `${accentColor}05`,
                      borderColor: `${accentColor}15`,
                    }}
                  >
                    <p style={{ color: colors.textSecondary }} className="text-sm">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        {stats.length > 0 && (
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl border border-borderLight text-center"
                style={{
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: shadows.premium,
                }}
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl font-800 mb-2" style={{ color: accentColor }}>
                  {stat.value}
                </div>
                <div className="text-sm font-500" style={{ color: colors.textSecondary }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
