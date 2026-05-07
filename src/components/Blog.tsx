import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogs = [
  {
    title: '10 Ways to Optimize Restaurant Operations with Modern Technology',
    excerpt: 'Discover proven strategies to streamline your restaurant operations and increase profitability. Learn from industry leaders.',
    author: 'Sarah Johnson',
    date: 'May 10, 2024',
    category: 'Restaurant',
    image: '🍽️',
    readTime: '5 min read',
  },
  {
    title: 'Healthcare Digital Transformation: A Complete Guide',
    excerpt: 'Explore the essential steps for transforming your healthcare practice with digital tools and automation.',
    author: 'Dr. Michael Chen',
    date: 'May 8, 2024',
    category: 'Healthcare',
    image: '⚕️',
    readTime: '7 min read',
  },
  {
    title: 'HR Excellence: Best Practices for Employee Management in 2024',
    excerpt: 'Master modern HR strategies to attract, retain, and develop top talent in your organization.',
    author: 'Emily Rodriguez',
    date: 'May 5, 2024',
    category: 'HR',
    image: '👥',
    readTime: '6 min read',
  },
  {
    title: 'Building a Scalable SaaS Architecture',
    excerpt: 'Technical insights into designing systems that grow with your business. Behind-the-scenes look at our platform.',
    author: 'Alex Kumar',
    date: 'May 1, 2024',
    category: 'Technology',
    image: '⚙️',
    readTime: '8 min read',
  },
  {
    title: 'Revenue Optimization Strategies for B2B Businesses',
    excerpt: 'Learn how to maximize revenue streams and improve customer lifetime value with data-driven strategies.',
    author: 'James Wilson',
    date: 'April 28, 2024',
    category: 'Business',
    image: '📈',
    readTime: '6 min read',
  },
  {
    title: 'The Future of Legal Tech: Innovations Reshaping the Industry',
    excerpt: 'Explore emerging technologies transforming legal practices and what it means for your firm.',
    author: 'Lisa Thompson',
    date: 'April 25, 2024',
    category: 'Legal',
    image: '⚖️',
    readTime: '7 min read',
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

export default function Blog() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
            Latest Insights & <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">Resources</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay updated with industry trends, best practices, and expert insights to grow your business.
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group h-full"
            >
              <motion.a
                href="#"
                className="relative flex flex-col h-full p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-primary transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{blog.image}</div>
                    <motion.span
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-600 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {blog.category}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-700 text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
                    {blog.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blog.author}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-500 text-primary">
                        {blog.readTime}
                      </span>
                      <motion.div
                        className="text-primary group-hover:text-accent-blue transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Articles */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent-blue text-white font-700 rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
