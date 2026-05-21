import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 bg-stone-900">
      <div className="max-w-4xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-stone-500 font-sans text-sm">
          © {year} Mayur Rawte
        </p>
        <a
          href="mailto:rawte.mayur@gmail.com"
          className="text-stone-500 font-sans text-sm hover:text-stone-300 transition-colors duration-200"
        >
          rawte.mayur@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
