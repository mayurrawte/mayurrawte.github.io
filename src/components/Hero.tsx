import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Code, Pen, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-lavender via-pastel-blue to-pastel-mint">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20 blur-sm"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-accent-purple/20 rounded-full blur-xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-48 h-48 bg-accent-pink/20 rounded-full blur-xl"
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-teal/20 rounded-full blur-lg"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            Mayur Rawte
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-sans font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Merging code, mind & lens into meaningful impact.
          </p>
        </motion.div>

        {/* Animated Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-8 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
          >
            <Code className="w-8 h-8 text-accent-purple" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -15 }}
            className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
          >
            <Camera className="w-8 h-8 text-accent-teal" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
          >
            <Pen className="w-8 h-8 text-accent-pink" />
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 rounded-full font-medium text-lg hover:bg-white/30 transition-all duration-300"
          >
            Read My Writings
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="group cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-600 group-hover:text-accent-purple transition-colors duration-300"
          >
            <span className="text-sm font-sans mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;