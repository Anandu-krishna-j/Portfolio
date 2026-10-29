import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpIcon, LinkedInIcon, GitHubIcon, MailIcon } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="modern-footer" aria-label="Footer">
      <div className="footer-inner-max">
        {/* Top */}
        <div className="footer-content-grid">
          <div className="footer-brand-column">
            <a href="#hero" className="footer-brand-link">
              <img
                src={personalInfo.heroImage}
                alt={personalInfo.name}
                className="footer-avatar-thumb"
                onError={(e) => {
                  if (e.currentTarget.src !== personalInfo.fallbackImage) {
                    e.currentTarget.src = personalInfo.fallbackImage;
                  }
                }}
              />
              <span className="footer-brand-name">{personalInfo.name}</span>
            </a>
            <p className="footer-brand-description">
              Senior Frontend Engineer with 5.5 years of experience architecting high-performance React web applications and scalable UI systems.
            </p>
          </div>

          <div className="footer-links-column">
            <span className="footer-column-heading">Navigation</span>
            <ul className="footer-navigation-list">
              <li><a href="#about" className="footer-link-item">About</a></li>
              <li><a href="#experience" className="footer-link-item">Experience</a></li>
              <li><a href="#skills" className="footer-link-item">Skills</a></li>
              <li><a href="#projects" className="footer-link-item">Projects</a></li>
              <li><a href="#contact" className="footer-link-item">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-column">
            <span className="footer-column-heading">Connect</span>
            <div className="footer-social-icons">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-circle"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4 text-indigo" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-circle"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4 text-violet" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-icon-circle"
                aria-label="Send Email"
              >
                <MailIcon className="w-4 h-4 text-indigo" />
              </a>
            </div>
            <div className="footer-location-line">
              📍 {personalInfo.location}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-copyright-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. All verified career details sourced from <code>resume.pdf</code>.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-button"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUpIcon className="w-3.5 h-3.5 text-indigo ml-1.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
