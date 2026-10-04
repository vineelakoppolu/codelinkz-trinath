import { useEffect, useLayoutEffect, useRef, useState, type TransitionEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const industries = [
  {
    name: 'Healthcare',
    description:
      'Healthcare software development, telemedicine platforms, patient monitoring solutions, EHR systems, wearable health technology, and more.',
    image: '/industries/healthcare.jpg',
    accent: '#EF4444',
  },
  {
    name: 'Entertainment',
    description:
      'Streaming platform development, VR/AR solutions, social media platforms, digital entertainment applications, and more.',
    image: '/industries/entertainment.jpg',
    accent: '#DB2777',
  },
  {
    name: 'Real Estate',
    description:
      'Property management software, virtual property tours, real estate analytics, listing platforms, CRM solutions, and more.',
    image: '/industries/real-estate.jpg',
    accent: '#1863BA',
  },
  {
    name: 'E-commerce',
    description:
      'E-commerce platform development, CRM solutions, supply chain systems, payment gateway integration, and more.',
    image: '/industries/ecommerce.jpg',
    accent: '#F59E0B',
  },
  {
    name: 'Banking & Finance',
    description:
      'Fintech application development, blockchain solutions, digital banking applications, tax management software, and more.',
    image: '/industries/banking.jpg',
    accent: '#10B981',
  },
  {
    name: 'Travel & Hospitality',
    description:
      'Travel booking platforms, hotel management systems, itinerary solutions, tourism applications, and more.',
    image: '/industries/travel.jpg',
    accent: '#00B2FE',
  },
  {
    name: 'Manufacturing',
    description:
      'CAD/CAM software development, ERP solutions, manufacturing management systems, predictive maintenance, and more.',
    image: '/industries/manufacturing.jpg',
    accent: '#7C3AED',
  },
  {
    name: 'Logistics',
    description:
      'WMS and TMS solutions, fleet management systems, ERP platforms, supply chain solutions, and more.',
    image: '/industries/logistics.jpg',
    accent: '#EA580C',
  },
];

const GAP = 20;
const LOOP_COPIES = 3;
const loopedIndustries = Array.from({ length: LOOP_COPIES }, (_, copy) =>
  industries.map((industry) => ({ ...industry, loopKey: `${copy}-${industry.name}` })),
).flat();

export default function IndustriesWeServe() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(industries.length);
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const transitioningRef = useRef(false);

  const measure = () => {
    const card = trackRef.current?.querySelector<HTMLElement>('[data-industry-card]');
    if (!card) return;
    setStep(card.offsetWidth + GAP);
  };

  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const go = (direction: 1 | -1) => {
    if (transitioningRef.current || !step) return;
    transitioningRef.current = true;
    setAnimate(true);
    setIndex((current) => current + direction);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== trackRef.current || event.propertyName !== 'transform') return;
    transitioningRef.current = false;

    if (index >= industries.length * 2) {
      setAnimate(false);
      setIndex((current) => current - industries.length);
      return;
    }

    if (index < industries.length) {
      setAnimate(false);
      setIndex((current) => current + industries.length);
    }
  };

  useLayoutEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate, index]);

  useEffect(() => {
    if (paused || !step) return;
    const timer = window.setInterval(() => go(1), 3800);
    return () => window.clearInterval(timer);
  }, [paused, step, index]);

  return (
    <section className="relative py-20 md:py-24" style={{ background: 'var(--background)' }}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <h2 className="text-4xl font-800 md:text-5xl" style={{ color: 'var(--text-primary)' }}>
            <span className="services-title-accent">Industries</span> We Serve
          </h2>
          <p className="mt-4 text-base leading-7 md:text-lg" style={{ color: 'var(--text-secondary)' }}>
            We deliver industry-specific solutions tailored to your business needs, combining domain expertise with the right technology to support growth and efficiency.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <button
            type="button"
            aria-label="Previous industries"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg transition-all duration-300 hover:scale-105 sm:-left-2 lg:-left-3"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border-light)',
              color: 'var(--text-primary)',
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next industries"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border shadow-lg transition-all duration-300 hover:scale-105 sm:-right-2 lg:-right-3"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border-light)',
              color: 'var(--text-primary)',
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div ref={viewportRef} className="overflow-hidden px-1">
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: GAP,
                transform: step ? `translate3d(-${index * step}px, 0, 0)` : undefined,
                transition: animate ? 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
                willChange: 'transform',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedIndustries.map((industry) => (
                <article
                  key={industry.loopKey}
                  data-industry-card
                  className="group relative h-[340px] w-[min(82vw,300px)] shrink-0 overflow-hidden rounded-[28px] shadow-lg transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl sm:w-[300px] lg:w-[320px]"
                >
                  <img
                    src={industry.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(11,37,69,0.05) 20%, rgba(11,37,69,0.88) 100%)',
                    }}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    style={{ background: industry.accent }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-800">{industry.name}</h3>
                    <p className="mt-2 line-clamp-4 text-sm leading-6 text-white/85">{industry.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
