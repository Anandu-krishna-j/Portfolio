import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { SparklesIcon, CodeIcon, CpuIcon } from './Icons';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.items.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section-modern-container" aria-label="Technical Skills">
      {/* Section Header */}
      <div className="section-intro text-center">
        <div className="section-pill-tag">
          <CodeIcon className="w-3.5 h-3.5 text-indigo mr-1.5" />
          <span>Core Competencies</span>
        </div>
        <h2 className="section-heading">
          Technical <span className="text-gradient-radiant">Toolkit</span>
        </h2>
        <p className="section-subheading">
          Technologies and tools refined across 5.5 years of enterprise production releases.
        </p>
      </div>

      {/* Category Pills & Search */}
      <div className="skills-control-bar">
        <div className="skills-category-pills" role="tablist">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Live Filter Search */}
        <div className="skills-search-wrapper">
          <input
            type="text"
            placeholder="Filter skills (e.g. React, Redux, Flask)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="skills-search-field"
            aria-label="Filter skills by keyword"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="skills-clear-btn"
              aria-label="Clear filter"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Modern Aesthetic Skills Grid */}
      <div className="aesthetic-skills-grid">
        {filteredSkills.map((skill, idx) => (
          <div 
            key={`${skill.name}-${idx}`} 
            className={`aesthetic-skill-card ${skill.highlight ? 'is-highlight' : ''}`}
          >
            <div className="skill-card-inner">
              <div className="skill-card-header">
                <span className="skill-title">{skill.name}</span>
                {skill.highlight && (
                  <span className="core-badge">
                    <SparklesIcon className="w-3 h-3 text-indigo inline mr-1" />
                    Core
                  </span>
                )}
              </div>

              <div className="skill-category-label">
                {skill.category}
              </div>

              {/* Minimalist Progress Meter */}
              <div className="skill-progress-bar-shell">
                <div 
                  className="skill-progress-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="skills-empty-state">
          <p>No matching skills found for "{searchQuery}". Try selecting another category.</p>
        </div>
      )}

      {/* Modern AI & Tooling Callout */}
      <div className="modern-ai-banner reveal-fade-up">
        <div className="ai-banner-icon">
          <CpuIcon className="w-6 h-6 text-indigo" />
        </div>
        <div className="ai-banner-content">
          <h3 className="ai-banner-title">Modern AI & High-Velocity Engineering</h3>
          <p className="ai-banner-desc">
            Fluently integrating generative AI developer tooling—including <strong>ChatGPT</strong>, 
            <strong> Claude AI</strong>, <strong>Codex</strong>, <strong>Anti Gravity</strong>, 
            <strong> GitHub Copilot</strong>, and <strong>Cursor AI</strong>—to enhance architectural prototyping, 
            streamline debugging, and elevate overall codebase quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
