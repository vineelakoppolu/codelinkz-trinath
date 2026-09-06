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
    heading: 'Software Engineering',
    items: [
      { title: 'Mobile App Development', description: 'Develop the Next-gen apps for iOS and Android', href: '/services', icon: 'smartphone' },
      { title: 'Software Development & Consulting', description: 'Make your software idea a reality', href: '/services', icon: 'users' },
      { title: 'Front End Development', description: 'Impress your users with state-of-art design', href: '/services', icon: 'pen-tool' },
      { title: 'IT Services for Startups', description: 'Make your startup dream a reality', href: '/services', icon: 'rocket' },
      { title: 'SAP', description: 'CRM to boost your business x10', href: '/services', icon: 'bar-chart-3' },
    ],
  },
  {
    heading: 'Software Engineering',
    items: [
      { title: 'Web App Development', description: 'Unleash creativity for dynamic web experiences', href: '/services', icon: 'app-window' },
      { title: 'DevOps', description: 'Bridge development and operations for maximum efficiency', href: '/services', icon: 'monitor-search' },
      { title: 'UI UX', description: 'Creating simple and engaging experiences', href: '/services', icon: 'pencil-ruler' },
      { title: 'Redesign Software', description: 'Accelerate your digital transformation.', href: '/services', icon: 'refresh-cw' },
    ],
  },
  {
    heading: 'Salesforce Consulting',
    items: [
      { title: 'Salesforce', description: 'A CRM to boost your business x10', href: '/services', icon: 'trending-up' },
      { title: 'Agentforce Platform Services', description: 'Build Autonomous AI Agents with Agentforce Services', href: '/services', icon: 'bot' },
      { title: 'Marketing Cloud', description: 'Make your software idea a reality', href: '/services', icon: 'handshake' },
      { title: 'Sales Cloud CRM', description: 'Make your software idea a reality', href: '/services', icon: 'contact' },
      { title: 'Salesforce Commerce Cloud', description: 'We deliver scalable e-commerce platforms that boost conversions and revenue.', href: '/services', icon: 'shopping-cart' },
    ],
  },
  {
    heading: 'AI ML & Data Service',
    items: [
      { title: 'AI ML', description: 'Improve accuracy, reduce mistakes, and organize operations', href: '/services', icon: 'brain' },
      { title: 'Data Analytics', description: 'Empower your business with cutting-edge data analytics solutions.', href: '/services', icon: 'line-chart' },
      { title: 'Data Engineering', description: 'Transforming data into solutions for business challenges', href: '/services', icon: 'database' },
      { title: 'Actionable Intelligence With Data Science', description: 'Improve accuracy, reduce mistakes, and organize operations', href: '/services', icon: 'cpu' },
    ],
  },
];

export const technologyColumns: NavColumn[] = [
  {
    heading: 'Frontend',
    items: [
      { title: 'React JS', description: 'Experience fast development & native performance.', href: '/technologies', icon: 'atom' },
      { title: 'Angular', description: 'Create smooth interactive SPAs.', href: '/technologies', icon: 'hexagon' },
    ],
    cta: { title: 'Work with CodeLink', href: '/company' },
  },
  {
    heading: 'Backend',
    items: [
      { title: 'Node JS', description: 'Build scalable server-side web applications.', href: '/technologies', icon: 'server' },
      { title: 'PHP', description: 'Create powerful & versatile web experiences.', href: '/technologies', icon: 'code-2' },
      { title: 'Java', description: 'Smarter, Faster, and Scalable Apps.', href: '/technologies', icon: 'coffee' },
      { title: 'Python', description: 'Build scalable server-side web applications.', href: '/technologies', icon: 'terminal' },
      { title: 'SAP', description: 'Create powerful & versatile web experiences.', href: '/technologies', icon: 'building-2' },
    ],
  },
  {
    heading: 'Frameworks and CMS',
    items: [
      { title: 'Drupal', description: 'A powerful CMS to scale up your website.', href: '/technologies', icon: 'globe' },
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
  { title: 'About us', description: 'Find out what makes CodeLink unique', href: '/company', icon: 'user-round' },
  { title: 'Engagement Model', description: 'Find the best engagement model for your project', href: '/company', icon: 'handshake' },
  { title: 'Career', description: 'Become a part of something extraordinary', href: '/company', icon: 'briefcase' },
  { title: 'Contact us', description: "Let's kickstart your project in 3..2..1", href: '/company', icon: 'mail' },
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
      { title: 'Hrlinkz', description: 'Human resources and payroll platform for the full employee lifecycle.', href: '/products' },
      { title: 'Advocatelinkz', description: 'Legal case management with documents, time tracking, and billing.', href: '/products' },
      { title: 'Poslinkz', description: 'Billing, inventory, and POS for multi-location retail operations.', href: '/products' },
      { title: 'Sociallinkz', description: 'Social media marketing automation across every channel.', href: '/products' },
    ],
  },
  {
    id: 'commerce',
    label: 'Restaurant & Retail',
    headline: 'Restaurant & Retail',
    intro: 'Run counters, kitchens, and stores from one connected stack.',
    items: [
      { title: 'Restolinkz', description: 'End-to-end restaurant operations including POS, inventory, and loyalty.', href: '/products' },
      { title: 'Poslinkz', description: 'Real-time billing and inventory with GST-ready multi-store control.', href: '/products' },
    ],
  },
  {
    id: 'customer',
    label: 'Customer Platforms',
    headline: 'Customer Platforms',
    intro: 'Win, serve, and retain customers on a single growth layer.',
    items: [
      { title: 'Crmlinkz', description: 'Pipelines, lead scoring, and automation for high-performing sales teams.', href: '/products' },
      { title: 'Sociallinkz', description: 'Schedule, engage, and measure social campaigns in one workspace.', href: '/products' },
    ],
  },
  {
    id: 'workforce',
    label: 'Workforce & Legal',
    headline: 'Workforce & Legal',
    intro: 'Operate people and practice management with enterprise reliability.',
    items: [
      { title: 'Hrlinkz', description: 'Recruitment, onboarding, payroll, and performance in one HRMS.', href: '/products' },
      { title: 'Advocatelinkz', description: 'Matter tracking, secure documents, and client portals for law firms.', href: '/products' },
    ],
  },
];
