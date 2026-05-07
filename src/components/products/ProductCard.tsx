import { motion } from 'framer-motion';
import { type LucideIcon, ArrowRight } from 'lucide-react';
import { colors } from '@/theme';

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  features: string[];
  onLearnMore?: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ProductCard({
  icon: Icon,
  name,
  description,
  features,
  onLearnMore,
}: ProductCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group h-full"
      whileHover={{ y: -8 }}
    >
      <div
        className="relative h-full p-8 rounded-2xl border border-borderLight bg-white overflow-hidden transition-all duration-300 hover:border-primary/30"
        style={{
          boxShadow: `0 4px 6px ${colors.primary}05`,
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px at 50% 50%, ${colors.primary}10, transparent)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
            style={{
              background: `${colors.primary}15`,
            }}
          >
            <Icon className="w-7 h-7" style={{ color: colors.primary }} />
          </div>

          {/* Title and Description */}
          <h3 className="text-xl font-700 mb-3" style={{ color: colors.textPrimary }}>
            {name}
          </h3>
          <p className="text-sm mb-6" style={{ color: colors.textSecondary, lineHeight: '1.6' }}>
            {description}
          </p>

          {/* Features */}
          <div className="mb-6 space-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
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

          {/* CTA Button */}
          <button
            onClick={onLearnMore}
            className="w-full py-2 px-4 rounded-lg font-600 text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
            style={{
              background: colors.primary,
            }}
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
