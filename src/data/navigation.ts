export type NavItemLink = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type NavColumn = {
  heading: string;
  items: NavItemLink[];
  cta?: { title: string; href: string };
};

export type ProductCategory = {
  id: string;
  label: string;
  headline: string;
  intro: string;
  items: { title: string; description: string; href: string }[];
};

export const serviceColumns: NavColumn[] = [
  {
    heading: 'AI, ML & Data Services',
    items: [
      { title: 'AI', description: 'Build intelligent systems that automate decisions and accelerate growth.', href: '/services', icon: 'brain' },
      { title: 'ML', description: 'Train and deploy machine learning models for real business outcomes.', href: '/services', icon: 'cpu' },
      { title: 'Data Analytics', description: 'Turn raw data into clear insights and measurable performance.', href: '/services', icon: 'line-chart' },
      { title: 'Data Engineering', description: 'Design reliable pipelines that keep your data ready for scale.', href: '/services', icon: 'database' },
      { title: 'Scale Cloud / Cloud Migration', description: 'Move and modernize workloads on secure, scalable cloud platforms.', href: '/services', icon: 'server' },
      { title: 'AI Product Service', description: 'Design and ship AI-powered products from concept to launch.', href: '/services', icon: 'sparkles' },
      { title: 'Actionable Intelligence with Data Science', description: 'Apply data science to guide strategy and daily operations.', href: '/services', icon: 'bar-chart-3' },
      { title: 'Chatbot / Interactive', description: 'Create conversational experiences that support customers 24/7.', href: '/services', icon: 'bot' },
      { title: 'Predictive AI', description: 'Forecast demand, risk, and opportunity with predictive models.', href: '/services', icon: 'trending-up' },
    ],
  },
  {
    heading: 'Software Services',
    items: [
      { title: 'UI & UX Service', description: 'Craft intuitive interfaces that keep users engaged.', href: '/services', icon: 'pencil-ruler' },
      { title: 'Web Sites + E-Commerce', description: 'Build high-converting websites and online storefronts.', href: '/services', icon: 'shopping-cart' },
      { title: 'Web App Development', description: 'Deliver secure, scalable web applications for modern teams.', href: '/services', icon: 'app-window' },
      { title: 'Mobile App Development', description: 'Ship native and cross-platform apps for iOS and Android.', href: '/services', icon: 'smartphone' },
      { title: 'Integration Service', description: 'Connect systems, APIs, and platforms into one smooth workflow.', href: '/services', icon: 'boxes' },
      { title: 'Custom Software Development & Consulting', description: 'Plan and build software tailored to your business needs.', href: '/services', icon: 'code-2' },
    ],
  },
  {
    heading: 'IT Support & Solutions',
    items: [
      { title: 'IT Consulting & Technology Services', description: 'Get expert guidance for architecture, tools, and delivery.', href: '/services', icon: 'handshake' },
      { title: 'IT Infrastructure Service', description: 'Strengthen servers, networks, and cloud foundations.', href: '/services', icon: 'server' },
      { title: 'IT Managed Service', description: 'Keep systems monitored, updated, and running with less friction.', href: '/services', icon: 'monitor-search' },
      { title: 'Startup IT Service', description: 'Launch your product with the right tech stack from day one.', href: '/services', icon: 'rocket' },
      { title: 'IT Support & Management', description: 'Resolve issues quickly with reliable ongoing IT support.', href: '/services', icon: 'users' },
      { title: 'Redesign & Development Service', description: 'Modernize legacy products with cleaner design and stronger code.', href: '/services', icon: 'refresh-cw' },
    ],
  },
  {
    heading: 'Digital Marketing & Branding Services',
    items: [
      { title: 'Lead Generation', description: 'Attract and convert high-intent prospects into qualified leads.', href: '/services', icon: 'contact' },
      { title: 'Brand Positioning', description: 'Clarify your message so your brand stands out in the market.', href: '/services', icon: 'sparkles' },
      { title: 'Email Marketing', description: 'Nurture audiences with targeted campaigns that drive action.', href: '/services', icon: 'mail' },
      { title: 'SEO Service', description: 'Improve visibility and organic traffic with technical SEO.', href: '/services', icon: 'trending-up' },
      { title: 'Paid Marketing', description: 'Run paid campaigns that maximize reach and return.', href: '/services', icon: 'bar-chart-3' },
      { title: 'Social Media Marketing', description: 'Grow engagement and brand presence across social channels.', href: '/services', icon: 'globe' },
    ],
  },
];

export const technologyColumns: NavColumn[] = [
  {
    heading: 'Frontend',
    items: [
      { title: 'React JS', description: 'Experience fast development & native performance.', href: '/technologies', icon: 'atom' },
      { title: 'Angular', description: 'Create smooth interactive SPAs.', href: '/technologies', icon: 'hexagon' },
      { title: 'Next JS', description: 'Build server-side rendered web applications.', href: '/technologies', icon: 'next' },
    ],
    cta: { title: 'Work with CodeLink', href: '/company' },
  },
  {
    heading: 'Backend',
    items: [
      { title: 'Node JS', description: 'Build scalable server-side web applications.', href: '/technologies', icon: 'server' },
      { title: 'PHP', description: 'Create powerful & versatile web experiences.', href: '/technologies', icon: 'code-2' },
      { title: 'Python', description: 'Build scalable server-side web applications.', href: '/technologies', icon: 'terminal' },
    ],
  },
  {
    heading: 'Frameworks and CMS',
    items: [
      { title: 'Shopify', description: 'A powerful e-commerce platform to scale up your business.', href: '/technologies', icon: 'globe' },
      { title: '.Net', description: 'Build, Connect, Innovate.', href: '/technologies', icon: 'boxes' },
      { title: 'Woo Commerce', description: 'Woo your audience with a scalable e-commerce store.', href: '/technologies', icon: 'store' },
      { title: 'Wordpress', description: 'Your go-to CMS for flexibility and ease.', href: '/technologies', icon: 'newspaper' },
    ],
  },
  {
    heading: 'Mobility',
    items: [
      { title: 'iOS', description: "Let's take UI/UX to the next level.", href: '/technologies', icon: 'smartphone' },
      { title: 'Android', description: 'Create powerful & functional android apps.', href: '/technologies', icon: 'tablet-smartphone' },
      { title: 'Flutter', description: 'Feel the power of a high-performing cross-platform app.', href: '/technologies', icon: 'layers' },
      { title: 'React Native development', description: 'Experience fast development & native performance.', href: '/technologies', icon: 'atom' },
    ],
  },
];

export const companyItems: NavItemLink[] = [
  { title: 'About Us', description: 'Find out what makes CodeLink unique', href: '/company', icon: 'user-round' },
  { title: 'Partnership', description: 'Grow together through strategic technology partnerships', href: '/partners', icon: 'handshake' },
  { title: 'Case Study', description: 'See how we deliver measurable results for clients', href: '/solutions', icon: 'newspaper' },
  { title: 'Engagement Model', description: 'Find the best engagement model for your project', href: '/company', icon: 'layers' },
  { title: 'Career', description: 'Become a part of something extraordinary', href: '/company', icon: 'briefcase' },
];

export const companyFeatured = {
  title: 'Explore Our Company Portfolio',
  description: 'Results of our dedication, creativity, and commitment to excellence.',
  cta: 'Explore Now',
  href: '/solutions',
};

export const productCategories: ProductCategory[] = [
  {
    id: 'featured',
    label: 'Featured Products',
    headline: 'Featured Products',
    intro: 'Get started with one of these featured platforms or browse all.',
    items: [
      { title: 'Restolinkz', description: 'Cloud-based restaurant management for POS, inventory, staff, and loyalty.', href: '/products' },
      { title: 'Crmlinkz', description: 'Enterprise CRM and sales automation to close deals faster.', href: '/products' },
      { title: 'Advocatelinkz', description: 'Legal case management with documents, time tracking, and billing.', href: '/products' },
      { title: 'Erplinkz', description: 'Unified ERP for finance, procurement, inventory, and reporting.', href: '/products' },
      { title: 'Fieldlinkz', description: 'Field service dispatch, technician tracking, and mobile work orders.', href: '/products' },
    ],
  },
  {
    id: 'commerce',
    label: 'Restaurant',
    headline: 'Restaurant',
    intro: 'Run the dining room, kitchen, and guest loyalty from one stack.',
    items: [
      { title: 'Restolinkz', description: 'End-to-end restaurant operations including POS, inventory, and loyalty.', href: '/products' },
    ],
  },
  {
    id: 'customer',
    label: 'Customer Platforms',
    headline: 'Customer Platforms',
    intro: 'Give sales teams a pipeline they can actually close.',
    items: [
      { title: 'Crmlinkz', description: 'Pipelines, lead scoring, and automation for high-performing sales teams.', href: '/products' },
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    headline: 'Operations',
    intro: 'Connect the back office and the field on one operating layer.',
    items: [
      { title: 'Erplinkz', description: 'Finance, procurement, inventory, and reporting in one ERP.', href: '/products' },
      { title: 'Fieldlinkz', description: 'Dispatch, live tracking, and work orders for field teams.', href: '/products' },
      { title: 'Advocatelinkz', description: 'Matter tracking, secure documents, and client portals for law firms.', href: '/products' },
    ],
  },
];
