import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Instagram, Edit3, ExternalLink } from 'lucide-react';

const CreativeWork: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const photographyImages = [
    'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  ];

  const writingSnippets = [
    {
      title: "On Solitude",
      content: "In the quiet moments between thoughts, we discover who we truly are beneath all the noise.",
      category: "Philosophy"
    },
    {
      title: "The Code of Empathy",
      content: "Every line of code carries the potential to touch a life. We write not just for machines, but for humans.",
      category: "Tech"
    },
    {
      title: "Through the Lens",
      content: "Photography isn't about capturing what you see—it's about revealing what you feel.",
      category: "Art"
    },
    {
      title: "The Silent Pill",
      content: "Sometimes the most profound truths are found in the spaces between words, in the silence that speaks.",
      category: "Poetry"
    }
  ];

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
    <section id="creative" className="py-24 bg-gradient-to-br from-pastel-mint/20 via-pastel-cream to-pastel-rose/20">
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
            Creative Work
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 font-sans max-w-3xl mx-auto leading-relaxed"
          >
            Exploring the world through different lenses - capturing moments and crafting words that resonate with the soul.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Photography Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-teal/20 rounded-full">
                  <Camera className="w-8 h-8 text-accent-teal" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-semibold text-gray-800">Photography</h3>
                  <p className="text-gray-600">@rawhgir</p>
                </div>
              </div>
            </motion.div>

            {/* Photo Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {photographyImages.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group relative"
                >
                  <img
                    src={image}
                    alt={`Photography ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="https://instagram.com/rawhgir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-teal to-accent-blue text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5" />
              <span>View on Instagram</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Writing Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-pink/20 rounded-full">
                  <Edit3 className="w-8 h-8 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-semibold text-gray-800">Writing</h3>
                  <p className="text-gray-600">@thesilentpill</p>
                </div>
              </div>
            </motion.div>

            {/* Writing Snippets */}
            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              {writingSnippets.map((snippet, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-serif font-semibold text-gray-800">{snippet.title}</h4>
                    <span className="px-3 py-1 bg-accent-pink/20 text-accent-pink text-sm rounded-full font-medium">
                      {snippet.category}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{snippet.content}"</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="https://medium.com/@rawte.mayur"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-purple text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Edit3 className="w-5 h-5" />
              <span>Read More on Medium</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;