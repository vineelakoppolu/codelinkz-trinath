const stack = [
  { category: 'Infrastructure', items: ['AWS / GCP', 'Kubernetes', 'Multi-Region', 'Global CDN'] },
  { category: 'Security', items: ['SOC 2 Type II', 'End-to-End Encryption', 'RBAC', 'Audit Logs'] },
  { category: 'Integrations', items: ['REST API', 'GraphQL', 'Webhooks', '150+ Native'] },
  { category: 'Data', items: ['Real-time Analytics', 'Custom Reports', 'Data Export', 'GDPR'] },
];

export default function TechStack() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-700 text-primary uppercase tracking-wide">Architecture</span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Enterprise-Grade{' '}
            <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            Built on a modern, scalable foundation trusted by the world's leading enterprises.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((cat) => (
            <div key={cat.category} className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-700 text-primary uppercase tracking-wide mb-5">{cat.category}</h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-muted mb-6">Compliant with global standards</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'PCI DSS'].map((cert) => (
              <div key={cert} className="text-xs font-700 text-text-secondary">{cert}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
