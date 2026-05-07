import { Utensils, HeartPulse, Users, Scale, DollarSign, Megaphone } from 'lucide-react';

const modules = [
  {
    icon: Utensils,
    title: 'Restaurant OS',
    desc: 'POS, inventory, table management, and kitchen operations.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Appointments, EMR, billing, and patient engagement.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: Users,
    title: 'HRMS & Payroll',
    desc: 'Hire, manage, pay, and retain your workforce.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Scale,
    title: 'Legal Operations',
    desc: 'Case tracking, contracts, and client management.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: DollarSign,
    title: 'Revenue Platform',
    desc: 'Invoicing, subscriptions, and revenue analytics.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Megaphone,
    title: 'Marketing Ops',
    desc: 'Multi-channel campaigns and customer engagement.',
    color: 'from-cyan-500 to-cyan-600',
  },
];

export default function Modules() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-700 text-primary uppercase tracking-wide">Enterprise Modules</span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Six Powerful{' '}
            <span className="gradient-text">Modules.</span>
            <br />
            Infinite Possibilities.
          </h2>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            Mix and match enterprise-grade modules tailored to your business. Each module integrates seamlessly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="group glass-card hover-lift rounded-2xl p-8 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-5 shadow-blue-glow`}>
                <mod.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-700 text-text-primary mb-2">{mod.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{mod.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-primary font-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
