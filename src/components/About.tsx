import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-14">About</h2>

          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Left — prose */}
            <div className="md:col-span-3 space-y-5 text-stone-600 text-lg leading-relaxed font-sans">
              <p>
                I started as a founding engineer at a freight startup in 2017 — back when
                the codebase was a few hundred lines and the team was two people. Seven
                years later, I run engineering as CTO.
              </p>
              <p>
                Somewhere in between I studied psychology. Not for the credential — I wanted
                to understand why people abandon perfectly working software. Turns out{' '}
                <em>working</em> and <em>good</em> are different things.
              </p>
              <p>
                I photograph when I'm not building. 13 million views on Pexels.
                I write occasionally — mostly about things that bother me until I find the right words.
              </p>
            </div>

            {/* Right — facts */}
            <div className="md:col-span-2 space-y-7">
              <div className="border-l-2 border-amber-700 pl-4">
                <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mb-1">Currently</p>
                <p className="text-stone-900 font-sans font-medium">CTO @ Shipthis</p>
                <p className="text-stone-500 font-sans text-sm">AI-powered freight forwarding</p>
              </div>

              <div className="border-l-2 border-stone-200 pl-4">
                <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mb-1">Based in</p>
                <p className="text-stone-900 font-sans font-medium">Bengaluru, India</p>
              </div>

              <div className="border-l-2 border-stone-200 pl-4">
                <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mb-1">Education</p>
                <p className="text-stone-900 font-sans font-medium">B.E. Information Technology</p>
                <p className="text-stone-500 font-sans text-sm">M.A. Psychology — IGNOU</p>
              </div>

              <div className="border-l-2 border-stone-200 pl-4">
                <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mb-1">Recognition</p>
                <p className="text-stone-900 font-sans font-medium text-sm">Ministry of Power & Coal, India</p>
                <p className="text-stone-500 font-sans text-sm">Best IoT Solution — ELIOT</p>
              </div>

              <div className="border-l-2 border-stone-200 pl-4">
                <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mb-1">Photography</p>
                <p className="text-stone-900 font-sans font-medium">13.2M views on Pexels</p>
                <p className="text-stone-500 font-sans text-sm">102 photos · Rank #6.2K globally</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
