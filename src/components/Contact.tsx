import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

const links: SocialLink[] = [
  { label: 'GitHub',    url: 'https://github.com/mayurrawte',              handle: '@mayurrawte' },
  { label: 'LinkedIn',  url: 'https://linkedin.com/in/mayurrawte',         handle: 'mayurrawte' },
  { label: 'Pexels',    url: 'https://www.pexels.com/@mayur-rawte/',       handle: '@mayur-rawte' },
  { label: 'Medium',    url: 'https://medium.com/@rawte.mayur',            handle: '@rawte.mayur' },
  { label: 'Instagram', url: 'https://instagram.com/thepsygeek',           handle: '@thepsygeek' },
];

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            Let's talk
          </h2>
          <p className="text-stone-500 font-sans text-lg mb-12 max-w-md leading-relaxed">
            Whether it's a collaboration, a project, or just a conversation —
            email is the best way to reach me.
          </p>

          <a
            href="mailto:rawte.mayur@gmail.com"
            className="inline-block text-2xl md:text-3xl font-serif font-semibold text-stone-900 underline underline-offset-4 decoration-amber-700 hover:text-amber-700 transition-colors duration-200 mb-16"
          >
            rawte.mayur@gmail.com
          </a>

          <div className="border-t border-stone-200 pt-10">
            <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mb-6">Elsewhere</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 border-b border-stone-100 hover:border-stone-300 transition-colors duration-200"
                >
                  <span className="text-stone-900 font-sans font-medium text-sm group-hover:text-amber-700 transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="text-stone-400 font-sans text-sm group-hover:text-stone-600 transition-colors duration-200">
                    {link.handle} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
