import React from 'react';
import Section from './Section';

interface Article {
  title: string;
  date: string;
  tag: string;
  url: string;
}

const articles: Article[] = [
  {
    title: "AI Isn't Here to Replace Developers. It's Here to Replace the Stuff We Secretly Hate Doing.",
    date: 'Feb 2026',
    tag: 'Engineering',
    url: 'https://medium.com/@rawte.mayur/ai-isnt-here-to-replace-developers-it-s-here-to-replace-the-stuff-we-secretly-hate-doing-9272a50c1c4a',
  },
  {
    title: 'Too much positivity is bad for your mental health',
    date: 'Apr 2020',
    tag: 'Psychology',
    url: 'https://medium.com/@rawte.mayur/too-much-positivity-is-bad-for-your-mental-health-d8ef850fd247',
  },
  {
    title: 'Mind, Me, and a Routine',
    date: 'Apr 2020',
    tag: 'Psychology',
    url: 'https://medium.com/@rawte.mayur/mind-me-and-a-routine-ea218c8a8fac',
  },
  {
    title: "It's not all about happiness.",
    date: 'Feb 2020',
    tag: 'Psychology',
    url: 'https://medium.com/@rawte.mayur/its-not-all-about-happiness-9dc02e684909',
  },
];

const Blog: React.FC = () => {
  return (
    <Section id="writing" n="04" kicker="Writing" title="Between deploys, I write.">
      <ul>
        {articles.map((a) => (
          <li key={a.url}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-12 gap-x-4 gap-y-1.5 items-baseline py-6 border-t border-line"
            >
              <span className="kicker col-span-6 md:col-span-2 text-faint">{a.date}</span>
              <span className="display row-link col-span-12 md:col-span-8 text-ink text-xl md:text-[1.7rem] leading-tight">
                {a.title}
              </span>
              <span className="kicker col-span-6 md:col-span-2 md:text-right text-faint">{a.tag}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-muted">
        More on{' '}
        <a href="https://medium.com/@rawte.mayur" target="_blank" rel="noopener noreferrer" className="link">Medium</a>.
      </p>
    </Section>
  );
};

export default Blog;
