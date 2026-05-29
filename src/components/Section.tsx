import React from 'react';

interface Props {
  id: string;
  n: string;
  kicker: string;
  title: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, n, kicker, title, children }) => (
  <section id={id} className="border-t border-line scroll-mt-16">
    <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="grid grid-cols-12 gap-6 items-baseline mb-12 md:mb-16">
        <div className="col-span-12 md:col-span-4">
          <p className="kicker flex items-baseline gap-3">
            <span className="folio text-2xl">{n}</span>
            {kicker}
          </p>
        </div>
        <h2 className="col-span-12 md:col-span-8 display text-ink text-[2.4rem] md:text-[3.6rem] leading-[0.98]">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section;
