import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

type ProductTab = {
  id: string;
  name: string;
  headline: string;
  description: string;
  prompt: string;
  cardTitle: string;
  status: string;
  points: string[];
  image: string;
  imageAlt: string;
  accent: string;
  wash: string;
};

const products: ProductTab[] = [
  {
    id: 'resto',
    name: 'Restolinkz',
    headline: 'Serve faster. See every shift.',
    description:
      'Restolinkz connects the dining room, kitchen, inventory, and guest loyalty so restaurants run the floor without chasing tickets or stock.',
    prompt: 'Open the dinner service board',
    cardTitle: 'Service is live',
    status: 'IN SYNC',
    points: ['Kitchen display updated', 'Low-stock items flagged', 'Tables turned on time'],
    image: '/products/resto.jpg',
    imageAlt: 'Restaurant dining room ready for service',
    accent: '#F59E0B',
    wash: 'rgba(245, 158, 11, 0.35)',
  },
  {
    id: 'crm',
    name: 'Crmlinkz',
    headline: 'Close the next deal, not another spreadsheet.',
    description:
      'Crmlinkz gives sales teams a clear pipeline, scored leads, and follow-ups that move on their own so revenue does not stall in a shared inbox.',
    prompt: 'Advance the qualified opportunity',
    cardTitle: 'Deal moved to proposal',
    status: 'ON TRACK',
    points: ['Lead score refreshed', 'Follow-up drafted', 'Forecast updated'],
    image: '/products/crm.jpg',
    imageAlt: 'Sales team reviewing a customer pipeline',
    accent: '#00B2FE',
    wash: 'rgba(0, 178, 254, 0.35)',
  },
  {
    id: 'advocate',
    name: 'Advocatelinkz',
    headline: 'Every matter, document, and hour in one place.',
    description:
      'Advocatelinkz helps law firms track cases, bill time accurately, and share files with clients without losing the thread of the work.',
    prompt: 'File the hearing brief',
    cardTitle: 'Matter updated',
    status: 'SECURE',
    points: ['Deadline captured', 'Time entry posted', 'Client copy shared'],
    image: '/products/advocate.jpg',
    imageAlt: 'Legal documents prepared for a case',
    accent: '#7C3AED',
    wash: 'rgba(124, 58, 237, 0.35)',
  },
  {
    id: 'erp',
    name: 'Erplinkz',
    headline: 'Finance, inventory, and operations on one system.',
    description:
      'Erplinkz unifies procurement, stock, finance, and reporting so growing companies stop stitching separate tools together to see the business.',
    prompt: 'Post the purchase order',
    cardTitle: 'Order released',
    status: 'POSTED',
    points: ['Stock reserved', 'Cost center updated', 'Invoice matched'],
    image: '/products/erp.jpg',
    imageAlt: 'Operations dashboard with business metrics',
    accent: '#10B981',
    wash: 'rgba(16, 185, 129, 0.35)',
  },
  {
    id: 'field',
    name: 'Fieldlinkz',
    headline: 'Dispatch the right person, the first time.',
    description:
      'Fieldlinkz plans routes, tracks technicians, and closes work orders from the job site so service teams stay on schedule.',
    prompt: 'Assign the nearest technician',
    cardTitle: 'Work order dispatched',
    status: 'EN ROUTE',
    points: ['Route optimized', 'Customer notified', 'Parts confirmed'],
    image: '/products/field.jpg',
    imageAlt: 'Field technician working on site',
    accent: '#1863BA',
    wash: 'rgba(24, 99, 186, 0.4)',
  },
];

export default function ProductsEcosystem() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const current = products[active];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{ background: 'linear-gradient(165deg, #07182E 0%, #0B2545 42%, #123A66 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(640px 320px at 12% 20%, ${current.wash}, transparent 70%), radial-gradient(520px 280px at 88% 80%, rgba(0,178,254,0.18), transparent 70%)`,
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-800 text-white md:text-5xl">Products that run the work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Five connected platforms for restaurants, sales, legal practices, enterprise operations, and field teams.
          </p>
        </div>

        <div className="mx-auto mb-12 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md lg:rounded-full lg:p-2">
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:flex lg:gap-1">
            {products.map((product, index) => {
              const selected = index === active;
              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className="w-full rounded-full px-3 py-2.5 text-center text-sm font-700 transition-colors duration-300 lg:flex-1 lg:px-4 lg:text-[15px]"
                  style={{
                    background: selected ? '#FFFFFF' : 'transparent',
                    color: selected ? '#0B2545' : 'rgba(255,255,255,0.82)',
                  }}
                >
                  {product.name}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] lg:gap-16"
          >
            <div>
              <h3 className="max-w-xl text-4xl font-800 leading-tight text-white md:text-5xl">{current.headline}</h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg">{current.description}</p>
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-700 text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(90deg, ${current.accent}, #00B2FE)` }}
              >
                Explore {current.name}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="absolute -right-6 top-10 hidden h-56 w-56 rounded-full blur-2xl lg:block"
                style={{ background: current.wash }}
              />
              <div className="relative flex items-start gap-3">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-white/80 sm:h-28 sm:w-28"
                />
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-700 text-[#0F172A] shadow-lg">
                  <span className="h-2 w-2 rounded-full" style={{ background: current.accent }} />
                  {current.prompt}
                </div>
              </div>
              <div className="relative z-10 -mt-2 ml-8 rounded-3xl bg-white p-6 shadow-2xl sm:ml-14">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-xl font-800 text-[#0F172A]">{current.cardTitle}</h4>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-800 tracking-wide text-white"
                    style={{ background: current.accent }}
                  >
                    {current.status}
                  </span>
                </div>
                <p className="mt-4 text-xs font-800 tracking-[0.14em] text-[#515254]">ACTIONS TAKEN</p>
                <ul className="mt-3 space-y-2.5">
                  {current.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-600 text-[#0F172A]">
                      <Check className="h-4 w-4 shrink-0" style={{ color: current.accent }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}