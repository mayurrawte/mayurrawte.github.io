import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  name: string;
  type: string;
  description: string;
  url: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: 'Shipthis',
    type: 'Product · 2017–present',
    description:
      'AI-powered freight forwarding software. Joined as founding engineer, grew into CTO. Serves freight forwarders globally — air, ocean, land, rail, multimodal.',
    url: 'https://shipthis.co',
    tags: ['SaaS', 'Logistics', 'AI', 'B2B'],
  },
  {
    name: 'Teamsly',
    type: 'Open Source · 6★',
    description:
      'An open-source modern client for Microsoft Teams built with Next.js 15 and Microsoft Graph API. Available via Homebrew.',
    url: 'https://github.com/mayurrawte/teamsly',
    tags: ['Next.js', 'TypeScript', 'Microsoft Graph'],
  },
  {
    name: 'searoute-ts',
    type: 'Library · 3★',
    description:
      'Shortest sea route between any two points on Earth. Handles Suez, Panama, Bab-el-Mandeb restrictions, vessel-draft gating, K-shortest alternatives, and ETA from speed.',
    url: 'https://github.com/mayurrawte/searoute-ts',
    tags: ['TypeScript', 'Geospatial', 'npm'],
  },
  {
    name: 'github-angular-actions',
    type: 'GitHub Action · 5★',
    description:
      'Pre-installs Angular CLI and dependencies in your GitHub Actions workflow. Configure ng versions per project.',
    url: 'https://github.com/mayurrawte/github-angular-actions',
    tags: ['GitHub Actions', 'Angular', 'CI/CD'],
  },
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="work" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-14">Work</h2>

          <div>
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: 'easeOut' }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-6 py-7 border-b border-stone-200 hover:bg-amber-50/60 hover:border-amber-300 transition-all duration-200 -mx-4 px-4 rounded-sm"
                >
                  {/* Index */}
                  <span className="text-xs text-stone-300 font-sans font-medium mt-1.5 w-6 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-200">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h3 className="text-xl font-serif font-semibold text-stone-900 group-hover:text-amber-800 transition-colors duration-200">
                        {project.name}
                      </h3>
                      <span className="text-xs text-stone-400 font-sans">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-stone-500 font-sans text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-stone-400 font-sans bg-stone-100 group-hover:bg-amber-100/80 group-hover:text-amber-800 px-2 py-0.5 rounded transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-stone-200 group-hover:text-amber-500 transition-colors duration-200 self-start mt-1.5 text-lg">
                    ↗
                  </span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://github.com/mayurrawte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 font-sans text-sm hover:text-stone-700 transition-colors duration-200 underline underline-offset-4"
            >
              All repos on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
