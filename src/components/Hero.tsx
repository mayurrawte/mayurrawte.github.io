import React from 'react';

const identities = [
  { n: '01', label: 'Engineer' },
  { n: '02', label: 'Photographer' },
  { n: '03', label: 'Writer' },
];

const Hero: React.FC = () => {
  return (
    <section className="max-w-page mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-14 md:pb-20">
      {/* Masthead */}
      <div className="grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 lg:col-span-8">
          <p className="kicker mb-5">Personal site · Bengaluru · Est. 2017</p>
          <h1 className="display text-ink text-[clamp(3.25rem,12vw,9rem)] leading-[0.84]">
            <span className="block">Mayur</span>
            <span className="block italic">Rawte</span>
          </h1>
        </div>

        <ol className="col-span-12 lg:col-span-4 flex lg:flex-col gap-x-8 gap-y-3 lg:items-end lg:text-right">
          {identities.map((i) => (
            <li key={i.n} className="flex items-baseline gap-2.5">
              <span className="folio text-base">{i.n}</span>
              <span className="display text-ink text-xl md:text-2xl">{i.label}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Heavy rule */}
      <div className="border-t-2 border-rule mt-10 md:mt-14 mb-10 md:mb-12" />

      {/* Statement + featured photograph */}
      <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="col-span-12 lg:col-span-7">
          <p className="display text-ink text-[2rem] md:text-[2.9rem] leading-[1.04] mb-7">
            I build software that tries to{' '}
            <span className="italic">disappear.</span>
          </p>
          <p className="text-ink/85 text-lg leading-relaxed max-w-[34rem]">
            I'm Mayur — Chief Technology Officer at{' '}
            <a href="https://shipthis.co" target="_blank" rel="noopener noreferrer" className="link">
              Shipthis
            </a>
            , where we make AI-powered freight-forwarding software. In the quieter hours I
            photograph and write.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 kicker">
            <a href="mailto:rawte.mayur@gmail.com" className="row-link normal-case tracking-normal text-[15px] text-ink">rawte.mayur@gmail.com</a>
            <a href="https://github.com/mayurrawte" target="_blank" rel="noopener noreferrer" className="row-link">GitHub</a>
            <a href="https://in.linkedin.com/in/mayurrawte" target="_blank" rel="noopener noreferrer" className="row-link">LinkedIn</a>
          </div>
        </div>

        <figure className="col-span-12 lg:col-span-5">
          <div className="overflow-hidden bg-black/5">
            <img
              src="https://images.pexels.com/photos/10979606/pexels-photo-10979606.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop"
              alt="A sun that has decided — Goa, on the Arabian Sea"
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <figcaption className="kicker mt-3 normal-case tracking-normal text-faint">
            A sun that has decided · Goa, Arabian Sea · 2022
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
