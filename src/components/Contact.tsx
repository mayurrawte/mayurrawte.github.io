import React from 'react';
import Section from './Section';

const links: [string, string][] = [
  ['GitHub', 'https://github.com/mayurrawte'],
  ['LinkedIn', 'https://linkedin.com/in/mayurrawte'],
  ['Pexels', 'https://www.pexels.com/@mayur-rawte/'],
  ['Medium', 'https://medium.com/@rawte.mayur'],
  ['Instagram', 'https://instagram.com/thepsygeek'],
];

const Contact: React.FC = () => {
  return (
    <Section id="contact" n="05" kicker="Contact" title="Say hello.">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <p className="text-ink/85 text-lg mb-4">Email is best — I usually reply within a day.</p>
          <a
            href="mailto:rawte.mayur@gmail.com"
            className="display link text-ink text-[2rem] md:text-[3rem] leading-none inline-block"
          >
            rawte.mayur@gmail.com
          </a>
        </div>

        <div className="col-span-12 md:col-span-4">
          <p className="kicker mb-4">Elsewhere</p>
          <ul className="space-y-2">
            {links.map(([label, url]) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="row-link text-ink/85">
                  {label} <span className="text-faint">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
