import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();

  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phone: "",
    service: "",
    product: "",
    description: "",
    file: null,
  });

  // 🔥 Service → Products Mapping
  const serviceProducts = {
    custom: [],
    mobile: [],
    web: [],
    ai: [],
    cloud: [],
    uiux: [],
    website: [],
    data: [],
    staff: [],
    product: [
      "Skyget - AI Powered EdTech Platform",
      "JrTekCEO - Entrepreneurship Skill Platform",
      "HrLinkz - All-in-One HR Management SaaS",
      "TrackLinkz - Fleet & Vehicle Management System",
      "SocialLinkz - Social Media & Email Marketing Platform",
      "HelloDoctorz - Doctor Practice Management System",
    ],
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "service") {
      setFormData({
        ...formData,
        service: value,
        product: "", // reset product when service changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast({
      title: "Requirement Submitted!",
      description: "Our team will contact you shortly.",
    });

    setFormData({
      companyName: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      service: "",
      product: "",
      description: "",
      file: null,
    });
  };

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Hero */}
      <motion.section
        {...sectionMotionProps}
        className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-28 pb-16"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Submit Your Requirement
          </h1>
          <p className="text-gray-300 text-lg">
            Tell us what you need and we’ll build it for you.
          </p>
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        {...sectionMotionProps}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto px-6">
          <Card className="p-8 shadow-xl border-0">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Company */}
              <div>
                <label className="block mb-2 font-medium">
                  Company Name *
                </label>
                <Input
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">
                    First Name *
                  </label>
                  <Input
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Last Name *
                  </label>
                  <Input
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Job Title */}
              <div>
                <label className="block mb-2 font-medium">
                  Job Title *
                </label>
                <Input
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium">
                  Phone / WhatsApp *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Service */}
              <div>
                <label className="block mb-2 font-medium">
                  Service Required *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="">Select Service</option>
                  <option value="custom">Custom Software Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="web">Web App Development</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="cloud">Cloud Consulting</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="website">Website Development</option>
                  <option value="data">Data Engineering</option>
                  <option value="staff">Staff Augmentation</option>
                  <option value="product">Our Products</option>
                </select>
              </div>

              {/* Products Dropdown (only if product service selected) */}
              {formData.service === "product" && (
                <div>
                  <label className="block mb-2 font-medium">
                    Select Product *
                  </label>
                  <select
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  >
                    <option value="">Select Product</option>
                    {serviceProducts.product.map((prod, index) => (
                      <option key={index} value={prod}>
                        {prod}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Description */}
              <div>
                <label className="block mb-2 font-medium">
                  Requirement Description *
                </label>
                <Textarea
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block mb-2 font-medium">
                  Upload File (Optional)
                </label>
                <Input
                  type="file"
                  name="file"
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
              >
                Submit Requirement
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>
        </div>
      </motion.section>
    </motion.div>
  );
};
