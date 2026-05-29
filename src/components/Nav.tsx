import React from 'react';

const items = [
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'work' },
  { name: 'Photography', id: 'photography' },
  { name: 'Writing', id: 'writing' },
  { name: 'Contact', id: 'contact' },
];

const Nav: React.FC = () => {
  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-line">
      <nav className="max-w-page mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="display text-ink text-lg tracking-tight"
        >
          Mayur Rawte
        </a>
        <div className="hidden md:flex items-center gap-7 kicker">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`} onClick={(e) => go(e, it.id)} className="row-link">
              {it.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
