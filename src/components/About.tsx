import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Brain, Camera, Code2 } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="about" className="py-24 bg-gradient-to-br from-pastel-cream via-white to-pastel-mint/30">
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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 font-sans max-w-3xl mx-auto leading-relaxed"
          >
            An INFP soul navigating the intersection of technology and creativity,
            finding meaning in every line of code and every captured moment.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-purple/20 rounded-full">
                  <Code2 className="w-6 h-6 text-accent-purple" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800">CTO @ ShipThis</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Leading engineering teams with empathy and vision, building products that matter.
                8+ years of transforming ideas into scalable solutions that impact real lives.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-teal/20 rounded-full">
                  <Camera className="w-6 h-6 text-accent-teal" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800">Photographer & Writer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Capturing the world through @rawhgir lens and sharing thoughts through @thesilentpill.
                Every frame tells a story, every word carries emotion.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent-pink/20 rounded-full">
                  <Heart className="w-6 h-6 text-accent-pink" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-gray-800">INFP - The Mediator</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Driven by values and authenticity, I believe technology should serve humanity
                with compassion and creativity at its core.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative">
              {/* Main Profile Area */}
              <div className="bg-gradient-to-br from-pastel-lavender to-pastel-blue rounded-3xl p-12 text-center relative overflow-hidden">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 bg-white/30 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm border border-white/40"
                >
                  <Brain className="w-16 h-16 text-gray-700" />
                </motion.div>
                
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                  Empathic Leader
                </h3>
                <p className="text-gray-600 italic">
                  "I believe meaning comes not just from what we do, but how we do it."
                </p>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 w-8 h-8 bg-accent-pink/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 left-8 w-6 h-6 bg-accent-purple/40 rounded-full"
                />
              </div>

              {/* Skill Tags */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap gap-3 justify-center"
              >
                {['Creative Thinker', 'Tech Leader', 'Visual Storyteller', 'Introspective Mind'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-white/50 shadow-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;