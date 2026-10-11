import { useMemo, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Check, ChevronLeft, ChevronRight, Mail, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = ['All', 'Technology', 'Cloud', 'AI & Data', 'Business', 'Insights'] as const;

type Category = (typeof CATEGORIES)[number];

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, 'All'>;
  date: string;
  image: string;
  href: string;
};

/** Royalty-free photos (Unsplash) */
const images = {
  cloud: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
  ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  featured1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
  featured2: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  featured3: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
};

const gridPosts: BlogPost[] = [
  {
    id: 'cloud-scale',
    title: 'How Cloud Migration Helps Businesses Scale Faster',
    excerpt:
      'Discover how modern cloud strategies reduce infrastructure costs, improve agility, and unlock global scale for enterprise teams.',
    category: 'Cloud',
    date: 'Oct 10, 2026',
    image: images.cloud,
    href: '/#blog',
  },
  {
    id: 'ai-enterprise',
    title: 'AI in Enterprise: Practical Use Cases That Drive ROI',
    excerpt:
      'From intelligent automation to predictive analytics—see how leaders deploy AI without disrupting core operations.',
    category: 'AI & Data',
    date: 'Oct 8, 2026',
    image: images.ai,
    href: '/#blog',
  },
  {
    id: 'digital-teams',
    title: 'Building High-Performance Digital Teams in 2026',
    excerpt:
      'Culture, tooling, and delivery models that help distributed teams ship faster while maintaining quality and security.',
    category: 'Technology',
    date: 'Oct 5, 2026',
    image: images.team,
    href: '/#blog',
  },
];

const featuredPosts: BlogPost[] = [
  {
    id: 'featured-innovation',
    title: 'Building a Smarter, More Connected Future with Digital Innovation',
    excerpt:
      'Learn how digital innovation is helping businesses improve efficiency, customer experience, and long-term resilience.',
    category: 'Insights',
    date: 'Oct 12, 2026',
    image: images.featured1,
    href: '/#blog',
  },
  {
    id: 'featured-platform',
    title: 'Platform Engineering: The Backbone of Modern SaaS Delivery',
    excerpt:
      'Why platform teams are becoming essential for velocity, reliability, and developer experience at scale.',
    category: 'Technology',
    date: 'Oct 9, 2026',
    image: images.featured2,
    href: '/#blog',
  },
  {
    id: 'featured-data',
    title: 'Turning Data Into Decisions: A Leader’s Playbook',
    excerpt:
      'Frameworks for trustworthy analytics, governance, and actionable insights across the enterprise.',
    category: 'Business',
    date: 'Oct 6, 2026',
    image: images.featured3,
    href: '/#blog',
  },
];

function matchesCategory(post: BlogPost, active: Category) {
  if (active === 'All') return true;
  return post.category === active;
}

export default function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const filteredGrid = useMemo(
    () => gridPosts.filter((p) => matchesCategory(p, activeCategory)),
    [activeCategory],
  );

  const featured = featuredPosts[featuredIndex];

  const prevFeatured = () => {
    setFeaturedIndex((i) => (i - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const nextFeatured = () => {
    setFeaturedIndex((i) => (i + 1) % featuredPosts.length);
  };

  return (
    <section id="blog" className="home-blog-section relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="home-blog-section__decor pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="home-blog-eyebrow mb-4 flex items-center gap-3">
              <span className="home-blog-eyebrow__line" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#64748B] dark:text-[#94A3B8]">
                Our Blog
              </span>
            </div>
            <h2 className="home-blog-title mb-4 text-[clamp(1.75rem,3.2vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F172A] dark:text-[#F8FAFC]">
              Insights, Ideas and Trends from{' '}
              <span className="text-[#1863BA] dark:text-[#00B2FE]">Our Experts</span>
            </h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[#515254] dark:text-white md:text-base">
              Stay updated with the latest in technology, industry trends, and expert perspectives to
              help your business grow.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/#blog')}
            className="home-blog-view-all inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border-[1.5px] border-[#1863BA]/35 px-6 py-3 text-sm font-bold text-[#1863BA] transition-all duration-300 hover:border-[#1863BA] hover:bg-[#1863BA]/5 dark:border-[#00B2FE]/40 dark:text-[#00B2FE] dark:hover:bg-[#00B2FE]/10 lg:self-auto"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="home-blog-filters mb-8 flex flex-wrap gap-2 md:mb-10">
          {CATEGORIES.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`home-blog-filter-pill rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active ? 'home-blog-filter-pill--active' : ''
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:items-stretch xl:gap-6">
          <div className="flex flex-col gap-5 xl:col-span-8">
          <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(filteredGrid.length ? filteredGrid : gridPosts).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                className="home-blog-card group flex flex-col"
              >
                <div className="home-blog-card__media relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <span className="home-blog-card__shade" aria-hidden />
                  <span className="home-blog-glass-pill absolute left-3 top-3">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] dark:text-white/60">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <h3 className="mb-2 line-clamp-2 text-[17px] font-bold leading-snug tracking-[-0.01em] text-[#0F172A] transition-colors duration-300 group-hover:text-[#1863BA] dark:text-white dark:group-hover:text-[#00B2FE]">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-[#515254] dark:text-[#C5D0DC]">
                    {post.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate(post.href)}
                    className="home-blog-read inline-flex items-center gap-2 self-start text-sm font-bold text-[#1863BA] dark:text-[#00B2FE]"
                  >
                    Read More
                    <span className="home-blog-read__icon">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="home-blog-newsletter relative flex flex-1 flex-col justify-center overflow-hidden rounded-[22px] p-6 md:p-8"
            >
              <span className="home-blog-newsletter__orb" aria-hidden />
              <span className="home-blog-newsletter__dots" aria-hidden />
              <span className="home-blog-newsletter__sheen" aria-hidden />

              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <span className="home-blog-newsletter__icon">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="mb-1.5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7DD3FC]">
                      <Sparkles className="h-3.5 w-3.5" />
                      Weekly Newsletter
                    </p>
                    <h3 className="mb-1.5 text-xl font-extrabold leading-snug tracking-[-0.02em] text-white md:text-2xl">
                      Get expert insights in your inbox
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-white">
                      Tech trends, cloud strategy and AI playbooks from the CodeLink team — once a week.
                    </p>
                  </div>
                </div>

                <div className="w-full lg:max-w-[360px]">
                  {subscribed ? (
                    <p className="home-blog-newsletter__success inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white">
                      <Check className="h-4 w-4" />
                      You're subscribed — thank you!
                    </p>
                  ) : (
                    <form onSubmit={handleSubscribe} className="home-blog-newsletter__form flex items-center gap-2 rounded-full p-1.5">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your work email"
                        aria-label="Email address"
                        className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="home-blog-newsletter__btn inline-flex shrink-0 items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold"
                      >
                        Subscribe
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                  <p className="mt-2.5 pl-4 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative xl:col-span-4">
            <div className="home-blog-featured-art absolute inset-0 hidden xl:block" aria-hidden />
            <motion.article
              key={featured.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="home-blog-featured relative flex h-full flex-col overflow-hidden lg:flex-row xl:flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:w-1/2 xl:aspect-[16/10] xl:w-full">
                <img
                  src={featured.image}
                  alt=""
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="home-blog-card__shade" aria-hidden />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#0B2545]/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  Featured Article
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="home-blog-category-pill rounded-full px-3 py-1 text-xs font-bold">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] dark:text-white/60">
                    <Calendar className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                </div>
                <h3 className="mb-2 line-clamp-2 text-xl font-extrabold leading-snug tracking-[-0.02em] text-[#0F172A] dark:text-white">
                  {featured.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-[#515254] dark:text-[#C5D0DC]">
                  {featured.excerpt}
                </p>
                <button
                  type="button"
                  onClick={() => navigate(featured.href)}
                  className="home-blog-read mb-5 inline-flex items-center gap-2 self-start text-sm font-bold text-[#1863BA] dark:text-[#00B2FE]"
                >
                  Read Full Article
                  <span className="home-blog-read__icon">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(24,99,186,0.08)] pt-4 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    {featuredPosts.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Featured slide ${i + 1}`}
                        onClick={() => setFeaturedIndex(i)}
                        className={`home-blog-carousel-dot h-1 rounded-full transition-all duration-300 ${
                          i === featuredIndex ? 'home-blog-carousel-dot--active w-8' : 'w-5 opacity-40'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevFeatured}
                      className="home-blog-carousel-btn inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] transition hover:border-[#1863BA]/30 dark:border-white/15 dark:bg-white/10 dark:text-white"
                      aria-label="Previous featured article"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextFeatured}
                      className="home-blog-carousel-btn home-blog-carousel-btn--primary inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                      aria-label="Next featured article"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
