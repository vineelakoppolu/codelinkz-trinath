import { CheckCircle2, Zap, Shield, Users } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Deploy and go live in weeks, not months. Our onboarding process is battle-tested.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified. End-to-end encryption. Role-based access control.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    desc: '24/7 expert support. Quarterly business reviews. Real humans, not bots.',
  },
  {
    icon: CheckCircle2,
    title: 'Always Reliable',
    desc: '99.9% uptime SLA. Global infrastructure. Zero data loss guarantee.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-700 text-primary uppercase tracking-wide">Why Codelink</span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Built for{' '}
            <span className="gradient-text">Enterprise.</span>
            <br />
            Designed for Teams.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="glass-card hover-lift rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-700 text-text-primary mb-3">{reason.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
