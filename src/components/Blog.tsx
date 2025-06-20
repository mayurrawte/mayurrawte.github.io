import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Clock, ArrowRight, Filter } from 'lucide-react';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Tech', 'Psychology', 'Photography', 'Leadership'];

  const blogPosts = [
    {
      title: "The Art of Empathetic Leadership in Tech",
      excerpt: "How INFP traits can become superpowers in leading engineering teams and building products that truly matter.",
      category: "Leadership",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      gradient: "from-accent-purple to-accent-pink",
    },
    {
      title: "Building with Purpose: Beyond the Code",
      excerpt: "Every line of code is an opportunity to create meaningful impact. Here's how I approach development with intention.",
      category: "Tech",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      gradient: "from-accent-teal to-accent-blue",
    },
    {
      title: "The Psychology of Creative Problem Solving",
      excerpt: "Understanding how our minds work when we're in the flow state, and how to cultivate creativity in technical work.",
      category: "Psychology",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      gradient: "from-accent-pink to-accent-purple",
    },
    {
      title: "Capturing the Unseen: Philosophy Through Photography",
      excerpt: "How photography has taught me to see beyond the surface and find beauty in the mundane moments of life.",
      category: "Photography",
      readTime: "7 min read",
      date: "Nov 28, 2024",
      gradient: "from-accent-blue to-accent-teal",
    },
    {
      title: "The Silent Revolution: Introversion in Leadership",
      excerpt: "Challenging the extrovert bias in tech leadership and exploring how quiet leaders can drive innovation.",
      category: "Leadership",
      readTime: "9 min read",
      date: "Nov 20, 2024",
      gradient: "from-accent-purple to-accent-pink",
    },
    {
      title: "Mindful Development: Bringing Presence to Programming",
      excerpt: "How mindfulness practices have transformed my approach to coding and problem-solving in complex systems.",
      category: "Tech",
      readTime: "5 min read",
      date: "Nov 15, 2024",
      gradient: "from-accent-teal to-accent-blue",
    },
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-pastel-lavender/20 via-white to-pastel-blue/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6"
          >
            Thoughts & Writings
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 font-sans max-w-3xl mx-auto leading-relaxed"
          >
            Exploring the intersection of technology, psychology, and creativity through words and reflections.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white shadow-lg'
                    : 'bg-white/70 backdrop-blur-sm text-gray-600 hover:bg-white/90 border border-white/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={`${post.title}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium mb-6 self-start bg-gradient-to-r ${post.gradient}`}>
                  <BookOpen className="w-4 h-4" />
                  {post.category}
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>

                {/* Read More */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-accent-purple font-medium group-hover:text-accent-pink transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <motion.a
            href="https://medium.com/@rawte.mayur"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <BookOpen className="w-6 h-6" />
            <span>Read All Articles on Medium</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;