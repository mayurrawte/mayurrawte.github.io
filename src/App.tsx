import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CreativeWork from './components/CreativeWork';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 bg-accent-purple/30 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out';
    cursor.style.left = '-100px';
    cursor.style.top = '-100px';
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 8 + 'px';
      cursor.style.top = e.clientY - 8 + 'px';
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(2)';
      cursor.style.backgroundColor = 'rgba(157, 141, 241, 0.5)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.backgroundColor = 'rgba(157, 141, 241, 0.3)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <CreativeWork />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;