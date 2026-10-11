import { motion } from 'framer-motion';
import { ArrowRight, Clock, Rocket, ShieldCheck, Sparkles, Users } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description?: string;
  eyebrow?: string;
  buttonText?: string;
  buttonSecondary?: string;
  onButtonClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundColor?: string;
}

const trustChips = [
  { icon: ShieldCheck, label: 'Free consultation', className: 'cta-banner__chip--one' },
  { icon: Clock, label: 'Reply within 24 hours', className: 'cta-banner__chip--two' },
  { icon: Users, label: '500+ enterprise clients', className: 'cta-banner__chip--three' },
];

/**
 * CTASection - Premium call-to-action banner
 */
export function CTASection({
  title,
  description,
  eyebrow = "Let's work together",
  buttonText = 'Get Started',
  buttonSecondary,
  onButtonClick,
  onSecondaryClick,
  backgroundColor,
}: CTASectionProps) {
  return (
    <section className="cta-section relative pb-16 pt-4 md:pb-20 md:pt-6" style={backgroundColor ? { background: backgroundColor } : undefined}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="cta-banner relative overflow-hidden rounded-[28px] px-6 py-10 sm:px-10 md:py-14 lg:px-14"
        >
          <span className="cta-banner__orb cta-banner__orb--a" aria-hidden />
          <span className="cta-banner__orb cta-banner__orb--b" aria-hidden />
          <span className="cta-banner__grid" aria-hidden />
          <span className="cta-banner__sheen" aria-hidden />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
            <div className="text-center lg:text-left">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#7DD3FC]" />
                {eyebrow}
              </p>

              <h2 className="mb-4 text-[clamp(1.7rem,3.4vw,2.75rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
                {title}
              </h2>

              {description && (
                <p className="mx-auto mb-8 max-w-xl text-[15px] leading-relaxed text-white md:text-base lg:mx-0">
                  {description}
                </p>
              )}

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <button type="button" onClick={onButtonClick} className="cta-banner__primary">
                  {buttonText}
                  <span className="cta-banner__primary-icon">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
                {buttonSecondary && (
                  <button type="button" onClick={onSecondaryClick} className="cta-banner__secondary">
                    {buttonSecondary}
                  </button>
                )}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
                {trustChips.map(({ icon: Icon, label }) => (
                  <span key={label} className="cta-banner__chip-inline">
                    <Icon className="h-3.5 w-3.5 text-[#7DD3FC]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative hidden h-[300px] lg:block" aria-hidden>
              <div className="cta-banner__rings">
                <span className="cta-banner__ring cta-banner__ring--outer" />
                <span className="cta-banner__ring cta-banner__ring--mid" />
                <span className="cta-banner__ring cta-banner__ring--inner" />
                <span className="cta-banner__core">
                  <Rocket className="h-9 w-9" />
                </span>
              </div>
              {trustChips.map(({ icon: Icon, label, className }) => (
                <span key={label} className={`cta-banner__chip ${className}`}>
                  <span className="cta-banner__chip-icon">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
