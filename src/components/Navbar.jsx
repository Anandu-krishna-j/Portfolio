import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MenuIcon, XIcon, ExternalLinkIcon } from './Icons';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`modern-navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Subtle top reading progress glow */}
      <div 
        className="nav-progress-indicator" 
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Reading progress"
      />

      <div className="navbar-container">
        {/* Brand Identity */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')} 
          className="nav-brand"
          aria-label={`${personalInfo.name} - Home`}
        >
          <div className="nav-avatar-shell">
            <img 
              src={personalInfo.heroImage} 
              alt={personalInfo.name} 
              className="nav-avatar-img"
              onError={(e) => {
                if (e.currentTarget.src !== personalInfo.fallbackImage) {
                  e.currentTarget.src = personalInfo.fallbackImage;
                }
              }}
            />
            <span className="nav-online-dot" title="Available for opportunities"></span>
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">{personalInfo.name}</span>
            <span className="nav-brand-role">Frontend Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="nav-links-center" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`nav-pill-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="active-pill-glow" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions-right">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aesthetic-ghost"
            aria-label="View Resume PDF"
          >
            <span>Resume</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 ml-1" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-aesthetic-primary"
          >
            <span>Let's Talk</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="mobile-drawer" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            <div className="mobile-drawer-top">
              <span className="drawer-title">Menu</span>
              <button
                type="button"
                className="drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <ul className="mobile-menu-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`mobile-menu-item ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-bottom">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aesthetic-ghost full-width"
              >
                <span>Download Resume</span>
                <ExternalLinkIcon className="w-4 h-4 ml-1" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="btn-aesthetic-primary full-width text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
