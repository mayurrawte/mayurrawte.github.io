import React from 'react';
import Section from './Section';

interface Project {
  n: string;
  name: string;
  year: string;
  blurb: string;
  url: string;
}

const projects: Project[] = [
  {
    n: '01',
    name: 'Shipthis',
    year: '2017 → now',
    blurb: 'All-in-one AI freight-forwarding software — quote-to-cash across air, ocean, land and rail. 100+ forwarders, a million-plus shipments.',
    url: 'https://shipthis.co',
  },
  {
    n: '02',
    name: 'Teamsly',
    year: '2025',
    blurb: 'A keyboard-first, AI-aware Microsoft Teams client on the Graph API — voice rooms, disappearing DMs, an MCP server. Installable via Homebrew.',
    url: 'https://github.com/mayurrawte/teamsly',
  },
  {
    n: '03',
    name: 'searoute-ts',
    year: '2024',
    blurb: 'A TypeScript maritime-routing library — shortest sea route between two points, with canal gates, vessel-draft limits and ETA from speed.',
    url: 'https://github.com/mayurrawte/searoute-ts',
  },
  {
    n: '04',
    name: 'SherlockQA',
    year: '2024',
    blurb: 'A GitHub Action that runs an AI pull-request review on every commit — catching the boring class of mistakes before a human does.',
    url: 'https://github.com/mayurrawte/SherlockQA',
  },
  {
    n: '05',
    name: 'GoTrust',
    year: '2023',
    blurb: 'A small, opinionated authentication framework in Go — JWT and OAuth flows, batteries included.',
    url: 'https://github.com/mayurrawte/GoTrust',
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="work" n="02" kicker="Selected work" title="Things, shipped.">
      <ul>
        {projects.map((p) => (
          <li key={p.name}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-12 gap-x-4 gap-y-2 items-baseline py-6 border-t border-line"
            >
              <span className="folio col-span-2 md:col-span-1 text-xl">{p.n}</span>
              <span className="display row-link col-span-10 md:col-span-4 text-ink text-2xl md:text-[2rem] leading-none">
                {p.name}
              </span>
              <span className="kicker col-span-6 md:col-span-2 text-faint">{p.year}</span>
              <p className="col-span-12 md:col-span-5 text-muted leading-snug">{p.blurb}</p>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-muted max-w-[40rem]">
        Earlier: <span className="text-ink/85">ELIOT</span>, a smart prepaid electricity meter
        (Best IoT Solution, Ministry of Power &amp; Coal), and{' '}
        <span className="text-ink/85">InviBeats</span>, heart-rate from a phone camera, selected
        by Samsung R&amp;D. All 60 repositories on{' '}
        <a href="https://github.com/mayurrawte" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>.
      </p>
    </Section>
  );
};

export default Projects;
