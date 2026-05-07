import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

const floatingCards = [
  {
    icon: TrendingUp,
    label: 'Revenue',
    value: '+24%',
    pos: 'top-20 right-10',
    delay: 0,
  },
  {
    icon: Zap,
    label: 'Performance',
    value: '99.9%',
    pos: 'bottom-40 left-10',
    delay: 0.2,
  },
  {
    icon: Shield,
    label: 'Security',
    value: 'SOC 2',
    pos: 'top-1/3 left-1/4',
    delay: 0.4,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20" />
        <div className="grid-overlay absolute inset-0" />
      </div>

      {/* Floating cards */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingCards.map((card, i) => (
          <div
            key={i}
            className={`absolute ${card.pos} animate-float`}
            style={{ animationDelay: `${card.delay}s` }}
          >
            <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 shadow-blue-glow">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-text-muted">{card.label}</div>
                <div className="text-sm font-700 text-primary">{card.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6 animate-fade-in-up">
          <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
          <span className="text-sm font-600 text-primary">Enterprise SaaS Platform</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-800 leading-[1.1] mb-8 animate-fade-in-up text-text-primary">
          Transform{' '}
          <span className="gradient-text">Operations</span>
          <br />
          Across Your Entire
          <br />
          Organization
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          One unified platform for restaurant operations, healthcare clinics, HR management, legal practices, and more.
          Built for enterprise scale. Designed for simplicity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up">
          <button className="btn-base btn-primary px-8 py-4 rounded-full text-lg flex items-center gap-2 group">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-base btn-glass px-8 py-4 rounded-full text-lg font-600">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up">
          {[
            { label: 'Users Served', value: '8B+' },
            { label: 'Uptime SLA', value: '99.9%' },
            { label: 'Growth Rate', value: '13.9%' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 rounded-2xl">
              <div className="text-sm text-text-muted mb-1">{stat.label}</div>
              <div className="text-3xl font-800 text-primary">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="mt-20 w-full max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="glass-card rounded-3xl overflow-hidden shadow-premium">
          <div className="bg-gradient-to-br from-bg-soft to-blue-50/50 p-8">
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="glass-card rounded-xl p-4 h-24 bg-white/40" />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 glass-card rounded-xl p-6 h-64 bg-white/30" />
              <div className="glass-card rounded-xl p-6 h-64 bg-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
