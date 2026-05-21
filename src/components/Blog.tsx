import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Article {
  title: string;
  date: string;
  tag: string;
  url: string;
  summary: string;
}

const articles: Article[] = [
  {
    title: "AI Isn't Here to Replace Developers. It's Here to Replace the Stuff We Secretly Hate Doing.",
    date: 'Feb 2026',
    tag: 'Tech',
    url: 'https://medium.com/@rawte.mayur/ai-isnt-here-to-replace-developers-it-s-here-to-replace-the-stuff-we-secretly-hate-doing-9272a50c1c4a',
    summary: 'AI automates the tedious parts of development — the boilerplate, the documentation, the repetitive fixes. Programmers are still very much needed.',
  },
  {
    title: "Too much positivity is bad for your mental health",
    date: 'Apr 2020',
    tag: 'Psychology',
    url: 'https://medium.com/@rawte.mayur/too-much-positivity-is-bad-for-your-mental-health-d8ef850fd247',
    summary: 'Toxic positivity suppresses genuine emotions. Acknowledging difficulty is not weakness — it is how resilience actually works.',
  },
  {
    title: "Mind, Me, and a Routine",
    date: 'Apr 2020',
    tag: 'Psychology',
    url: 'https://medium.com/@rawte.mayur/mind-me-and-a-routine-ea218c8a8fac',
    summary: 'A look at how routines connect to wellbeing — and why the "lazy" label so often misses what is really going on.',
  },
  {
    title: "It's not all about happiness.",
    date: 'Feb 2020',
    tag: 'Psychology',
    url: 'https://medium.com/@rawte.mayur/its-not-all-about-happiness-9dc02e684909',
    summary: 'Social media sells a narrow version of the good life. Broader emotional wellbeing is more honest and more useful.',
  },
];

const Blog: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="writing" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-14">Writing</h2>

          <div className="space-y-px">
            {articles.map((article, i) => (
              <motion.div
                key={article.url}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: 'easeOut' }}
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-start gap-4 py-7 border-b border-stone-200 hover:border-stone-400 transition-colors duration-200"
                >
                  <div className="sm:w-28 flex-shrink-0 flex sm:flex-col gap-3 sm:gap-1">
                    <span className="text-xs text-stone-400 font-sans uppercase tracking-wider">{article.date}</span>
                    <span className="text-xs text-amber-700 font-sans bg-amber-50 px-2 py-0.5 rounded self-start">
                      {article.tag}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-serif font-semibold text-stone-900 group-hover:text-amber-700 transition-colors duration-200 mb-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-stone-500 font-sans text-sm leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://medium.com/@rawte.mayur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 font-sans text-sm hover:text-stone-700 transition-colors duration-200 underline underline-offset-4"
            >
              All articles on Medium →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
