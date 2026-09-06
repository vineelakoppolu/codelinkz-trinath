import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Codelink and how can it benefit my business?',
    answer: 'Codelink is an enterprise SaaS platform that provides comprehensive solutions for restaurant operations, healthcare management, HR & payroll, legal practices, revenue management, and marketing. It streamlines your business processes, improves efficiency, and provides actionable insights through advanced analytics.',
  },
  {
    question: 'Is Codelink suitable for small businesses or only enterprises?',
    answer: 'Codelink scales from startups to large enterprises. We offer flexible pricing plans and solutions tailored to SMBs, franchises, and large corporations. Our modular approach allows you to start with what you need and expand as you grow.',
  },
  {
    question: 'How secure is my data on Codelink?',
    answer: 'Security is our top priority. We employ industry-leading encryption, regular security audits, compliance with GDPR, CCPA, and other regulations, and maintain 99.9% uptime with automatic backups and disaster recovery protocols.',
  },
  {
    question: 'What kind of integrations does Codelink support?',
    answer: 'Codelink integrates with 100+ popular business tools including payment gateways, accounting software, CRM systems, communication platforms, and more. We also provide a robust API for custom integrations.',
  },
  {
    question: 'How long does it take to implement Codelink?',
    answer: 'Implementation timeline varies based on your needs. Typically, SMBs can be up and running in 2-4 weeks, while enterprise deployments may take 6-12 weeks. Our dedicated implementation team ensures a smooth transition.',
  },
  {
    question: 'What support do you provide after deployment?',
    answer: 'We offer 24/7 customer support via chat, email, and phone. Additionally, you get access to our knowledge base, video tutorials, webinars, and a dedicated success manager for enterprise clients.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background-soft">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently Asked <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to know about Codelink. Can't find the answer you're looking for? Contact our support team.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-card border border-borderLight rounded-xl hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                whileHover={{ x: 4 }}
              >
                <h3 className="text-left text-lg font-600 text-gray-900 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-gradient-to-r from-primary/5 to-accent-blue/5 border-x border-b border-gray-200 rounded-b-xl">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-2xl border border-primary/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-4">
            Still have questions? Our support team is here to help.
          </p>
          <motion.a
            href="#"
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent-blue text-white font-600 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
