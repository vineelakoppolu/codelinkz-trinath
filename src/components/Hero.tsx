import { ArrowRight, Play } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { HeroButton } from './ui';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 14,
      stiffness: 180,
    },
  },
};

export default function Hero() {
  return (
    <section className="hero-shell relative min-h-[100svh] overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div
        className="hero-photo absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero/bg.jpg')" }}
      />
      <div className="hero-wash pointer-events-none absolute inset-0" />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1863BA]/15 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:shadow-none"
          >
            <span className="h-2 w-2 rounded-full bg-[#00B2FE]" />
            <span className="text-xs font-700 tracking-[0.08em] text-[#1863BA] dark:text-white/85">
              ENTERPRISE AI SAAS PLATFORM
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title mb-6 text-left font-800 tracking-tight">
            <span className="block whitespace-nowrap">Transform Your Operations.</span>
            <span className="mt-1 block whitespace-nowrap">
              Across Your <span className="hero-title-accent">Enterprise.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-xl text-base leading-7 text-[#334155] md:text-lg dark:text-white/80"
          >
            Unify workflows, automate tasks, and power smarter operations from one platform.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <HeroButton
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
              className="hover:scale-[1.03]"
            >
              Start Free Trial
            </HeroButton>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1863BA]/20 bg-white/70 px-7 py-3.5 text-base font-700 text-[#1863BA] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg dark:border-white/25 dark:bg-white/10 dark:text-white dark:hover:bg-white/18"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative">
          <div
            className="absolute -inset-5 rounded-[36px] blur-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(0,178,254,0.28), rgba(24,99,186,0.22))' }}
          />
          <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_30px_80px_rgba(11,37,69,0.14)] dark:border-white/20 dark:bg-[#071224]/50 dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,178,254,0.12) 0%, transparent 42%, rgba(24,99,186,0.14) 100%)',
              }}
            />
            <video
              className="relative z-10 aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              autoPlay
              muted
              loop
              playsInline
              poster="/hero/bg.jpg"
            >
              <source src="/hero/ops.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-[#0B2545]/70 via-[#0B2545]/15 to-transparent p-5 pt-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-700 text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00B2FE]" />
                Live operations feed
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
