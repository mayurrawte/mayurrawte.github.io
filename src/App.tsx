import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CreativeWork from './components/CreativeWork';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
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
