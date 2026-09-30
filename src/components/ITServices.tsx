import { useState, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Brain,
  Code2,
  Smartphone,
  PenTool,
  Users,
  Bug,
  RefreshCw,
  Infinity,
  Headset,
  Check,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

type Service = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  cta: string;
  image: string;
  imageAlt: string;
};

const accents: Record<string, { color: string; soft: string; glow: string }> = {
  aiml: { color: '#7C3AED', soft: 'rgba(124, 58, 237, 0.14)', glow: 'rgba(124, 58, 237, 0.28)' },
  software: { color: '#1863BA', soft: 'rgba(24, 99, 186, 0.14)', glow: 'rgba(24, 99, 186, 0.26)' },
  web: { color: '#0891B2', soft: 'rgba(8, 145, 178, 0.14)', glow: 'rgba(8, 145, 178, 0.26)' },
  uiux: { color: '#DB2777', soft: 'rgba(219, 39, 119, 0.14)', glow: 'rgba(219, 39, 119, 0.26)' },
  staff: { color: '#059669', soft: 'rgba(5, 150, 105, 0.14)', glow: 'rgba(5, 150, 105, 0.26)' },
  qa: { color: '#D97706', soft: 'rgba(217, 119, 6, 0.16)', glow: 'rgba(217, 119, 6, 0.28)' },
  migration: { color: '#EA580C', soft: 'rgba(234, 88, 12, 0.14)', glow: 'rgba(234, 88, 12, 0.26)' },
  devops: { color: '#4F46E5', soft: 'rgba(79, 70, 229, 0.14)', glow: 'rgba(79, 70, 229, 0.26)' },
  support: { color: '#0F766E', soft: 'rgba(15, 118, 110, 0.14)', glow: 'rgba(15, 118, 110, 0.26)' },
};

const services: Service[] = [
  {
    id: 'aiml',
    label: 'AI & ML',
    icon: Brain,
    title: 'Turn Data Into Intelligent Business Solutions',
    description:
      'Harness the power of Artificial Intelligence and Machine Learning to automate processes, uncover valuable insights, and build smarter digital experiences. We develop AI solutions that help businesses improve decision-making, productivity, and operational efficiency.',
    items: [
      'AI Development & Consulting',
      'Machine Learning Solutions',
      'AI Product Development',
      'Intelligent Chatbots & Virtual Assistants',
      'Facial Recognition Solutions',
      'Predictive Analytics & Maintenance',
      'Natural Language Processing (NLP)',
      'AI Data Optimization',
      'AI Security Solutions',
      'AIOps & Intelligent Automation',
    ],
    cta: 'Explore AI & ML Solutions',
    image: '/services/aiml.jpg',
    imageAlt: 'Abstract visualization of artificial intelligence',
  },
  {
    id: 'software',
    label: 'Software Engineering',
    icon: Code2,
    title: 'Build Powerful Software That Scales With Your Business',
    description:
      'We design and develop custom software solutions tailored to your business requirements. From full-stack applications to enterprise platforms and legacy modernization, our engineering approach focuses on performance, scalability, security, and maintainability.',
    items: [
      'Custom Software Development',
      'Software Consulting',
      'Full-Stack Development',
      'MERN & MEAN Development',
      'Software Product Development',
      'Legacy Application Modernization',
      'Application Development & Maintenance',
      'Cloud Application Development',
    ],
    cta: 'Explore Software Engineering',
    image: '/services/software.jpg',
    imageAlt: 'Developer writing software on a laptop',
  },
  {
    id: 'web',
    label: 'Web & Mobile',
    icon: Smartphone,
    title: 'Create Digital Experiences Across Every Platform',
    description:
      'Build modern, responsive, and high-performing websites, web applications, and mobile applications that deliver seamless experiences across devices. Our development expertise covers both native and cross-platform technologies.',
    items: [
      'Website Design & Development',
      'Web Application Development',
      'Mobile Application Development',
      'iOS App Development',
      'Android App Development',
      'Flutter Development',
      'Xamarin Development',
      'React Native Development',
    ],
    cta: 'Explore Web & Mobile Solutions',
    image: '/services/web-mobile.jpg',
    imageAlt: 'Mobile phone showing a product interface',
  },
  {
    id: 'uiux',
    label: 'UI / UX design',
    icon: PenTool,
    title: 'Design Experiences Your Users Will Love',
    description:
      'Create intuitive and engaging digital products through user-centered UI/UX design. We combine research, usability, visual design, and prototyping to create experiences that are easy to understand, navigate, and use.',
    items: [
      'User Persona Development',
      'UI Design',
      'UX Design',
      'Wireframing & Prototyping',
      'Usability Testing',
      'Website & Application Redesign',
      'Responsive Design',
    ],
    cta: 'Explore UI/UX Design',
    image: '/services/uiux.jpg',
    imageAlt: 'Designer reviewing interface wireframes',
  },
  {
    id: 'staff',
    label: 'Staff Augmentation',
    icon: Users,
    title: 'Extend Your Team With Skilled Technology Experts',
    description:
      'Scale your development capabilities with experienced IT professionals who can seamlessly integrate with your existing team. Our flexible engagement models help businesses access specialized talent while reducing hiring and onboarding challenges.',
    items: [
      'Flexible Engagement Models',
      'Skilled Software Developers',
      'Rapid Team Onboarding',
      'Dedicated Technology Specialists',
      'Domain-Specific Development Talent',
    ],
    cta: 'Build Your Technology Team',
    image: '/services/staff.jpg',
    imageAlt: 'Technology team collaborating around a table',
  },
  {
    id: 'qa',
    label: 'Testing & QA',
    icon: Bug,
    title: 'Deliver Reliable Software With Confidence',
    description:
      'Ensure your applications meet the highest standards of quality, performance, security, and reliability. Our QA services identify issues early and help deliver stable digital products across web, mobile, and enterprise environments.',
    items: [
      'Functional Testing',
      'Regression Testing',
      'Performance Testing',
      'Load & Stress Testing',
      'Security Testing',
      'Web & Mobile Application Testing',
      'API Testing',
      'Test Automation',
      'QA Consulting',
    ],
    cta: 'Explore QA Services',
    image: '/services/qa.jpg',
    imageAlt: 'Engineer testing software on a laptop',
  },
  {
    id: 'migration',
    label: 'Maintenance and Migration',
    icon: RefreshCw,
    title: 'Modernize, Migrate & Maintain Your Technology',
    description:
      'Keep your applications and infrastructure secure, optimized, and up to date. We help businesses modernize legacy systems, migrate data and applications, optimize databases, and maintain cloud and IT environments.',
    items: [
      'Application Maintenance & Support',
      'Infrastructure Migration',
      'Data Migration',
      'Cloud Migration & Management',
      'Server & Platform Migration',
      'Version Control Migration',
      'Continuous Monitoring & Support',
      'Database Maintenance & Optimization',
    ],
    cta: 'Explore Migration & Maintenance',
    image: '/services/migration.jpg',
    imageAlt: 'Server room representing cloud infrastructure',
  },
  {
    id: 'devops',
    label: 'DevOps as a Service',
    icon: Infinity,
    title: 'Accelerate Development With Smarter DevOps',
    description:
      'Improve software delivery through automation, continuous integration, continuous deployment, cloud infrastructure, and modern DevOps practices. Our solutions help development and operations teams collaborate efficiently and release software faster.',
    items: [
      'CI/CD Implementation',
      'Infrastructure as Code (IaC)',
      'DevOps Automation',
      'Containerization & Orchestration',
      'Microservices Architecture',
      'Platform as a Service (PaaS)',
      'Cloud DevOps Solutions',
      'Deployment Automation',
    ],
    cta: 'Explore DevOps Solutions',
    image: '/services/devops.jpg',
    imageAlt: 'Cloud operations dashboard on a monitor',
  },
  {
    id: 'support',
    label: 'IT Support and Solutions',
    icon: Headset,
    title: 'Complete IT Solutions for Your Business',
    description:
      'Get dependable technology support across IT consulting, cybersecurity, infrastructure, analytics, and business technology solutions. We help organizations build secure, efficient, and future-ready IT environments.',
    items: [
      'Startup IT Services',
      'IT Consulting & Technology Solutions',
      'Data Analytics',
      'Cybersecurity Solutions',
      'IT Infrastructure Services',
      'Technology Support & Management',
    ],
    cta: 'Explore IT Solutions',
    image: '/services/support.jpg',
    imageAlt: 'IT consultant supporting a business team',
  },
];

export default function ITServices() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const current = services[active];
  const tone = accents[current.id];
  const Icon = current.icon;

  return (
    <section className="relative overflow-hidden py-20 md:py-24" style={{ background: 'var(--background)' }}>
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: `radial-gradient(640px 340px at 12% 38%, ${tone.glow}, transparent 70%), radial-gradient(720px 420px at 88% 62%, ${tone.soft}, transparent 72%)`,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2 className="text-4xl font-800 md:text-5xl" style={{ color: 'var(--text-primary)' }}>
            <span className="services-title-accent">IT Services</span>{' '}
            We Offer
          </h2>
          <p className="mt-3 text-lg font-700" style={{ color: 'var(--text-primary)' }}>
            Technology Solutions Designed Around Your Business
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We deliver innovative, scalable, and secure IT solutions that help businesses transform ideas into powerful digital products. From AI and software engineering to web development, cloud, DevOps, and IT support, our technology expertise enables organizations to improve efficiency, enhance customer experiences, and accelerate growth.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-12">
          <div className="flex flex-col gap-1.5">
            {services.map((service, index) => {
              const ItemIcon = service.icon;
              const selected = index === active;
              const itemTone = accents[service.id];
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all duration-300"
                  style={{
                    background: selected ? 'var(--card)' : 'transparent',
                    boxShadow: selected ? `0 12px 30px ${itemTone.soft}` : 'none',
                    borderLeft: selected ? `3px solid ${itemTone.color}` : '3px solid transparent',
                  }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: itemTone.soft, color: itemTone.color }}
                  >
                    <ItemIcon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="flex-1 text-[15px] font-700" style={{ color: 'var(--text-primary)' }}>
                    {service.label}
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0" style={{ color: selected ? itemTone.color : 'var(--text-muted)' }} />
                </button>
              );
            })}
          </div>

          <div
            className="min-h-[460px] overflow-hidden rounded-[28px] p-6 md:p-8 lg:p-10"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border-light)',
              boxShadow: `0 22px 60px ${tone.soft}`,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-8"
              >
                <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
                  <div className="min-w-0">
                    <div className="mb-4 inline-flex items-center gap-2 text-sm font-700" style={{ color: tone.color }}>
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ background: tone.soft }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      {current.label}
                    </div>
                    <h3 className="text-2xl font-800 leading-tight md:text-[34px]" style={{ color: 'var(--text-primary)' }}>
                      {current.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 md:text-base" style={{ color: 'var(--text-secondary)' }}>
                      {current.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-[240px] overflow-hidden rounded-2xl sm:h-[280px]"
                    style={{ boxShadow: `inset 0 0 0 1px ${tone.soft}` }}
                  >
                    <img
                      src={current.image}
                      alt={current.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </motion.div>
                </div>

                <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {current.items.map((item) => (
                    <li
                      key={item}
                      className="group relative overflow-hidden rounded-xl"
                      style={{ '--item-accent': tone.color } as CSSProperties}
                    >
                      <span
                        className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                        style={{ background: tone.color }}
                      />
                      <span className="relative z-10 flex items-start gap-2.5 px-3 py-2.5 text-[15px] leading-snug transition-colors duration-300 group-hover:!text-white" style={{ color: 'var(--text-primary)' }}>
                        <Check className="mt-0.5 h-4 w-4 shrink-0 transition-colors duration-300 group-hover:!text-white" style={{ color: 'var(--item-accent)' }} />
                        <span>{item}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => navigate('/services')}
                  className="inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-700 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: `linear-gradient(90deg, ${tone.color}, #00B2FE)` }}
                >
                  {current.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
