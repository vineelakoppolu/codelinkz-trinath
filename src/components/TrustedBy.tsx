export default function TrustedBy() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-bg-soft to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-700 text-text-muted uppercase tracking-wide">Trusted By Enterprise</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[
            'Restaurant Brands',
            'Healthcare Systems',
            'Fortune 500',
            'Law Firms',
            'Tech Startups',
            'Consulting Firms',
          ].map((brand) => (
            <div key={brand} className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mx-auto mb-2" />
                <span className="text-xs text-text-muted font-600">{brand}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '8B+', label: 'Transactions' },
            { value: '500+', label: 'Enterprise Clients' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '40+', label: 'Industries' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-800 text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
