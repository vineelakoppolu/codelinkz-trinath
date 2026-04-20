import React from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy = () => {
  const policies = [
    {
      title: "1. Introduction",
      content:
        'Zomant Solutions Private Limited ("Zomant Solutions", "Company", "we", "our", or "us") is committed to protecting the privacy, confidentiality, and security of personal information belonging to our customers, users, partners, and website visitors.\n\nThis Privacy Policy explains how we collect, use, store, process, and protect your personal data when you use our website, SaaS platforms, mobile applications, web applications, cloud-based services, customer support services, and sales, marketing, and communication channels.\n\nBy accessing or using our services, you agree to this Privacy Policy.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "2. Scope of this Privacy Policy",
      content:
        "This policy applies to website visitors, customers, trial users, registered users, business partners, resellers, and event participants. This policy applies globally where Zomant Solutions provides services.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "3. Definitions",
      content:
        "Personal Data: Information that identifies an individual directly or indirectly.\nService Data: Data uploaded or managed by customers using our SaaS platforms.\nUser: Any individual or organization using our services.\nProcessing: Any operation performed on personal data including collection, storage, or deletion.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "4. Information We Collect",
      content:
        "We collect information in three ways:\n\n4.1 Information You Provide Directly\nWhen you register for an account, request a demo, contact support, subscribe to services, or fill forms, we collect your full name, email address, phone number, company name, business address, job title, and billing information.\n\n4.2 Information Collected Automatically\nWhen you use our services, we collect IP address, browser type, device information, operating system, login activity, pages visited, feature usage, and access timestamps to help us improve performance and security.\n\n4.3 Information from Third Parties\nWe may receive information from resellers, referral partners, authentication providers (Google, Microsoft, LinkedIn), payment providers, and public sources.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "5. Service Data Collected Through SaaS Products",
      content:
        "When you use our SaaS products, we may process customer records, employee records, contact details, files and documents, transaction data, and communications data. This data belongs to you and we act as your data processor.",
    },
    {
      title: "6. How We Use Your Information",
      content:
        "We use your data to:\n\n• Provide Services: Create and manage accounts, deliver SaaS services, process transactions\n• Customer Support: Respond to inquiries, troubleshoot issues\n• Security: Detect fraud, prevent unauthorized access\n• Improve Services: Analyze system performance, develop new features\n• Communication: Send service notifications, send product updates",
    },
    {
      title: "7. Legal Basis for Processing",
      content:
        "We process your data based on your consent, contractual obligations, legal compliance, and legitimate business interests.",
    },
    {
      title: "8. Cookies and Tracking Technologies",
      content:
        "We use cookies to maintain user sessions, improve performance, and analyze usage. Types of cookies include essential cookies, performance cookies, and security cookies. You can disable cookies in browser settings.",
    },
    {
      title: "9. How We Share Your Information",
      content:
        "We share data only when necessary with authorized internal employees, service providers (cloud hosting providers, payment processors, email providers), and legal authorities if required by law. We do NOT sell personal data.",
    },
    {
      title: "10. Data Storage and Security",
      content:
        "We use industry-standard security measures including encryption (SSL/TLS), secure cloud hosting, firewall protection, access controls, authentication systems, and monitoring and logging.",
    },
    {
      title: "11. Data Retention",
      content:
        "We retain personal data while your account is active, as required by law, and for legitimate business purposes. After account termination, active data is deleted within 6 months and backup data is deleted within 3 months.",
    },
    {
      title: "12. Data Ownership",
      content:
        "Customers retain full ownership of their data. We do not claim ownership and access data only for service delivery, support, and security purposes.",
    },
    {
      title: "13. Data Transfers",
      content:
        "Data may be stored on secure cloud servers located in India, Asia-Pacific, and other secure cloud regions. We ensure proper security protections.",
    },
    {
      title: "14. User Rights",
      content:
        "You have the right to access your data, correct your data, delete your data, export your data, and object to processing. You can contact us to exercise these rights.",
    },
    {
      title: "15. Third-Party Services",
      content:
        "Our services may integrate with third-party services including payment gateways, email providers, and cloud services. Their privacy policies apply separately.",
    },
    {
      title: "16. Children's Privacy",
      content:
        "Our services are not intended for individuals under 18 years. We do not knowingly collect children's data.",
    },
    {
      title: "17. Data Breach Notification",
      content:
        "If a data breach occurs, we will investigate immediately, notify affected users, and take corrective action.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring you have
              a positive experience on our website and services.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Privacy Policy Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {policy.icon && (
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <div className="text-blue-600">{policy.icon}</div>
                      </div>
                    )}
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {policy.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {policy.content}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="mt-12 p-8 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Questions About Our Privacy Policy?
              </h3>
              <p className="text-gray-700 mb-6">
                If you have any questions or concerns about this Privacy Policy
                or our privacy practices, please contact us:
              </p>
              <p className="text-lg">
                <span className="font-semibold text-gray-900">Email: </span>
                <span className="text-blue-600 font-semibold">
                  business@zomantsolutions.com
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Last Updated:</strong> February 2026
              </p>
            </div>
          </Card>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Privacy;
