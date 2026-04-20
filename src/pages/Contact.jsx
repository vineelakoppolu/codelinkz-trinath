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

  // Service → Products Mapping
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

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: [
        "1st Floor, Highmark Chambers,",
        "8/199/2, X Roads,",
        "Gachibowli, Khajaguda,",
        "Hyderabad, Telangana 500032",
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 7093702655"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["business@zomantsolutions.com"],
    },
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}>
      {/* Hero Section */}
      <motion.section
        {...sectionMotionProps}
        className="relative bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Connect
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project or idea? Let's discuss how we can help bring it to life.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section {...sectionMotionProps} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us and we'll respond as soon as possible.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 border-0 bg-gray-50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-10 border-0 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>
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
                    <label className="block mb-2 font-medium">Email *</label>
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
                      className="w-full border rounded-md px-3 py-2">
                      <option value="Service">Service</option>
                      <option value="Products">Products</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>


                  {formData.service === "Service" && (
                    <div>
                      <label className="block mb-2 font-medium">
                        Select Service *
                      </label>
                      <select
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Product</option>
                        <option value="custom">
                          Custom Software Development
                        </option>
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
                  )}


                  {formData.service === "Products" && (
                    <div>
                      <label className="block mb-2 font-medium">
                        Select Product *
                      </label>
                      <select
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2">
                        <option value="">Select Product</option>
                        {serviceProducts.product.map((prod, index) => (
                          <option key={index} value={prod}>
                            {prod}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Description (for Services and Others) */}
                  {formData.service && formData.service == "Others" && (
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
                  )}

                  {/* File Upload */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Upload File (Optional)
                    </label>
                    <Input type="file" name="file" onChange={handleChange} />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              We'd love to meet you in person
            </p>
          </div>
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">
                  1st Floor, Highmark Chambers, 8/199/2, X Roads
                </p>
                <p className="text-gray-600">Gachibowli, Khajaguda, Hyderabad, Telangana 500032</p>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;
