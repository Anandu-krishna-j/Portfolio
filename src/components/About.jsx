import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  CpuIcon, 
  LayersIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  MapPinIcon, 
  BriefcaseIcon,
  CheckCircleIcon,
  LinkedInIcon,
  GitHubIcon
} from './Icons';

const About = () => {
  return (
    <section id="about" className="section-modern-container" aria-label="About AnanduKrishna J">
      {/* Section Header */}
      <div className="section-intro text-center">
        <div className="section-pill-tag">
          <SparklesIcon className="w-3.5 h-3.5 text-indigo mr-1.5" />
          <span>Professional Background</span>
        </div>
        <h2 className="section-heading">
          Engineered for <span className="text-gradient-radiant">Scale & Performance</span>
        </h2>
        <p className="section-subheading">
          5.5 years of delivering scalable frontend architectures, reusable component libraries, and robust state management.
        </p>
      </div>

      {/* Modern Bento Grid */}
      <div className="about-bento-grid">
        {/* Bento Item 1: Primary Profile & Summary (Spans 2 columns on desktop) */}
        <div className="bento-card bento-card-lead reveal-fade-up">
          <div className="bento-card-glow" aria-hidden="true" />
          
          <div className="lead-card-header">
            <div className="lead-avatar-shell">
              <img
                src={personalInfo.heroImage}
                alt={personalInfo.name}
                className="lead-avatar-img"
              />
              <span className="lead-verified-indicator" title="Verified Engineer">
                <CheckCircleIcon className="w-3.5 h-3.5 text-indigo" />
              </span>
            </div>

            <div className="lead-identity">
              <div className="lead-name-row">
                <h3 className="lead-name">{personalInfo.name}</h3>
                <span className="lead-badge">Senior Frontend Engineer</span>
              </div>
              <p className="lead-company">
                Trois Infotech • Trivandrum, India
              </p>
            </div>

            <div className="lead-social-links">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bento-social-btn" 
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4 text-indigo" />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bento-social-btn" 
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4 text-violet" />
              </a>
            </div>
          </div>

          <div className="lead-card-body-grid">
            <div className="lead-summary-column">
              <h4 className="lead-summary-title">
                Professional Summary
              </h4>
              <p className="lead-summary-text">
                {personalInfo.summary}
              </p>
            </div>

            <div className="lead-pillars-column">
              <h4 className="lead-pillars-title">
                Core Engineering Pillars
              </h4>
              <div className="lead-pillars-list">
                <div className="pillar-item">
                  <span className="pillar-dot"></span>
                  <div className="pillar-text-group">
                    <span className="pillar-title">Scalable Architecture</span>
                    <span className="pillar-subtitle">Reusable component design & strict state boundaries</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-dot"></span>
                  <div className="pillar-text-group">
                    <span className="pillar-title">Deterministic State</span>
                    <span className="pillar-subtitle">Redux Toolkit, Redux Saga & Context API flow</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-dot"></span>
                  <div className="pillar-text-group">
                    <span className="pillar-title">Performance Budgets</span>
                    <span className="pillar-subtitle">Code splitting, memoization & fast initial paints</span>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-dot"></span>
                  <div className="pillar-text-group">
                    <span className="pillar-title">Agile Leadership</span>
                    <span className="pillar-subtitle">Consistent 3+ enhancements/sprint & developer mentoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lead-card-footer">
            <div className="quick-fact-item">
              <span className="fact-title">Location</span>
              <span className="fact-val">
                <MapPinIcon className="w-3.5 h-3.5 text-indigo inline mr-1" />
                {personalInfo.location}
              </span>
            </div>
            <div className="quick-fact-item">
              <span className="fact-title">Experience</span>
              <span className="fact-val">5.5 Years in React & Web</span>
            </div>
            <div className="quick-fact-item">
              <span className="fact-title">Current Role</span>
              <span className="fact-val">Software Engineer</span>
            </div>
            <div className="quick-fact-item">
              <span className="fact-title">Specialization</span>
              <span className="fact-val">React, Redux, Performance</span>
            </div>
          </div>
        </div>

        {/* Bento Item 2: Architecture & State Flow */}
        <div className="bento-card reveal-from-left">
          <div className="bento-icon-box">
            <LayersIcon className="w-6 h-6 text-indigo" />
          </div>
          <h3 className="bento-title">Complex State & Flow</h3>
          <p className="bento-desc">
            Deep expertise in Redux Toolkit, Redux Saga, and Context API to organize clean unidirectional data flow, async side-effects, and deterministic state across large-scale applications.
          </p>
          <div className="bento-tags">
            <span className="tag-pill">Redux Toolkit</span>
            <span className="tag-pill">Redux Saga</span>
            <span className="tag-pill">Context API</span>
          </div>
        </div>

        {/* Bento Item 3: UI Performance & Reusability */}
        <div className="bento-card reveal-fade-up">
          <div className="bento-icon-box">
            <CpuIcon className="w-6 h-6 text-cyan" />
          </div>
          <h3 className="bento-title">Performance Optimization</h3>
          <p className="bento-desc">
            Accelerating feature delivery and page loads via component memoization, route lazy loading, reusable pattern libraries with Tailwind CSS & MUI, and fine-tuned API caching.
          </p>
          <div className="bento-tags">
            <span className="tag-pill">Lazy Loading</span>
            <span className="tag-pill">Memoization</span>
            <span className="tag-pill">Tailwind CSS</span>
          </div>
        </div>

        {/* Bento Item 4: Agile Leadership & Mentorship */}
        <div className="bento-card reveal-from-right">
          <div className="bento-icon-box">
            <ShieldCheckIcon className="w-6 h-6 text-violet" />
          </div>
          <h3 className="bento-title">Agile Delivery & Mentorship</h3>
          <p className="bento-desc">
            Active collaborator in 5-member sprint teams consistently meeting timelines with 3+ enhancements per sprint. Mentoring junior developers via constructive code reviews and best practices.
          </p>
          <div className="bento-tags">
            <span className="tag-pill">Code Reviews</span>
            <span className="tag-pill">Agile / Scrum</span>
            <span className="tag-pill">Team Leadership</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
