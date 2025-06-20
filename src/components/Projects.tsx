import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, Cpu, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'ShipThis',
      description: 'Revolutionary shipping and logistics platform transforming how businesses handle delivery operations with real-time tracking and intelligent routing.',
      link: 'https://shipthis.co',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-accent-purple to-accent-pink',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'IoT Smart Meter',
      description: 'Advanced IoT research project featuring real-time energy consumption tracking with predictive analytics and automated optimization.',
      link: '#',
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-accent-teal to-accent-blue',
      tags: ['IoT', 'Python', 'Machine Learning', 'Research'],
    },
    {
      title: 'Open Source',
      description: 'Contributing to the developer community through various open-source projects, tools, and libraries that solve real-world problems.',
      link: 'https://github.com/mayurrawte',
      icon: <Github className="w-8 h-8" />,
      gradient: 'from-accent-pink to-accent-purple',
      tags: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
    },
  ];

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
    <section id="projects" className="py-24 bg-gradient-to-br from-pastel-blue/20 via-white to-pastel-lavender/30">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 font-sans max-w-3xl mx-auto leading-relaxed"
          >
            Building meaningful solutions that bridge the gap between technology and human needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden relative h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white mb-6 shadow-lg`}>
                  {project.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100/80 text-gray-600 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.5 
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 rounded-full blur-sm"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/mayurrawte"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Github className="w-6 h-6" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;