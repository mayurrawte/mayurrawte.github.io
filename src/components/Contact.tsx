import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Github, Linkedin, Instagram, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you could add a toast notification here)
    alert('Message sent! Thank you for reaching out.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/mayurrawte',
      color: 'hover:text-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/mayurrawte',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Photography',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/rawhgir',
      color: 'hover:text-accent-teal',
    },
    {
      name: 'Writing',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://instagram.com/thesilentpill',
      color: 'hover:text-accent-pink',
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:rawte.mayur@gmail.com',
      color: 'hover:text-accent-purple',
    },
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
    <section id="contact" className="py-24 bg-gradient-to-br from-pastel-rose/20 via-pastel-cream to-pastel-lavender/30">
      <div className="max-w-4xl mx-auto px-6">
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
            Let's Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed"
          >
            Whether you want to collaborate on a project, discuss ideas, or just say hello,
            I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-accent-purple to-accent-pink text-white rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Quote */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50"
            >
              <blockquote className="text-lg italic text-gray-700 leading-relaxed font-serif">
                "I believe meaning comes not just from what we do, but how we do it.
                Every interaction is an opportunity to create something beautiful."
              </blockquote>
              <cite className="block mt-4 text-sm text-gray-500 font-sans">— Mayur Rawte</cite>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                Find me elsewhere
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 text-gray-600 ${social.color} group`}
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="p-2 bg-gray-100/80 rounded-xl group-hover:bg-white/90 transition-colors duration-300"
                    >
                      {social.icon}
                    </motion.div>
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-6 bg-gradient-to-r from-accent-teal to-accent-blue text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <FileText className="w-6 h-6" />
                <div>
                  <span className="font-medium text-lg">Download Resume</span>
                  <p className="text-sm opacity-90">Complete professional background</p>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="ml-auto opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;