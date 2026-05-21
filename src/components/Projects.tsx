import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

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
      'AI-powered freight forwarding software. I joined as founding engineer and grew into CTO. Serves freight forwarders globally — air, ocean, land, rail, multimodal.',
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
      'Shortest sea route between any two points on Earth. Handles Suez, Panama, Bab-el-Mandeb canal restrictions, vessel-draft gating, K-shortest alternatives, and ETA from speed.',
    url: 'https://github.com/mayurrawte/searoute-ts',
    tags: ['TypeScript', 'Geospatial', 'npm'],
  },
  {
    name: 'github-angular-actions',
    type: 'GitHub Action · 5★',
    description:
      'Pre-installs Angular CLI and dependencies in your GitHub Actions workflow. Configure ng versions per project. Used by teams worldwide.',
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

          <div className="space-y-px">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="group"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row sm:items-start gap-4 py-8 border-b border-stone-200 hover:border-stone-400 transition-colors duration-200"
                >
                  <div className="sm:w-40 flex-shrink-0">
                    <p className="text-xs text-stone-400 font-sans uppercase tracking-wider mt-1">
                      {project.type}
                    </p>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-serif font-semibold text-stone-900 group-hover:text-amber-700 transition-colors duration-200">
                        {project.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-stone-300 group-hover:text-amber-700 transition-colors duration-200 flex-shrink-0" />
                    </div>
                    <p className="text-stone-500 font-sans text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-stone-400 font-sans bg-stone-100 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
