import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { colors, logos, royalAlpha } from '@/theme';
import { useTheme } from '@/theme/ThemeProvider';
import { serviceColumns, technologyColumns, companyItems, productCategories } from '@/data/navigation';
import { GlowMenuTrack, GlowNavItem } from './ui/glow-menu';
import { CompanyPanel, ServicesPanel, TechnologyPanel } from './navbar/MegaPanels';
import { ProductsPanel } from './navbar/ProductsPanel';
import { FillItem } from './navbar/FillItem';

type MenuKey = 'services' | 'technology' | 'products' | 'company';

const trailingLinks = [
  { label: 'Work', href: '/solutions' },
  { label: 'Blog', href: '/' },
  { label: 'Contact us', href: '/company' },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const closeTimer = useRef<number>();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const open = (key: MenuKey) => {
    window.clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  };

  const go = (href: string) => {
    setOpenMenu(null);
    setMobileOpen(false);
    navigate(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="transition-[box-shadow,background] duration-300"
        style={{
          background: openMenu || mobileOpen ? 'var(--background)' : 'transparent',
          boxShadow: openMenu || mobileOpen ? '0 10px 40px rgba(29, 104, 190, 0.08)' : 'none',
        }}
        onMouseLeave={scheduleClose}
      >
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
          <div className="flex items-center h-[88px] lg:h-[96px] gap-6 lg:gap-10">
            <motion.button
              type="button"
              onClick={() => go('/')}
              className="flex items-center bg-transparent border-none cursor-pointer p-0 shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="CodeLink SOLUTION home"
            >
              <img
                src={isDark ? logos.footer : logos.header}
                alt="CodeLink SOLUTION"
                className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain rounded-md"
              />
            </motion.button>

            <div
              className="hidden xl:block flex-1 min-w-0 px-4"
              onMouseEnter={() => window.clearTimeout(closeTimer.current)}
            >
              <GlowMenuTrack>
                <GlowNavItem
                  label="Services"
                  hasMenu
                  open={openMenu === 'services'}
                  onEnter={() => open('services')}
                  onClick={() => go('/services')}
                />
                <GlowNavItem
                  label="Technology Focus"
                  hasMenu
                  open={openMenu === 'technology'}
                  onEnter={() => open('technology')}
                  onClick={() => go('/technologies')}
                />
                <GlowNavItem
                  label="Products"
                  hasMenu
                  open={openMenu === 'products'}
                  onEnter={() => open('products')}
                  onClick={() => go('/products')}
                />
                <GlowNavItem label="Career" onEnter={scheduleClose} onClick={() => go('/company')} />
                <GlowNavItem
                  label="Company"
                  hasMenu
                  open={openMenu === 'company'}
                  onEnter={() => open('company')}
                  onClick={() => go('/company')}
                />
                {trailingLinks.map((link) => (
                  <GlowNavItem
                    key={link.label}
                    label={link.label}
                    onEnter={scheduleClose}
                    onClick={() => go(link.href)}
                  />
                ))}
              </GlowMenuTrack>
            </div>

            <div className="hidden xl:flex items-center shrink-0" onMouseEnter={scheduleClose}>
              <button
                type="button"
                onClick={() => go('/company')}
                className="header-cta-shine rounded-full px-5 py-2.5 text-sm font-700 text-white"
                style={{ background: colors.gradientPrimary, boxShadow: '0 8px 22px rgba(29,104,190,0.28)' }}
              >
                Get a Quote
              </button>
            </div>

            <motion.button
              type="button"
              className="xl:hidden ml-auto p-2 rounded-xl"
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={{ scale: 0.95 }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" style={{ color: colors.primary }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: colors.primary }} />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {openMenu && (
            <motion.div
              key={openMenu}
              className="hidden xl:block absolute left-0 right-0 top-full"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              onMouseEnter={() => window.clearTimeout(closeTimer.current)}
            >
              <div
                className="mega-panel w-full mt-0 overflow-y-auto"
                style={{
                  background: 'var(--background)',
                  boxShadow: '0 28px 80px var(--shadow-blue)',
                  borderBottom: '1px solid var(--border-light)',
                  maxHeight: 'calc(100vh - 96px)',
                }}
              >
                <div className="h-[2px] w-full header-hairline" />
                <div className={`w-full px-8 xl:px-12 ${openMenu === 'services' || openMenu === 'technology' ? 'pt-4 pb-0' : 'py-6'}`}>
                  {openMenu === 'services' && <ServicesPanel onNavigate={() => setOpenMenu(null)} />}
                  {openMenu === 'technology' && <TechnologyPanel onNavigate={() => setOpenMenu(null)} />}
                  {openMenu === 'products' && <ProductsPanel onClose={() => setOpenMenu(null)} />}
                  {openMenu === 'company' && <CompanyPanel onNavigate={() => setOpenMenu(null)} />}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {openMenu && (
        <button
          type="button"
          className="hidden xl:block fixed inset-0 top-[96px] -z-10"
          style={{ background: royalAlpha(0.18) }}
          aria-label="Close menu overlay"
          onClick={() => setOpenMenu(null)}
        />
      )}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden border-b"
            style={{ background: 'var(--background)', borderColor: 'rgba(29,104,190,0.1)' }}
          >
            <div className="header-hairline h-[2px] w-full" />
            <div className="px-5 py-4 max-h-[78vh] overflow-y-auto space-y-2">
              <MobileAccordion
                label="Services"
                open={mobileSection === 'services'}
                onToggle={() => setMobileSection((s) => (s === 'services' ? null : 'services'))}
              >
                {serviceColumns.flatMap((col) =>
                  col.items.map((item) => <FillItem key={item.title} {...item} compact onClick={() => setMobileOpen(false)} />),
                )}
              </MobileAccordion>

              <MobileAccordion
                label="Technology Focus"
                open={mobileSection === 'technology'}
                onToggle={() => setMobileSection((s) => (s === 'technology' ? null : 'technology'))}
              >
                {technologyColumns.flatMap((col) =>
                  col.items.map((item) => <FillItem key={item.title} {...item} compact onClick={() => setMobileOpen(false)} />),
                )}
              </MobileAccordion>

              <MobileAccordion
                label="Products"
                open={mobileSection === 'products'}
                onToggle={() => setMobileSection((s) => (s === 'products' ? null : 'products'))}
              >
                {productCategories[0].items.map((item) => (
                  <FillItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                    compact
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </MobileAccordion>

              <button
                type="button"
                className="nav-link-premium w-full text-left"
                onClick={() => go('/company')}
              >
                <NavFill />
                <span className="nav-label">Career</span>
              </button>

              <MobileAccordion
                label="Company"
                open={mobileSection === 'company'}
                onToggle={() => setMobileSection((s) => (s === 'company' ? null : 'company'))}
              >
                {companyItems.map((item) => (
                  <FillItem key={item.title} {...item} compact onClick={() => setMobileOpen(false)} />
                ))}
              </MobileAccordion>

              {trailingLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  className="nav-link-premium w-full text-left"
                  onClick={() => go(link.href)}
                >
                  <NavFill />
                  <span className="nav-label">{link.label}</span>
                </button>
              ))}

              <button
                type="button"
                onClick={() => go('/company')}
                className="header-cta-shine mt-3 w-full rounded-full px-5 py-3 text-sm font-700 text-white"
                style={{ background: colors.gradientPrimary }}
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavFill() {
  return (
    <>
      <span className="nav-fill" aria-hidden />
      <span className="nav-shine" aria-hidden />
    </>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className={`nav-link-premium w-full flex items-center justify-between ${open ? 'is-open' : ''}`}
      >
        <NavFill />
        <span className="nav-label w-full justify-between">
          {label}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-3 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
