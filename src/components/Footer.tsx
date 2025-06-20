import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-serif font-bold mb-2">Mayur Rawte</h3>
            <p className="text-gray-400 text-lg">Merging code, mind & lens into meaningful impact</p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-px bg-gradient-to-r from-accent-purple to-accent-pink mx-auto mb-8"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400"
          >
            <span>© {currentYear} Mayur Rawte</span>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-accent-pink" fill="currentColor" />
              </motion.div>
              <span>and</span>
              <Code2 className="w-4 h-4 text-accent-purple" />
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-6 text-sm"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, color: '#9D8DF1' }}
              className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, color: '#F093FB' }}
              className="text-gray-400 hover:text-accent-pink transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;