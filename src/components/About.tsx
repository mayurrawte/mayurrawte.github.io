import React from 'react';
import Section from './Section';

const facts: [string, string][] = [
  ['Role', 'CTO & founding engineer · Shipthis · 2017 → now'],
  ['Based', 'Bengaluru, India'],
  ['Studied', 'B.E. Information Technology · M.A. Psychology (IGNOU)'],
  ['Recognized', 'Best IoT Solution — Ministry of Power & Coal · SIH finalist'],
  ['Published', 'IJCA Vol 171 №2 — "Smart Prepaid Energy Meter", 2017'],
  ['Online', '60 repos on GitHub · 13.2M photo views on Pexels'],
];

const About: React.FC = () => {
  return (
    <Section id="about" n="01" kicker="About" title={<>Build, look,<br className="hidden md:block" /> write.</>}>
      <div className="grid grid-cols-12 gap-8 md:gap-12">
        <div className="col-span-12 md:col-span-7 space-y-5 text-ink/85 text-lg leading-relaxed">
          <p>
            I came up as a full-stack engineer and joined Shipthis as a founding engineer in
            2017. Nearly a decade later, I run engineering there as CTO. Somewhere in between, I
            went back to school for psychology.
          </p>

          <blockquote className="display text-ink text-[1.8rem] md:text-[2.3rem] leading-[1.12] !mt-10 !mb-10">
            “I wanted to understand why people abandon perfectly working software — and found
            that <span className="italic">working</span> and <span className="italic">good</span>{' '}
            are different things.”
          </blockquote>

          <p>
            So I build, I look, and I write — three ways of paying attention to the same world.
            Hardware came first: a smart electricity meter that talked over MQTT, recognized by
            the Ministry of Power &amp; Coal of India. Then logistics software, used by 100+
            freight forwarders to move a million-plus shipments.
          </p>
          <p className="text-muted">
            Open source on the side, and — in the quiet hours — the camera. My photographs have
            been viewed 13.2 million times on Pexels.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-4 md:col-start-9">
          <dl className="text-sm">
            {facts.map(([k, v]) => (
              <div key={k} className="py-3 border-t border-line first:border-t-0">
                <dt className="kicker mb-1.5">{k}</dt>
                <dd className="text-ink/85">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
};

export default About;
