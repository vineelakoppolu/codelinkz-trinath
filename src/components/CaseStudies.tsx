import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Database,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Truck,
  type LucideIcon,
} from 'lucide-react';

type Metric = { value: string; label: string };

type CaseStudy = {
  id: string;
  industry: string;
  industryIcon: LucideIcon;
  client: string;
  title: string;
  summary: string;
  image: string;
  metrics: [Metric, Metric, Metric];
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

const FALLBACK_IMAGE = unsplash('photo-1451187580459-43490279c0fa');

/** Royalty-free photos (Unsplash) */
const caseStudies: CaseStudy[] = [
  {
    id: 'healthcare',
    industry: 'Healthcare',
    industryIcon: HeartPulse,
    client: 'Narayana Health',
    title: 'Modernizing Patient Experience with a Digital Platform',
    summary:
      'We developed a unified digital platform to enhance patient engagement, streamline operations, and improve service delivery.',
    image: unsplash('photo-1586773860418-d37222d8fce3'),
    metrics: [
      { value: '40%', label: 'Faster Patient Onboarding' },
      { value: '60%', label: 'Improved Operational Efficiency' },
      { value: '3x', label: 'Increase in User Engagement' },
    ],
  },
  {
    id: 'finance',
    industry: 'Finance',
    industryIcon: Database,
    client: 'FinEdge Solutions',
    title: 'Building a Scalable Financial Analytics Platform',
    summary:
      'We designed and implemented a secure, scalable analytics platform to help the client gain real-time insights and make data-driven decisions.',
    image: unsplash('photo-1551288049-bebda4e38f71'),
    metrics: [
      { value: '50%', label: 'Reduction in Manual Reporting' },
      { value: '70%', label: 'Faster Data Processing' },
      { value: '2x', label: 'Growth in Customer Retention' },
    ],
  },
  {
    id: 'retail',
    industry: 'Retail',
    industryIcon: ShoppingCart,
    client: 'QuickCart',
    title: 'Transforming eCommerce with a Modern Web Solution',
    summary:
      'We built a high-performance eCommerce platform with seamless user experience, multi-channel integration, and advanced analytics.',
    image: unsplash('photo-1607082348824-0a96f2a4b9da'),
    metrics: [
      { value: '3x', label: 'Increase in Online Sales' },
      { value: '45%', label: 'Improved Site Performance' },
      { value: '50%', label: 'Reduction in Cart Abandonment' },
    ],
  },
  {
    id: 'logistics',
    industry: 'Logistics',
    industryIcon: Truck,
    client: 'ShipStream',
    title: 'Real-Time Fleet Tracking for a Logistics Leader',
    summary:
      'We delivered a cloud-native tracking and dispatch system that gives operations teams live visibility across every shipment.',
    image: unsplash('photo-1586528116311-ad8dd3c8310d'),
    metrics: [
      { value: '35%', label: 'Lower Delivery Delays' },
      { value: '99.9%', label: 'Platform Uptime' },
      { value: '2x', label: 'Faster Dispatch Planning' },
    ],
  },
  {
    id: 'education',
    industry: 'Education',
    industryIcon: GraduationCap,
    client: 'LearnSphere',
    title: 'Scaling an Online Learning Platform Nationwide',
    summary:
      'We re-architected a learning platform to support live classes, assessments, and analytics for thousands of concurrent students.',
    image: unsplash('photo-1523240795612-9a054b0db644'),
    metrics: [
      { value: '5x', label: 'Concurrent Learner Capacity' },
      { value: '42%', label: 'Higher Course Completion' },
      { value: '30%', label: 'Lower Hosting Costs' },
    ],
  },
];

function useVisibleCount() {
  const getCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const onResize = () => setCount(getCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return count;
}

export default function CaseStudies() {
  const navigate = useNavigate();
  const visibleCount = useVisibleCount();
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = caseStudies.length;

  const move = (dir: number) => {
    setDirection(dir);
    setStart((s) => (s + dir + total) % total);
  };

  const visible = Array.from({ length: visibleCount }, (_, i) => caseStudies[(start + i) % total]);
  const highlightIndex = visibleCount === 3 ? 1 : 0;

  return (
    <section className="home-cases relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="home-cases__decor pointer-events-none absolute inset-0" aria-hidden>
        <span className="home-cases__glow" />
        <svg className="home-cases__arc" viewBox="0 0 260 200" fill="none">
          <path d="M10 190 C 40 90, 140 30, 250 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="58" cy="94" r="6" className="home-cases__arc-dot" />
          <circle cx="232" cy="20" r="7" className="home-cases__arc-dot" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 flex flex-col gap-6 md:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#64748B] dark:text-[#94A3B8]">
                Case Studies
              </span>
              <span className="home-blog-eyebrow__line" />
            </div>
            <h2 className="mb-4 text-[clamp(1.85rem,3.6vw,2.85rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0F172A] dark:text-white">
              Real Results. <span className="text-[#1863BA] dark:text-[#00B2FE]">Real Impact.</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-[#515254] dark:text-white md:text-base">
              See how we help businesses overcome challenges and achieve measurable success through
              innovative technology solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-start lg:gap-6">
            <button
              type="button"
              onClick={() => navigate('/company')}
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#1863BA]/35 px-6 py-3 text-sm font-bold text-[#1863BA] transition-all duration-300 hover:border-[#1863BA] hover:bg-[#1863BA]/5 dark:border-[#00B2FE]/40 dark:text-[#00B2FE] dark:hover:bg-[#00B2FE]/10"
            >
              View All Case Studies
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => move(-1)} aria-label="Previous case studies" className="home-cases__nav">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next case studies"
                className="home-cases__nav home-cases__nav--primary"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((study, i) => (
              <motion.div
                key={`${study.id}-${i}`}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="h-full"
              >
                <CaseStudyCard
                  study={study}
                  highlighted={i === highlightIndex}
                  onRead={() => navigate('/company')}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 lg:hidden">
          {caseStudies.map((study, i) => (
            <button
              key={study.id}
              type="button"
              aria-label={`Show case study ${i + 1}`}
              onClick={() => {
                setDirection(i > start ? 1 : -1);
                setStart(i);
              }}
              className={`home-testimonials__dot ${i === start ? 'home-testimonials__dot--active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  highlighted,
  onRead,
}: {
  study: CaseStudy;
  highlighted: boolean;
  onRead: () => void;
}) {
  const Icon = study.industryIcon;

  return (
    <article className={`home-case-card group flex h-full flex-col ${highlighted ? 'home-case-card--active' : ''}`}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={study.image}
          alt=""
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(event) => {
            if (event.currentTarget.src !== FALLBACK_IMAGE) event.currentTarget.src = FALLBACK_IMAGE;
          }}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      </div>

      <div className="home-case-card__body relative -mt-6 flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="home-blog-category-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold">
            <Icon className="h-3.5 w-3.5" />
            {study.industry}
          </span>
          <span className="home-case-card__client truncate text-xs font-semibold text-[#515254] dark:text-white/80">
            {study.client}
          </span>
        </div>

        <h3 className="mb-2 line-clamp-2 text-lg font-extrabold leading-snug tracking-[-0.01em] text-[#0F172A] dark:text-white">
          {study.title}
        </h3>
        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-[#515254] dark:text-[#C5D0DC]">
          {study.summary}
        </p>

        <div className="home-case-card__metrics mt-auto grid grid-cols-3">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="home-case-card__metric px-2 py-3 text-center">
              <p className="text-xl font-extrabold leading-none tracking-[-0.02em] text-[#1863BA] dark:text-[#00B2FE] md:text-[22px]">
                {metric.value}
              </p>
              <p className="mt-1.5 text-[11px] leading-tight text-[#515254] dark:text-[#C5D0DC]">{metric.label}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onRead}
          className="home-blog-read mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-[#1863BA] dark:text-[#00B2FE]"
        >
          Read Case Study
          <span className="home-blog-read__icon">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </button>
      </div>
    </article>
  );
}
