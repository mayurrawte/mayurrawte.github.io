import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-rule">
      <div className="max-w-page mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-baseline justify-between gap-3">
        <p className="display text-ink text-lg">Mayur Rawte</p>
        <p className="kicker normal-case tracking-normal text-faint">
          © {year} · Bengaluru, India · Engineer · Photographer · Writer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
