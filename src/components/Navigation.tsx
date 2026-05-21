import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'About',   id: 'about' },
  { name: 'Work',    id: 'work' },
  { name: 'Photos',  id: 'photos' },
  { name: 'Writing', id: 'writing' },
  { name: 'Contact', id: 'contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const isDark = !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-stone-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => scrollTo('home')}
            className={`text-lg font-serif font-bold transition-colors duration-300 ${
              isDark ? 'text-stone-100 hover:text-amber-500' : 'text-stone-900 hover:text-amber-700'
            }`}
          >
            MR
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.id)}
                className={`font-sans text-sm transition-colors duration-200 ${
                  isDark
                    ? 'text-stone-400 hover:text-stone-100'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-1 transition-colors duration-200 ${
              isDark ? 'text-stone-400 hover:text-stone-100' : 'text-stone-500 hover:text-stone-900'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-stone-900 border-b border-stone-700"
          >
            <div className="max-w-4xl mx-auto px-8 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left py-2.5 text-stone-400 hover:text-stone-100 font-sans text-sm transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
