import React from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";

const Terms = () => {
  const sectionMotion = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const terms = [
    {
      title: "1. Acceptance of Agreement",
      content: `You agree to the terms and conditions outlined in this Terms of Use Agreement with respect to the website operated by Zomant Solutions Private Limited.

This Agreement constitutes the entire and only agreement between you and Zomant Solutions regarding the use of this Site and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings with respect to the Site, content, products, or services provided through the Site.

We reserve the right to amend, modify, or update this Agreement at any time without prior notice. The latest version of the Agreement will always be available on this Site, and your continued use of the Site constitutes acceptance of the updated Agreement.`
    },
    {
      title: "2. Website Ownership",
      content: `This website is owned and operated by:

Zomant Solutions Private Limited
Registered Office:
H. No 1-98/9/3/32T, Plot No 50,
Silicon Valley, Image Garden Road,
Madhapur, Hyderabad, Telangana – 500081, India

Email: support@zomantsolutions.com
Website: www.zomantsolutions.com`
    },
    {
      title: "3. Copyright",
      content: `All content on this Site, including but not limited to text, graphics, logos, icons, images, software, source code, design, layout, and databases is the property of Zomant Solutions Private Limited or its licensors and is protected under applicable copyright, trademark, and intellectual property laws.

You may not copy, reproduce, republish, upload, post, transmit, distribute, or modify any content without prior written permission from Zomant Solutions.

You do not acquire ownership rights to any content viewed through this Site. Some content may belong to third parties and is used with permission.`
    },
    {
      title: "4. Trademarks and Service Marks",
      content: `The following are trademarks or service marks of Zomant Solutions Private Limited:

• Zomant Solutions
• Zomant Solutions Logo
• Product names
• Software names
• Platform names

Any unauthorized use of trademarks is strictly prohibited. Other trademarks displayed on the Site belong to their respective owners.`
    },
    {
      title: "5. Limited License and Permitted Uses",
      content: `You are granted a limited, non-exclusive, non-transferable, revocable license to:

(a) Access and use the Site in accordance with this Agreement
(b) Use the Site solely for personal, informational, or business purposes
(c) View, download, or print content for internal, non-commercial use only

You must retain all copyright and proprietary notices. This license does not grant ownership rights.`
    },
    {
      title: "6. Restrictions and Prohibited Uses",
      content: `You agree NOT to:

(a) Copy, modify, distribute, reproduce, or republish any content
(b) Use Site content for commercial resale without authorization
(c) Reverse engineer or attempt to extract source code
(d) Create derivative works based on Site content
(e) Use Site content to create competing services
(f) Attempt unauthorized access to systems or servers
(g) Introduce malware, viruses, or harmful code
(h) Use automated tools such as bots or scrapers
(i) Interfere with Site functionality or security
(j) Violate any applicable laws or regulations

Violation may result in termination and legal action.`
    },
    {
      title: "7. User Submissions",
      content: `If you submit information, feedback, suggestions, or content to Zomant Solutions, you grant us the right to use such submissions for business purposes without compensation.

You agree that submitted content:
• Does not violate any law
• Does not infringe intellectual property rights
• Does not contain harmful or illegal content.`
    },
    {
      title: "8. Third-Party Links",
      content: `The Site may contain links to third-party websites.

Zomant Solutions is not responsible for:
• Third-party content
• Privacy practices
• Third-party services

Accessing third-party websites is at your own risk.`
    },
    {
      title: "9. Software and Services",
      content: `Any software available on the Site is protected by intellectual property laws.

Use of software is governed by separate agreements, including:
• SaaS Agreement
• License Agreement
• Subscription Agreement.`
    },
    {
      title: "10. Disclaimer of Warranties",
      content: `The Site and its content are provided on an “AS IS” and “AS AVAILABLE” basis.

Zomant Solutions makes no warranties regarding:
• Accuracy
• Reliability
• Availability
• Security

We do not guarantee uninterrupted or error-free operation.`
    },
    {
      title: "11. Limitation of Liability",
      content: `Zomant Solutions shall not be liable for any:
• Direct damages
• Indirect damages
• Loss of profits
• Data loss
• Business interruption

arising from use of this Site. Use of this Site is at your own risk.`
    },
    {
      title: "12. Indemnification",
      content: `You agree to indemnify and hold harmless Zomant Solutions Private Limited from any claims, damages, losses, or expenses arising from:
• Your use of the Site
• Violation of these Terms
• Violation of applicable laws.`
    },
    {
      title: "13. Termination of Access",
      content: `Zomant Solutions reserves the right to terminate or restrict access to the Site without notice if:
• Terms are violated
• Illegal activity detected
• Security risks identified.`
    },
    {
      title: "14. Governing Law and Jurisdiction",
      content: `This Agreement is governed by the laws of India.

All disputes shall be subject to the exclusive jurisdiction of the courts located in:
Hyderabad, Telangana, India.`
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        {...sectionMotion}
        className="bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20 text-center"
      >
        <h1 className="text-5xl font-bold">
          Terms & Conditions
        </h1>
        <p className="text-gray-700 mt-4">
          Please read these terms carefully before using our services.
        </p>
      </motion.section>

      {/* Intro */}
      <motion.section {...sectionMotion} className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">


          <div className="space-y-8 mt-10">
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">{term.title}</h2>
                  <p className="whitespace-pre-line">{term.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Terms;
