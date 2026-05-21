import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-cream">
      <div className="max-w-4xl mx-auto px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-stone-400 text-xs font-sans tracking-widest uppercase mb-10">
            Bengaluru, India
          </p>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-stone-900 leading-none mb-8">
            Mayur<br />Rawte
          </h1>

          <div className="w-12 h-px bg-amber-700 mb-8" />

          <p className="text-xl md:text-2xl text-stone-500 font-sans font-light max-w-lg leading-relaxed mb-3">
            CTO at Shipthis · Photographer · Builder
          </p>
          <p className="text-base text-stone-400 font-sans max-w-md leading-relaxed mb-14">
            10 years shipping software — from IoT hardware to global logistics platforms.
            Between deploys, I photograph the world.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <button
              onClick={() => scrollTo('work')}
              className="text-stone-900 font-sans font-medium underline underline-offset-4 decoration-amber-700 hover:text-amber-700 transition-colors duration-200"
            >
              Work ↓
            </button>
            <button
              onClick={() => scrollTo('photos')}
              className="text-stone-400 font-sans hover:text-stone-700 transition-colors duration-200"
            >
              Photos
            </button>
            <button
              onClick={() => scrollTo('writing')}
              className="text-stone-400 font-sans hover:text-stone-700 transition-colors duration-200"
            >
              Writing
            </button>
            <a
              href="mailto:rawte.mayur@gmail.com"
              className="text-stone-400 font-sans hover:text-amber-700 transition-colors duration-200"
            >
              Get in touch →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
