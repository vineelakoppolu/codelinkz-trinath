import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    title: 'CEO, Spice Route',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    quote: 'Codelink transformed how we operate. Revenue up 24% in just 6 months.',
    rating: 5,
  },
  {
    name: 'Dr. Priya Nair',
    title: 'Founder, Wellness First',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    quote: 'Cut administrative burden by 60%. Our doctors focus on patients now.',
    rating: 5,
  },
  {
    name: 'Ankit Shah',
    title: 'COO, Vertex Legal',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    quote: 'Legal operations finally organized. Every case, contract tracked perfectly.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-700 text-primary uppercase tracking-wide">Customer Stories</span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Trusted by Leaders.{' '}
            <span className="gradient-text">Loved by Users.</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card hover-lift rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-700 text-text-primary text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
