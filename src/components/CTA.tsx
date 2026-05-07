import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-bg-soft">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-accent-cyan opacity-90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

          <div className="relative z-10 p-12 lg:p-16 text-center">
            <h2 className="text-5xl lg:text-6xl font-800 text-white mb-6 leading-tight">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-white/90 max-w-xl mx-auto mb-10">
              Join 500+ enterprise customers already using Codelink. Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 bg-white text-primary font-700 px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-white font-700 border-2 border-white/30 hover:border-white/50 backdrop-blur transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            <p className="text-white/80 text-sm mt-8">
              No credit card required. Takes 2 minutes to set up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
