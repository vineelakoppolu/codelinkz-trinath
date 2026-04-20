import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const sectionMotionProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const blogPosts = [
    {
      title: "Top 10 Technology Trends in 2025",
      date: "Sep 10, 2025",
      category: "Technology",
      excerpt:
        "Stay ahead with the latest technology trends shaping businesses worldwide in 2025...",
      link: "/blog/top-10-tech-trends-2025",
      image: "/assets/blog1.jpeg",
    },
    {
      title: "How to Scale Your Business with Cloud Solutions",
      date: "Aug 25, 2025",
      category: "Cloud",
      excerpt:
        "Cloud computing is revolutionizing businesses. Learn how to leverage cloud solutions effectively...",
      link: "/blog/scale-business-cloud",
      image: "/assets/blog2.jpeg",
    },
    {
      title: "Agile Methodology Best Practices",
      date: "Jul 15, 2025",
      category: "Project Management",
      excerpt:
        "Implementing Agile effectively can accelerate project delivery and improve team productivity...",
      link: "/blog/agile-best-practices",
      image: "/assets/blog3.jpeg",
    },
  ];

  const categories = [
    "Technology",
    "Cloud",
    "Project Management",
    "Business",
    "AI & ML",
  ];

  const clients = [
    { name: "Travel" },
    { name: "Octane Fitness" },
    { name: "Life Fitness" },
    { name: "Smile" },
    { name: "True" },
    { name: "Cybex" },
    { name: "Mockup" },
    { name: "Precor" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}>
      {/* Hero */}
      <motion.section
        {...sectionMotionProps}
        className="relative bg-gradient-to-br from-white via-blue-50 to-blue-50 text-gray-900 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with latest trends in technology, business, and
              project management.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Blog Cards */}
      <motion.section {...sectionMotionProps} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest <span className="text-blue-600">Articles</span>
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section {...sectionMotionProps} className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Browse by <span className="text-blue-600">Topics</span>
          </h2>

          <p className="text-gray-600 mb-10">
            Explore articles based on categories that matter most to you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full cursor-pointer text-blue-600 font-semibold hover:scale-105 hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Clients */}
      <motion.section {...sectionMotionProps} className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Clients</span>
          </h2>

          <p className="text-gray-600 mb-12">
            Trusted by leading brands across industries worldwide.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md py-6 px-4 flex items-center justify-center
                           text-gray-800 font-semibold text-lg
                           hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...sectionMotionProps}
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Stay Updated with Our Insights
        </h2>

        <p className="text-lg text-gray-100 mb-8">
          Subscribe to our newsletter or get in touch to receive the latest
          articles, trends, and expert advice straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact-us"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us
          </Link>

          <Link
            to="/blog"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Explore More Articles
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default BlogPage;
