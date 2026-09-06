import { motion } from 'framer-motion';
import { colors } from '@/theme';

interface TimelineItem {
  step: number;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
  title?: string;
  description?: string;
}

/**
 * TimelineSection - Premium timeline component
 */
export function TimelineSection({
  items,
  title,
  description,
}: TimelineSectionProps) {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-5xl mx-auto">
      {(title || description) && (
        <div className="text-center mb-16">
          {title && (
            <h2
              className="mb-4 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              style={{
                fontSize: '18px',
                color: colors.textSecondary,
              }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Timeline line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-1 hidden md:block"
          style={{
            background: `linear-gradient(to bottom, ${colors.primary} 0%, ${colors.accentBlue} 100%)`,
          }}
        />

        {/* Timeline items */}
        <div className="space-y-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="md:pl-24 relative"
              variants={itemVariants}
            >
              {/* Dot */}
              <motion.div
                className="absolute left-0 top-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-700 hidden md:flex"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
                  boxShadow: `0 0 0 4px ${colors.backgroundSoft}, 0 0 0 6px ${colors.primary}30`,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                viewport={{ once: true }}
              >
                {item.step}
              </motion.div>

              {/* Content card */}
              <motion.div
                className="p-6 rounded-xl"
                style={{
                  background: colors.card,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                }}
              >
                <h3
                  className="font-700 mb-2"
                  style={{
                    fontSize: '18px',
                    color: colors.textPrimary,
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
