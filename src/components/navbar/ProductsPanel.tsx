import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors } from '@/theme';
import { productCategories } from '@/data/navigation';

export function ProductsPanel({ onClose }: { onClose: () => void }) {
  const [activeId, setActiveId] = useState(productCategories[0].id);
  const navigate = useNavigate();
  const active = productCategories.find((c) => c.id === activeId) ?? productCategories[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-[420px]">
      <aside className="pr-4 lg:pr-6 lg:border-r" style={{ borderColor: 'rgba(29,104,190,0.1)' }}>
        <div className="space-y-1">
          {productCategories.map((category) => {
            const selected = category.id === activeId;
            return (
              <button
                key={category.id}
                type="button"
                className={`brand-fill-item ${selected ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveId(category.id)}
                onFocus={() => setActiveId(category.id)}
                onClick={() => setActiveId(category.id)}
              >
                <span className="fill-wash" />
                <span className="relative z-10 flex items-center justify-between gap-3">
                  <span className="fill-title text-[16px] font-semibold">
                    {category.label}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 transition-colors ${selected ? 'text-white' : 'text-[#00AEFE]'}`}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="relative pt-2 lg:pl-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-0 right-0 h-9 w-9 rounded-full flex items-center justify-center transition-colors"
          style={{ color: colors.primary, background: 'rgba(0,174,254,0.08)' }}
          aria-label="Close products menu"
        >
          <X className="h-4 w-4" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-[28px] font-800 tracking-tight pr-12" style={{ color: colors.primary }}>
              {active.headline}
            </h3>
            <p className="mt-2 text-sm max-w-xl" style={{ color: colors.textSecondary }}>
              {active.intro}{' '}
              <button
                type="button"
                className="font-700 underline-offset-4 hover:underline"
                style={{ color: colors.accentBlue }}
                onClick={() => {
                  onClose();
                  navigate('/products');
                }}
              >
                Browse all products
              </button>
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2">
              {active.items.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="brand-fill-item"
                  onClick={() => {
                    onClose();
                    navigate(item.href);
                  }}
                >
                  <span className="fill-wash" />
                  <span className="relative z-10 block">
                    <span className="fill-title block text-[16px] font-semibold">{item.title}</span>
                    <span className="fill-desc mt-1 block text-[13.5px] font-medium leading-relaxed">{item.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
