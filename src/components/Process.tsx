const steps = [
  { num: '1', title: 'Discovery', desc: 'We understand your business, workflows, and goals.' },
  { num: '2', title: 'Custom Setup', desc: 'Configure the platform to match your needs perfectly.' },
  { num: '3', title: 'Onboarding', desc: 'Live training for your team to ensure adoption.' },
  { num: '4', title: 'Scale & Grow', desc: 'Continuous support and quarterly business reviews.' },
];

export default function Process() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-700 text-primary uppercase tracking-wide">Implementation</span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            From Discovery to{' '}
            <span className="gradient-text">Scale</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-20px)] h-px bg-gradient-to-r from-blue-300 to-transparent" />
              )}

              <div className="glass-card rounded-2xl p-8 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-cyan rounded-xl flex items-center justify-center mb-5 text-white font-700 text-lg">
                  {step.num}
                </div>
                <h3 className="text-lg font-700 text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
