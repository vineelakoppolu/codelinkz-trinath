import { motion } from 'framer-motion';
import { colors } from '@/theme';
import { HeroButton } from './HeroButton';

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonSecondary?: string;
  onButtonClick?: () => void;
  backgroundColor?: string;
}

/**
 * CTASection - Premium call-to-action section
 */
export function CTASection({
  title,
  description,
  buttonText = 'Get Started',
  buttonSecondary,
  onButtonClick,
  backgroundColor,
}: CTASectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: backgroundColor || `linear-gradient(135deg, ${colors.primary}08 0%, ${colors.accentBlue}08 100%)`,
        }}
      />

      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
        }}
      />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${colors.accentBlue}10 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="mb-6 font-700"
          style={{
            fontSize: '48px',
            lineHeight: '56px',
            color: colors.textPrimary,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            className="mb-8"
            style={{
              fontSize: '18px',
              lineHeight: '28px',
              color: colors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto 32px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {description}
          </motion.p>
        )}

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroButton variant="primary" size="lg" onClick={onButtonClick}>
            {buttonText}
          </HeroButton>
          {buttonSecondary && (
            <HeroButton variant="secondary" size="lg">
              {buttonSecondary}
            </HeroButton>
          )}
        </motion.div>
      </div>
    </section>
  );
}
