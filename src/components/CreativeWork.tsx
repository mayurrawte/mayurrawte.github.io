import React from 'react';
import Section from './Section';

interface Photo {
  id: number;
  caption: string;
  loc: string;
}

const lead: Photo = { id: 14237553, caption: 'Mahabodhi, in late light', loc: 'Bodh Gaya, Bihar · 2022' };
const row: Photo[] = [
  { id: 11230739, caption: 'A red singleton', loc: 'Pune · 2022' },
  { id: 9456594, caption: 'Statue, breathing', loc: 'Hyderabad · 2021' },
  { id: 9305430, caption: 'Moon, mid-blink', loc: 'Bengaluru · 2021' },
];

const pexelsUrl = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

const Figure: React.FC<{ p: Photo; w: number; h: number; ratio: string }> = ({ p, w, h, ratio }) => (
  <a href={`https://www.pexels.com/photo/${p.id}/`} target="_blank" rel="noopener noreferrer" className="group block">
    <div className={`overflow-hidden bg-black/5 ${ratio}`}>
      <img src={pexelsUrl(p.id, w, h)} alt={p.caption} loading="lazy" className="w-full h-full object-cover" />
    </div>
    <div className="mt-2.5 flex items-baseline justify-between gap-3">
      <span className="text-ink/85 row-link">{p.caption}</span>
      <span className="kicker normal-case tracking-normal text-faint shrink-0">{p.loc}</span>
    </div>
  </a>
);

const CreativeWork: React.FC = () => {
  return (
    <Section id="photography" n="03" kicker="Photography · 13.2M views" title="Things that stood still.">
      <div className="mb-4">
        <Figure p={lead} w={1600} h={900} ratio="aspect-[16/9]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {row.map((p) => (
          <Figure key={p.id} p={p} w={700} h={875} ratio="aspect-[4/5]" />
        ))}
      </div>

      <p className="mt-10 text-muted">
        102 photographs, viewed 13.2 million times. More on{' '}
        <a href="https://www.pexels.com/@mayur-rawte/" target="_blank" rel="noopener noreferrer" className="link">Pexels</a>{' '}
        and{' '}
        <a href="https://instagram.com/rawhgir" target="_blank" rel="noopener noreferrer" className="link">Instagram</a>.
      </p>
    </Section>
  );
};

export default CreativeWork;
