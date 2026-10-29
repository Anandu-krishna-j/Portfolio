import React, { useState } from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { 
  BriefcaseIcon, 
  GraduationCapIcon, 
  MapPinIcon, 
  CalendarIcon, 
  CheckCircleIcon,
  SparklesIcon
} from './Icons';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="section-modern-container" aria-label="Experience and Education">
      {/* Section Header */}
      <div className="section-intro text-center">
        <div className="section-pill-tag">
          <BriefcaseIcon className="section-pill-icon" />
          <span>Career Journey</span>
        </div>
        <h2 className="section-heading">
          Experience & <span className="text-gradient-radiant">Education</span>
        </h2>
        <p className="section-subheading">
          5.5 years of continuous engineering excellence, leadership, and production delivery.
        </p>
      </div>

      {/* Switcher Tabs */}
      <div className="modern-segment-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'experience'}
          onClick={() => setActiveTab('experience')}
          className={`segment-btn ${activeTab === 'experience' ? 'active' : ''}`}
        >
          <BriefcaseIcon className="segment-tab-icon" />
          <span>Work Experience ({experienceData.length})</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'education'}
          onClick={() => setActiveTab('education')}
          className={`segment-btn ${activeTab === 'education' ? 'active' : ''}`}
        >
          <GraduationCapIcon className="segment-tab-icon" />
          <span>Education ({educationData.length})</span>
        </button>
      </div>

      {/* Work Experience Timeline */}
      {activeTab === 'experience' && (
        <div className="modern-timeline-wrapper" role="tabpanel" aria-label="Work Experience">
          <div className="modern-timeline-track" aria-hidden="true"></div>
          
          <div className="timeline-cards-flow">
            {experienceData.map((job, idx) => (
              <div 
                key={idx} 
                className={`modern-timeline-entry ${job.current ? 'is-current' : ''}`}
              >
                {/* Modern Squircle Node */}
                <div className="timeline-point" aria-hidden="true">
                  <div className={`timeline-icon-node ${job.current ? 'node-current' : 'node-work'}`}>
                    <BriefcaseIcon className={`timeline-node-svg ${job.current ? 'text-emerald' : 'text-indigo'}`} />
                    {job.current && <span className="node-pulse-ring"></span>}
                  </div>
                </div>

                <div className={`timeline-entry-card ${idx % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'}`}>
                  <div className="entry-card-header">
                    <div className="entry-title-block">
                      <div className="entry-role-row">
                        <h3 className="entry-role">{job.role}</h3>
                        {job.current && (
                          <span className="current-status-chip">
                            <span className="chip-dot"></span>
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="entry-company-meta">
                        <span className="entry-company">{job.company}</span>
                        <span className="meta-dot">•</span>
                        <span className="entry-location">
                          <MapPinIcon className="entry-meta-icon text-indigo" />
                          <span>{job.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="entry-period-pill">
                      <CalendarIcon className="entry-meta-icon text-indigo" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  {/* Verbatim Bullet Points */}
                  <ul className="entry-highlights-list">
                    {job.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="entry-highlight-item">
                        <div className="highlight-icon-wrapper">
                          <CheckCircleIcon className="highlight-check-svg text-indigo" />
                        </div>
                        <span className="highlight-text">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  {job.technologies && (
                    <div className="entry-tech-tags">
                      {job.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="modern-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education Timeline */}
      {activeTab === 'education' && (
        <div id="education" className="modern-timeline-wrapper" role="tabpanel" aria-label="Education Details">
          <div className="modern-timeline-track" aria-hidden="true"></div>

          <div className="timeline-cards-flow">
            {educationData.map((edu, idx) => (
              <div key={idx} className="modern-timeline-entry">
                {/* Modern Squircle Node */}
                <div className="timeline-point" aria-hidden="true">
                  <div className="timeline-icon-node node-education">
                    <GraduationCapIcon className="timeline-node-svg text-violet" />
                  </div>
                </div>

                <div className={`timeline-entry-card ${idx % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'}`}>
                  <div className="entry-card-header">
                    <div className="entry-title-block">
                      <div className="entry-role-row">
                        <h3 className="entry-role">{edu.degree}</h3>
                      </div>
                      <div className="entry-company-meta">
                        <span className="entry-company">{edu.institution}</span>
                        <span className="meta-dot">•</span>
                        <span className="entry-location">
                          <MapPinIcon className="entry-meta-icon text-indigo" />
                          <span>{edu.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="entry-period-pill">
                      <CalendarIcon className="entry-meta-icon text-indigo" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {edu.details && (
                    <div className="education-details-box">
                      <div className="highlight-icon-wrapper">
                        <SparklesIcon className="highlight-check-svg text-violet" />
                      </div>
                      <p className="education-note-text">
                        {edu.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
