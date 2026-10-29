import React, { useState, useEffect } from 'react';
import { personalInfo, careerMetrics } from '../data/portfolioData';
import { 
  ChevronRightIcon, 
  ExternalLinkIcon, 
  SparklesIcon, 
  CpuIcon,
  BriefcaseIcon,
  MapPinIcon,
  CheckCircleIcon
} from './Icons';

const Hero = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = personalInfo.roles;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="hero-modern-section" aria-label="Hero Introduction">
      {/* Soft atmospheric gradient highlights */}
      <div className="hero-atmosphere-light hero-light-1" aria-hidden="true" />
      <div className="hero-atmosphere-light hero-light-2" aria-hidden="true" />

      <div className="hero-modern-grid">
        {/* Left Column: Editorial & Value Proposition */}
        <div className="hero-copy-column">
          {/* Availability Pill */}
          <div className="availability-chip animate-reveal">
            <span className="availability-pulse"></span>
            <span className="availability-text">5.5+ Years Experience • Open to Opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="hero-main-title animate-reveal delay-1">
            Hi, I'm <span className="text-gradient-radiant">{personalInfo.name}</span>
          </h1>

          {/* Dynamic Role Tagline */}
          <div className="hero-role-display animate-reveal delay-2">
            <span className="role-current-title">{roles[roleIndex]}</span>
          </div>

          {/* Value proposition from resume */}
          <p className="hero-statement animate-reveal delay-3">
            {personalInfo.heroTagline}
          </p>

          <p className="hero-summary-copy animate-reveal delay-3">
            Proven track record architecting high-performance applications with <strong>React.js</strong>, 
            <strong> Redux Toolkit & Saga</strong>, and responsive component libraries. Delivering 
            scalable, maintainable frontend solutions and mentoring agile engineering teams.
          </p>

          {/* CTAs */}
          <div className="hero-actions-cluster animate-reveal delay-4">
            <a href="#projects" className="btn-modern-primary">
              <span>View Selected Work</span>
              <ChevronRightIcon className="w-4 h-4 ml-2" />
            </a>

            <a href="#contact" className="btn-modern-secondary">
              <span>Get in Touch</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern-ghost"
              aria-label="Download AnanduKrishna's Resume PDF"
            >
              <span>Resume PDF</span>
              <ExternalLinkIcon className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          {/* Quick Credential Highlights */}
          <div className="hero-credential-pills animate-reveal delay-5">
            <div className="credential-pill">
              <MapPinIcon className="w-3.5 h-3.5 text-indigo mr-1.5" />
              <span>{personalInfo.location}</span>
            </div>
            <span className="credential-divider">•</span>
            <div className="credential-pill">
              <BriefcaseIcon className="w-3.5 h-3.5 text-indigo mr-1.5" />
              <span>Software Engineer @ Trois Infotech</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Portrait Showcase */}
        <div className="hero-portrait-column animate-reveal delay-2">
          <div className="sculptural-portrait-card">
            {/* Ambient Aura behind portrait */}
            <div className="portrait-aura-glow" aria-hidden="true" />

            <div className="portrait-viewport">
              <img
                src={personalInfo.heroImage}
                alt={`${personalInfo.name} — Senior Frontend Engineer`}
                className={`sculptural-portrait-img ${imgLoaded ? 'is-loaded' : ''}`}
                onLoad={() => setImgLoaded(true)}
                loading="eager"
              />

              {/* Modern Floating Badges */}
              <div className="aesthetic-badge badge-role">
                <span className="badge-status-dot"></span>
                <div className="badge-text-box">
                  <span className="badge-primary-label">Software Engineer</span>
                  <span className="badge-sub-label">Trois Infotech</span>
                </div>
              </div>

              <div className="aesthetic-badge badge-experience">
                <CpuIcon className="w-4 h-4 text-indigo" />
                <div className="badge-text-box">
                  <span className="badge-primary-label">5.5+ Yrs Frontend</span>
                  <span className="badge-sub-label">React & Redux Saga</span>
                </div>
              </div>

              <div className="aesthetic-badge badge-output">
                <SparklesIcon className="w-4 h-4 text-indigo" />
                <div className="badge-text-box">
                  <span className="badge-primary-label">8+ Production Projects</span>
                  <span className="badge-sub-label">Delivered on Time</span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="portrait-card-footer">
              <div className="footer-profile-brief">
                <span className="footer-name">{personalInfo.name}</span>
                <span className="footer-title">React.js Developer • Trivandrum, India</span>
              </div>
              <div className="footer-verified-badge" title="Verified Engineering Credentials">
                <CheckCircleIcon className="w-4 h-4 text-indigo mr-1" />
                <span>Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="hero-metrics-strip animate-reveal delay-5">
        <div className="metrics-strip-inner">
          {careerMetrics.map((metric, idx) => (
            <div key={idx} className="metric-box">
              <div className="metric-number text-gradient-radiant">{metric.value}</div>
              <div className="metric-title">{metric.label}</div>
              <div className="metric-desc">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
