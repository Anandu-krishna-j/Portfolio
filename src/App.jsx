import React, { useState, useEffect } from 'react';
import AmbientGlow from './components/AmbientGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // 1. Navigation spy observer
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
    
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });

    // 2. Scroll-triggered reveal observer for smooth left/right card transitions
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    const observeRevealElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-from-left:not(.is-visible), .reveal-from-right:not(.is-visible), .reveal-fade-up:not(.is-visible)'
      );
      elements.forEach((el) => revealObserver.observe(el));
    };

    observeRevealElements();

    // Re-observe when filter tabs change in Projects or Experience
    const mutationObserver = new MutationObserver(() => {
      observeRevealElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      navObserver.disconnect();
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="modern-app-root">
      {/* Soft atmospheric gradient mesh background */}
      <AmbientGlow />

      {/* Floating glassmorphic navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main content flow */}
      <main id="main-content" className="modern-content-wrapper">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
