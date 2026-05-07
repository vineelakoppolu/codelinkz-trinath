const features = [
  {
    title: 'AI-Powered Automation',
    desc: 'Automate repetitive tasks, predict trends, and scale effortlessly.',
    image: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Real-Time Insights',
    desc: 'Custom dashboards and analytics for every department.',
    image: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Universal API',
    desc: 'REST, GraphQL, and Webhooks for seamless integrations.',
    image: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Multi-Tenant Architecture',
    desc: 'Support unlimited companies and teams within one platform.',
    image: 'from-blue-500 to-indigo-500',
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-700 text-primary uppercase tracking-wide">Platform Features</span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Everything You Need{' '}
            <span className="gradient-text">To Scale</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card hover-lift rounded-2xl overflow-hidden">
              <div className={`h-32 bg-gradient-to-br ${feature.image} opacity-20`} />
              <div className="p-8">
                <h3 className="text-lg font-700 text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
