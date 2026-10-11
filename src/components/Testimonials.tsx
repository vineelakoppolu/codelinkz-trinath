import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Hexagon, Landmark, Layers, Quote, Star, Zap, type LucideIcon } from 'lucide-react';

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  companyIcon: LucideIcon;
  avatar: string;
  rating: number;
};

const avatar = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop`;

const testimonials: Testimonial[] = [
  {
    id: 'rahul',
    quote:
      'Codelink Solution helped us modernize our infrastructure and streamline operations. Their team is highly professional, responsive, and truly understands business needs.',
    name: 'Rahul Mehta',
    role: 'CTO',
    company: 'FinEdge',
    companyIcon: Landmark,
    avatar: avatar(220453),
    rating: 5,
  },
  {
    id: 'priya',
    quote:
      'Working with Codelink Solution has been a game-changer for our digital transformation journey. Their expertise, innovation, and commitment to quality have significantly improved our efficiency and customer experience.',
    name: 'Priya Sharma',
    role: 'Head of Digital Transformation',
    company: 'Nexora',
    companyIcon: Hexagon,
    avatar: avatar(415829),
    rating: 5,
  },
  {
    id: 'arjun',
    quote:
      'The Codelink team delivered a robust, scalable solution tailored to our needs. Their technical expertise and proactive support made the entire process smooth and successful.',
    name: 'Arjun Rao',
    role: 'CEO',
    company: 'TechNova',
    companyIcon: Zap,
    avatar: avatar(1681010),
    rating: 5,
  },
  {
    id: 'sneha',
    quote:
      'From discovery to launch, Codelink kept us informed at every step. The platform they built handles our peak traffic effortlessly and our team loves using it.',
    name: 'Sneha Iyer',
    role: 'VP Operations',
    company: 'Stackly',
    companyIcon: Layers,
    avatar: avatar(774909),
    rating: 5,
  },
];

const AUTOPLAY_MS = 6500;

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setActive(((next % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(active + 1, 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1, -1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [next, paused]);

  const visible = [-1, 0, 1].map((offset) => ({
    offset,
    item: testimonials[(active + offset + count) % count],
  }));

  return (
    <section className="home-testimonials relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="home-testimonials__decor pointer-events-none absolute inset-0" aria-hidden>
        <span className="home-testimonials__swoosh" />
        <span className="home-testimonials__dots" />
        <svg className="home-testimonials__arc" viewBox="0 0 220 260" fill="none">
          <path d="M20 20 C 140 20, 210 110, 190 250" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="24" r="9" className="home-testimonials__arc-dot" />
          <circle cx="60" cy="24" r="3.5" fill="#ffffff" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#64748B] dark:text-[#94A3B8]">
              Client Testimonials
            </span>
            <span className="home-blog-eyebrow__line" />
          </div>
          <h2 className="mb-4 text-[clamp(1.85rem,3.6vw,2.85rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0F172A] dark:text-white">
            What Our <span className="text-[#1863BA] dark:text-[#00B2FE]">Clients Say</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-[#515254] dark:text-white md:text-base">
            Real experiences from businesses we've partnered with to create meaningful impact.
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="home-testimonials__nav home-testimonials__nav--side absolute -left-2 top-1/2 z-20 -translate-y-1/2 xl:-left-6"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="home-testimonials__nav home-testimonials__nav--side absolute -right-2 top-1/2 z-20 -translate-y-1/2 xl:-right-6"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:px-10">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {visible.map(({ offset, item }) => (
                <motion.div
                  key={`${item.id}-${offset}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -48 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className={offset === 0 ? 'block' : 'hidden lg:block'}
                >
                  <TestimonialCard item={item} active={offset === 0} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:mt-10">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="home-testimonials__nav home-testimonials__nav--inline"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => goTo(i, i > active ? 1 : -1)}
                  className={`home-testimonials__dot ${i === active ? 'home-testimonials__dot--active' : ''}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="home-testimonials__nav home-testimonials__nav--inline"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item, active }: { item: Testimonial; active: boolean }) {
  const CompanyIcon = item.companyIcon;

  return (
    <article className={`home-testimonial-card ${active ? 'home-testimonial-card--active' : ''}`}>
      <span className="home-testimonial-card__quote" aria-hidden>
        <Quote className="h-5 w-5 fill-current" />
      </span>

      <p className="home-testimonial-card__text mb-5 pr-10 text-[15px] leading-[1.7] text-[#515254] dark:text-[#C5D0DC]">
        “{item.quote}”
      </p>

      <div className="mb-5 flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 border-t border-[rgba(24,99,186,0.1)] pt-5 dark:border-white/10">
        <img
          src={item.avatar}
          alt={item.name}
          className="home-testimonial-card__avatar"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="min-w-0">
          <p className="text-base font-bold text-[#0F172A] dark:text-white">{item.name}</p>
          <p className="mb-1.5 text-sm text-[#64748B] dark:text-white/60">{item.role}</p>
          <span className="inline-flex items-center gap-1.5 text-[15px] font-extrabold tracking-[-0.01em] text-[#0B2545] dark:text-white">
            <span className="home-testimonial-card__logo">
              <CompanyIcon className="h-3.5 w-3.5" />
            </span>
            {item.company}
          </span>
        </div>
      </div>
    </article>
  );
}
