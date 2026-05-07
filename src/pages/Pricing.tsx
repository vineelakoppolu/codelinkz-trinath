import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PageHero, HeroButton, CTASection } from '../components/ui';
import { colors, shadows } from '@/theme';

const plans = [
  {
    name: 'Starter',
    description: 'For small teams and startups',
    price: '$2,999',
    period: '/month',
    cta: 'Start Free Trial',
    features: [
      'Up to 5 users',
      'Core platform features',
      'Basic API access',
      'Email support',
      '99.5% uptime SLA',
      'Community access',
    ],
  },
  {
    name: 'Professional',
    description: 'For growing businesses',
    price: '$7,999',
    period: '/month',
    cta: 'Get Started',
    highlight: true,
    features: [
      'Up to 50 users',
      'All Starter features',
      'Advanced analytics',
      'Priority support',
      '99.9% uptime SLA',
      'Custom integrations',
      'Advanced reporting',
      'Multi-team management',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: 'pricing',
    cta: 'Contact Sales',
    features: [
      'Unlimited users',
      'All Professional features',
      'Dedicated account manager',
      '24/7 phone support',
      '99.99% uptime SLA',
      'Custom development',
      'White-label options',
      'On-premise deployment',
    ],
  },
];

const faqs = [
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No, all our plans are month-to-month with no long-term commitments. You can cancel anytime.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, we offer 15% discount for annual prepayment on all plans.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, wire transfers, and ACH payments for enterprise customers.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all plans come with a 14-day free trial with full feature access, no credit card required.',
  },
  {
    question: 'Do you offer custom pricing?',
    answer: 'Absolutely. Contact our sales team for custom pricing based on your specific requirements.',
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        badge="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Plans that scale with your business"
        description="Choose the perfect plan for your organization. All plans include a 14-day free trial."
      />

      {/* Pricing Cards */}
      <section className="section-padding bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                className="relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -inset-1 rounded-3xl blur"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.accentBlue}30 100%)`,
                    }}
                  />
                )}

                <div
                  className="relative rounded-2xl p-8"
                  style={{
                    background: plan.highlight
                      ? `linear-gradient(135deg, ${colors.primary}08 0%, ${colors.accentBlue}08 100%)`
                      : 'rgba(255, 255, 255, 0.72)',
                    backdropFilter: 'blur(20px)',
                    border: plan.highlight
                      ? `2px solid ${colors.primary}30`
                      : `1px solid ${colors.borderLight}`,
                    boxShadow: plan.highlight ? shadows.blueGlow : shadows.premium,
                  }}
                >
                  {/* Plan name */}
                  <h3
                    className="font-700 mb-2"
                    style={{
                      fontSize: '24px',
                      color: colors.textPrimary,
                    }}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-6"
                    style={{
                      fontSize: '14px',
                      color: colors.textSecondary,
                    }}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div
                      className="font-700"
                      style={{
                        fontSize: '40px',
                        color: colors.primary,
                      }}
                    >
                      {plan.price}
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        color: colors.textSecondary,
                      }}
                    >
                      {plan.period}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div className="mb-8">
                    <HeroButton
                      variant={plan.highlight ? 'primary' : 'secondary'}
                      size="lg"
                      className="w-full justify-center"
                    >
                      {plan.cta}
                    </HeroButton>
                  </motion.div>

                  {/* Features */}
                  <div className="space-y-4 border-t pt-8" style={{ borderColor: colors.borderLight }}>
                    {plan.features.map((feature, j) => (
                      <motion.div
                        key={j}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: colors.primary,
                          }}
                        >
                          <Check className="w-3 h-3" style={{ color: 'white' }} />
                        </div>
                        <span
                          style={{
                            fontSize: '14px',
                            color: colors.textSecondary,
                          }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="mb-6 font-700"
              style={{
                fontSize: '48px',
                lineHeight: '56px',
                color: colors.textPrimary,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.borderLight}`,
                  boxShadow: shadows.sm,
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <h3
                  className="font-700 mb-3"
                  style={{
                    fontSize: '16px',
                    color: colors.textPrimary,
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: colors.textSecondary,
                    lineHeight: '22px',
                  }}
                >
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Start Your Free Trial Today"
        description="Get full access to all features for 14 days. No credit card required."
        buttonText="Start Free Trial"
        buttonSecondary="Schedule Demo"
      />
    </div>
  );
}
