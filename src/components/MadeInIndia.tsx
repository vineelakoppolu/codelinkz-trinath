export default function MadeInIndia() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-12 lg:p-16 text-center">
          {/* Flag */}
          <div className="flex justify-center gap-0 mb-8">
            <span className="w-8 h-2 bg-orange-500 rounded-l-full" />
            <span className="w-8 h-2 bg-white border border-blue-100" />
            <span className="w-8 h-2 bg-emerald-500 rounded-r-full" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-800 text-text-primary mb-4">
            Made in India.
          </h2>
          <h3 className="text-4xl lg:text-5xl font-800 gradient-text mb-6">
            Built for the world.
          </h3>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            Engineered in India with deep understanding of GST, TDS, and local regulations.
            Global quality, local expertise, Indian pricing.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '23+', label: 'States Covered' },
              { value: '500+', label: 'Enterprise Clients' },
              { value: '40+', label: 'Industries' },
              { value: '8B+', label: 'Transactions' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-800 text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
